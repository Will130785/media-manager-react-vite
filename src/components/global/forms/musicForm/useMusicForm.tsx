import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'
import type { IMusic, MusicPayload } from '../../../../types'
import {
  createMusicItem,
  updateMusicItem,
} from '../../../../services/mainServices'
import { musicSchema } from '../../../../schemas/mainSchemas'

export const useMusicForm = (musicData?: IMusic, id?: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const createMusicMutation = useMutation<IMusic, Error, MusicPayload>({
    mutationKey: ['create-music'],
    mutationFn: (value) => createMusicItem(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-music-by-user'] })
      return navigate({ to: '/music' })
    },
  })

  const updateMusicMutation = useMutation<IMusic, Error, MusicPayload>({
    mutationKey: ['update-music', id],
    mutationFn: (value) => updateMusicItem(value, id ?? ''),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['get-music-by-user'] })
      queryClient.invalidateQueries({ queryKey: ['update-music', id] })
      return navigate({ to: '/music/music-item/$id', params: { id: data.id } })
    },
  })

  const musicForm = useForm({
    defaultValues: {
      artist: musicData ? musicData.artist : '',
      title: musicData ? musicData.title : '',
      type: musicData ? musicData.type : '',
      dateOfRelease: musicData ? musicData.dateOfRelease : '',
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
