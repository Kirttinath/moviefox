import "./Home.scss";
import profile from "../../assets/k.png";
const Home = () => {
  return (
    <div className="home">
      <div className="group">
        <img className="mask" src={profile} alt="" />
        <p className="kojha"></p>
        <img src="" alt="" className="vector1" />
        <div className="autogroup">
          <div className="autogroupimg">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
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
