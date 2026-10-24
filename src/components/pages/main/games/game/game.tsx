import { useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useGame } from './useGame'
import Actions from '../../../../global/media/actions'
import Paragraph from '../../../../global/text/paragraph'

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
      <div className="my-6">
        <Heading type="h1">{data?.title}</Heading>
        <Heading type="h6">{data?.developer}</Heading>
      </div>
      <div className="my-6 flex gap-2">
        <Heading type="h4">Release Date:</Heading>
        <Paragraph>{data?.dateOfRelease}</Paragraph>
      </div>
      <div className="my-6 flex gap-2">
        <Heading type="h4">Barcode:</Heading>
        <Paragraph>{data?.barcode}</Paragraph>
      </div>
      <Actions
        editUrl="/games/update-game/$id"
        id={data?.id ?? ''}
        deleteHandler={handleDeleteGame}
      />
    </div>
  )
}

export default Game
