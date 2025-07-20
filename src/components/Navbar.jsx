import React, { useState } from "react"
import SearchBar from "./SearchBar/SearchBar"
import ProfileInfo from "./Cards/ProfileInfo"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import {
  signoutStart,
  signoutSuccess,
  signoutFailure,
} from "../redux/user/userSlice"
import axios from "axios"

const Navbar = ({ onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ✅ Get logged-in user info from Redux
  const userInfo = useSelector((state) => state.user.currentUser)

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery)
    }
  }

  const onClearSearch = () => {
    setSearchQuery("")
    handleClearSearch()
  }

  const onLogout = async () => {
    try {
      dispatch(signoutStart())

      const res = await axios.get(
        "https://stg27notesappminorprojectsarvani.onrender.com/api/auth/signout",
        { withCredentials: true }
      )

      if (res.data.success === false) {
        dispatch(signoutFailure(res.data.message))
        toast.error(res.data.message)
        return
      }

      dispatch(signoutSuccess())
      toast.success(res.data.message)
      navigate("/")
    } catch (error) {
      dispatch(signoutFailure(error.message))
      toast.error("Logout failed")
    }
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <Link to={"/"}>
        <h2 className="text-xl font-medium text-black py-2">
          <span className="text-slate-500">Notes</span>
          <span className="text-slate-900">App</span>
        </h2>
      </Link>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  )
}

export default Navbar
