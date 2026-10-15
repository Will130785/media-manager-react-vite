import { useQuery } from '@tanstack/react-query'
import { getBooksByUser } from '../../../../../services/mainServices'
import type { IBook } from '../../../../../types'

export const useBooks = () => {
  const { data, isError, isLoading } = useQuery<IBook[], Error>({
    queryKey: ['get-books-by-user'],
    queryFn: getBooksByUser,
  })

  return {
    data,
    isError,
    isLoading,
  }
}
