import React from 'react';
import './RightParagraph.css';
import LightSpeed from "react-reveal/LightSpeed";

const RightParagraph = () => {
    return (
        <div className='rightParagraph'>
            <div className='image'>
                <img src='https://wallpapercave.com/wp/wp1889544.jpg'/>
            </div>
            <div className='text'>
                <p>Мы считаем, что необходимо ценить возможность играть в футбол с друзьями на даче, потому что
                    это лучшее, что может быть</p>
                <ul>
                    <LightSpeed right delay={300}>
                        <li>Развитие быстроты и скорости: Футбол требует быстрых реакций и движений, что помогает
                            развить скорость и реактивность.
                        </li>
                    </LightSpeed>
                    <LightSpeed right delay={600}>
                        <li>Улучшение координации глаз и рук: Вратарская практика в футболе улучшает координацию глаз и
                            рук, что может быть полезным в других сферах жизни.
                        </li>
                    </LightSpeed><LightSpeed right delay={900}>
                    <li>Развитие стратегического мышления: Футбол требует планирования игры, поиска пространства и
                        принятия решений, что способствует развитию стратегического мышления.
                    </li>
                </LightSpeed>
                </ul>
            </div>
        </div>
    );
};

export default RightParagraph;