import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useGames } from './useGames'
import MediaHomePage from '../../../../global/media/mediaHomePage'

const Index = () => {
  const { data, isLoading, isError } = useGames()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return <MediaHomePage mediaItems={data} title="Game" />
}

export default Index
