import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { getMusicItem } from '../../../../../services/mainServices'
import type { IMusic } from '../../../../../types'

export const useMusicItem = () => {
  const { id } = useParams({ from: '/_main/music/music-item/$id' })

  const { data, isLoading, isError } = useQuery<IMusic, Error>({
    queryKey: ['get-music', id],
    queryFn: () => getMusicItem(id),
  })

  return {
    data,
    isLoading,
    isError,
    id,
  }
}
