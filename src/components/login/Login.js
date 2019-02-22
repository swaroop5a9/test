import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        userName: "",
        password: ""
      },
      errorMessage: "",
      isError: false
    };
  }

  handleChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [eve.target.name]: eve.target.value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.login.userName === "" || this.state.login.password === "") {
      this.setState({
        isError: true
      });
    } else {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(
        this.state.login.password
      );
      if (this.state.login.password.length > 8 && regex === true) {
        this.setState(
          {
            isError: false
          },
          this.props.history.push("/home")
        );
      } else {
        this.setState({
          isError: true,
          errorMessage:
            "Password Should contain atleast One Number, One UpperCase and a lowercase letter"
        });
      }
    }
  };

  render() {
    return (
      <form style={styles.loginForm} onSubmit={this.handleSubmit}>
        <div style={styles.inputFiledGroup}>
          <input
            required
            type="text"
            name="userName"
            placeholder="Username"
            style={styles.inputFiled}
            value={this.state.login.userName}
            onChange={this.handleChange}
          />
          {this.state.isError && this.state.login.userName === "" && (
            <p style={styles.errorText}>Please enter Username</p>
          )}
        </div>
        <div style={styles.inputFiledGroup}>
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            style={styles.inputFiled}
            value={this.state.login.password}
            onChange={this.handleChange}
          />
          {this.state.isError && this.state.login.password === "" && (
            <p style={styles.errorText}>Please enter password</p>
          )}
        </div>
        {this.state.isError && this.state.errorMessage !== "" && (
          <p style={styles.errorText}>{this.state.errorMessage}</p>
        )}
        <div>
          <button style={styles.loginButton} type="submit">
            Login
          </button>
        </div>
      </form>
    );
  }
}

const styles = {
  loginForm: {
    padding: 16
  },
  inputFiledGroup: {
    margin: "16px 0"
  },
  inputFiled: {
    width: "100%",
    border: "none",
    borderBottom: "1px solid #ddd",
    padding: "8px 12px",
    boxSizing: "border-box"
  },
  loginButton: {
    marginTop: "32px",
    background: "#2196F3",
    border: "1px solid #2196F3",
    padding: "12px",
    width: "100%",
    color: "#fff"
  },
  errorText: {
    color: "red",
    fontSize: 12
  }
};

export default withRouter(Login);
