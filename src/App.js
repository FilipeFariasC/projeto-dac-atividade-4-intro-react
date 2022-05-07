import { UserModel } from "./components/UserModel";
import { BraceletModel } from "./components/BraceletModel";

import { useState } from "react";

// Hook
export default function App() {
  const [page, setPage] = useState(true);

  // se page for true, mostra o user model
  // se page for false, mostra o bracelet model
  return (
    <div className="App">
      {page ? (
        <UserModel goToBraceletPage={() => setPage(false)} />
      ) : (
        <BraceletModel goToUserPage={() => setPage(true)} />
      )}
    </div>
  );
}
