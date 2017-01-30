import React from 'react'
import MenuCategoryList from 'taco-components/components/3-Organisms/MenuCategoryList';

const menuCategoryListData = {
    name: "MenuCategoryList",
    component: (
      <MenuCategoryList />
    ),
    type: "",
    description: "Displays a list of food categories.",
    reactComponent: "MenuCategoryList",
    reactComponentLibrary: "TacoComponents",
    context: {
      children: ["MenuCategoryItem"],
      parents: []
    },
    style: {}
  }

export default menuCategoryListData
