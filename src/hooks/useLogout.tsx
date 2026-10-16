import { useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { logoutUser } from '../services/authServices'

export const useLogout = () => {
  const navigate = useNavigate()
  const logoutMutation = useMutation({
    mutationKey: ['logout-user'],
    mutationFn: logoutUser,
    onSuccess: () => {
      return navigate({ to: '/login' })
    },
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return {
    handleLogout,
  }
}
