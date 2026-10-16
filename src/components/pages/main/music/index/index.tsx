import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Paragraph from '../../../../global/text/paragraph'
import { useMusic } from './useMusic'

const Index = () => {
  const { data, isLoading, isError } = useMusic()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      {data && data.length ? (
        data.map((music) => <Paragraph key={music.id}>{music.title}</Paragraph>)
      ) : (
        <Paragraph>No Music</Paragraph>
      )}
    </div>
  )
}

export default Index
