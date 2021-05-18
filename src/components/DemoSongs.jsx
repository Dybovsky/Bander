import React, { useState, useEffect } from "react"; 
import ReactPlayer from 'react-player';

const DemoSongs = () => {

    const isTheArtist = true
    const [videoFilePath, setVideoFilePath] = useState(null);
    const [displaySongs, setDisplaySongs] = useState(null);

    useEffect(() => {
        const songsForDB = 0 // get songs for DB
        setDisplaySongs(songsForDB)
    }, []);

    const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    {/* Take next line out when connect it to the DB */}
    console.log(URL.createObjectURL(event.target.files[0]));
    // send song URL to the DB
    // window.location.reload();
    };

    return (
        <div className="test">
            <div className="demoPageSongsInfo">
                {isTheArtist && <input type="file" onChange={handleVideoUpload}/>}
                {/* Take next line out when connect it to the DB */}
                <div className='player-wrapper' >
                    <ReactPlayer className='react-player' url={videoFilePath} controls={true} width='30%'height='100%'/> 
                </div>
                {displaySongs && <ol>
                {displaySongs.songs.map((info) => <div className='player-wrapper' ><ReactPlayer className='react-player' key={info.id} url={info.songUrl} controls={true} width='30%'height='100%'/></div>)}
                </ol>}
            </div>
        </div>
    );
};

export default DemoSongs;