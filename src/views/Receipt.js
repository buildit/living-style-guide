import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';

class Receipt extends Component {
  render() {
    return(
      <div className="view receipt">
        <ViewTitle title="Receipt" />
        <div>hey your receipt</div>
        <Nav />
      </div>
    )
  }
};

export default Receipt;
