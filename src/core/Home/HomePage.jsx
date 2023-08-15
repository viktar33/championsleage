import React from 'react';
import './HomePage.css';
import LeftParagraph from './leftParagraph/LeftParagraph';
import MainImage from './MainImage/MainImage';
import RightParagraph from './rightParagraph/RightParagraph';
import CatalogList from './catalogList/CatalogList';
import Bounce from "react-reveal/Bounce";

const HomePage = () => {
    return (
        <>
            <MainImage/>
            <div className='greet'>
                <Bounce right cascade delay={500} duration={2000}><h2>
                    Присоединяйся к нам</h2>
                </Bounce>
                <Bounce delay={1000} duration={3000} left>
                    <h3>
                        Игра в футбол с друзьями на даче имеет огромное значение и пользу для всех участников. Это не
                        просто развлечение или спортивная активность, но и возможность укрепить дружеские связи и
                        провести время с близкими людьми. Вот почему игра в футбол с друзьями на даче так важна:
                    </h3></Bounce>
                <CatalogList/>
                <LeftParagraph/>
                <RightParagraph/>
            </div>
        </>
    );
};

export default HomePage;