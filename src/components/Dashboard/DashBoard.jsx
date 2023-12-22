import React from "react";
import "./DashBoard.css";
import User from "../User/User";
import Links from "../Links/Links";
export default function DashBoard() {
  return (
    <div className="Dash">
      <User />
      <Links />
    </div>
  );
}
