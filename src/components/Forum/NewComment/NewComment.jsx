import "./style.css"
import ErrorBox from "../../ErrorBox/ErrorBox.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router";

export default function NewComment() {

    const navigate = useNavigate();

    const {threadId} = useParams();

    const [formData, setFormData] = useState({ message: '' });

    const [error, setError] = useState("");

    function handleTyping(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    async function handleNewComment(event) {
        event.preventDefault();
        await axios.put("http://localhost:3000/forum/thread/" + threadId + "/new", {
            data: formData.message
        }, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
            .then(() => {
                navigate("/discussion/" + threadId);
            }).catch((error) => {
                setError(error.response);
            });
    }

    return (
        <>
            <h2 className="title">New Comment</h2>

            <div className="comment-container">

                <form onSubmit={handleNewComment}>

                    <input name="message" type="text" onChange={handleTyping} placeholder="Message"/>

                    <button className="comment-button" type="submit">New Comment</button>

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