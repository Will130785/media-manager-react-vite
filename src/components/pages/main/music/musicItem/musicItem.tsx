import { useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMusicItem } from './useMusicItem'
import Actions from '../../../../global/media/actions'
import Paragraph from '../../../../global/text/paragraph'

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
      <div className="my-6">
        <Heading type="h1">{data?.title}</Heading>
        <Heading type="h6">{data?.artist}</Heading>
      </div>
      <div className="my-6 flex gap-2">
        <Heading type="h4">Release Date:</Heading>
        <Paragraph>{data?.dateOfRelease}</Paragraph>
      </div>
      <div className="my-6 flex gap-2">
        <Heading type="h4">Barcode:</Heading>
        <Paragraph>{data?.barcode}</Paragraph>
      </div>
      <Actions
        editUrl="/music/update-music-item/$id"
        id={data?.id ?? ''}
        deleteHandler={handleDeleteMusicItem}
      />
    </div>
  )
}

export default MusicItem
