import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMovie } from '../movie/useMovie'
import MovieForm from '../../../../global/forms/movieForm/movieForm'

const UpdateMovie = () => {
  const { data, isLoading, isError, id } = useMovie()

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
      <MovieForm movieData={data} id={id} />
    </div>
  )
}

export default UpdateMovie
