import { useState } from "react";

function Meta({ navegar }) {
  const [meta, setMeta] = useState(8000);

  const opcoes = [
    5000,
    8000,
    10000,
    12000,
  ];

  return (
    <div className="page">

      <main className="meta-page">

        <button
          className="back-button meta-back"
          onClick={() => navegar("home")}
        >
          ‹
        </button>

        <h1>Meta diária</h1>

        <p>
          Escolha uma meta de passos
          <br />
          para cada dia.
        </p>

        <div className="meta-options">

          {opcoes.map((opcao) => (

            <button
              key={opcao}
              className={
                meta === opcao
                  ? "meta-option selected"
                  : "meta-option"
              }
              onClick={() => setMeta(opcao)}
            >

              <span className="radio">

                {meta === opcao && "✓"}

              </span>

              <span>
                {opcao.toLocaleString("pt-BR")}
                {" "}passos
              </span>

            </button>

          ))}

        </div>

        <button
          className="save-button"
          onClick={() => navegar("home")}
        >
          Salvar meta
        </button>

      </main>

    </div>
  );
}

export default Meta;