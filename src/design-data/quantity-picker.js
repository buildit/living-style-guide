import React from 'react'
import QuantityPicker from 'taco-components/components/1-Atoms/QuantityPicker';

const quantityPickerData = {
    name: "QuantityPicker",
    component: (
      <QuantityPicker
        quantity={1}
      />
    ),
    type: "",
    description: "Used in the MenuItem component to add items to an order.",
    reactComponent: "QuantityPicker",
    reactComponentLibrary: "TacoComponents",
    context: {
      children: [],
      parents: ["MenuItem"]
    },
    style: {}
  }

export default quantityPickerData
