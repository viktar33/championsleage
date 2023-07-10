import React, { useState } from 'react';
import './AddPlayer.css';
import {toast, ToastContainer} from "react-toastify";
import {config} from "../../../environments";

const AddPlayer = () => {
    const [name, setName] = useState('');
    const [championships, setChampionships] = useState('');
    const [image, setImage] = useState(null);
    const formData = new FormData();
    const token = localStorage.getItem('token')

    const handleNameChange = (event:any) => {
        setName(event.target.value);
    };

    const handleChampionshipsChange = (event:any) => {
        setChampionships(event.target.value);
    };

    const handlePhotoChange = (event:any) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (event:any) => {
        const options = {
            method: "POST",
            body: formData,
        };

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        event.preventDefault();
        // Действия при отправке формы, например, сохранение данных игрока
        formData.append("name", name);
        formData.append("championships", championships);
        formData.append("imageFile", image!);

        const response = await fetch(
            `${config}/players`,{method:'POST',body:formData,headers:headers})
            .then(res => res.json())
            .then(res => toast.success("Игрок был добавлен. Вернитесь в зал славы"))
            .catch(err => toast.error("Что-то пошло не так"));
        setName('');
        setChampionships('');
        setImage(null);
    };

    return (
        <form className="player-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="championships">Championships:</label>
                <input
                    type="number"
                    id="championships"
                    value={championships}
                    onChange={handleChampionshipsChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="photo">Photo:</label>
                <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    required
                />
            </div>
            <button type="submit">Add Player</button>
            <ToastContainer/>
        </form>
    );
};

export default AddPlayer;