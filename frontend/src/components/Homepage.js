import React from 'react';
import '../css/Homepage.css';
import Maintenance from "./Maintenance";

class App extends React.Component {
  render() {
    return (
        <div className="homepage">
            <div class="background"></div>
            <Maintenance/>
        </div>
    );
  }
}

export default App;
