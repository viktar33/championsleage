import React from 'react';
import './CatalogList.css'
import Zoom from 'react-reveal/Zoom';

const CatalogList = () => {

    const data = [
        {id: 1, desc: 'Физическая активность: Игра в футбол предоставляет возможность активно двигаться, улучшая физическую форму и выносливость.',icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-40 (2).jpg'},
        {id: 2, desc: 'Командная работа: Футбол - командная игра, которая помогает развивать навыки сотрудничества и взаимодействия с другими игроками.',icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-29-36.jpg'},
        {id: 3, desc: 'Укрепление дружеских отношений: Игра в футбол на даче в кругу друзей способствует укреплению связей и созданию приятных воспоминаний.', icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-41 (2).jpg'},
        {id: 4, desc: 'Стимуляция мозговой активности: Футбол требует стратегического мышления, быстрого принятия решений и развития тактических навыков.', icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-40.jpg'},
        {id: 5, desc: 'Улучшение координации: Игра в футбол помогает улучшить координацию движений, баланс и гибкость.', icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-40 (3).jpg'},
        {id: 6, desc: 'Релаксация и разрядка эмоций: Спортивная активность и общение с друзьями на даче помогают расслабиться, снять стресс и отвлечься от повседневных забот.',icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-29-36 (2).jpg'},
    ];

    return (
        <div className="catalog-list">
            {data.map((player, index = player.id) => (
                <Zoom left delay={index/6 * 1000}>
                    <div key={index} className="catalog-item">
                        <img
                            src={player.icon}
                            alt={player.name}/>
                        <h4>{player.desc}</h4>
                    </div>
                </Zoom>
            ))}
        </div>
    );
};

export default CatalogList;