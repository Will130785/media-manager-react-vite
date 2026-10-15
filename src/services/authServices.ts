import type { UserLoginPayload, UserRegisterPayload } from '../types'

export const loginUser = async (loginUserPayload: UserLoginPayload) => {
  const res = await fetch('/login-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(loginUserPayload),
  })

  if (!res.ok) {
    throw new Error('Error logging in user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const registerUser = async (
  registerUserPayload: UserRegisterPayload,
) => {
  const res = await fetch('/register-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(registerUserPayload),
  })

  if (!res.ok) {
    throw new Error('Error registering user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const validateUserSession = async () => {
  const res = await fetch('/validate-user-session', {
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error validating user')
  }

  const parsedRes = await res.json()
  return parsedRes
}

export const logoutUser = async () => {
  const res = await fetch('logout-user', {
    method: 'DELETE',
    credentials: 'include',
  })
  if (!res.ok) {
    throw new Error('Error logging out user')
  }

  const parsedRes = await res.json()
  return parsedRes
}
