import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";
import "./ListItem.scss";
import { Link } from "react-router-dom";
export default function ListItem({ index, item }) {
  const [ishoverd, setIsHovered] = React.useState(false);
  const [movie, setMovie] = React.useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("movie/find/" + item, {
          headers: {
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODI0NDRkYzM0MzE2ZmM4M2E2MWY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg3MTk5NywiZXhwIjoxNjUzMzAzOTk3fQ.lv6YqUY2uBsI-ewZeTsKAG2XqwzeAmcu4cMu5uK1AL0",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listitem"
        style={{ left: ishoverd && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {ishoverd && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />

            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration ? movie.duration : "--"}</span>
                <span className="limit">+{movie.limit} </span>
                <span>{movie.year} </span>
              </div>
              <div className="description">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
