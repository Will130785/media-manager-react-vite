import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useMovies } from './useMovies'
import MediaHomePage from '../../../../global/media/mediaHomePage'
import TextInput from '../../../../global/inputs/textInput'

const Index = () => {
  const { data, isLoading, isError, movieSearch, setMovieSearch } = useMovies()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      <div>
        <TextInput
          id="search"
          name="search"
          value={movieSearch}
          placeholder="Search by movie"
          onChangeHandler={(e) => setMovieSearch(e.target.value)}
        />
      </div>
      <MediaHomePage mediaItems={data} title="Movie" />
    </div>
  )
}

export default Index
