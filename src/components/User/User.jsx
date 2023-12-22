import React from "react";
import "./User.css";
import user from "../../assets/k.png";

export default function User() {
  return (
    <div className="User">
      <img src={user} alt="" />
      <h2>Kirttinath Ojha</h2>
    </div>
  );
}
