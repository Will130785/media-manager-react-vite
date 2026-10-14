import { Outlet } from '@tanstack/react-router'

const MainLayout = () => {
  return (
    <div>
      <p>Main</p>
      <Outlet />
    </div>
  )
}

export default MainLayout
