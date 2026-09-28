import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Perfil() {
  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="max-w-md mx-auto px-5 py-6">
        <h2 className="text-2xl font-bold">
          Meu perfil
        </h2>

        <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto">
            N
          </div>

          <h3 className="text-xl font-bold text-center mt-4">
            Nicole
          </h3>

          <p className="text-gray-400 text-center mt-1">
            Usuária do Passo+
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}