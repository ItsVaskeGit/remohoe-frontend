import "./style.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import ErrorBox from "../ErrorBox/ErrorBox.jsx";

export default function AccountArea() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState("");

    const [confirm, setConfirm] = useState("");

    function handleFormDataInput(event) {
        setData({...data, [event.target.name]: event.target.value});
    }

    function handleConfirmPass(event) {
        setConfirm(event.target.value);
    }

    async function handleChangeAccountData(event) {
        event.preventDefault();
        if(data.password === confirm) {
            axios.put("http://localhost:3000/account/", {
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            }, { headers: { Authorization: "Bearer " + localStorage.getItem("token")}})
                .then(() => {
                    navigate("/");
                }).catch((err) => {
                    setError(err.response);
            });
        }else {
            setError("Passwords do not match.")
        }
    }

    useEffect(() => {
       async function fillFields() {
           axios.get("http://localhost:3000/account/personal-data"
               , { headers : { Authorization:  "Bearer " + localStorage.getItem("token") }})
               .then((response) => {
                   setData({
                       username: response.data.username,
                       firstName: response.data.firstName,
                       lastName: response.data.lastName,
                       email: response.data.email
                   });
               }).catch((err) => {
                   console.log(err);
           });
       }
       fillFields();
    }, []);

    return (
        <>
        <div>
            <h1 className="account-area-splash">Change Account Details</h1>
        <form onSubmit={handleChangeAccountData}>
            <input type="text" name="username" value={data.username || ""} onChange={handleFormDataInput} placeholder="Username"/>

            <input type="text" name="firstName" value={data.firstName || ""} onChange={handleFormDataInput} placeholder="First Name"/>

            <input type="text" name="lastName" value={data.lastName || ""} onChange={handleFormDataInput} placeholder="Last Name"/>

            <input type="email" name="email" value={data.email || ""} onChange={handleFormDataInput} placeholder="Email"/>

            <input type="password" name="password" onChange={handleFormDataInput} placeholder="Password"/>

            <input type="password" name="confirm" onChange={handleConfirmPass} placeholder="Confirm Password"/>

            <button className="register-button" type="submit">Change Details</button>
        </form>
        </div>

            {error !== "" ? (
                <ErrorBox message={error}></ErrorBox>
            ) : (
                <></>
            )}
        </>
    );
}