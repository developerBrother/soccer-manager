import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./components/storepage/Store";
import Formation from './components/formationpage/Formation';
import AuthContext from "./context/context";
import {players} from './playerData';
import {playersForSale} from './playerData';

import "./App.css";

function App() {
  const [points, setPoints] = useState(100);
  const [playerList, changePlayers] = useState(players);
  const [salePlayers,changeSale]=useState(playersForSale);

  return (
    <div>
      <Navbar />
      <AuthContext.Provider
        value={{
          points: points,
          setPoints,
          playerList: playerList,
          changePlayers,
          salePlayers: salePlayers,
          changeSale
        }}
      >
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="formation" element={<Formation/>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
