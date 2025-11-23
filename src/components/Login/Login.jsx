import "./style.css";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router";
import ErrorBox from "../ErrorBox/ErrorBox.jsx";

export default function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({username: '', password: ''});

    const [error, setError] = useState("");

    function handleTyping(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    async function handleLogIn(event) {
        event.preventDefault();
        await axios.post("http://127.0.0.1:3000/login/", {
            username: formData.username,
            password: formData.password
        }).then((response) => {
            if(response.data.token) {
                localStorage.setItem("user", formData.username);
                localStorage.setItem("token", response.data.token);
                navigate("/");
            }
        }).catch((error) => {
            setError(error.response.data.message);
        });
    }

    return (
        <>
            <h2 className="title">Login</h2>

            <div className="login-container">

                <form onSubmit={handleLogIn}>

                    <input name="username" type="text" value={formData.email} onChange={handleTyping} placeholder="Username"/>

                    <input name="password" type="password" value={formData.password} onChange={handleTyping} placeholder="Password"/>

                    <button className="login-button" type="submit">Login</button>

                </form>

            </div>

            {error !== "" ? (
                <ErrorBox message={error}></ErrorBox>
            ) : (
                <></>
            )}
        </>
    );
};