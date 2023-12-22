import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MovieSection.css";

import useFetch from "../../Hooks/useFetch";

const MovieSection = () => {
  // const [background, setBackground] = useState("");
  // const [query, setQuery] = useState("");

  // const { url } = useSelector((state) => state.home);
  // const { data, loading } = useFetch("/movie/upcoming");
  // useEffect(() => {
  //   const bg =
  //     url.backdrop +
  //     data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
  //   setBackground(bg);
  // }, [data]);

  return <div className="MovieSection"></div>;
};

export default MovieSection;
