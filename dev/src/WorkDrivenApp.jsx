import React, { Component } from 'react';
import WorkContainer from './WorkContainer';
import work from './work';

export default class WorkDrivenApp extends Component {
  render() {
    return (
    <div className="WorkContainer">
        {work.map(w => <WorkContainer name={w.name} info={w.info}/>)}
    </div>
    );
  }
}



