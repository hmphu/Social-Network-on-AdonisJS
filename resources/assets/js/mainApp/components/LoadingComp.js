import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LoadingComp extends Component {
  //Export
  constructor() {
    super();
    this.state = {
      dropdown: false
    };
  }
  //on attribue la classe loading pour initialiser avec le reste sur l'index
  render() {
    return (
      <section id="loading-comp" className={(this.props.initialData =='loading') ? 'active'
    : ''}>
      <div className="loading-icon">
        <div className="lds-css ng-scope"style={{ width: "200px", height: "200px" }}>
          <div style={{ width: "100%", height: "100%" }} className="lds-eclipse">
            <div />
          </div>
        </div>
      </div>
      <div className="loading-text">
      chargement..
      </div>
      </section>
    );
  }
}
