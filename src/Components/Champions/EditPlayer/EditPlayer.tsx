import React, {useEffect, useState} from 'react';
import './EditPlayer.css';
import {Link, useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {config} from "../../../environments";

const EditPlayer = () => {
    const [name, setName] = useState('');
    const [championships, setChampionships] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isImageChanged, setIsImageChanged] = useState(false);
    const formData = new FormData();
    const token = localStorage.getItem('token')
    const {id} = useParams();

    useEffect(() => {
        // @ts-ignore
        getPlayerById(id);
    }, []);

    const getPlayerById = async (id: number) => {
        setIsLoading(true)
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await fetch(
            `${config}/players/${id}`,
            options
        );
        const data = await response.json();
        setName(data.name);
        setChampionships(data.championships)
        setImageSrc(data.imageSrc)
        setIsLoading(false)
    };

    if (isLoading) {
        return <div>Hello</div>
    }

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const handleChampionshipsChange = (event: any) => {
        setChampionships(event.target.value);
    };

    const handlePhotoChange = (event: any) => {
        const file = event.target.files[0];
        setImageFile(file);
        setIsImageChanged(true)
    };

    const handleSubmit = async (event: any) => {
        const options = {
            method: "PUT",
            body: formData,
        };

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        event.preventDefault();
        // Действия при отправке формы, например, сохранение данных игрока
        formData.append("id", id!)
        formData.append("name", name);
        formData.append("championships", championships);
        formData.append("imageFile", imageFile!);

        const response = fetch(
            `${config}/players`,
            {method:"PUT",body:formData,headers:headers})
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => toast("Игрок был отредактирован. Вернитесь в зал славы"))
            .catch(err => toast.error("Что-то пошло не так"));
    };

    const deletePlayer = () => {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        confirmAlert({
            title: "Подтверждение удаления",
            message: "Вы действительно хотите удалить этого игрока",
            buttons: [
                {
                    label: "Да",
                    onClick: () => fetch(
                        `${config}/players/${id}`,{method:'DELETE',headers:headers})
                        .then(res => res.json())
                        .then(res => console.log(res))
                        .then(res => toast("Игрок был удалён. Вернитесь в зал славы"))
                        .catch(err => toast.error("Что-то пошло не так"))
                },
                {
                    label: "Нет",
                    onClick: () => alert("А зря (:")
                }
            ]
        });
    };

    return (
        <form className="player-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="championships">Титулы:</label>
                <input
                    type="number"
                    id="championships"
                    value={championships}
                    onChange={handleChampionshipsChange}
                    required
                />
            </div>
            <label htmlFor="photo">Тукущее фото:</label>
            <img className="edit-image" src={imageSrc!}/>
            <div className="form-group">
                <label htmlFor="photo">Изменить фото:</label>
                <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                />
            </div>
            <Button style={{marginBottom:"3%"}} variant='contained' color='success' type="submit">Редактировать</Button>
            <ToastContainer/>
            <Button onClick={deletePlayer} style={{marginBottom:"3%"}} color='error' startIcon={<DeleteIcon/>} variant='contained'>Удалить</Button>
            <Button variant='contained' component={Link} to={`/walkOfChampions/`}>Назад</Button>
            {isImageChanged ? <h5 style={{color: "red"}}>Фотография будет изменена при сохранении</h5> : null}
        </form>
    );
};

export default EditPlayer;