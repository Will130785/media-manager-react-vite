import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getMoviesByUser } from '../../../../../services/mainServices'
import type { IMovie } from '../../../../../types'
import { useState } from 'react'

export const useMovies = () => {
  const [movieSearch, setMovieSearch] = useState('')
  const { data, isError, isLoading } = useQuery<IMovie[], Error>({
    queryKey: ['get-movies-by-user', movieSearch],
    queryFn: () => getMoviesByUser({ query: { movie: movieSearch } }),
    placeholderData: keepPreviousData,
  })

  return {
    data,
    isError,
    isLoading,
    movieSearch,
    setMovieSearch,
  }
}
