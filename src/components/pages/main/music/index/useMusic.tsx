import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getMusicByUser } from '../../../../../services/mainServices'
import type { IMusic } from '../../../../../types'
import { useState } from 'react'

export const useMusic = () => {
  const [artistSearch, setArtistSearch] = useState('')
  const { data, isError, isLoading } = useQuery<IMusic[], Error>({
    queryKey: ['get-music-by-user', artistSearch],
    queryFn: () => getMusicByUser({ query: { artist: artistSearch } }),
    placeholderData: keepPreviousData,
  })

  return {
    data,
    isError,
    isLoading,
    artistSearch,
    setArtistSearch,
  }
}
