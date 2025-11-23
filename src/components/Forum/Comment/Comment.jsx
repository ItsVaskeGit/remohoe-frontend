import "./style.css";

export default function Comment({message, commentDate, user}) {

    return (
        <div className="element-container">
            <div className="comment-container">
                <div>Comment</div>
                <h4>Message: {message}</h4>
                <div className="details-container">
                    <div className="date">Date: {commentDate}</div>
                    <div className="author">Author: {user}</div>
                </div>
            </div>
        </div>
    );
}