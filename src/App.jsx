import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx"
import Devices from "./components/Devices/Devices.jsx";
import Forum from "./components/Forum/Forum.jsx";
import Discussion from "./components/Forum/Discussion/Discussion.jsx";
import New from "./components/Forum/New/New.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <h1 className="splash-title">Welcome to Remohoe</h1>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/forum" element={<Forum/>}/>
                    <Route path="/devices" element={<Devices/>}/>
                    <Route path="/register" element={<Signup/>}/>
                    <Route path="/forum/new" element={<New/>}/>
                    <Route path="/discussion/:threadId" element={<Discussion/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
