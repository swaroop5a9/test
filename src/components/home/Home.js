import React from "react";
import { withRouter } from "react-router-dom";
import Diamond from "mdi-material-ui/Diamond";
import TrashCanOutline from "mdi-material-ui/TrashCanOutline";

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
        <ul style={styles.ul}>
          {this.state.listItems.map((item, index) => (
            <li key={index} style={styles.li}>
              <div style={styles.flex}>
                <Diamond style={styles.leftIcon} />
                <span>{item}</span>
              </div>
              <TrashCanOutline
                style={styles.deleteIcon}
                onClick={() => this.deleteItem(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  ul: {
    listStyle: "none",
    paddingLeft: 0
  },
  li: {
    padding: 16,
    borderBottom: "2px solid #eceaea",
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex"
  },
  leftIcon: {
    marginRight: 12
  },
  deleteIcon: {
    cursor: "pointer",
    color: "red"
  }
};

export default withRouter(Home);
