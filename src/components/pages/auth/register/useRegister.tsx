import { registerUser } from '../../../../services/authServices'
import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import type { IUser, UserRegisterPayload } from '../../../../types'
import { userRegisterSchema } from '../../../../schemas/authSchemas'

export const useRegister = () => {
  const registerMutation = useMutation<IUser, Error, UserRegisterPayload>({
    mutationKey: ['register'],
    mutationFn: (value) => registerUser(value),
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
