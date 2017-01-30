import React from 'react'
import menuCategoryItemData from './menu-category-item'
import menuCategoryListData from './menu-category-list'
import menuItemListData from './menu-item-list'
import menuItemData from './menu-item'
import navData from './nav'
import placeHolderImageData from './placeholder-image'
import quantityPickerData from './quantity-picker'
import tacoCrumbsData from './taco-crumbs'
import viewTitleData from './view-title'

const components = [
  navData,
  tacoCrumbsData, // not present in taco-style
  viewTitleData, // okay
  menuCategoryItemData, // not present
  menuCategoryListData, // class name had typo in taco-style. Fixed, check if it worked.
  quantityPickerData, // okay
  menuItemData, // Some styles coming through. Not all.
  menuItemListData, // not present
  placeHolderImageData, // not present
  // button, // Not yet added to taco-components library
]

export default components
