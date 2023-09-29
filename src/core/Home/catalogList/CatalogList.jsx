import React from 'react';
import './CatalogList.css'
import Zoom from 'react-reveal/Zoom';

const CatalogList = () => {

    const data = [
        {id: 1, desc: 'Физическая активность: Игра в футбол предоставляет возможность активно двигаться, улучшая физическую форму и выносливость.',icon:'https://lh3.googleusercontent.com/pw/ADCreHdQ9Ol3kh2WBGaeV0ytwXNe_W3JpZykmyBaD7ybSnCneq6sfx2-JckDqd5AnXEAOwqWcxv_XUQcrJrkM2cCM_f0voBGYAtIqWIlYUkC240OJU0Pprwxr36nuDaQf7azuL5oInU93RuBsrS1MSx40a6JdT5L2uIL2mKjSiiwc9DfsTDKQg-r51YGZfh_NtEGkaCperqAbl0837iGUNCw9b4vHpMPKlbUKxU958WLT3h_IdJj6f_66THJLtOLJQGjMkXiwTcsbNcSkKHiVFZQK_TfvE6m6yRfnKkzDLVlsJro61XyDbeq97d5oDzik6nUl0JHXHare1ZEet5-QzgyN8YJdzM7EuKKLgwHbTnXaPZ2_68m6bZS8TipjMxtyrTOzpEQ5hnJQEPPIkxthVjRUS9Llq0YXUFh837II6Z363hVK22pVuwntgsOcxHLomrVkbuwdUJL5c-_Kjx1r1SX4gwaJnCxBJMBhOvyM-Q0LmRiAwo3OOg-UjuIQj8aq1p4s4SrB_yY4RhDC8-uIJOHgy7gInlwEgRmBLUOV5VpDuW-suMMrNA3gSdHL1NS8mPAM68cwPWg39fJpvr2CD7nRtyv5haR0Zdw6Pf3w8sDg4btUr5Uh--HrGrINUcxkCOVxPC79haIQStOI_aA2LgAnYcYuzhYKkPDxekL7IaGDo1tkCjuMbA3BJxIrtrhWiv-e7GsXckWdrKLuGQCXO0Vc-sp52rPYCxdekLEmnUFg1wjgCx_FbSuXtO1u_fv2tZV3rjIQmrC5ZZ-CwLIgqRESOuk2D5gyOvi4wLURoolttVNOLSK_3Tmm3FEjSWChzpQsdK24M70k34HUPWR7X_b1edF1ckqSZZPIrKFn7K1NDDSfbhRiVnAquBjfgDLfcOiL0gPSzRJoN14zIcO5a8wbzq7vg=w1280-h852-s-no?authuser=0'},
        {id: 2, desc: 'Командная работа: Футбол - командная игра, которая помогает развивать навыки сотрудничества и взаимодействия с другими игроками.',icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-29-36.jpg'},
        {id: 3, desc: 'Укрепление дружеских отношений: Игра в футбол на даче в кругу друзей способствует укреплению связей и созданию приятных воспоминаний.', icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-41 (2).jpg'},
        {id: 4, desc: 'Стимуляция мозговой активности: Футбол требует стратегического мышления, быстрого принятия решений и развития тактических навыков.', icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-40.jpg'},
        {id: 5, desc: 'Улучшение координации: Игра в футбол помогает улучшить координацию движений, баланс и гибкость.', icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-11-40 (3).jpg'},
        {id: 6, desc: 'Релаксация и разрядка эмоций: Спортивная активность и общение с друзьями на даче помогают расслабиться, снять стресс и отвлечься от повседневных забот.',icon:'https://viktar331-001-site1.btempurl.com/Images/photo_2023-07-17_12-29-36 (2).jpg'},
    ];

    return (
        <div className="catalog-list">
            {data.map((item, index = item.id) => (
                <Zoom left>
                    <div key={index} className="catalog-item">
                        <img
                            src={item.icon} referrerPolicy='no-referrer'/>
                        <h4>{item.desc}</h4>
                    </div>
                </Zoom>
            ))}
        </div>
    );
};

export default CatalogList;