import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
        //   selected: [],
      },
      uerror: false,
      perror: false
    };
  }

  handleChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [eve.target.name]: eve.target.value
      }
    }));
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleClick = () => {
    if (this.state.user.username === "" || this.state.user.password === "") {
      if (this.state.user.username === "") {
        this.setState({
          uerror: true
        });
      } else {
        this.setState({
          uerror: false
        });
      }
      if (this.state.user.password === "") {
        this.setState({
          perror: true
        });
      } else {
        this.setState({
          perror: false
        });
      }
    } else {
      var regex = /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        this.state.user.password
      );
      if (this.state.user.password.length > 8 && regex === true) {
        this.props.history.push("/home");
      } else {
        this.setState({
          perror: false
        });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <div>
          <input
            required={true}
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
          />
          {this.state.uerror && <p>Invalid user details</p>}
          <br />
          <br />
          <input
            required={true}
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
          {this.state.perror && <p>Invalid password details</p>}
        </div>
        <br />
        <div>
          <button id="login" name="login" onClick={() => this.handleClick()}>
            Login
          </button>
        </div>

        <br />
      </div>
    );
  }
}

export default withRouter(Login);
