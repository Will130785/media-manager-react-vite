import { z } from 'zod'

export const musicSchema = z.object({
  artist: z.string().min(1, 'Artist required'),
  title: z.string().min(1, 'Title required'),
  type: z.string().min(1, 'Type required'),
  dateOfRelease: z.date().min(1, 'Date of release required'),
  barcode: z.string().min(1, 'Barcode required'),
})

export const movieSchema = z.object({
  director: z.string().min(1, 'Director required'),
  title: z.string().min(1, 'Title required'),
  type: z.string().min(1, 'Type required'),
  dateOfRelease: z.date().min(1, 'Date of release required'),
  barcode: z.string().min(1, 'Barcode required'),
})

export const gameSchema = z.object({
  developer: z.string().min(1, 'Artist required'),
  title: z.string().min(1, 'Title required'),
  platform: z.string().min(1, 'Platform required'),
  dateOfRelease: z.date().min(1, 'Date of release required'),
  barcode: z.string().min(1, 'Barcode required'),
})

export const bookSchema = z.object({
  author: z.string().min(1, 'Author required'),
  title: z.string().min(1, 'Title required'),
  dateOfRelease: z.date().min(1, 'Date of release required'),
  barcode: z.string().min(1, 'Barcode required'),
})
