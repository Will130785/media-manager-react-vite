import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useMusic } from './useMusic'
import MediaHomePage from '../../../../global/media/mediaHomePage'
import TextInput from '../../../../global/inputs/textInput'

const Index = () => {
  const { data, isLoading, isError, artistSearch, setArtistSearch } = useMusic()

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
          value={artistSearch}
          placeholder="Search by artist"
          onChangeHandler={(e) => setArtistSearch(e.target.value)}
        />
      </div>
      <MediaHomePage mediaItems={data} title="Music" />
    </div>
  )
}

export default Index
