import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";

import Dropdown from "../dropdown/Dropdown";
import UserDropdown from "../dropdown/UserDropdown";

import { LiaSearchSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";
import NotifDrop from "../dropdown/NotifDrop";

const Navar = () => {
  const { currentUser, setChatBoxStatus } = useContext(AuthContext);

  const [showUsersetting, setUserSetting] = useState(false);
  const [showMessageBox, setMessageBox] = useState(false);
  const [showNotifBox, setNotifBox] = useState(false);

  const handleMsg = () => {
    setMessageBox(!showMessageBox);
    setNotifBox(false);
    setChatBoxStatus(!showMessageBox);
  };
  const handleNoti = () => {
    setNotifBox(!showNotifBox);
    setMessageBox(false);
  };

  const closeAll = () => {
    setMessageBox(false);
    setNotifBox(false);
  };

  const handleProfile = () => {
    setUserSetting(!showUsersetting);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <Link to="/" onClick={closeAll} style={{ textDecoration: "none" }}>
            <span className="logo">Sheep</span>
          </Link>
        </div>

        <div className="nav-center"></div>

        <div className="nav-right">
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." />
            <LiaSearchSolid className="searcIcon" />
          </div>

          <>
            <div
              className={`nav-mail-wrapper ${showMessageBox ? "activee" : ""}`}
              onClick={handleMsg}
            >
              <img src="../assets/mail.png" alt="" className="nav_iconn" />
              <span className="dot_1">4</span>
            </div>
            {showMessageBox && (
              <Dropdown
                chatStatus={showMessageBox}
                setMessageBox={setMessageBox}
              />
            )}
          </>

          <>
            <div
              className={`nav-bell-wrapper ${showNotifBox ? "activee" : ""}`}
              onClick={handleNoti}
            >
              <img src="../assets/bell.png" alt="" className="nav_iconn" />
              <span className="dot_2">2</span>
            </div>
            {showNotifBox && <NotifDrop setNotifBox={setNotifBox} />}
          </>

          <>
            <div className="nav_current_user" onClick={handleProfile}>
              <img
                src={
                  currentUser.profilePic === ""
                    ? "../assets/cvp.jpg"
                    : "../upload/" + currentUser.profilePic
                }
                alt=""
              />
              <span className={`nav_user ${showUsersetting ? "activee" : ""}`}>
                {currentUser.name.split(" ")[0]}
              </span>
            </div>

            {showUsersetting && <UserDropdown />}
          </>
        </div>
      </div>
    </>
  );
};

export default Navar;
