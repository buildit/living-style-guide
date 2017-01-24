import React, { Component } from 'react';
import PlaceholderImage from './PlaceholderImage';
import QuantityPicker from './QuantityPicker';

const MenuItem = ({ name, price, quantity = 0 }) => (
    <div className="menu-item">
      <PlaceholderImage width={172} height={172} />
      <div className="info">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
      </div>
      <QuantityPicker quantity={6} />
    </div>
);

export default MenuItem;
