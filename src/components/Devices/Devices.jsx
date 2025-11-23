import "./style.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Device from "../Device/Device.jsx";
import {useNavigate} from "react-router";

export default function Devices() {

    const navigate = useNavigate();

    const [devices, setDevices] = useState();

    useEffect(() => {
        async function fetchDevices() {
            axios.get("http://localhost:3000/device/", { headers: { Authorization: "Bearer " + localStorage.getItem("token")}})
                .then((response) => {
                    setDevices(response.data);
                });
        }
        fetchDevices();
    })

    function handleNewDevice() {
        navigate("/device/new");
    }

    return (
        <>
        <div className="devices-container">
            {devices ? (
                devices.map((entry) =>
                    <Device name={entry.name} active={entry.active} image={entry.image}/>
                )
            ) : (<></>)}
            <Device name="nesto" image="nesto" active="true"/>
            <Device name="nesto" image="nesto" active="true"/>
            <Device name="nesto" image="nesto" active="true"/>
            <Device name="nesto" image="nesto" active="true"/>
        </div>
            {/*<div className="new-device" onClick={handleNewDevice}>New Device</div>*/}
        </>
    );
 }