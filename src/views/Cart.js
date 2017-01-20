import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import MenuCategoryList from '../components/MenuCategoryList';
import MenuItemList from '../components/MenuItemList';
import ViewTitle from '../components/ViewTitle';

class Cart extends Component {
  render() {
    return(
      <div className="view menu">
        <ViewTitle title="Cart" />
        <div>hey your stuff</div>
        <Nav />
      </div>
    )
  }
};

export default Cart;
