import React, { Component } from 'react';

export default class HallOfFame extends Component {
  constructor ( props ) {
    super ()
  }

  render () {
    console.log (this.props)
    return(
      <div className = "HallOfFame" >
        HallOfFame
      </div>
    );
  }
}
