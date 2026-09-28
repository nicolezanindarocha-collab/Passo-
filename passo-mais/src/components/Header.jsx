import { Footprints } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-xl">
          <Footprints size={22} color="white" />
        </div>

        <h1 className="text-xl font-bold text-blue-600">
          Passo+
        </h1>
      </div>

      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
        N
      </div>
    </header>
  )
}