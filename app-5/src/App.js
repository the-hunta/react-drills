import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image url={"http://i.ytimg.com/vi/bsJKpB4unqs/hqdefault.jpg"}/>
      </div>
    );
  }
}

export default App;
