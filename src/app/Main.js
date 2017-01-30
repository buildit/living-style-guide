import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import designData from '../design-data';
import Component from './Component';

const components = designData.map((component, index) => (
  <Component
    key={`component-${index}`}
    name={component.name}
    component={component.component}
    codeSnippet={component.codeSnippet}
    description={component.description}
    children={component.context.children}
    parents={component.context.parents}
  />
))

export default class Main extends React.Component {
  render() {
    return(
      <div className="view landing">
        <header className="style-guide introduction">
          <h1 className="style-guide title">Living Style Guide: Project Taco</h1>
          <p className="style-guide description">An always-up-to-date catalog of the UI components used by Project Taco.</p>
        </header>
        <div className="iphone6-container">
          { components }
        </div>
      </div>
    )
  }
};
