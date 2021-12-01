import React from "react";

export default class Follower extends React.Component {
  render() {
    return (
      <span
        onClick={() => {
          this.props.handleClick(this.props.follower["login"]);
        }}
      >
        <img width="130" height="130" src={this.props.follower["avatar_url"]} />
        <p>{this.props.follower["login"]}</p>
      </span>
    );
  }
}
