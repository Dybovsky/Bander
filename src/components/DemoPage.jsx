import React, { useState, useEffect } from "react"; 
import DemoSongs from "./DemoSongs";

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
                <span>
                    {/* Get the Artist avatar and contact info from DB */}
                    {artistAvatar && <img src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-10-512.png" alt="Artist Avatar" width="250" height="250"/>}
                    {artistInfos && <div>
                        Contact infos
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