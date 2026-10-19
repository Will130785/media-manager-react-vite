import { Link } from '@tanstack/react-router'
import Heading from '../../../global/text/heading'
import Paragraph from '../../../global/text/paragraph'
import TextInput from '../../../global/inputs/textInput'
import EmailInput from '../../../global/inputs/emailInput'
import PasswordInput from '../../../global/inputs/passwordInput'
import { useRegister } from './useRegister'
import Button from '../../../global/buttons/button'
import FormFieldAlert from '../../../global/alerts/FormFieldAlert'

const Register = () => {
  const { registerForm } = useRegister()
  return (
    <div>
      <div>
        <Heading type="h1">Register</Heading>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          registerForm.handleSubmit()
        }}
      >
        <registerForm.Field
          name="firstName"
          validators={{
            onChange: ({ value }) =>
              !value ? 'First name is required' : undefined,
          }}
          children={(field) => (
            <div className="my-6">
              <TextInput
                value={field.state.value ?? ''}
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
              <FormFieldAlert field={field} />
            </div>
          )}
        />
        <registerForm.Field
          name="lastName"
          validators={{
            onChange: ({ value }) =>
              !value ? 'Last name is required' : undefined,
          }}
          children={(field) => (
            <div className="my-6">
              <TextInput
                value={field.state.value ?? ''}
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
              <FormFieldAlert field={field} />
            </div>
          )}
        />
        <registerForm.Field
          name="email"
          validators={{
            onChange: ({ value }) => (!value ? 'Email is required' : undefined),
          }}
          children={(field) => (
            <div className="my-6">
              <EmailInput
                value={field.state.value ?? ''}
                id="email"
                name="email"
                placeholder="Email"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
              <FormFieldAlert field={field} />
            </div>
          )}
        />
        <registerForm.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value ? 'Password is required' : undefined,
          }}
          children={(field) => (
            <div className="my-6">
              <PasswordInput
                value={field.state.value ?? ''}
                id="password"
                name="password"
                placeholder="Password (Min 12 Characters)"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
              <FormFieldAlert field={field} />
            </div>
          )}
        />
        <registerForm.Field
          name="passwordConfirm"
          validators={{
            onChange: ({ value }) =>
              !value ? 'Password is required' : undefined,
          }}
          children={(field) => (
            <div className="my-6">
              <PasswordInput
                value={field.state.value ?? ''}
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm Password"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
              <FormFieldAlert field={field} />
            </div>
          )}
        />
        <registerForm.Subscribe
          selector={(state) => [state.isSubmitting, state.canSubmit]}
          children={([isSubmitting, canSubmit]) => (
            <div className="my-6">
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? '...' : 'Register'}
              </Button>
            </div>
          )}
        />
      </form>
      <div>
        <Paragraph>
          Or{' '}
          <Link className="text-amber-400" to={'/login'}>
            click here
          </Link>{' '}
          to login
        </Paragraph>
      </div>
    </div>
  )
}

export default Register
