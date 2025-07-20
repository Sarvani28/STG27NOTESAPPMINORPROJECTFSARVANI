// Get first letters of first and last word
export const getInitials = (name = "") => {
  if (!name.trim()) return "U"

  const words = name.trim().split(/\s+/)

  return words
    .slice(0, 2)
    .map(word => word[0]?.toUpperCase() || "")
    .join("") || "U"
}

// Email validator
export const validateEmail = (email = "") => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email.trim())
}
