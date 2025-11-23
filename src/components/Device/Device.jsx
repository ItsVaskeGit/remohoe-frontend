import "./style.css"

export default function Device({name, active, image}) {

    function deactivate(event) {
        if(event.target.className === "active") {
            event.target.classList[0] = "inactive";
        }else {
            event.target.classList[0] = "active";
        }
    }

    return (
        <div className="device-container">
            <div className="name">Name: {name}</div>
            <div className="image-container">
            <img className="image" src={image} alt="Device image"/>
            </div>
            <div onClick={deactivate} className={active ? "active" : "inactive"}>{active ? "Active" : "Inactive"}</div>
        </div>
    );
}