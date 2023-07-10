import React from 'react';
import './App.css';
import Header from "./core/Header/Header";
import HomePage from "./core/Home/HomePage";
import Footer from "./core/Footer/Footer";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Champions from "./Components/Champions/Champions";
import AddPlayer from "./Components/Champions/AddPlayer/AddPlayer";
import EditPlayer from "./Components/Champions/EditPlayer/EditPlayer";
import History from "./Components/History/History";
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className="body">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/homePage"/>}/>
                    <Route path="/homePage" element={<HomePage/>}/>
                    <Route path="/walkOfChampions" element={<Champions/>}/>
                    <Route path='/walkOfChampions/:id' element={<EditPlayer/>}/>
                    <Route path="/addPlayer" element={<AddPlayer/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/sign-in" element={<Login/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
