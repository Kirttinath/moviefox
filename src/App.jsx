import React, { useState, useEffect } from "react";
// import Hero from './components/Hero/Hero'
// import DashBoard from './components/Dashboard/DashBoard'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
// import Playlist from "./Pages/Playlist/Playlist";
// import Movies from "./Pages/Movies/Movies";
// import TvShows from "./Pages/TvShows/TvShows";
// import MyList from "./Pages/MyList/MyList";
// import WatchLater from "./Pages/WatchLater/WatchLater";
// import Settings from "./Pages/Settings/Settings";
// import Recommended from "./Pages/Recommended/Recommended";
// import Logout from "./Pages/Logout/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/playlist" element={<Playlist />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/TvShows" element={<TvShows />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="/WatchLater" element={<WatchLater />} />
        <Route path="/Recommended" element={<Recommended />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
