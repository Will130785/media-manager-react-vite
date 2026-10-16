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

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface IMusic {
  id: string
  artist: string
  title: string
  type: string
  dateOfRelease: string
  barcode: string
  createdAt: string
  updatedAt: string
  userId: string
}

export interface IMovie {
  id: string
  director: string
  title: string
  type: string
  dateOfRelease: string
  barcode: string
  createdAt: string
  updatedAt: string
  userId: string
}

export interface IGame {
  id: string
  developer: string
  title: string
  platform: string
  dateOfRelease: string
  barcode: string
  createdAt: string
  updatedAt: string
  userId: string
}

export interface IBook {
  id: string
  author: string
  title: string
  dateOfRelease: string
  barcode: string
  createdAt: string
  updatedAt: string
  userId: string
}
