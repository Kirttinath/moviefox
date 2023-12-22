import React from "react";
import "./NavBar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FiSun } from "react-icons/fi";
import { useState } from "react";

export default function NavBar() {
  const [val, setval] = useState("");
  const [visible, setvisible] = useState(false);

  const toogle = () => {
    setvisible(!visible);
  };
  const update = (e) => {
    setval(e.target.value);
  };
  const clear = () => {
    setval("");
  };

  return (
    <div className="NavBar">
      <div className="left">
        {visible ? (
          <>
            <FaMagnifyingGlass className="searchicon" />
            <div className="SearchBar">
              <input
                type="text"
                value={val}
                onChange={update}
                placeholder="Search Movie or TV Shows"
              />
            </div>
          </>
        ) : (
          <FaMagnifyingGlass className="searchicon" onClick={toogle} />
        )}
      </div>
    </div>
  );
}
