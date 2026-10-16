import { Outlet } from '@tanstack/react-router'
import { useAuth } from '../../../hooks/useAuth'
import TopBar from '../../global/navigation/topBar'

const MainLayout = () => {
  useAuth()
  return (
    <div>
      <TopBar />
      <p>Main</p>
      <Outlet />
    </div>
  )
}

export default MainLayout
