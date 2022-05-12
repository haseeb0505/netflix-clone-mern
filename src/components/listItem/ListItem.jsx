import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./ListItem.scss";
export default function ListItem() {
  return (
    <div className="listitem">
      <img
        src="https://i.pinimg.com/originals/1d/22/4a/1d224aedc4dccf8d7f98c1825557e706.jpg"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 minutes </span>
          <span className="limit">16+ </span>
          <span>2021 </span>
        </div>
        <div className="description">
          To celebrate and thank the fans who have invested so deeply in the
          MCU, the filmmakers and talent from Marvel Studios' "Avengers:
          Endgame" will visit nine U.S.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
}
