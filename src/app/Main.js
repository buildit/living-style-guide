import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import designData from '../design-data';
import ComponentList from './ComponentList';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterByApproved: true
    }
  }

  render() {
    return(
      <div className="view landing">

        <header className="style-guide introduction">
          <h1 className="style-guide title">Living Style Guide: Project Taco</h1>
          <p className="style-guide description">An always-up-to-date catalog of the UI components used by Project Taco.</p>
        </header>

        <div className="style-guide filters">
          <button
            className="filter-button"
            onClick={() => {
              this.setState({
                filterByApproved: !this.state.filterByApproved
              })
            }}
            >Filter</button>
          <span>{ this.state.filterByApproved ? 'Filtering by approved' : 'No filter'}</span>
        </div>

        <div className="iphone6-container">
          <ComponentList
            designData={designData}
            filterByApproved={this.state.filterByApproved}
          />
        </div>
      </div>
    )
  }
};
