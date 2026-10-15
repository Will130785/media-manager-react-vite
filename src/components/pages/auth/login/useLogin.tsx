import { loginUser } from '../../../../services/authServices'
import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import type { IUser, UserLoginPayload } from '../../../../types'
import { userLoginSchema } from '../../../../schemas/authSchemas'

export const useLogin = () => {
  const loginMutation = useMutation<IUser, Error, UserLoginPayload>({
    mutationKey: ['login'],
    mutationFn: (value) => loginUser(value),
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
