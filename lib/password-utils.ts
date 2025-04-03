// This is a simple hash function for demonstration purposes
// In a production environment, you would use a more secure hashing algorithm
function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  // Convert to positive hex string
  return Math.abs(hash).toString(16)
}

// Replace this hash with the hash of your actual password
// For example, if your password is "portfolio2023", you would do:
// const STORED_PASSWORD_HASH = simpleHash("portfolio2023");
const STORED_PASSWORD_HASH = simpleHash('2025') // Example hash for "password123"

export function verifyPassword(password: string): boolean {
  const inputHash = simpleHash(password)
  return inputHash === STORED_PASSWORD_HASH
}

// You can use this function to generate a hash for your password
// Call this function with your password in the browser console
// Then replace STORED_PASSWORD_HASH with the result
export function generatePasswordHash(password: string): string {
  return simpleHash(password)
}
