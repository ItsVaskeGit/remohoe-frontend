import "./style.css";
import {useState} from "react";
import ErrorBox from "../ErrorBox/ErrorBox.jsx";
import axios from "axios";
import {useNavigate} from "react-router";

export default function Signup() {

    const navigate = useNavigate();

    const [confirm, setConfirm] = useState("");

    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    async function handleRegister(event) {
        event.preventDefault();
        if (formData.password === confirm) {
            console.log("executes")
            await axios.post("http://localhost:3000/register", {
                username: formData.username,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }).then((response) => {
                console.log(response)
                navigate("/login");
            }).catch((error) => {
                setError(error.data.message);
            })
        } else {
            setError("Passwords do not match.");
        }
    }

    function handleFormDataInput(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function handleConfirmPass(event) {
        setConfirm(event.target.value);
    }

    return (
        <>
            <div>
                <h1 className="register-screen"> Register </h1>

                <form onSubmit={handleRegister}>
                    <input type="text" name="username" onChange={handleFormDataInput} placeholder="Username"/>

                    <input type="text" name="firstName" onChange={handleFormDataInput} placeholder="First Name"/>

                    <input type="text" name="lastName" onChange={handleFormDataInput} placeholder="Last Name"/>

                    <input type="email" name="email" onChange={handleFormDataInput} placeholder="Email"/>

                    <input type="password" name="password" onChange={handleFormDataInput} placeholder="Password"/>

                    <input type="password" name="confirm" onChange={handleConfirmPass} placeholder="Confirm Password"/>

                    <button className="register-button" type="submit">Sign Up</button>
                </form>
            </div>

            {error !== "" ? (
                <ErrorBox message={error}></ErrorBox>
            ) : (
                <></>
            )}

        </>
    )
};