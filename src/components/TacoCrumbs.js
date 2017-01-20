import React from 'react';

const TacoCrumbs = ({ viewName }) => (
  <div className="taco-crumbs">
    <span className="back-icon">back</span>
    <span className="action">{ viewName }</span>
    <span className="cart-icon">cartest</span>
  </div>
)

export default TacoCrumbs;
