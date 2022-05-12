import "./featured.scss";
import React from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Tv Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FiThxmbm_the-matrix-matrix-movie-logo-png-transparent-png%2F&psig=AOvVaw08oDJvd1GpHk3fKZfTWTri&ust=1652452117344000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLCR9f6V2vcCFQAAAAAdAAAAABAD"
          alt=""
        />
        <span className="description">
          To delete local storage sessions, use the removeItem() method. When
          passed a key name, the removeItem() method removes that key from the
          storage if it exists. If there is no item associated with the given
          key, this method will do nothing.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
