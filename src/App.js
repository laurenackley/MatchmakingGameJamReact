import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import ListAllLobbies from './lobbies';
const baseURL = "http://matchmaking.braymatter.com:8091/api/v1/matchmaking/ephemeral/lobbies";

// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('', (req, res) => {
//   request(
//     { url: {baseURL}},
//     (error, response, body) => {
//       if(error || response.statusCode !==200){
//         return res.status(500).json({type: 'error', message: error.message});
//       }
//       res.json(JSON.parse(body));
//     }
//     )
//   });
  
  
  function App() {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
      axios.get(baseURL).then((response) => {
        response.headers("Access-Control-Allow-Origin", "*");
        setLobbies(response.data)
      });
  }, );

  useEffect(() => {
    const interval = setInterval(()=> {
      console.log('Run every second');
    },1000);
    return () => clearInterval(interval)
  }, []);
const lobbyElements = lobbies.map((lobby, index) => <div key={index}>
  <h1>{lobby.name}</h1>
</div>)
if(!lobbies) return null;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App=intro">
          <h2>Lobby List</h2>
          {lobbyElements}

        </div>
      </header>
      <body>
        <h1>Hello</h1>
      <ListAllLobbies />
      </body>
    </div>
  );
}

export default App;
