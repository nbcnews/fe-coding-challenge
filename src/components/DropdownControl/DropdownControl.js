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
    // TODO B: Track current selected option
    selectedOption: null, // default should be twoUp/2-Up
  };

  // TODO A: add select options and handle selection
  dropdown = () => {
    const onChange = (e) => {
      this.setState({
        selectedOption: null,
      });
    };

    return (
      <div className="dropdown position-relative">
        <select value={null} onChange={onChange}>
          {/* <option value={null}>{null}</option> */}
        </select>
        <div className="descend">
          <img className="icon" src={descendIcon} alt="" />
        </div>
      </div>
    );
  };

  // TODO C: handle left arrow click to navigate options
  previous = () => {
    // previous option
  };

  leftArrow = () => {
    return (
      <button type="button" className="btn btn-light ml-2" onClick={this.previous}>
        <img className="icon" src={leftIcon} alt="" />
      </button>
    );
  };

  // TODO D: handle right arrow click to navigate options
  next = () => {
    // next option
  };

  rightArrow = () => {
    return (
      <button type="button" className="btn btn-light ml-2" onClick={this.next}>
        <img className="icon" src={rightIcon} alt="" />
      </button>
    );
  };

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="flex-grow">
          {this.dropdown()}
        </div>
        <div>
          {this.leftArrow()}
          {this.rightArrow()}
        </div>
      </div>
    );
  }
}

export default DropdownControl;
