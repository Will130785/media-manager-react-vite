import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import {
  deleteMusicItem,
  getMusicItem,
} from '../../../../../services/mainServices'
import type { IMusic } from '../../../../../types'

export const useMusicItem = (id: string) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery<IMusic, Error>({
    queryKey: ['get-music', id],
    queryFn: () => getMusicItem(id),
  })

  const deleteMusicItemMutation = useMutation({
    mutationKey: ['delete-music-item', id],
    mutationFn: () => deleteMusicItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-music-by-user'] })
      return navigate({ to: '/music' })
    },
  })

  const handleDeleteMusicItem = () => {
    const confirmDelete = confirm('Are you sure you want to delete this item?')
    if (!confirmDelete) {
      return
    }
    deleteMusicItemMutation.mutate()
  }

  return {
    data,
    isLoading,
    isError,
    id,
    handleDeleteMusicItem,
  }
}
