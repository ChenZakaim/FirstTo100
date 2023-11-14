import { useState } from "react";
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import "./App.css";

function App() {
  function removePlayer(name) {
    setPlayers((prev) => {
      return prev.filter((el) => el.name !== name);
    });
  }
  const [players, setPlayers] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);

  function toogleGameMode() {
    setGameStatus((prev) => {
      if (prev) {
        setPlayers([]);
      }
      return !prev;
    });
  }
  function addNewPlayer(name) {
    if (players.filter((el) => el.name === name).length === 0) {
      const newUser = { name, averageScore: 0, gameCount: 0, didWin: false };
      setPlayers([...players, newUser]);
    }
  }

  function changeWinStatus(userName) {
    setPlayers((prev) => {
      const copy = [...prev];
      const result = copy.find(({ name }) => name === userName);
      result.didWin = true;
      return copy;
    });
  }
  return (
    <>
      <h1 id="game-header"> First To 100 </h1>
      <Game
        removeUser={removePlayer}
        players={players}
        setPlayers={setPlayers}
        addFinishedUser={changeWinStatus}
        gameStatus={gameStatus}
      />
      <GameFooter
        addNewPlayer={addNewPlayer}
        toogleGameMode={toogleGameMode}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default App;
