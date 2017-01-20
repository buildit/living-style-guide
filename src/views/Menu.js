import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';
import MenuItemList from '../components/MenuItemList';
import MenuCategoryList from '../components/MenuCategoryList';

class Menu extends Component {
  render() {
    return(
      <div className="view menu">
        <ViewTitle title="New order" />
        <MenuCategoryList />
        <MenuItemList />
        <Nav />
      </div>
    )
  }
};

export default Menu;
