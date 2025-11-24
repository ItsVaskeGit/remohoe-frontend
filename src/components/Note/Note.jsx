import "./style.css";

export default function Hote({title, description, publishDate}) {
    return (
        <>
            <div className="note-container">
                <div className="title">Title: {title}</div>
                <div className="description">Desc: {description}</div>
                <div className="publish-date">Published: {publishDate}</div>
            </div>
        </>
    );
}