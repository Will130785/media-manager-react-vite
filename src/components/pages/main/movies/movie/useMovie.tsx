import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import {
  deleteMovieItem,
  getMovieItem,
} from '../../../../../services/mainServices'
import type { IMovie } from '../../../../../types'

export const useMovie = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery<IMovie, Error>({
    queryKey: ['get-movie', id],
    queryFn: () => getMovieItem(id),
  })

  const deleteMovieMutation = useMutation({
    mutationKey: ['delete-movie-item', id],
    mutationFn: () => deleteMovieItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-movies-by-user'] })
      return navigate({ to: '/movies' })
    },
  })

  const handleDeleteMovie = () => {
    const confirmDelete = confirm('Are you sure you want to delete this item?')
    if (!confirmDelete) {
      return
    }
    deleteMovieMutation.mutate()
  }

  return {
    data,
    isLoading,
    isError,
    handleDeleteMovie,
  }
}
