import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useBook } from '../book/useBook'
import BookForm from '../../../../global/forms/bookForm/bookForm'

const UpdateBook = () => {
  const { data, isLoading, isError, id } = useBook()

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
