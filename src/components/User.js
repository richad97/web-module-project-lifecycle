import React from "react";

export default class User extends React.Component {
  render() {
    return (
      <>
        <p>Name: {this.props.userData["name"]}</p>
        <img
          width="300"
          height="300"
          src={this.props.userData["avatar_url"]}
        ></img>
        <p>Total Followers: {this.props.userData["followers"]}</p>
        <p>Total Repos: {this.props.userData["public_repos"]}</p>
      </>
    );
  }
}
