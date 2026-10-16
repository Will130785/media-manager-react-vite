import { Link, useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMusicItem } from './useMusicItem'

const MusicItem = () => {
  const { id } = useParams({ from: '/_main/music/music-item/$id' })
  const { data, isLoading, isError, handleDeleteMusicItem } = useMusicItem(id)

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      <div>
        <Heading type="h1">{data?.title}</Heading>
      </div>
      <div>
        <Link
          to={'/music/update-music-item/$id'}
          params={{ id: data?.id ?? '' }}
        >
          Edit
        </Link>
        <button onClick={handleDeleteMusicItem}>Delete</button>
      </div>
    </div>
  )
}

export default MusicItem
