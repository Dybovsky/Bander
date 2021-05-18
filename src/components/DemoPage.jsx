import React, { useState, useEffect } from "react"; 
import DemoSongs from "./DemoSongs";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const DemoPage = () => {

    const [artistAvatar, setArtistAvatar] = useState(null);
    const [artistInfos, setArtistInfos] = useState(null);

    useEffect(() => {
        const artistAva = "Artist Avatar" // get artist Avatar for DB
        const artistInfo = "Artist Infos" // get artist Infos for DB
        setArtistAvatar(artistAva)
        setArtistInfos(artistInfo)
    }, []);

    return (
        <>
        <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
                <div>Demo Page</div>
                <span className="demoPageBaseInfo">
                    {/* Get the Artist avatar and contact info from DB */}
                    {artistAvatar && <img src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-10-512.png" alt="Artist Avatar"/>}
                    {artistInfos && <div class="card" style={{width: "35rem", height: "45rem"}}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Phone Number : </li>
                            <li class="list-group-item">E-mail : </li>
                            <li class="list-group-item">Instagram : </li>
                        </ul>
                    </div>}
                </span>
                <div>
                    <DemoSongs/>
                </div>
        </div>
        </>
    );
};

export default DemoPage;