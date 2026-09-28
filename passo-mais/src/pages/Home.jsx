import { Footprints, Flame, MapPin, ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Home() {
  const passos = 6842
  const meta = 10000
  const progresso = (passos / meta) * 100

  return (
    <div className="min-h-screen pb-24">

      <Header />

      <main className="max-w-md mx-auto px-5 py-6">

        <p className="text-gray-500 text-sm">
          Olá! 👋
        </p>

        <h2 className="text-2xl font-bold mt-1">
          Vamos caminhar hoje?
        </h2>

        <section className="bg-blue-600 rounded-3xl p-6 mt-6 text-white">

          <div className="flex items-center gap-2">
            <Footprints size={20} />
            <span className="text-sm">
              Passos de hoje
            </span>
          </div>

          <div className="mt-4">
            <span className="text-5xl font-bold">
              {passos.toLocaleString('pt-BR')}
            </span>

            <span className="text-blue-100 ml-2">
              / {meta.toLocaleString('pt-BR')}
            </span>
          </div>

          <div className="mt-5 h-3 bg-blue-400 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progresso}%` }}
            />
          </div>

          <p className="text-sm text-blue-100 mt-3">
            Você já completou {Math.round(progresso)}% da sua meta!
          </p>

        </section>

        <div className="grid grid-cols-2 gap-4 mt-5">

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <MapPin className="text-blue-600" size={22} />

            <p className="text-gray-400 text-sm mt-3">
              Distância
            </p>

            <p className="text-xl font-bold mt-1">
              4,8 km
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <Flame className="text-orange-500" size={22} />

            <p className="text-gray-400 text-sm mt-3">
              Calorias
            </p>

            <p className="text-xl font-bold mt-1">
              286 kcal
            </p>
          </div>

        </div>

        <button className="w-full bg-white rounded-2xl p-4 mt-5 flex items-center justify-between shadow-sm">

          <div className="text-left">
            <p className="font-semibold">
              Ver detalhes
            </p>

            <p className="text-sm text-gray-400">
              Confira seu desempenho de hoje
            </p>
          </div>

          <ChevronRight className="text-blue-600" />

        </button>

      </main>

      <BottomNav />

    </div>
  )
}