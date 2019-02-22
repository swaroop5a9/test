import React from "react";
import Login from "../components/login/Login";

class LoginPage extends React.Component {
  render() {
    return (
      <div style={styles.mainEntry}>
        <header style={styles.header}>
          <h1 style={styles.title}>Welcome</h1>
        </header>
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

const styles = {
  mainEntry: {
    maxWidth: 960,
    margin: "0 auto",
    backgroundColor: "f1f1f1",
    height: "100vh"
  },
  header: {
    padding: 16,
    textAlign: "center",
    background: "#2196F3"
  },
  title: {
    margin: 0,
    color: "#fff",
    fontSize: 20
  }
};

export default LoginPage;
