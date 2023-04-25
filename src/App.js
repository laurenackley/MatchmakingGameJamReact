import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// const baseURL = "http://matchmaking.braymatter.com:8091/api/v1/matchmaking/ephemeral/lobbies";
const baseURL = "http://localhost:8091/api/v1/matchmaking/ephemeral/lobbies";

function App() {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const data = response.data;
        setLobbies((lobbies) => data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  setTimeout(function () {
    window.location.reload(1);
  }, 5000);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App=intro">
          <h1>Lobby List</h1>
          <div></div>
        </div>
      </header>
      <div>
        {Object.keys(lobbies).map((key, value) => {
          let lobby = lobbies[key];
          return (
            <div>
              IP: {lobby.ip} <br />
              Name: {lobby.name}<br />
              Player Capacity: {lobby.playerCapacity}<br />
              Players in Lobby: {lobby.playerAmount} <br />
              Pin: {lobby.pin}<br />
              Restart Game on Finish: {lobby.restartGameOnFinish}<br />

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
