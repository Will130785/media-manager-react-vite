import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useGame } from '../game/useGame'
import GameForm from '../../../../global/forms/gameForm/gameForm'

const UpdateGame = () => {
  const { data, isLoading, isError, id } = useGame()

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
