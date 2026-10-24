import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getGamesByUser } from '../../../../../services/mainServices'
import type { IGame } from '../../../../../types'
import { useState } from 'react'

export const useGames = () => {
  const [gameSearch, setGameSearch] = useState('')
  const { data, isError, isLoading } = useQuery<IGame[], Error>({
    queryKey: ['get-games-by-user', gameSearch],
    queryFn: () => getGamesByUser({ query: { game: gameSearch } }),
    placeholderData: keepPreviousData,
  })

  return {
    data,
    isError,
    isLoading,
    gameSearch,
    setGameSearch,
  }
}
