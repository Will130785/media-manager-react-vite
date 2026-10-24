import { Link } from '@tanstack/react-router'
import { Home, LogOut } from 'lucide-react'
import { useLogout } from '../../../hooks/useLogout'
import Heading from '../text/heading'

const TopBar = () => {
  const { handleLogout } = useLogout()

  return (
    <nav className="h-16 p-4 flex justify-between items-center bg-amber-400">
      <Link to={'/'}>
        <Home className="text-white" />
      </Link>
      <Heading type="h1">
        <span className="text-white">MEDIA</span>
      </Heading>
      <button className="cursor-pointer" onClick={handleLogout}>
        <LogOut className="text-white" />
      </button>
    </nav>
  )
}

export default TopBar
