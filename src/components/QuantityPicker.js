import React, { Component } from 'react';

class QuantityPicker extends Component {
  render() {
    return(
      <div className="quantity-picker">
        <span className="minus">-</span>
        <span className="quantity">{this.props.quantity}</span>
        <span className="plus">+</span>
      </div>
    )
  }
};

export default QuantityPicker;
