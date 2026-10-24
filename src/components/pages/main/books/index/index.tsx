import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import { useBooks } from './useBooks'
import MediaHomePage from '../../../../global/media/mediaHomePage'
import TextInput from '../../../../global/inputs/textInput'

const Index = () => {
  const { data, isLoading, isError, bookSearch, setBookSearch } = useBooks()

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
          value={bookSearch}
          placeholder="Search by book"
          onChangeHandler={(e) => setBookSearch(e.target.value)}
        />
      </div>
      <MediaHomePage mediaItems={data} title="Book" />
    </div>
  )
}

export default Index
