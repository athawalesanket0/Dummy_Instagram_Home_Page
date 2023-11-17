import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>U</Avatar>
          </span>
          <div className="username__info">
            <span className="username">username525</span>
            <span className="relation">User Name</span>
          </div>
        </div>
        <button className="follow__button">Switch</button>
      </div>
      <div className="displaytitle">
        <div className="suggestions__title">Suggestions for you</div>
        <div className="suggestions__title1">See All</div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Adam</span>
              <span className="relation">Follows you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Bob</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Charlie</span>
              <span className="relation">Follows you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Derek</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
