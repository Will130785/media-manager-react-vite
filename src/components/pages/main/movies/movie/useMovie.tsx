import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { getMovieItem } from '../../../../../services/mainServices'
import type { IMovie } from '../../../../../types'

export const useMovie = () => {
  const { id } = useParams({ from: '/_main/movies/movie/$id' })

  const { data, isLoading, isError } = useQuery<IMovie, Error>({
    queryKey: ['get-movie', id],
    queryFn: () => getMovieItem(id),
  })

  return {
    data,
    isLoading,
    isError,
    id,
  }
}
