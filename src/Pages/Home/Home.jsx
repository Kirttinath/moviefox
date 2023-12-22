import "./Home.scss";
import profile from "../../assets/k.png";
import discover_icon from "../../assets/search.png";
import playlist_icon from "../../assets/playlist.png";
import movie_icon from "../../assets/movie.png";
import tv_icon from "../../assets/tv.png";
import list_icon from "../../assets/list.png";
import watch_icon from "../../assets/watch.png";
import recomend_icon from "../../assets/recomend.png";
import setting_icon from "../../assets/setting.png";
import logout_icon from "../../assets/logout.png";

const Home = () => {
  return (
    <div className="sideview">
      <div className="autogroup">
        <img className="mask" src={profile} />
        <p className="prf">Kirttinath Ojha</p>
        <img className="vector1" src="" />
        <div className="groupbox1">
          <div className="groupelements1">
            <img className="ds" src={discover_icon} />
            <img className="pl" src={playlist_icon} />
            <img className="mv" src={movie_icon} />
            <img className="tv" src={tv_icon} />
            <img className="myli" src={list_icon} />
          </div>
          <p className="grpelemnames1">
            <span className="discover">
              Discover
              <br />
            </span>
            <span className="playlist">
              Playlist
              <br />
            </span>
            <span className="movie">
              Movie
              <br />
              TV Shows
              <br />
              My List
            </span>
          </p>
          <div className="rectangle1"></div>
        </div>
        <img className="vector2" src="" />
        <div className="groupbox2">
          <div className="groupelements2">
            <img className="wc" src={watch_icon} />
            <img className="rmd" src={recomend_icon} />
          </div>
          <p className="watch">
            Watch Later
            <br />
            Recomended
          </p>
        </div>
        <img className="vector3" src="" />
        <div className="auto-group-ycwr-wdP" id="A21z5c2dnAzkEFtU6AYCWR">
          <div className="auto-group-fjft-s1F" id="A21zCBg1CRbg6sZk29fjFT">
            <img
              className="vector-Nih"
              src="/api/prod-ap-southeast-1-first-cluster/projects/8a..."
              id="40:103"
            />
            <img
              className="vector-vER"
              src="/api/prod-ap-southeast-1-first-cluster/projects/8a..."
              id="40:104"
            />
          </div>
          <p className="settings-logout-3pq" id="40:14">
            Settings
            <br />
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
