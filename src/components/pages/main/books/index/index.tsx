import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useBooks } from './useBooks'
import MediaHomePage from '../../../../global/media/mediaHomePage'

const Index = () => {
  const { data, isLoading, isError } = useBooks()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return <MediaHomePage mediaItems={data} title="Book" />
}

export default Index
