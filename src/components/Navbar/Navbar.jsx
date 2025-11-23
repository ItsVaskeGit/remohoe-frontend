import {Link} from "react-router";
import "./style.css";

const Navbar = () => {

    // const {user, setUser} = useContext(UserContext);

    function handleLogOut() {
        localStorage.removeItem("token");
        // setUser(null);
    }

    return (
        <div className="navbar-container">
        <ul>
            <Link className="link" to="/"> Home </Link>
            <Link className="link" to="/devices">Devices</Link>
            <Link className="link" to="/docs">Documentation</Link>
            <Link className="link" to="/forum">Forum</Link>
            <Link className="link" to="/account">Profile</Link>
            <Link className="link" to="/register">Register</Link>
            {/*{user ? (*/}
                <Link className="link" to="/" onClick={handleLogOut}>Log out</Link>
            {/*) : (*/}
                <Link className="link" to="/login">Log in</Link>
            {/*)}*/}
        </ul>
        </div>
    );
}

export default Navbar;