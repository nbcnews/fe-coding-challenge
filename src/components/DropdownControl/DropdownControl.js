import React, { Component } from 'react';
import descendIcon from 'assets/descend.svg';
import leftIcon from 'assets/arrow-left.svg';
import rightIcon from 'assets/arrow-right.svg';
import './DropdownControl.css';

class DropdownControl extends Component {
  state = {
    // Select options
    options: [
      { name: 'oneUp', label: '1-Up' },
      { name: 'twoUp', label: '2-Up' },
      { name: 'threeFeaturedPlusList', label: '3 Featured Plus List' },
      { name: 'threeFeaturedPlusMosaic', label: '3 Featured Plus Mosaic' },
      { name: 'threeFeatured', label: '3 Featured' },
      { name: 'threeUp', label: '3-Up' },
      { name: 'fourUp', label: '4-Up' },
      { name: 'leadRectangle', label: 'Lead Rectangle' },
      { name: 'leadSquare', label: 'Lead Square' },
      { name: 'mosaic', label: 'Mosaic' },
      { name: 'straightUp', label: 'Straight Up' },
      { name: 'video', label: 'Video' },
    ],
  };

  // TODO A: add select options and handle selection
  dropdown = () => (
    <div className="dropdown position-relative">
      <select />
      <div className="descend">
        <img className="icon" src={descendIcon} alt="" />
      </div>
    </div>
  );

  // TODO B: handle arrow clicks to navigate options
  arrow = icon => (
    <button type="button" className="btn btn-light ml-2">
      <img className="icon" src={icon} alt="" />
    </button>
  );

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="flex-grow">
          {this.dropdown()}
        </div>
        <div>
          {this.arrow(leftIcon)}
          {this.arrow(rightIcon)}
        </div>
      </div>
    );
  }
}

export default DropdownControl;
