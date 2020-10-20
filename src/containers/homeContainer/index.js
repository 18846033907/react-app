import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <>
        <Link to='/example'>Example</Link>
      </>
    );
  }
}

export default Home;
