import "./style.css";
import ErrorBox from "../../ErrorBox/ErrorBox.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

export default function New() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '' });

    const [error, setError] = useState("");

    function handleFormDataInput(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    async function handleNewThread(event) {
        event.preventDefault();
        if(formData.name) {
            await axios.post("http://localhost:3000/forum/new", {
                name: formData.name
            }, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}}).then(() => {
                navigate("/forum");
            }).catch((error) => {
                setError(error.response.data);
            });
        }else {
            setError("Name not present.")
        }
    }

    return (
        <>
            <div>
                <h1 className="new-thread-screen"> New Thread </h1>

                <form onSubmit={handleNewThread}>
                    <input type="text" name="name" onChange={handleFormDataInput} placeholder="Name"/>

                    <button className="register-button" type="submit">Create new Thread</button>
                </form>
            </div>

            {error !== "" ? (
                <ErrorBox message={error}></ErrorBox>
            ) : (
                <></>
            )}

        </>)
}