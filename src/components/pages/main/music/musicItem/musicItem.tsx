import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMusicItem } from './useMusicItem'

const MusicItem = () => {
  const { data, isLoading, isError } = useMusicItem()

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
    </div>
  )
}

export default MusicItem
