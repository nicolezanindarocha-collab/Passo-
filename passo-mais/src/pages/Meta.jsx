import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Meta() {
  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="max-w-md mx-auto px-5 py-6">
        <h2 className="text-2xl font-bold">
          Minha meta
        </h2>

        <p className="text-gray-500 mt-2">
          Defina quantos passos você deseja dar por dia.
        </p>

        <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm text-center">
          <p className="text-gray-400">
            Meta diária
          </p>

          <p className="text-5xl font-bold text-blue-600 mt-4">
            10.000
          </p>

          <p className="text-gray-400 mt-2">
            passos por dia
          </p>

          <button className="w-full bg-blue-600 text-white rounded-xl py-3 mt-6 font-semibold">
            Alterar meta
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}