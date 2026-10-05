function BottomNav({ navegar, paginaAtual }) {
  return (
    <nav className="bottom-nav">

      <button
        className={paginaAtual === "home" ? "nav-item active" : "nav-item"}
        onClick={() => navegar("home")}
      >
        <span>⌂</span>
        <small>Início</small>
      </button>

      <button
        className={
          paginaAtual === "historico"
            ? "nav-item active"
            : "nav-item"
        }
        onClick={() => navegar("historico")}
      >
        <span>▥</span>
        <small>Histórico</small>
      </button>

      <button
        className={
          paginaAtual === "perfil"
            ? "nav-item active"
            : "nav-item"
        }
        onClick={() => navegar("perfil")}
      >
        <span>♙</span>
        <small>Perfil</small>
      </button>

    </nav>
  );
}

export default BottomNav;