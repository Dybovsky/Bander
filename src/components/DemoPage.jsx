import React, { useState, useEffect } from "react";
import DemoSongs from "./DemoSongs";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDemos } from "../firebase/firebase.api";

const DemoPage = () => {
  const [artistAvatar, setArtistAvatar] = useState(null);
  const [artistInfos, setArtistInfos] = useState(null);

  useEffect(() => {
    const artistAva = "Artist Avatar"; // get artist Avatar for DB
    const artistInfo = "Artist Infos"; // get artist Infos for DB
    setArtistAvatar(artistAva);
    setArtistInfos(artistInfo);
    getDemos();
  }, []);

  return (
    <>
      <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
        <div>Demo Page</div>
        <span className="demoPageBaseInfo">
          {/* Get the Artist avatar and contact info from DB */}
          {artistAvatar && (
            <img
              src="https://cdn0.iconfinder.com/data/icons/people-jobs-set-2/128/jobs-10-512.png"
              alt="Artist Avatar"
            />
          )}
          {artistInfos && (
            <Card>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Phone Number : </li>
                <li className="list-group-item">E-mail : </li>
                <li className="list-group-item">Instagram : </li>
              </ul>
            </Card>
          )}
        </span>
        <div>
          <DemoSongs />
        </div>
      </div>
    </>
  );
};

export default DemoPage;
