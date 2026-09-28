import { Home, History, Target, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
      <div className="max-w-md mx-auto flex justify-between">

        <Link to="/" className="flex flex-col items-center text-blue-600">
          <Home size={22} />
          <span className="text-xs mt-1">Início</span>
        </Link>

        <Link to="/historico" className="flex flex-col items-center text-gray-400">
          <History size={22} />
          <span className="text-xs mt-1">Histórico</span>
        </Link>

        <Link to="/meta" className="flex flex-col items-center text-gray-400">
          <Target size={22} />
          <span className="text-xs mt-1">Meta</span>
        </Link>

        <Link to="/perfil" className="flex flex-col items-center text-gray-400">
          <User size={22} />
          <span className="text-xs mt-1">Perfil</span>
        </Link>

      </div>
    </nav>
  )
}