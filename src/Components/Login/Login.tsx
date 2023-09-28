import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import './Login.css'
import {useNavigate} from "react-router-dom";
import agent from "../../api/agent";


const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = agent.Account.login(name,password)
            .then(res => res.json())
            .catch(err => toast.error("Что-то пошло не так"));

        // @ts-ignore
        const token = response.token;
        if (token) {
            toast.success("Вы вошли на сайт");
            localStorage.setItem("token", token);
            navigate("/")
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
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
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
            <ToastContainer/>
        </form>
    );
};

export default Login;