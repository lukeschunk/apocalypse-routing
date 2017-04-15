import React, { Component } from 'react';

class ApocalypseView extends Component {
  render() {
    return (
      <div className="ApocalypseView">
        <img alt='' src={this.props.imageUrl}/>
        <h2>{this.props.caption}</h2>
      </div>
    );
  }
}

export default ApocalypseView;
