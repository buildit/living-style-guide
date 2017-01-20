import React, { Component } from 'react';
import MenuCategoryItem from './MenuCategoryItem';

// TODO: Provide via Redux store, via network request
const fakeCategories = [
  {
    name: "Popular",
    reverseType: true,
  },
  {
    name: "Tacos",
    reverseType: true,
  },
  {
    name: "Burritos",
  },
  {
    name: "Drinks",
    reverseType: true,
  },
]

class MenuCategoryList extends Component {
  render() {
    return(
      <div className="menu-category-list">
        {fakeCategories.map((category, index) => (
          <MenuCategoryItem
            key={index}
            name={category.name}
            reverseType={category.reverseType}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    )
  }
};

export default MenuCategoryList;
