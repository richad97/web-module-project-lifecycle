import React from "react";
import axios from "axios";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    userData: {},
    userFollowers: [],
    clickedUser: "Ryan-E-Mark",
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.clickedUser}`)
      .then((resp) => {
        let data = resp.data;
        this.setState({
          ...this.state,
          userData: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://api.github.com/users/${this.state.clickedUser}/followers`)
      .then((resp) => {
        let data = resp.data;
        this.setState({
          ...this.state,
          userFollowers: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clickedUser !== this.state.clickedUser) {
      console.log("clickedUser state changed");
      axios
        .get(`https://api.github.com/users/${this.state.clickedUser}`)
        .then((resp) => {
          let data = resp.data;
          this.setState({
            ...this.state,
            userData: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`https://api.github.com/users/${this.state.clickedUser}/followers`)
        .then((resp) => {
          let data = resp.data;
          this.setState({
            ...this.state,
            userFollowers: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchedUser !== this.state.searchedUser) {
  //     console.log("clickedUser state changed");
  //   }
  // }

  handleClick = (login) => {
    console.log(login);

    this.setState({
      ...this.state,
      clickedUser: login,
    });
  };

  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <User userData={this.state.userData} />

        <h2>Followers: </h2>
        <FollowerList
          handleClick={this.handleClick}
          userFollowers={this.state.userFollowers}
        />
      </div>
    );
  }
}

export default App;
