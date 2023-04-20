import { useEffect, useState } from "react";
import  { useRouter } from 'next/router';

export default function ListAllLobbies() {
    const router = useRouter();

    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        async function getPageData(){
        const apiUrlEndpoint = "http://matchmaking.braymatter.com:8091/api/v1/matchmaking/ephemeral/lobbies";
        const getData = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify()
        };
        const response = await fetch(apiUrlEndpoint, getData);
        const res = await response.json();

        setDataResponse(res.lobbies);
        }
        getPageData();
    }, [router.query, router.isReady]);
    return (
        <div className="ListAllLobbies">
            {dataResponse?.map((lobby)=>{
                return(
                    <div key="lobby">
                        <h1>{lobby.name}</h1> <hr />
                        Player Capacity: {lobby.playerCapacity}<br/>
                        Slots Occupied: {lobby.slotsOccupied} <br/>
                        Auto Restart: {lobby.autoRestart} <br/>
                        Password Protected: {lobby.hasPassword}
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}