import './PlayerList.css';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const PlayerList = ({players}) => {
    const token = localStorage.getItem('token')
    return (
        <div className="player-list">
            {players.map((player, index) => (
                <div key={index} className="player-item">
                    <img src={player.imageSrc} alt={player.name} />
                    <p>Имя: {player.name}</p>
                    <p>Титулы: {player.championships}</p>
                    {token ?
                        <Button variant="contained" endIcon={<SendIcon />}  component={Link} to={`/walkOfChampions/${player.id}`}>Редактировать</Button>
                        : <></>}
                </div>
            ))}
        </div>
    );
};

export default PlayerList;