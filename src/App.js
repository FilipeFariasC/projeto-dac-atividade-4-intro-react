import {UserModel} from "./components/UserModel";
import {BraceletModel} from "./components/BraceletModel";

import {useState} from 'react';

function App() {
  const [register, setRegister] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        
        {
          !register ?
          <UserModel
          registerUser={()=>setRegister(true)}
          /> :
          <BraceletModel
          restartRegister={()=>setRegister(false)}
          />
        }

      </header>
    </div>
  );
}

export default App;
