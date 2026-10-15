import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Paragraph from '../../../../global/text/paragraph'
import { useBooks } from './useBooks'

const Index = () => {
  const { data, isLoading, isError } = useBooks()

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      {data && data.length ? (
        data.map((book) => <Paragraph key={book.id}>{book.title}</Paragraph>)
      ) : (
        <Paragraph>No Books</Paragraph>
      )}
    </div>
  )
}

export default Index
