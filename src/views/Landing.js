import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import PlaceholderImage from '../components/PlaceholderImage';

export default class Landing extends Component {
  render() {
    return(
      <div className="view landing">
        <h1>Living style guide place holder</h1>
      </div>
    )
  }
};
