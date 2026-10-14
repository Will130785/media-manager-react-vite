import { Outlet } from '@tanstack/react-router'

const AuthLayout = () => {
  return (
    <div>
      <p>AUTH</p>
      <Outlet />
    </div>
  )
}

export default AuthLayout
