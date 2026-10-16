import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { validateUserSession } from '../services/authServices'
import type { IUser } from '../types'

export const useAuth = () => {
  const navigate = useNavigate()
  const { isError } = useQuery<IUser, Error>({
    queryKey: ['validate-user-session'],
    queryFn: validateUserSession,
    retry: false,
  })

  if (isError) {
    navigate({ to: '/login' })
  }
}
