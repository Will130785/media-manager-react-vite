import { createFileRoute } from '@tanstack/react-router'
import Movie from '../../../../components/pages/main/movies/movie/movie'

export const Route = createFileRoute('/_main/movies/movie/$id')({
  component: Movie,
})
