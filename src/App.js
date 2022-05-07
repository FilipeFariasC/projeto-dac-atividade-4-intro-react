import { UserModel } from "./components/UserModel";
import { BraceletModel } from "./components/BraceletModel";

import { useState } from "react";

function App() {
  const [register, setRegister] = useState(false);

  return (
    <div className="App">
      {!register ? (
        <UserModel registerUser={() => setRegister(true)} />
      ) : (
        <BraceletModel restartRegister={() => setRegister(false)} />
      )}
    </div>
  );
}

export default App;
