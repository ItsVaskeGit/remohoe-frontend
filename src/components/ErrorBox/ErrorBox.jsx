import "./style.css";

export default function ErrorBox({message}) {
    return <div className="error-box">
        <div className="error">
            <h1 className="error-message">{message}</h1>
        </div>
    </div>;
}