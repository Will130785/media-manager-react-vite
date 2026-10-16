import { Link, useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useGame } from './useGame'

const Game = () => {
  const { id } = useParams({ from: '/_main/games/game/$id' })
  const { data, isLoading, isError, handleDeleteGame } = useGame(id)

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
        <Link to={'/games/update-game/$id'} params={{ id: data?.id ?? '' }}>
          Edit
        </Link>
        <button onClick={handleDeleteGame}>Delete</button>
      </div>
    </div>
  )
}

export default Game
