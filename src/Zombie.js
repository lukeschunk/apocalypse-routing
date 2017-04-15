import React, { Component } from 'react';
import ApocalypseView from './ApocalypseView'

class Zombie extends Component {
  render () {
    return (
      <div>
        <ApocalypseView
          imageUrl='https://i.kinja-img.com/gawker-media/image/upload/s---jFensxY--/c_scale,fl_progressive,q_80,w_800/w4jfzlemgbcz8kjbz8wl.jpg'
          caption='Zombies'
        />
      </div>
    )
  }
}


export default Zombie;
