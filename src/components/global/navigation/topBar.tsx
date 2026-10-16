import { Link } from '@tanstack/react-router'
import { Home, LogOut } from 'lucide-react'
import { useLogout } from '../../../hooks/useLogout'

const TopBar = () => {
  const { handleLogout } = useLogout()

  return (
    <nav className="h-20 p-4 flex justify-between items-center border-b">
      <Link to={'/'}>
        <Home />
      </Link>
      <button onClick={handleLogout}>
        <LogOut />
      </button>
    </nav>
  )
}

export default TopBar
