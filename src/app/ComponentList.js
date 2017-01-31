import React from 'react';
import Component from './Component';

const ComponentList = ({designData, filterByApproved}) => (
  <div className="component-list">
    {
      designData
      .filter(component => component.approved)
      .map((component, index) => (
        <Component
          key={`component-${index}`}
          name={component.name}
          component={component.component}
          codeSnippet={component.codeSnippet}
          description={component.description}
          children={component.context.children}
          parents={component.context.parents}
        />))
    }
  </div>
)

export default ComponentList
