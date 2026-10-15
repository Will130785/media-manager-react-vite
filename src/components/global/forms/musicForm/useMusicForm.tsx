import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import type { IMusic, MusicPayload } from '../../../../types'
import {
  createMusicItem,
  updateMusicItem,
} from '../../../../services/mainServices'
import { musicSchema } from '../../../../schemas/mainSchemas'

export const useMusicForm = (musicData?: IMusic, id?: string) => {
  const createMusicMutation = useMutation<IMusic, Error, MusicPayload>({
    mutationKey: ['create-music'],
    mutationFn: (value) => createMusicItem(value),
  })

  const updateMusicMutation = useMutation<IMusic, Error, MusicPayload>({
    mutationKey: ['update-music'],
    mutationFn: (value) => updateMusicItem(value, id ?? ''),
  })

  const musicForm = useForm({
    defaultValues: {
      artist: musicData ? musicData.artist : '',
      title: musicData ? musicData.title : '',
      type: musicData ? musicData.type : '',
      dateOfRelease: musicData ? musicData.dateOfRelease : new Date(),
      barcode: musicData ? musicData.barcode : '',
    },
    validators: {
      onSubmit: musicSchema,
    },
    onSubmit: ({ value }) => {
      if (id && musicData) {
        updateMusicMutation.mutate(value)
      } else {
        createMusicMutation.mutate(value)
      }
    },
  })

  return {
    musicForm,
  }
}
