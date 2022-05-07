import { UserModel } from "./components/UserModel";
import { BraceletModel } from "./components/BraceletModel";

import { useState } from "react";

export default function App() {
  const [register, setRegister] = useState(false);

  return (
    <div className="App">
      {!register ? (
        <UserModel goToBraceletPage={() => setRegister(true)} />
      ) : (
        <BraceletModel goToUserPage={() => setRegister(false)} />
      )}
    </div>
  );
}
