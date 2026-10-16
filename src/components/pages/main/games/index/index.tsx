import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Paragraph from '../../../../global/text/paragraph'
import { useGames } from './useGames'

const Index = () => {
  const { data, isLoading, isError } = useGames()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      {data && data.length ? (
        data.map((game) => <Paragraph key={game.id}>{game.title}</Paragraph>)
      ) : (
        <Paragraph>No Games</Paragraph>
      )}
    </div>
  )
}

export default Index
