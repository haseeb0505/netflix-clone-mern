import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [Newuser, setNewUser] = React.useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`/user?new=true`, {
          headers: {
            token:
              "bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
          },
        });
        setNewUser(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {Newuser.map((item, i) => (
          <li className="widgetSmListItem" key={i}>
            <img
              src={
                item.profilePic ||
                "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{item.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
