import { useState } from "react";

import Home from "./pages/Home";
import Historico from "./pages/Historico";
import Detalhes from "./pages/Detalhes";
import Meta from "./pages/Meta";
import Perfil from "./pages/Perfil";

function App() {
  const [pagina, setPagina] = useState("home");

  function navegar(novaPagina) {
    setPagina(novaPagina);
  }

  if (pagina === "home") {
    return <Home navegar={navegar} />;
  }

  if (pagina === "historico") {
    return <Historico navegar={navegar} />;
  }

  if (pagina === "detalhes") {
    return <Detalhes navegar={navegar} />;
  }

  if (pagina === "meta") {
    return <Meta navegar={navegar} />;
  }

  if (pagina === "perfil") {
    return <Perfil navegar={navegar} />;
  }

  return <Home navegar={navegar} />;
}

export default App;