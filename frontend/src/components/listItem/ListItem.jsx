import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./ListItem.scss";
export default function ListItem({ index }) {
  const [ishoverd, setIsHovered] = React.useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listitem"
      style={{ left: ishoverd && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://i.pinimg.com/originals/1d/22/4a/1d224aedc4dccf8d7f98c1825557e706.jpg"
        alt=""
      />
      {ishoverd && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 minutes </span>
              <span className="limit">16+ </span>
              <span>2021 </span>
            </div>
            <div className="description">
              To celebrate and thank the fans who have invested so deeply in the
              MCU, the filmmakers and talent from Marvel Studios'
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
