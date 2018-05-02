import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SearchHeader extends Component { //Export
  constructor() {
    super();
    this.state = {
      name: "Sean"
    };
  }
  clickedBtn = () => {
    console.log("purple swag");
  };
  render() {
    return (
      <div className="search-header">
        <div className="search-box">
          <input type="text" name defaultValue />
          <div className="icon-section">
            <div className="noti">
              <i className="fas fa-bell" />
              <div className="noti-number">3</div>
            </div>
            <div className="comment">
              <i className="fas fa-comment" />
              <div className="noti-number">3</div>
            </div>
            <div className="user">
              <i className="fas fa-user" />
              <div className="noti-number active">33</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
