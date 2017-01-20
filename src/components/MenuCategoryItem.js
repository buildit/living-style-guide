import React, { Component } from 'react';
import PlaceholderImage from './PlaceholderImage';

const MenuCategoryItem = ({ name, reverseType = false }) => (
    <div className={`menu-category-item ${reverseType ? 'reverse-type' : ''}`}>
      <h2 className="category-name">{name}</h2>
      <PlaceholderImage width={100} height={60} />
    </div>
);

export default MenuCategoryItem;
