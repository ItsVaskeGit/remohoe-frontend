import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Thread from "../Thread/Thread.jsx";
import "./style.css";
import Comment from "../Comment/Comment.jsx";

export default function Discussion() {

    const navigate = useNavigate();

    const {threadId} = useParams();

    let [thread, setThread] = useState();

    useEffect(() => {
        async function getThread() {
            axios.get("http://localhost:3000/forum/thread/" + threadId,
                {headers: {Authorization: "Bearer " + localStorage.getItem("token")}})
                .then((response) => {
                    setThread(response.data);
                });
        }

        getThread();
    }, []);


    function handleNewComment() {
        navigate("/discussion/" + thread.id + "/new");
    }

    return (
        <>
        <h1 className="discussion-splash">Discussion</h1>
        <div className="discussion-container">
            {thread ? (
                <Thread name={thread.name} startedAt={new Date(thread.startedAt).toUTCString()}
                        startedBy={thread.startedBy.toString()} active={thread.active}></Thread>
            ) : (
                <></>
            )}
            {thread ? (
                thread.comments.length !== 0 ? (
                        thread.comments.map((entry, index) =>
                            <Comment key={index} user={entry.user} commentDate={entry.commentDate} message={entry.data}></Comment>
                        )
                    ) : (<></>)
            ) : (<></>)}
        </div>
            <div className="new-comment" onClick={handleNewComment}>New Comment</div>
        </>
    );
}