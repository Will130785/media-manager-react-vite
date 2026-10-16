import { loginUser } from '../../../../services/authServices'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import type { IUser, UserLoginPayload } from '../../../../types'
import { userLoginSchema } from '../../../../schemas/authSchemas'

export const useLogin = () => {
  const navigate = useNavigate()
  const loginMutation = useMutation<IUser, Error, UserLoginPayload>({
    mutationKey: ['login'],
    mutationFn: (value) => loginUser(value),
    onSuccess: () => {
      return navigate({ to: '/' })
    },
  })

  const loginForm = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: userLoginSchema,
    },
    onSubmit: ({ value }) => {
      loginMutation.mutate(value)
    },
  })

  return {
    loginForm,
  }
}
