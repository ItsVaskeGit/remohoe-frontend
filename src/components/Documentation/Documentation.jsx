import "./style.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {marked} from "marked";

export default function Documentation() {

    const [readme, setReadme] = useState("");


    useEffect(() => {
        async function fetchReadme() {
            axios.get("https://raw.githubusercontent.com/ItsVaskeGit/remohoe-frontend/refs/heads/main/README.md")
                .then((response) => {
                    setReadme(marked.parse(response.data));
                });
        }

        fetchReadme();
    });

    return (
        <div className="readme-container">
            <div className="readme" dangerouslySetInnerHTML={{__html: readme}}/>
        </div>
    );
}