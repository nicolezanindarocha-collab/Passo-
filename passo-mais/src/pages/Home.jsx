import BottomNav from "../components/BottomNav";

function Home({ navegar }) {
  const passos = 6842;
  const meta = 8000;

  const porcentagem = Math.round((passos / meta) * 100);

  return (
    <div className="page">

      <header className="top-header">

        <div>
          <h2>Olá, G4! 👋</h2>
          <p>Vamos continuar?</p>
        </div>

        <button
          className="profile-button"
          onClick={() => navegar("perfil")}
        >
          ♙
        </button>

      </header>

      <main className="home-content">

        <div className="step-circle">

          <div className="shoe">
            👟
          </div>

          <strong>
            {passos.toLocaleString("pt-BR")}
          </strong>

          <span>passos</span>

        </div>

        <div className="goal-card">

          <div className="goal-header">

            <span>Meta diária</span>

            <strong>
              {porcentagem}%
            </strong>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{ width: `${porcentagem}%` }}
            />

          </div>

          <p>
            {passos.toLocaleString("pt-BR")} de{" "}
            {meta.toLocaleString("pt-BR")} passos
          </p>

        </div>

        <div className="stats-grid">

          <div className="stat-card">

            <span>📍</span>

            <div>
              <small>Distância</small>
              <strong>4,2 km</strong>
            </div>

          </div>

          <div className="stat-card">

            <span>🔥</span>

            <div>
              <small>Calorias</small>
              <strong>230 kcal</strong>
            </div>

          </div>

        </div>

        <div className="home-buttons">

          <button
            className="primary-button"
            onClick={() => navegar("historico")}
          >
            Ver histórico
          </button>

          <button
            className="secondary-button"
            onClick={() => navegar("meta")}
          >
            Alterar meta diária
          </button>

        </div>

      </main>

      <BottomNav
        navegar={navegar}
        paginaAtual="home"
      />

    </div>
  );
}

export default Home;