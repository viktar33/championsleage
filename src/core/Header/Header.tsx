import React from 'react';
import './Header.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    function exit(){
        localStorage.clear();
        navigate("/")
    }

    return (
        <header className="header">
            <h1 className="header__title">UEFA.com</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="/homePage" className="header__nav-link">Главная</a></li>
                    <li className="header__nav-item"><a href="/walkOfChampions" className="header__nav-link">Зал славы</a></li>
                    <li className="header__nav-item"><a href="/history" className="header__nav-link">История турнира</a></li>
                    {token ? <li className="header__nav-item"><Button onClick={exit}>Выход</Button></li> : <></>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;