import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import type { IMovie, MoviePayload } from '../../../../types'
import {
  createMovieItem,
  updateMovieItem,
} from '../../../../services/mainServices'
import { movieSchema } from '../../../../schemas/mainSchemas'

export const useMovieForm = (movieData?: IMovie, id?: string) => {
  const createMovieMutation = useMutation<IMovie, Error, MoviePayload>({
    mutationKey: ['create-movie'],
    mutationFn: (value) => createMovieItem(value),
  })

  const updateMovieMutation = useMutation<IMovie, Error, MoviePayload>({
    mutationKey: ['update-movie'],
    mutationFn: (value) => updateMovieItem(value, id ?? ''),
  })

  const movieForm = useForm({
    defaultValues: {
      director: movieData ? movieData.director : '',
      title: movieData ? movieData.title : '',
      type: movieData ? movieData.type : '',
      dateOfRelease: movieData ? movieData.dateOfRelease : new Date(),
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
