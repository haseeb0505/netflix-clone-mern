import {
  CalendarToday,
  Contactless,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";
import { updateUser } from "../../context/userContext/apiCalls";

import "./user.css";
import { useContext, useState } from "react";

export default function User() {
  const location = useLocation();
  let user = location.state.user;
  const { dispatch } = useContext(UserContext);
  const history = useHistory();

  const [updatedUser, setUpdatedUser] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user._id, updatedUser, dispatch);
    history.push("/users");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.profilePic} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user._id}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user.contactNo ? user.contactNo : "+1 123 456 57"}
              </span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <Contactless className="userShowIcon" />
              <span className="userShowInfoTitle">{user.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  name="contactNo"
                  placeholder={
                    user.contactNo ? user.contactNo : "+1 123 456 57"
                  }
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>isAdmin</label>
                <span
                  type="boolean"
                  name="isAdmin"
                  className="userUpdateInput"
                  style={{ color: "gray" }}
                >
                  {user.isAdmin.toString()}
                </span>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={user.profilePic} alt="" />
              </div>
              <button
                className="userUpdateButton"
                type="submit"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
