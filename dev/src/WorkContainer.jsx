import React, { Component } from 'react';
import './all.css';

class WorkContainer extends Component {
  render() {
    const {name} = this.props;
    // Same as const name = this.props.name;
    const {info} = this.props;
    return (
    <div className="WorkContainer">
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
    );
  }
}

export default WorkContainer;