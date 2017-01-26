import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import designData from '../design-data';
import Component from './Component';

const components = designData.map((component, index) => (
  <Component
    key={`component-${index}`}
    name={component.name}
    component={component.component}
    codeSnippet={component.codeSnippet}
  />
))

export default class Main extends React.Component {
  render() {
    return(
      <div className="view landing">
        <h1>Style Guide</h1>
        <div className="iphone6-container">
          { components }
        </div>
      </div>
    )
  }
};
