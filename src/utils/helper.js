// utils/helper.js
export const getInitials = (name = "") => {
  if (!name.trim()) return ""

  const words = name.trim().split(/\s+/)
  return words
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join("")
}

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(email)
}