import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getBooksByUser } from '../../../../../services/mainServices'
import type { IBook } from '../../../../../types'
import { useState } from 'react'

export const useBooks = () => {
  const [bookSearch, setBookSearch] = useState('')
  const { data, isError, isLoading } = useQuery<IBook[], Error>({
    queryKey: ['get-books-by-user', bookSearch],
    queryFn: () => getBooksByUser({ query: { book: bookSearch } }),
    placeholderData: keepPreviousData,
  })

  return {
    data,
    isError,
    isLoading,
    bookSearch,
    setBookSearch,
  }
}
