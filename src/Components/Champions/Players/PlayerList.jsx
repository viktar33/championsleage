import './PlayerList.css';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const PlayerList = ({players}) => {
    const token = localStorage.getItem('token')

    function findPlayerWithMostTitles(players) {
        let maxTitles = 0;

        for (let i = 0; i < players.length; i++) {
            if (players[i].championships > maxTitles) {
                maxTitles = players[i].championships;
            }
        }

        return maxTitles;
    }

    const maxTitles = findPlayerWithMostTitles(players);

    return (
        <div className="player-list">
            {players.map((player, index) => (
                <div key={index} className="player-item">
                    <img src={player.imageSrc} alt={player.name} />
                    <h2> 💥 Legend: {player.name} 💥</h2>
                    <h3> 🏆 Number of titles: {player.championships} 🏆 </h3>
                    {player.championships == maxTitles ?
                        <h3>🔝 The best of the best 🔝</h3>
                        : null}
                    {player.championships === 0 ?
                        <h3>🦽 Next time 🦽</h3>
                        : null}
                    {token ?
                        <Button variant="contained" endIcon={<SendIcon />}  component={Link} to={`/walkOfChampions/${player.id}`}>Редактировать</Button>
                        : <></>}
                </div>
            ))}
        </div>
    );
};

export default PlayerList;