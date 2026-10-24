import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useGames } from './useGames'
import MediaHomePage from '../../../../global/media/mediaHomePage'
import TextInput from '../../../../global/inputs/textInput'

const Index = () => {
  const { data, isLoading, isError, gameSearch, setGameSearch } = useGames()

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
          value={gameSearch}
          placeholder="Search by game"
          onChangeHandler={(e) => setGameSearch(e.target.value)}
        />
      </div>
      <MediaHomePage mediaItems={data} title="Game" />
    </div>
  )
}

export default Index
