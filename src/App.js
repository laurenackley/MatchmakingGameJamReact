import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// const baseURL = "http://matchmaking.braymatter.com:8091/api/v1/matchmaking/ephemeral/lobbies";
const baseURL = "http://localhost:8091/api/v1/matchmaking/ephemeral/lobbies";


function App() {
  const [lobbies, setLobbies] = useState([]);
//   const lobbies = [{ip: '', autoRestart: '', hasPassword: '', lastUpdated: '',
// name: '', playerCapacity: '', slotsOccupied: ''},];
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response.data.url);
      console.log("in axios");
      console.log(response.data);
      const data = JSON.stringify(response.data);
      console.log("raw "+ data);
      setLobbies(data);
      // const newLobby = {
      //   ip: response.data.ip, 
      //   autoRestart: response.data.autoRestart,
      //   hasPassword: response.data.hasPassword,
      //   lastUpdated: response.data.lastUpdated,
      //   name: response.data.name,
      //   playerCapacity: response.data.playerCapacity,
      //   slotsOccupied: response.data.slotsOccupied
      // }
      // setLobbies.push(newLobby);
      // console.log("Lobbies "+ lobbies +" data");
      // return response.data;
    });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Run every second");
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);



  console.log(lobbies+ "lobbies");
  return (
    <div className="App">
      <header className="App-header">
        <div className="App=intro">
          <h2>Lobby List</h2>
          {lobbies}
        </div>
      </header>
      <div className="Hello">
        <h1>Hello</h1>
        {/* {results} */}
      </div>
    </div>
  );
}

export default App;
