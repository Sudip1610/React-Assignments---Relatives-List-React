import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  list = ["Arnab", "Rajesh", "Vinod"];
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.list.map((names, index) => {
            return <li key={"relativeListItem" + (index + 1)}>{names}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
