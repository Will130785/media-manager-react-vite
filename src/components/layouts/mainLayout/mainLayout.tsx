import { Outlet } from '@tanstack/react-router'
import { useAuth } from '../../../hooks/useAuth'
import TopBar from '../../global/navigation/topBar'

const MainLayout = () => {
  useAuth()
  return (
    <div>
      <TopBar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
