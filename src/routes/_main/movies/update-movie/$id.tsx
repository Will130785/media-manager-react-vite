import { createFileRoute } from '@tanstack/react-router'
import UpdateMovie from '../../../../components/pages/main/movies/updateMovie/updateMovie'

export const Route = createFileRoute('/_main/movies/update-movie/$id')({
  component: UpdateMovie,
})
