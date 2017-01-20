import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import PlaceholderImage from '../components/PlaceholderImage';

class Location extends Component {
  render() {
    return(
      <div className="view location">
        <TacoCrumbs viewName="Choose a restaurant" />
        <div className="map-type-picker">
          <span className="map-type active">Map</span>
          <span className="map-type">List</span>
        </div>
        <PlaceholderImage width={500} height={300} label="Map centered on current location"/>
        <div className="button">
          <Link to="/menu">Menu</Link>
        </div>
        <Nav />
      </div>
    )
  }
};

export default Location;
