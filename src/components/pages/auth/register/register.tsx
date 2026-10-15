import { Link } from '@tanstack/react-router'
import Heading from '../../../global/text/heading'
import Paragraph from '../../../global/text/paragraph'
import TextInput from '../../../global/inputs/textInput'
import EmailInput from '../../../global/inputs/emailInput'
import PasswordInput from '../../../global/inputs/passwordInput'
import { useRegister } from './useRegister'
import Button from '../../../global/buttons/button'

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
            <div>
              <TextInput
                value={field.state.value ?? ''}
                id="firstName"
                name="firstName"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
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
            <div>
              <TextInput
                value={field.state.value ?? ''}
                id="lastName"
                name="lastName"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <registerForm.Field
          name="email"
          validators={{
            onChange: ({ value }) => (!value ? 'Email is required' : undefined),
          }}
          children={(field) => (
            <div>
              <EmailInput
                value={field.state.value ?? ''}
                id="email"
                name="email"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
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
            <div>
              <PasswordInput
                value={field.state.value ?? ''}
                id="password"
                name="password"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
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
            <div>
              <PasswordInput
                value={field.state.value ?? ''}
                id="passwordConfirm"
                name="passwordConfirm"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <registerForm.Subscribe
          selector={(state) => [state.isSubmitting, state.canSubmit]}
          children={([isSubmitting, canSubmit]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Register'}
            </Button>
          )}
        />
      </form>
      <div>
        <Paragraph>
          Or <Link to={'/login'}>click here</Link> to login
        </Paragraph>
      </div>
    </div>
  )
}

export default Register
