import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMusicItem } from '../musicItem/useMusicItem'
import MusicForm from '../../../../global/forms/musicForm/musicForm'

const UpdateMusicItem = () => {
  const { data, isLoading, isError, id } = useMusicItem()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      <div>
        <Heading type="h1">Update {data?.title}</Heading>
      </div>
      <MusicForm musicData={data} id={id} />
    </div>
  )
}

export default UpdateMusicItem
