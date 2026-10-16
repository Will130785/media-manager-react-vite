import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import {
  deleteGameItem,
  getGameItem,
} from '../../../../../services/mainServices'
import type { IGame } from '../../../../../types'

export const useGame = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery<IGame, Error>({
    queryKey: ['get-game', id],
    queryFn: () => getGameItem(id),
  })

  const deleteGameMutation = useMutation({
    mutationKey: ['delete-game', id],
    mutationFn: () => deleteGameItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-games-by-user'] })
      return navigate({ to: '/games' })
    },
  })

  const handleDeleteGame = () => {
    const confirmDelete = confirm('Are you sure you want to delete this item?')
    if (!confirmDelete) {
      return
    }
    deleteGameMutation.mutate()
  }

  return {
    data,
    isLoading,
    isError,
    handleDeleteGame,
  }
}
