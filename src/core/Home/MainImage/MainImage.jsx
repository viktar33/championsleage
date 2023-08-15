import React from 'react';
import './MainImage.css';
import {Button} from "@mui/material";
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';
import Jump from "react-reveal/Jump";

const MainImage = () => {
    return (
        <div className='mainImage'>
            <Zoom top duration={1500}>
                <div className='image'>
                    <img src='https://images.wallpaperscraft.ru/image/single/futbol_futbolnyj_miach_gazon_122654_1920x1080.jpg' alt='asd'/>
                </div>
            </Zoom>
            <div className='text'>
                <Bounce left cascade duration={2000}>
                    <h2>Сообщество самого масштабного футбольного события в истории</h2>
                </Bounce>
                <hr style={{border:'1px solid white'}}/>
                <Jump>
                    <div className='greet-buttons'>
                        <a href="/walkOfChampions">
                            <Button style={{backgroundColor:'#DDBC95'}} size='large' variant='contained'>Зал славы</Button>
                        </a>
                        <a href="/history">
                        <Button style={{backgroundColor:'#B38867'}} size='large' variant='contained'>История турнира</Button>
                        </a>
                    </div>
                </Jump>
            </div>
        </div>
    );
};

export default MainImage;