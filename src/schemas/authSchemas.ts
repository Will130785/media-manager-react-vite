import { z } from 'zod'

export const userLoginSchema = z.object({
  email: z.email(),
  password: z.string().min(12, 'Password must be at least 12 characters'),
})

export const userRegisterSchema = z
  .object({
    firstName: z.string().min(1, 'First name required'),
    lastName: z.string().min(1, 'Last name required'),
    email: z.email(),
    password: z.string().min(12, 'Password must be at least 12 characters'),
    passwordConfirm: z
      .string()
      .min(12, 'Password confirm must be at least 12 characters'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords must match',
  })
