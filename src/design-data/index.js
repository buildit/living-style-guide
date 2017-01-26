import React from 'react'
import QuantityPicker from '../components/QuantityPicker'
import MenuItem from '../components/MenuItem'

const components = [
  {
    name: "QuantityPicker",
    component: (
      <QuantityPicker
        quantity={1}
      />
    ),
    codeSnippet: `<QuantityPicker

    />`,
  },
  {
    name: "MenuItem",
    component: (
      <MenuItem
        name="Funny Taco Things"
        quantity={1}
        price="2.99"
      />
    ),
    codeSnippet: `<MenuItem

    />`,
  },
]

export default components
