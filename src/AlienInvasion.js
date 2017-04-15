import React, { Component } from 'react';
import ApocalypseView from './ApocalypseView'

class AlienInvasion extends Component {
  render () {
    return (
      <div>
        <ApocalypseView
          imageUrl='http://proofofalien.com/wp-content/uploads/2016/02/Will-aliens-attack-earth-Did-NASA-Confirm-the-alien-invasion.jpg'
          caption='Beware the aliens have arrived.'
        />
      </div>
    )
  }
}


export default AlienInvasion;
