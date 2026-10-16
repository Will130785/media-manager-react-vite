import { createFileRoute } from '@tanstack/react-router'
import CreateMovie from '../../../components/pages/main/movies/createMovie/createMovie'

export const Route = createFileRoute('/_main/movies/create-movie')({
  component: CreateMovie,
})
