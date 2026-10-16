import { registerUser } from '../../../../services/authServices'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import type { IUser, UserRegisterPayload } from '../../../../types'
import { userRegisterSchema } from '../../../../schemas/authSchemas'

export const useRegister = () => {
  const navigate = useNavigate()
  const registerMutation = useMutation<IUser, Error, UserRegisterPayload>({
    mutationKey: ['register'],
    mutationFn: (value) => registerUser(value),
    onSuccess: () => {
      return navigate({ to: '/' })
    },
  })

  const registerForm = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validators: {
      onSubmit: userRegisterSchema,
    },
    onSubmit: ({ value }) => {
      registerMutation.mutate(value)
    },
  })

  return {
    registerForm,
  }
}
