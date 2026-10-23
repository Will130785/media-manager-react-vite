import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useMovies } from './useMovies'
import MediaHomePage from '../../../../global/media/mediaHomePage'

const Index = () => {
  const { data, isLoading, isError } = useMovies()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return <MediaHomePage mediaItems={data} title="Movie" />
}

export default Index
