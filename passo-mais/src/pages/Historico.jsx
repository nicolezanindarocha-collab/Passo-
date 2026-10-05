import BottomNav from "../components/BottomNav";

function Historico({ navegar }) {
  const dias = [
    {
      data: "16 de set.",
      passos: "6.842",
    },
    {
      data: "15 de set.",
      passos: "8.120",
    },
    {
      data: "14 de set.",
      passos: "7.240",
    },
    {
      data: "13 de set.",
      passos: "9.430",
    },
    {
      data: "12 de set.",
      passos: "7.890",
    },
  ];

  return (
    <div className="page">

      <header className="page-header">

        <div>
          <h1>Histórico</h1>
          <p>Seus passos recentes</p>
        </div>

      </header>

      <main className="history-content">

        <div className="calendar">

          <div className="calendar-week">
            <span>D</span>
            <span>S</span>
            <span>T</span>
            <span>Q</span>
            <span>Q</span>
            <span>S</span>
            <span>S</span>
          </div>

          <div className="calendar-days">
            <span>13</span>
            <span>14</span>
            <span>15</span>

            <span className="selected-day">
              16
            </span>

            <span>17</span>
            <span>18</span>
            <span>19</span>
          </div>

        </div>

        <h2 className="section-title">
          Passos por dia
        </h2>

        <div className="history-list">

          {dias.map((dia, index) => (

            <button
              key={index}
              className="history-item"
              onClick={() => navegar("detalhes")}
            >

              <span>{dia.data}</span>

              <div>
                <strong>
                  {dia.passos} passos
                </strong>

                <span>›</span>
              </div>

            </button>

          ))}

        </div>

      </main>

      <BottomNav
        navegar={navegar}
        paginaAtual="historico"
      />

    </div>
  );
}

export default Historico;