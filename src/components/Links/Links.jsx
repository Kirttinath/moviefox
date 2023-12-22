import React from "react";
import "../Dashboard/DashBoard.css";
import "./Links.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgPlayList } from "react-icons/cg";
import { RiMovieLine } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

export default function Links() {
  const navigate = useNavigate();

  return (
    <div className="LinkComponent">
      <div className="Comp1">
        <div className="linkbox">
          <FaMagnifyingGlass className="icons" />
          <Link to="/" className="links">
            Discover
          </Link>
        </div>

        <div className="linkbox">
          <CgPlayList className="icons" />
          <Link to="/playlist" className="links">
            Playlist
          </Link>
        </div>

        <div className="linkbox">
          <RiMovieLine className="icons" />
          <Link to="/movie" className="links">
            Movie
          </Link>
        </div>

        <div className="linkbox">
          <RiComputerLine className="icons" />
          <Link to="/TvShows" className="links">
            TV Shows
          </Link>
        </div>

        <div className="linkbox">
          <FaList className="icons" />
          <Link to="/MyList" className="links">
            My Lists
          </Link>
        </div>
      </div>

      <div className="Comp2">
        <div className="linkbox">
          <MdOutlineWatchLater className="icons" />
          <Link to="/WatchLater" className="links">
            Watch Later
          </Link>
        </div>

        <div className="linkbox">
          <FaRegHeart className="icons" />
          <Link to="/Recommended" className="links">
            Recommended
          </Link>
        </div>
      </div>

      <div className="Comp3">
        <div className="linkbox">
          <MdOutlineSettings className="icons" />

          <Link to="/Settings" className="links">
            Settings
          </Link>
        </div>

        <div className="linkbox">
          <TbLogout className="icons" />

          <Link to="/logout" className="links">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
