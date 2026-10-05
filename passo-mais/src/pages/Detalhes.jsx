import BottomNav from "../components/BottomNav";

function Detalhes({ navegar }) {
  const valores = [
    4200,
    6800,
    5100,
    8300,
    5900,
    7200,
    8800,
  ];

  const dias = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom",
  ];

  return (
    <div className="page">

      <header className="details-header">

        <button
          className="back-button"
          onClick={() => navegar("historico")}
        >
          ‹
        </button>

        <h1>Detalhes</h1>

      </header>

      <main className="details-content">

        <div className="period-selector">

          <button className="selected-period">
            Semana
          </button>

          <button>
            Mês
          </button>

          <button>
            Ano
          </button>

        </div>

        <div className="chart-container">

          <div className="chart-values">
            <span>10k</span>
            <span>7,5k</span>
            <span>5k</span>
            <span>2,5k</span>
            <span>0</span>
          </div>

          <div className="chart">

            {valores.map((valor, index) => {

              const altura = (valor / 10000) * 100;

              return (
                <div className="chart-column" key={index}>

                  <div
                    className="chart-bar"
                    style={{
                      height: `${altura}%`,
                    }}
                  />

                  <span>{dias[index]}</span>

                </div>
              );

            })}

          </div>

        </div>

        <div className="total-card">

          <span className="total-icon">
            👟
          </span>

          <div>
            <small>Total da semana</small>
            <strong>52.340 passos</strong>
          </div>

        </div>

        <div className="tip-card">

          <span>💡</span>

          <p>
            Você está <strong>12%</strong> acima
            da sua meta semanal!
          </p>

        </div>

      </main>

      <BottomNav
        navegar={navegar}
        paginaAtual="historico"
      />

    </div>
  );
}

export default Detalhes;