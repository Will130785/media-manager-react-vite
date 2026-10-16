import { Link } from '@tanstack/react-router'
import Heading from '../../../global/text/heading'
import Paragraph from '../../../global/text/paragraph'
import EmailInput from '../../../global/inputs/emailInput'
import PasswordInput from '../../../global/inputs/passwordInput'
import { useLogin } from './useLogin'
import Button from '../../../global/buttons/button'

const Login = () => {
  const { loginForm } = useLogin()
  return (
    <div>
      <div>
        <Heading type="h1">Login</Heading>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          loginForm.handleSubmit()
        }}
      >
        <loginForm.Field
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
                placeholder="Email"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <loginForm.Field
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
                placeholder="Password"
                onChangeHandler={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <loginForm.Subscribe
          selector={(state) => [state.isSubmitting, state.canSubmit]}
          children={([isSubmitting, canSubmit]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Login'}
            </Button>
          )}
        />
      </form>
      <div>
        <Paragraph>
          Or <Link to={'/register'}>click here</Link> to register
        </Paragraph>
      </div>
    </div>
  )
}

export default Login
