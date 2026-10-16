import BookForm from '../../../../global/forms/bookForm/bookForm'
import Heading from '../../../../global/text/heading'

const CreateBook = () => {
  return (
    <div>
      <div>
        <Heading type="h1">Create Book</Heading>
      </div>
      <BookForm />
    </div>
  )
}

export default CreateBook
