import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        src={movie.video}
        autoPlay
        onProgress
        controls
      ></video>
    </div>
  );
}
