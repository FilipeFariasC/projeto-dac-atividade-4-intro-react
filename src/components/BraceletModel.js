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

export function BraceletModel(props) {
  const [braceletName, setBraceletName] = useState("");

  const [braceletCreated, setBraceletCreated] = useState(false);

  function submitBracelet() {
    var entrou = false;
    if (braceletName.length === 0) {
      document.getElementById("braceletName").classList.add("error");
      entrou = true;
    }
    if (entrou) {
      return;
    }
    console.log(braceletName);

    braceletList.push({
      name: braceletName,
    });

    setBraceletCreated(true);
    props.restartRegister();
  }

  return (
    <div className="form">
      <header>
        <h2 className="title">Cadastro de Pulseira</h2>
      </header>
      <form
        className="braceletForm flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          submitBracelet();
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
        <button
          type="submit"
          onClick={() => {
            props.goToUserPage();
          }}
        >
          Ir para a tela de cadastro de usuários
        </button>
      </form>
      {braceletCreated
        ? setBraceletCreated(false) + braceletRegisterList()
        : braceletRegisterList()}
    </div>
  );
}
