import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <Link to='/zombie'>
          <div style={styles.navItem}>Zombie Apocalypse</div>
        </Link>

        <Link to='/alien'>
          <div style={styles.navItem}>Alien Invasion</div>
        </Link>

        <Link to='/machines'>
          <div style={styles.navItem}>Rise of the Machines</div>
        </Link>

      </div>
    );
  };

  styles () {
    return {
      component: {
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'flex-end',
        height: 60,
        alignItems: 'center',
        paddingRight: 20
      },
      navItem: {
        marginLeft: 20
      }
    }
  }
}

export default Navbar;
