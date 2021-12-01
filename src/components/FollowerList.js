import React from "react";
import Follower from "./Follower";

export default class FollowerList extends React.Component {
  render() {
    return this.props.userFollowers.map((follower) => {
      return (
        <Follower
          handleClick={this.props.handleClick}
          key={follower.id}
          follower={follower}
        />
      );
    });
  }
}
