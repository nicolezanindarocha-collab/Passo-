import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Historico from './pages/Historico'
import Meta from './pages/Meta'
import Perfil from './pages/Perfil'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App