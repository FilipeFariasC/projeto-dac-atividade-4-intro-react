import { useState } from "react";

var userList = [];

function userRow(user, index) {
  return (
    <div key={index} className="register flex flex-col">
      <h4>User {index}</h4>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

function userRegisterList() {
  return (
    <div className={"registerList " + (userList.length > 0 ? "show" : "")}>
      {userList.map((user, index) => userRow(user, index))}
    </div>
  );
}

function submitUser(user, registerUser, continueRegister, setUserCreated) {
  var entrou = false;
  if (user.name.length === 0) {
    document.getElementById("name").classList.add("error");
    entrou = true;
  }
  if (user.email.length === 0) {
    document.getElementById("email").classList.add("error");
    entrou = true;
  }
  if (user.password.length === 0) {
    document.getElementById("password").classList.add("error");
    entrou = true;
  }
  if (entrou) {
    return;
  }

  console.log(user.name);
  console.log(user.email);
  console.log(user.password);

  userList.push(user);
  setUserCreated(true);

  if (!continueRegister) {
    registerUser();
  }
}

export function UserModel(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [continueRegister, setContinueRegister] = useState(true);

  const [userCreated, setUserCreated] = useState(false);

  return (
    <div class="form">
      <header>
        <h2 className="title">Cadastro de Usuário</h2>
      </header>
      <form
        className="userForm flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          submitUser(
            {
              name,
              email,
              password,
            },
            props.registerUser,
            continueRegister,
            setUserCreated
          );
        }}
      >
        <div className="model-wrapper flex">
          <label htmlFor="name"> Nome: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <br />
        <div className="model-wrapper flex">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <div className="model-wrapper flex">
          <label htmlFor="password">Senha: </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <br />
        <button type="submit" onClick={() => setContinueRegister(true)}>
          Cadastrar Usuário e continuar cadastrando
        </button>
        <button type="submit" onClick={() => setContinueRegister(false)}>
          Cadastrar Usuário e seguir para pulseira
        </button>
      </form>

      {userCreated
        ? setUserCreated(false) + userRegisterList()
        : userRegisterList()}
    </div>
  );
}
