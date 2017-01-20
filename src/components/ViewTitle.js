import React from 'react';
import { Link } from 'react-router';

const ViewTitle = ({ title }) => (
  <div className="view-title">
    <h1>{title}</h1>
    <Link to="/cart"><span>Cartest</span></Link>
  </div>
)

export default ViewTitle;
