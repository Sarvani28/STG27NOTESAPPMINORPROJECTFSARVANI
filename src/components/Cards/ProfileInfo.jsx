import React from "react"
import { getInitials } from "../../utils/helper"

const ProfileInfo = ({ userInfo, onLogout }) => {
  if (!userInfo) {
    return (
      <div className="text-gray-500 text-sm font-medium">
        Loading profile...
      </div>
    )
  }

  const displayName = userInfo.username?.trim() || userInfo.name?.trim() || "User"
  const initials = getInitials(displayName)

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {initials}
      </div>

      <div>
        <p className="text-sm font-medium">{displayName}</p>
      </div>

      <button
        className="text-sm bg-red-500 px-3 py-1 rounded-md text-white hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default ProfileInfo
