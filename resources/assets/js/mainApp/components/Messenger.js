import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Messenger extends Component { //Export
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
    <section id="messenger">
      <div className="messenger-header">
        <div className="messenger-icon">
          <i className="fas fa-calendar" />
        </div>
        <div className="title">Calendrier</div>
        <div className="options-icon">
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
    </section>
    )
  }
}
