// redux/user/userSlice.js

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Start the sign-in process
    signInStart: (state) => {
      state.loading = true
      state.error = null
    },

    // Sign-in success – store user info
    signInSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload
      state.error = null
    },

    // Sign-in failed – set error
    signInFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Start sign-out process
    signoutStart: (state) => {
      state.loading = true
      state.error = null
    },

    // Sign-out failed – set error
    signoutFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Sign-out success – clear user info
    signoutSuccess: (state) => {
      state.loading = false
      state.currentUser = null
      state.error = null
    },
  },
})

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signoutStart,
  signoutSuccess,
  signoutFailure,
} = userSlice.actions

export default userSlice.reducer
