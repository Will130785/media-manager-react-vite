import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { getGameItem } from '../../../../../services/mainServices'
import type { IGame } from '../../../../../types'

export const useGame = () => {
  const { id } = useParams({ from: '/_main/games/game/$id' })

  const { data, isLoading, isError } = useQuery<IGame, Error>({
    queryKey: ['get-game', id],
    queryFn: () => getGameItem(id),
  })

  return {
    data,
    isLoading,
    isError,
    id,
  }
}
