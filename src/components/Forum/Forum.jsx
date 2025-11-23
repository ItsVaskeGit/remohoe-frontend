import "./style.css";
import axios from "axios";
import Thread from "./Thread/Thread.jsx";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

export default function Forum() {

    const navigate = useNavigate();

    let [threads, setThreads] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios.get("http://localhost:3000/forum/",
                {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}).then((response) => {
                setThreads(response.data);
            });
        }

        getData();
    }, []);

    function handleNewThread() {
        navigate("/forum/new");
    }

    return (
        <>
            <h1 className="forum-splash">Forum</h1>
            <div className="forum-container">
                {
                    threads.length !== 0 ? (
                        threads.map((entry, index) =>
                            <Thread key={index} id={entry.id} name={entry.name} active={entry.active}
                                    startedAt={new Date(entry.startedAt).toUTCString()} startedBy={entry.startedBy}
                            />
                        )
                    ) : (<> </>)
                }
            </div>
            <div className="new-thread" onClick={handleNewThread}>New</div>
        </>
    )
}