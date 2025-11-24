import "./style.css";
import {useNavigate} from "react-router";
import axios from "axios";

export default function Thread({id, name, startedAt, startedBy, active}) {

    const navigate = useNavigate();

    function handleOpenThread() {
        navigate("/discussion/" + id);
    }

    async function handleDelete() {
        await axios.delete("http://localhost:3000/forum/thread/" + id
            , { headers: { Authorization: "Bearer " + localStorage.getItem("token")} })
            .then(() => {
                navigate("/forum");
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="thread-container" onClick={handleOpenThread}>
                <div className="name">Name: {name}</div>
                <h4>Status: {active ? "Active" : "Inactive"}</h4>
                <div className="details-container">
                    <div>Started: {startedAt}</div>
                    <div>Author: {startedBy}</div>
                </div>
            </div>
            <div className="delete" onClick={handleDelete}>Delete</div>
        </>
    )
}