import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SearchHeader extends Component {
  //Export
  constructor() {
    super();
    this.state = {
      name: "Sean"
    };
  }
  clickedBtn = () => {
    console.log("purple swag");
  };
  showLatestPosts = () => {
    if (this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.map(post => {
        return (
          <div className="update-container">
            <div className="author-info">
              <a className="user-img" />
              <div className="info">
                <a href="#">Sean</a> a partagé une
                <a href="#">publication</a>
              </div>
            </div>
            <div className="media">
              <div
                className="image"
                style={{
                  background:
                    'url("https://images.unsplash.com/photo-1457030642598-b037296c9296?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0cee8af04565ee4de4477cb5dcbabf8&auto=format&fit=crop&w=1350&q=80")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              />
            </div>
            <div className="padding-container">
              <div className="grey-container">
                <div className="update-info">
                  <h3>Comment finir le site en temps et en heure?</h3>
                  <p>
                  {post.content}

                  </p>
                </div>
                <div className="update-stats">
                  <div className="icon-section">
                    <div className="like-circle">
                      <i className="fas fa-thumbs-up" />
                    </div>
                  </div>
                  <div className="other-users">
                    Alexis et 32 autres ont aimés ce post
                  </div>
                  <div className="comments-stats">4 commentaires</div>
                </div>
                <div className="compose-comment">
                  <textarea name="name" rows={8} cols={80} defaultValue={""} />
                  <div className="buttons">
                    <div className="repost-btn">
                      <i className="fas fa-redo" />
                    </div>
                    <div className="like-btn">
                      <i className="fas fa-thumbs-up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return <section id="posts">{this.showLatestPosts()}</section>;
  }
}
