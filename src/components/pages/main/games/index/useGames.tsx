import { useQuery } from '@tanstack/react-query'
import { getGamesByUser } from '../../../../../services/mainServices'
import type { IGame } from '../../../../../types'

export const useGames = () => {
  const { data, isError, isLoading } = useQuery<IGame[], Error>({
    queryKey: ['get-games-by-user'],
    queryFn: getGamesByUser,
  })

  return {
    data,
    isError,
    isLoading,
  }
}
