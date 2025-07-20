import React, { useState } from "react"
import PasswordInput from "../../components/Input/PasswordInput"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from "../../utils/helper"
import { useDispatch } from "react-redux"
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice"
import { toast } from "react-toastify"
import axios from "../../services/axios" // ✅ custom axios instance

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    // ✅ Client-side validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if (!password.trim()) {
      setError("Please enter the password")
      return
    }

    setError("")
    dispatch(signInStart())

    try {
      const res = await axios.post(
        "/api/auth/signin",
        { email, password },
        { withCredentials: true }
      )

      if (res.data.success === false) {
        dispatch(signInFailure(res.data.message))
        toast.error(res.data.message)
        return
      }

      // ✅ Destructure properly
      const user = res.data.user

      if (!user || !user.username) {
        throw new Error("Invalid user info received from server")
      }

      dispatch(signInSuccess(user))
      toast.success(res.data.message || "Login successful")
      navigate("/home")
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Login failed"
      dispatch(signInFailure(message))
      toast.error(message)
    }
  }

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10 shadow">
        <form onSubmit={handleLogin}>
          <h4 className="text-2xl font-semibold mb-7">Login</h4>

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm pt-1">{error}</p>}

          <button type="submit" className="btn-primary mt-4">
            LOGIN
          </button>

          <p className="text-sm text-center mt-4">
            Not registered yet?{" "}
            <Link
              to={"/signup"}
              className="font-medium text-[#2B85FF] underline"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
