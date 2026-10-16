import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useGame } from '../game/useGame'
import GameForm from '../../../../global/forms/gameForm/gameForm'
import { useParams } from '@tanstack/react-router'

const UpdateGame = () => {
  const { id } = useParams({ from: '/_main/games/update-game/$id' })
  const { data, isLoading, isError } = useGame(id)

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
      <GameForm gameData={data} id={id} />
    </div>
  )
}

export default UpdateGame
