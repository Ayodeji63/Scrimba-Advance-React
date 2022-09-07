

import React from "react";
import Header from "./Header";
import {UserContextConsumer} from "./userContext";
import "./App.css";

class App extends React.Component {
    state = {
        username: " "
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
  render() {
    return (
          <UserContextConsumer>
            {({username, changeUsername}) => (
      <div>
        <Header />
        <main>
              <p className="main">No new notifications, {username}! 🎉</p>
        </main>

        
        <input
          type="text"
          name="username"
          placeholder="New username"
          value={this.state.username}
          onChange={this.handleChange}
          />
        <button onClick={() => changeUsername(this.state.username)}>Change Username</button>
      </div>
          )}
        </UserContextConsumer>
    );
  }
}

export default App;
