import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useBook } from '../book/useBook'
import { useParams } from '@tanstack/react-router'
import BookForm from '../../../../global/forms/bookForm/bookForm'

const UpdateBook = () => {
  const { id } = useParams({ from: '/_main/books/update-book/$id' })
  const { data, isLoading, isError } = useBook(id)

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
      <BookForm bookData={data} id={id} />
    </div>
  )
}

export default UpdateBook
