import TextInput from '../../../global/inputs/textInput'
import { useBookForm } from './useBookForm'
import Button from '../../../global/buttons/button'
import DateInput from '../../inputs/dateInput'
import type { IBook } from '../../../../types'
import Paragraph from '../../text/paragraph'
import FormFieldAlert from '../../alerts/FormFieldAlert'

interface IBookFormProps {
  bookData?: IBook
  id?: string
}

const BookForm = ({ bookData, id }: IBookFormProps) => {
  const { bookForm } = useBookForm(bookData, id)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        bookForm.handleSubmit()
      }}
    >
      <bookForm.Field
        name="author"
        validators={{
          onChange: ({ value }) => (!value ? 'Author is required' : undefined),
        }}
        children={(field) => (
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="author"
              name="author"
              placeholder="Author"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <bookForm.Field
        name="title"
        validators={{
          onChange: ({ value }) => (!value ? 'Title is required' : undefined),
        }}
        children={(field) => (
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="title"
              name="title"
              placeholder="Title"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <bookForm.Field
        name="dateOfRelease"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Date of release is required' : undefined,
        }}
        children={(field) => (
          <div className="my-6">
            <DateInput
              value={''}
              id="dateOfRelease"
              name="dateOfRelease"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <Paragraph>Date of Release</Paragraph>
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <bookForm.Field
        name="barcode"
        validators={{
          onChange: ({ value }) => (!value ? 'Barcode is required' : undefined),
        }}
        children={(field) => (
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="barcode"
              name="barcode"
              placeholder="Barcode"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <bookForm.Subscribe
        selector={(state) => [state.isSubmitting, state.canSubmit]}
        children={([isSubmitting, canSubmit]) => (
          <div className="my-6">
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : id ? 'Update Book' : 'Create Book'}
            </Button>
          </div>
        )}
      />
    </form>
  )
}

export default BookForm
