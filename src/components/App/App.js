import React, { Component } from 'react';
import DropdownControl from 'components/DropdownControl';
import Header from 'components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <form className="mt-4">
            <div className="form-group">
              <label>Select a package type</label>
              <DropdownControl />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
