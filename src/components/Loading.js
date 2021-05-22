import React from "react";
import "../styles/Loading.css";
import Logo from "../assets/simpson-edit.gif";

const Loading = () => {
  return (
    <div className="loading__wrap">
      <img src={Logo} alt="Loading..." className="loading" />
    </div>
  );
};

export default Loading;
