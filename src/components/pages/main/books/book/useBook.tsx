import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { getBookItem } from '../../../../../services/mainServices'
import type { IBook } from '../../../../../types'

export const useBook = () => {
  const { id } = useParams({ from: '/_main/books/book/$id' })

  const { data, isLoading, isError } = useQuery<IBook, Error>({
    queryKey: ['get-book', id],
    queryFn: () => getBookItem(id),
  })

  return {
    data,
    isLoading,
    isError,
    id,
  }
}
