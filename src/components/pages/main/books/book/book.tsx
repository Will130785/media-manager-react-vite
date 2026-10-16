import { Link, useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useBook } from './useBook'

const Book = () => {
  const { id } = useParams({ from: '/_main/books/book/$id' })
  const { data, isLoading, isError, handleDeleteBook } = useBook(id)

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
        <Link to={'/books/update-book/$id'} params={{ id: data?.id ?? '' }}>
          Edit
        </Link>
        <button onClick={handleDeleteBook}>Delete</button>
      </div>
    </div>
  )
}

export default Book
