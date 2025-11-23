import "./style.css";
import {useNavigate} from "react-router";

export default function Thread({id ,name, startedAt, startedBy, active}) {

    const navigate = useNavigate();

    function handleOpenThread() {
        navigate("/discussion/" + id);
    }

    return (
        <div className="thread-container" onClick={handleOpenThread}>
            <div className="name">Name: {name}</div>
            <h4>Status: {active ? "Active" : "Inactive"}</h4>
            <div className="details-container">
                <div>Started: {startedAt}</div>
                <div>Author: {startedBy}</div>
            </div>
        </div>
    )
}