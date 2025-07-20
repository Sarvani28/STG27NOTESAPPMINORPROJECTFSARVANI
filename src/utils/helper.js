export const getInitials = (name = "") => {
  if (!name.trim()) return "U"
  const words = name.trim().split(/\s+/)

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase() // e.g., TestUser → "TU"
  }

  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || "")
    .join("")
}

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(email)
}