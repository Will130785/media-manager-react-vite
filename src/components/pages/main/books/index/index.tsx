import { Link } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
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
      <div>
        <Heading type="h1">Book Library</Heading>
      </div>
      <div>
        <Link to={'/books/create-book'}>Add</Link>
      </div>
      <div className="flex flex-col">
        {data && data.length ? (
          data.map((book) => (
            <Link key={book.id} to={'/books/book/$id'} params={{ id: book.id }}>
              {book.title}
            </Link>
          ))
        ) : (
          <Paragraph>No Books</Paragraph>
        )}
      </div>
    </div>
  )
}

export default Index
