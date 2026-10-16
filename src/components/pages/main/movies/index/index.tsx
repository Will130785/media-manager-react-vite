import { Link } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Paragraph from '../../../../global/text/paragraph'
import Heading from '../../../../global/text/heading'
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
      <div>
        <Heading type="h1">Movie Library</Heading>
      </div>
      <div>
        <Link to={'/movies/create-movie'}>Add</Link>
      </div>
      <div className="flex flex-col">
        {data && data.length ? (
          data.map((movie) => (
            <Link
              key={movie.id}
              to={'/movies/movie/$id'}
              params={{ id: movie.id }}
            >
              {movie.title}
            </Link>
          ))
        ) : (
          <Paragraph>No Movies</Paragraph>
        )}
      </div>
    </div>
  )
}

export default Index
