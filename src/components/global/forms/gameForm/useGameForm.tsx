import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import type { IGame, GamePayload } from '../../../../types'
import {
  createGameItem,
  updateGameItem,
} from '../../../../services/mainServices'
import { gameSchema } from '../../../../schemas/mainSchemas'

export const useGameForm = (gameData?: IGame, id?: string) => {
  const createGameMutation = useMutation<IGame, Error, GamePayload>({
    mutationKey: ['create-game'],
    mutationFn: (value) => createGameItem(value),
  })

  const updateGameMutation = useMutation<IGame, Error, GamePayload>({
    mutationKey: ['update-game'],
    mutationFn: (value) => updateGameItem(value, id ?? ''),
  })

  const gameForm = useForm({
    defaultValues: {
      developer: gameData ? gameData.developer : '',
      title: gameData ? gameData.title : '',
      platform: gameData ? gameData.platform : '',
      dateOfRelease: gameData ? gameData.dateOfRelease : new Date(),
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
