import React, { useState } from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__menu">
        <MenuSharpIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt=""
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__search">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          {" "}
          {/**dynamic url */}
          <SearchIcon className="header__inputbutton" />
        </Link>
      </div>
      <div className="header__utilities">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="user"
          src="https://ae01.alicdn.com/kf/HTB1QvgYaiQnBKNjSZFmq6AApVXaM/4-sztuk-partia-breaking-bad-Heisenberg-naklejki-fajne-m-skie-winylowa-tablica-na-cienna-dla-Apple.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
