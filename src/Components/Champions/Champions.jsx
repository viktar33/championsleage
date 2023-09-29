import React, {useEffect, useState} from 'react';
import PlayerList from "./Players/PlayerList";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {config} from "../../environments";
import Loader from "../Loader/Loader";

const Champions = () => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token')

    useEffect(() => {
        getAllPlayers();
    }, []);

    const getAllPlayers = async () => {
        setIsLoading(true)
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await fetch(
            `${config}/players`,
            options
        );
        const data = await response.json();
        setPlayers(data);
        setIsLoading(false)
    };


    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            {token ? <NavLink to="/addPlayer">
                <Button style={{margin:'1%'}} variant='outlined' color='success' >Добавить участника</Button>
            </NavLink> : <></>}
            <PlayerList players={players}>
            </PlayerList>
        </div>
    );
};

export default Champions;