import { Outlet } from '@tanstack/react-router'

const AuthLayout = () => {
  return (
    <div className="p-4 w-full flex justify-center">
      <div className="w-100 max-w-100">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
