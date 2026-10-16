import { Link } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
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
      <div>
        <Heading type="h1">Music Library</Heading>
      </div>
      <div>
        <Link to={'/music/create-music-item'}>Add</Link>
      </div>
      <div className="flex flex-col">
        {data && data.length ? (
          data.map((music) => (
            <Link
              to="/music/music-item/$id"
              params={{ id: music.id }}
              key={music.id}
            >
              {music.title}
            </Link>
          ))
        ) : (
          <Paragraph>No Music</Paragraph>
        )}
      </div>
    </div>
  )
}

export default Index
