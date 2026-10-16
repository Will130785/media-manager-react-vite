import { Link, useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMovie } from './useMovie'

const Movie = () => {
  const { id } = useParams({ from: '/_main/movies/movie/$id' })
  const { data, isLoading, isError, handleDeleteMovie } = useMovie(id)

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
        <Link to={'/movies/update-movie/$id'} params={{ id: data?.id ?? '' }}>
          Edit
        </Link>
        <button onClick={handleDeleteMovie}>Delete</button>
      </div>
    </div>
  )
}

export default Movie
