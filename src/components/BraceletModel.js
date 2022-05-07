import { useState } from "react";

function submitBracelet(bracelet, restartRegister) {
  var entrou = false;
  if (bracelet.name.length === 0) {
    document.getElementById("braceletName").classList.add("error");
    entrou = true;
  }
  if (entrou) {
    return;
  }
  restartRegister();
}

export function BraceletModel(props) {
  const [braceletName, setBraceletName] = useState("");

  return (
    <div className="form">
      <header>
        <h2 className="title">Cadastro de Pulseira</h2>
      </header>
      <form
        className="braceletForm flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          submitBracelet(
            {
              name: braceletName,
            },
            props.restartRegister
          );
        }}
      >
        <div className="model-wrapper flex">
          <label htmlFor="braceletName"> Nome da Pulseira: </label>
          <input
            id="braceletName"
            type="text"
            name="braceletName"
            value={braceletName}
            onChange={(event) => setBraceletName(event.target.value)}
          />
        </div>
        <br />
        <button type="submit">Cadastrar Pulseira</button>
      </form>
    </div>
  );
}
