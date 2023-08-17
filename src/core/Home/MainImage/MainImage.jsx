import React from 'react';
import './MainImage.css';
import {Button} from "@mui/material";
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

const MainImage = () => {
    return (
        <div className='mainImage'>
            <Tada top duration={2500}>
                <div className='image'>
                    <img src='https://images.wallpaperscraft.ru/image/single/futbol_futbolnyj_miach_gazon_122654_1920x1080.jpg' alt='asd'/>
                </div>
            </Tada>
            <div className='text'>
                    <h2>Сообщество самого масштабного футбольного события в истории</h2>
                <hr style={{border:'1px solid white'}}/>
                    <div className='greet-buttons'>
                        <Zoom duration={3000}>
                        <a style={{textDecoration:"none"}} href="/walkOfChampions">
                            <Button style={{backgroundColor:'#DDBC95',textDecoration:"none"}} size='large' variant='contained'>Зал славы</Button>
                        </a>
                        </Zoom>
                        <Zoom >
                            <a style={{textDecoration:"none"}} href="/history">
                        <Button style={{backgroundColor:'#B38867',textDecoration:"none"}} size='large' variant='contained'>История турнира</Button>
                        </a>
                        </Zoom>
                    </div>
            </div>
        </div>
    );
};

export default MainImage;