import React, { Component } from 'react';
import MenuItem from './MenuItem';

// TODO: Provide via Redux store, via network request
const fakeMenu = [
  {
    name: "Taco Supreme",
    price: 1,
  },
  {
    name: "Nacho Cheese Doritos Locos Tacos Supreme",
    price: 2.99,
  },
  {
    name: "Supreme Dream Chalupa Extreme",
    price: 1.99,
  },
  {
    name: "Extra Chalupito Mini Bigdog",
    price: 1.99,
  },
]

const formatPrice = price => `$${price.toFixed(2)}`

class MenuItemList extends Component {
  render() {
    return(
      <div className="menu-item-list">
        {fakeMenu.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={formatPrice(item.price)}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    )
  }
};

export default MenuItemList;
