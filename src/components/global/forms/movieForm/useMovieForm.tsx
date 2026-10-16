import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import type { IMovie, MoviePayload } from '../../../../types'
import {
  createMovieItem,
  updateMovieItem,
} from '../../../../services/mainServices'
import { movieSchema } from '../../../../schemas/mainSchemas'

export const useMovieForm = (movieData?: IMovie, id?: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const createMovieMutation = useMutation<IMovie, Error, MoviePayload>({
    mutationKey: ['create-movie'],
    mutationFn: (value) => createMovieItem(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-movies-by-user'] })
      return navigate({ to: '/movies' })
    },
  })

  const updateMovieMutation = useMutation<IMovie, Error, MoviePayload>({
    mutationKey: ['update-movie', id],
    mutationFn: (value) => updateMovieItem(value, id ?? ''),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['get-movies-by-user'] })
      queryClient.invalidateQueries({ queryKey: ['update-movie', id] })
      return navigate({ to: '/movies/movie/$id', params: { id: data.id } })
    },
  })

  const movieForm = useForm({
    defaultValues: {
      director: movieData ? movieData.director : '',
      title: movieData ? movieData.title : '',
      type: movieData ? movieData.type : '',
      dateOfRelease: movieData ? movieData.dateOfRelease : '',
      barcode: movieData ? movieData.barcode : '',
    },
    validators: {
      onSubmit: movieSchema,
    },
    onSubmit: ({ value }) => {
      if (id && movieData) {
        updateMovieMutation.mutate(value)
      } else {
        createMovieMutation.mutate(value)
      }
    },
  })

  return {
    movieForm,
  }
}
