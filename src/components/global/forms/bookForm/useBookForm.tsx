import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import type { IBook, BookPayload } from '../../../../types'
import {
  createBookItem,
  updateBookItem,
} from '../../../../services/mainServices'
import { bookSchema } from '../../../../schemas/mainSchemas'

export const useBookForm = (bookData?: IBook, id?: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const createBookMutation = useMutation<IBook, Error, BookPayload>({
    mutationKey: ['create-book'],
    mutationFn: (value) => createBookItem(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-books-by-user'] })
      return navigate({ to: '/books' })
    },
  })

  const updateBookMutation = useMutation<IBook, Error, BookPayload>({
    mutationKey: ['update-book'],
    mutationFn: (value) => updateBookItem(value, id ?? ''),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['get-books-by-user'] })
      queryClient.invalidateQueries({ queryKey: ['update-book', id] })
      return navigate({ to: '/books/book/$id', params: { id: data.id } })
    },
  })

  const bookForm = useForm({
    defaultValues: {
      author: bookData ? bookData.author : '',
      title: bookData ? bookData.title : '',
      dateOfRelease: bookData ? bookData.dateOfRelease : '',
      barcode: bookData ? bookData.barcode : '',
    },
    validators: {
      onSubmit: bookSchema,
    },
    onSubmit: ({ value }) => {
      if (id && bookData) {
        updateBookMutation.mutate(value)
      } else {
        createBookMutation.mutate(value)
      }
    },
  })

  return {
    bookForm,
  }
}
