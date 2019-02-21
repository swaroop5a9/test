import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        "Example 1",
        "Example 2",
        "Example 3",
        "Example 4",
        "Example 5",
        "Example 6",
        "Example 7"
      ]
    };
  }
  navigateToHome = () => {
    this.props.history.push("/");
  };

  deleteItem = index => {
    let items = [...this.state.listItems];
    items.splice(index, 1);
    this.setState({
      listItems: items
    });
  };

  render() {
    return (
      <div>
        {/* <Card> */}
        <h1>Home</h1>
        <button onClick={this.navigateToHome}>Back to home page</button>
        <ul>
          {this.state.listItems.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <button onClick={() => this.deleteItem(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Home);
