import { useState } from "react";

function submitUser(user, registerUser) {
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

  registerUser();
}

export function UserModel(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            props.registerUser
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
