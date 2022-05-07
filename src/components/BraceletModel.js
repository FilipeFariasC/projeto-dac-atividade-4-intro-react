import { useState } from "react";

var braceletList = [];

function braceletRow(bracelet, index) {
  return (
    <div key={index} className="register flex flex-col">
      <h4>Bracelet {index}</h4>
      <p>{bracelet.name}</p>
    </div>
  );
}

function braceletRegisterList() {
  return (
    <div className={"registerList " + (braceletList.length > 0 ? "show" : "")}>
      {braceletList.map((bracelet, index) => braceletRow(bracelet, index))}
    </div>
  );
}

function submitBracelet(
  bracelet,
  setBraceletCreated,
  continueRegister,
  restartRegister
) {
  var entrou = false;
  if (bracelet.name.length === 0) {
    document.getElementById("braceletName").classList.add("error");
    entrou = true;
  }
  if (entrou) {
    return;
  }
  console.log(bracelet.name);

  braceletList.push(bracelet);

  setBraceletCreated(true);
  if (!continueRegister) {
    restartRegister();
  }
}

export function BraceletModel(props) {
  const [braceletName, setBraceletName] = useState("");

  const [braceletCreated, setBraceletCreated] = useState(false);

  const [continueRegister, setContinueRegister] = useState(true);

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
            setBraceletCreated,
            continueRegister,
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
        <button
          type="submit"
          onClick={() => {
            setContinueRegister(true);
          }}
        >
          Cadastrar Pulseira e continuar cadastros
        </button>
        <button
          type="submit"
          onClick={() => {
            setContinueRegister(false);
          }}
        >
          Cadastrar Pulseira e retornar para o cadastro de usuários
        </button>
      </form>
      {braceletCreated
        ? setBraceletCreated(false) + braceletRegisterList()
        : braceletRegisterList()}
    </div>
  );
}
