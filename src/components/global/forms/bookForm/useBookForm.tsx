import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import type { IBook, BookPayload } from '../../../../types'
import {
  createBookItem,
  updateBookItem,
} from '../../../../services/mainServices'
import { bookSchema } from '../../../../schemas/mainSchemas'

export const useBookForm = (bookData?: IBook, id?: string) => {
  const createBookMutation = useMutation<IBook, Error, BookPayload>({
    mutationKey: ['create-book'],
    mutationFn: (value) => createBookItem(value),
  })

  const updateBookMutation = useMutation<IBook, Error, BookPayload>({
    mutationKey: ['update-book'],
    mutationFn: (value) => updateBookItem(value, id ?? ''),
  })

  const bookForm = useForm({
    defaultValues: {
      author: bookData ? bookData.author : '',
      title: bookData ? bookData.title : '',
      dateOfRelease: bookData ? bookData.dateOfRelease : new Date(),
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
