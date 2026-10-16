import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import {
  deleteBookItem,
  getBookItem,
} from '../../../../../services/mainServices'
import type { IBook } from '../../../../../types'

export const useBook = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery<IBook, Error>({
    queryKey: ['get-book', id],
    queryFn: () => getBookItem(id),
  })

  const deleteBookMutation = useMutation({
    mutationKey: ['delete-book', id],
    mutationFn: () => deleteBookItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-books-by-user'] })
      return navigate({ to: '/books' })
    },
  })

  const handleDeleteBook = () => {
    const confirmDelete = confirm('Are you sure you want to delete this item?')
    if (!confirmDelete) {
      return
    }
    deleteBookMutation.mutate()
  }

  return {
    data,
    isLoading,
    isError,
    handleDeleteBook,
  }
}
