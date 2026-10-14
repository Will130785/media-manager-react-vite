import type { UserLoginPayload, UserRegisterPayload } from '../types'

export const loginUser = async (loginUserPayload: UserLoginPayload) => {
  try {
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
  } catch {
    return null
  }
}

export const registerUser = async (
  registerUserPayload: UserRegisterPayload,
) => {
  try {
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
  } catch {
    return null
  }
}

export const validateUserSession = async () => {
  try {
    const res = await fetch('/validate-user-session', {
      credentials: 'include',
    })

    if (!res.ok) {
      throw new Error('Error validating user')
    }

    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}

export const logoutUser = async () => {
  try {
    const res = await fetch('logout-user', {
      method: 'DELETE',
      credentials: 'include',
    })
    if (!res.ok) {
      throw new Error('Error logging out user')
    }

    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}
