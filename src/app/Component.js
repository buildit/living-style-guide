import React from 'react'
import Code from './Code.js'
import jsxToString from 'jsx-to-string'

const formatJSX = component => {
  const codeSnippet = jsxToString(component)
  const codeSnippetElements =
    jsxToString(component)
      .replace(/'/g,'"')
      .match(/(?:[^\s"]+|"[^"]*")+/g)

  const lastLine = codeSnippetElements.pop()
  const codeSnippetFormatted = codeSnippetElements.join('\n  ') + '\n' + lastLine
  return codeSnippetFormatted
}

const Component = React.createClass({
  getInitialState: function() {
      return null
  },

  render: function() {
    const {
      name,
      component,
      code,
      description,
      children,
      parents,
    } = this.props;

    const codeSnippet = formatJSX(component)

    return (
      <div className="component">
        <h2 className="component-piece">{name}</h2>
        <div className="component-piece">
          { description }
        </div>
        <div className="component-piece">
          { component }
        </div>
        <div className="component-piece">
          <Code codeSnippet={codeSnippet} />
        </div>
        <div className="component-piece">
          Child elements:
          { children.map((element, index) => (
            <span>{element}</span>
          ))}
        </div>
        <div className="component-piece">
          Parent elements:
          { parents.map((element, index) => (
            <span>{element}</span>
          ))}
        </div>
      </div>
    )
  }
})

export default Component
