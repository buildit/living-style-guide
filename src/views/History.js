import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';

class History extends Component {
  render() {
    return(
      <div className="view history">
        <ViewTitle title="History" />
        <div>hey your recent orders</div>
        <Nav />
      </div>
    )
  }
};

export default History;
