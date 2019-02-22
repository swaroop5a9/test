import React from "react";
import Home from "../components/home/Home";
import ChevronLeft from "mdi-material-ui/ChevronLeft";

class HomePage extends React.Component {
  navigateToHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={styles.mainEntry}>
        <header style={styles.header}>
          <ChevronLeft
            onClick={this.navigateToHome}
            style={styles.backButton}
          />
          <h1 style={styles.title}>List View</h1>
        </header>
        <div>
          <Home />
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
    background: "#1565C0",
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  backButton: {
    position: "absolute",
    left: 16,
    color: "#fff",
    fontSize: 26,
    cursor: "pointer"
  },
  title: {
    margin: 0,
    color: "#fff",
    fontSize: 20
  }
};

export default HomePage;
