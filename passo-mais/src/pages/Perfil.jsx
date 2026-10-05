import BottomNav from "../components/BottomNav";

function Perfil({ navegar }) {
  return (
    <div className="page">

      <header className="page-header">
        <h1>Perfil</h1>
      </header>

      <main className="profile-content">

        <div className="profile-user">

          <div className="avatar">
            G4
          </div>

          <div className="profile-info">
            <strong>G4</strong>
            <span>Usuário</span>
          </div>

        </div>

        <div className="settings-card">

          <button
            onClick={() => navegar("meta")}
          >

            <span className="setting-icon">
              🎯
            </span>

            <div className="setting-info">

              <strong>Meta diária</strong>

              <small>
                8.000 passos
              </small>

            </div>

            <span>›</span>

          </button>

          <button>

            <span className="setting-icon">
              🔔
            </span>

            <div className="setting-info">

              <strong>Notificações</strong>

              <small>
                Ativadas
              </small>

            </div>

            <span>›</span>

          </button>

          <button>

            <span className="setting-icon">
              ⚙️
            </span>

            <div className="setting-info">

              <strong>Configurações</strong>

              <small>
                Preferências
              </small>

            </div>

            <span>›</span>

          </button>

        </div>

        <div className="settings-card">

          <button>

            <span className="setting-icon">
              ℹ️
            </span>

            <div className="setting-info">

              <strong>Sobre o Passo+</strong>

            </div>

            <span>›</span>

          </button>

          <button>

            <span className="setting-icon">
              ❓
            </span>

            <div className="setting-info">

              <strong>Ajuda</strong>

            </div>

            <span>›</span>

          </button>

        </div>

      </main>

      <BottomNav
        navegar={navegar}
        paginaAtual="perfil"
      />

    </div>
  );
}

export default Perfil;