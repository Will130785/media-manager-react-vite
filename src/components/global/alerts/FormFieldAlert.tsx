import { type AnyFieldApi } from '@tanstack/react-form'
import Paragraph from '../text/paragraph'

interface IFormFieldAlertProps {
  field: AnyFieldApi
}

const FormFieldAlert = ({ field }: IFormFieldAlertProps) => {
  return (
    <>
      {field.state.meta.errors && field.state.meta.errors.length ? (
        <div className="my-2">
          <p className="text-red-500">{field.state.meta.errors.join(', ')}</p>
        </div>
      ) : null}
    </>
  )
}

export default FormFieldAlert
