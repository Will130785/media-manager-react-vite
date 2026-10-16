import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import type { IGame, GamePayload } from '../../../../types'
import {
  createGameItem,
  updateGameItem,
} from '../../../../services/mainServices'
import { gameSchema } from '../../../../schemas/mainSchemas'

export const useGameForm = (gameData?: IGame, id?: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const createGameMutation = useMutation<IGame, Error, GamePayload>({
    mutationKey: ['create-game'],
    mutationFn: (value) => createGameItem(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-games-by-user'] })
      return navigate({ to: '/games' })
    },
  })

  const updateGameMutation = useMutation<IGame, Error, GamePayload>({
    mutationKey: ['update-game'],
    mutationFn: (value) => updateGameItem(value, id ?? ''),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['get-games-by-user'] })
      queryClient.invalidateQueries({ queryKey: ['update-game', id] })
      return navigate({ to: '/games/game/$id', params: { id: data.id } })
    },
  })

  const gameForm = useForm({
    defaultValues: {
      developer: gameData ? gameData.developer : '',
      title: gameData ? gameData.title : '',
      platform: gameData ? gameData.platform : '',
      dateOfRelease: gameData ? gameData.dateOfRelease : '',
      barcode: gameData ? gameData.barcode : '',
    },
    validators: {
      onSubmit: gameSchema,
    },
    onSubmit: ({ value }) => {
      if (id && gameData) {
        updateGameMutation.mutate(value)
      } else {
        createGameMutation.mutate(value)
      }
    },
  })

  return {
    gameForm,
  }
}
