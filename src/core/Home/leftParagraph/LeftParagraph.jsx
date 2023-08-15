import React from 'react';
import './LeftParagraph.css';
import LightSpeed from 'react-reveal/LightSpeed';

const LeftParagraph = () => {
    return (
        <div className='leftParagraph'>
            <div className='text'>
                <p>В итоге, игра в футбол с друзьями на даче важна для улучшения физического и психологического здоровья, развития командного духа, социализации и общения, а также для развития навыков. Она предлагает возможность насладиться временем с близкими людьми, создает веселую и дружественную атмосферу, которая оставляет незабываемые воспоминания.</p>
                <ul>
                    <LightSpeed left delay={300}>
                    <li>Повышение самооценки: Участие в игре и достижение успеха на поле могут улучшить самооценку и уверенность в себе.
                    </li>
                    </LightSpeed>
                    <LightSpeed left delay={600}>
                        <li>Развитие выносливости и выносливости: Игра в футбол требует физической выносливости, что способствует улучшению общей физической подготовки.
                        </li>
                    </LightSpeed><LightSpeed left delay={900}>
                    <li>Улучшение сердечно-сосудистой системы: Футбол - интенсивная кардионагрузка, которая способствует укреплению сердца и сосудов.
                    </li>
                </LightSpeed>
                </ul>
            </div>
            <div className='image'>
                <img src='https://avatars.dzeninfra.ru/get-zen_doc/103153/pub_5fd28a1440dbc009fcb2eb90_5fd29b49d2a6c44c4a5f1209/scale_1200'/>
            </div>
        </div>
    );
};

export default LeftParagraph;