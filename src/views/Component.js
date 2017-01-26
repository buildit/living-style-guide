import React from 'react'
import Code from './Code.js'

const Component = React.createClass({
  getInitialState: function() {
      return null
  },

  render: function() {
    const {
      name,
      component,
      code,
      codeSnippet,
    } = this.props;

    return (
      <div className="component">
        <h2 className="component-piece">{name}</h2>
        <div className="component-piece">
          { component }
        </div>
        <div className="component-piece">
          <Code codeSnippet={codeSnippet} />
        </div>
      </div>
    )
  }
})

export default Component
