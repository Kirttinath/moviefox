import "./Home.scss";
import profile from "../../assets/k.png";
import discover_icon from "../../assets/search.png";
import playlist_icon from "../../assets/playlist.png";
import movie_icon from "../../assets/movie.png";
import tv_icon from "../../assets/tv.png";
import list_icon from "../../assets/list.png";
// import watch_icon from "../../assets/watch.png";
// import recomend_icon from "../../assets/recomend.png";
// import setting_icon from "../../assets/setting.png";
// import logout_icon from "../../assets/logout.png";

const Home = () => {
  return (
    <div className="home">
      <div className="group">
        <img className="mask" src={profile} alt="" />
        <p className="kojha">Kirttinath Ojha</p>
        <hr className="vector1" />
        <div className="autogroup">
          <div className="autogroupimg">
            <img src={discover_icon} alt="" />
            <img src={playlist_icon} alt="" />
            <img src={movie_icon} alt="" />
            <img src={tv_icon} alt="" />
            <img src={list_icon} alt="" />
          </div>
          <p className="discoverelements">
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
            </span>
            <span className="tv">
              TV Shows
              <br />
            </span>
            <span className="mylist">
              My List
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
