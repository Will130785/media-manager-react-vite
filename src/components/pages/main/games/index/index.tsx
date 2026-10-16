import { Link } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Paragraph from '../../../../global/text/paragraph'
import { useGames } from './useGames'
import Heading from '../../../../global/text/heading'

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
      <div>
        <Heading type="h1">Movie Library</Heading>
      </div>
      <div>
        <Link to={'/games/create-game'}>Add</Link>
      </div>
      <div className="flex flex-col">
        {data && data.length ? (
          data.map((game) => (
            <Link key={game.id} to={'/games/game/$id'} params={{ id: game.id }}>
              {game.title}
            </Link>
          ))
        ) : (
          <Paragraph>No Games</Paragraph>
        )}
      </div>
    </div>
  )
}

export default Index
