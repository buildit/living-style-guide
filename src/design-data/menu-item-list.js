import React from 'react'
import MenuItemList from 'taco-components/components/3-Organisms/MenuItemList';

const menuItemListData = {
    name: "MenuItemList",
    component: (
      <MenuItemList
        item={{
          name: "Stuffed Nachoz",
          price: 3.99,
          imageUrl: ""
        }}
      />
    ),
    type: "",
    description: "Displays a list of MenuItem components.",
    reactComponent: "MenuItemList",
    reactComponentLibrary: "TacoComponents",
    context: {
      children: ["MenuItem"],
      parents: []
    },
    style: {}
  }

export default menuItemListData