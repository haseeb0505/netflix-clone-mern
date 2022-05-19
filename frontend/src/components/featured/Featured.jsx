import "./featured.scss";
import React, { useEffect } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";

export default function Featured({ type }) {
  const [content, setcontent] = React.useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get("/movie/random", {
          headers: {
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODI0NDRkYzM0MzE2ZmM4M2E2MWY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg3MTk5NywiZXhwIjoxNjUzMzAzOTk3fQ.lv6YqUY2uBsI-ewZeTsKAG2XqwzeAmcu4cMu5uK1AL0",
          },
        });
        console.log(res.data);
        setcontent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, []);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Tv Series"}</span>
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
      <img src={content[0]?.img} alt="" />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="description">{content[0]?.desc}</span>
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
