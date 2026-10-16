import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Paragraph from '../../../../global/text/paragraph'
import { useMovies } from './useMovies'

const Index = () => {
  const { data, isLoading, isError } = useMovies()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      {data && data.length ? (
        data.map((movie) => <Paragraph key={movie.id}>{movie.title}</Paragraph>)
      ) : (
        <Paragraph>No Movies</Paragraph>
      )}
    </div>
  )
}

export default Index
