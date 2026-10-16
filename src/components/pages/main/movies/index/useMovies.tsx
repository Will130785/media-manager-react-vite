import { useQuery } from '@tanstack/react-query'
import { getMoviesByUser } from '../../../../../services/mainServices'
import type { IMovie } from '../../../../../types'

export const useMovies = () => {
  const { data, isError, isLoading } = useQuery<IMovie[], Error>({
    queryKey: ['get-movies-by-user'],
    queryFn: getMoviesByUser,
  })

  return {
    data,
    isError,
    isLoading,
  }
}
