import { useQuery } from '@tanstack/react-query'
import { getMusicByUser } from '../../../../../services/mainServices'
import type { IMusic } from '../../../../../types'

export const useMusic = () => {
  const { data, isError, isLoading } = useQuery<IMusic[], Error>({
    queryKey: ['get-music-by-user'],
    queryFn: getMusicByUser,
  })

  return {
    data,
    isError,
    isLoading,
  }
}
