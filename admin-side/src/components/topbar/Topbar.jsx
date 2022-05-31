import "./topbar.css";
import { Link, useHistory } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";
export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HZ Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/* <Link to="/login"> */}
          <img
            src={
              localStorage?.getItem("user")
                ? JSON.parse(localStorage.getItem("user"))?.profilePic
                : ""
            }
            alt=""
            className="topAvatar"
            onClick={handleLogout}
          />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
