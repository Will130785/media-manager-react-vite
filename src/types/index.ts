import { z } from 'zod'
import type {
  userLoginSchema,
  userRegisterSchema,
} from '../schemas/authSchemas'
import type {
  bookSchema,
  gameSchema,
  movieSchema,
  musicSchema,
} from '../schemas/mainSchemas'

export type UserLoginPayload = z.infer<typeof userLoginSchema>
export type UserRegisterPayload = z.infer<typeof userRegisterSchema>
export type MusicPayload = z.infer<typeof musicSchema>
export type MoviePayload = z.infer<typeof movieSchema>
export type GamePayload = z.infer<typeof gameSchema>
export type BookPayload = z.infer<typeof bookSchema>
