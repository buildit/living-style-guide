import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';

export default class Main extends Component {
  render() {
    return(
      <div className="view landing">
        <h1>Style Guide</h1>
        <h2>MenuItem</h2>
        <div className="iphone6-container">
          <MenuItem
            name="Taco yum"
            price="1.99"
          />
        </div>
      </div>
    )
  }
};
