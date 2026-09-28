import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Historico() {
  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="max-w-md mx-auto px-5 py-6">
        <h2 className="text-2xl font-bold">
          Histórico
        </h2>

        <p className="text-gray-500 mt-2">
          Veja sua evolução nos últimos dias.
        </p>

        <div className="bg-white rounded-2xl p-5 mt-6 shadow-sm">
          <p className="text-gray-400 text-sm">Ontem</p>
          <p className="text-2xl font-bold mt-2">8.421 passos</p>
        </div>

        <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm">
          <p className="text-gray-400 text-sm">Domingo</p>
          <p className="text-2xl font-bold mt-2">7.235 passos</p>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}