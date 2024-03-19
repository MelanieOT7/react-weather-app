import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by
      <a href="https://github.com/MelanieOT7" target="_blank" rel="noreferrer">
        {" "}
        Nontando Ngcobo
      </a>{" "}
      , is on
      <a
        href="https://github.com/MelanieOT7/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Github
      </a>
      , hosted on
      <a
        href="https://dainty-axolotl-1d2424.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Netlify
      </a>
    </div>
  );
}
