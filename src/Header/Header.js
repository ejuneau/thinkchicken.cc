import React from 'react';
import './Header.css';
import {LogoHead} from '../Logo/Logo';
import {Navbar} from '../Directory/Directory';

class Header extends React.Component {

  render() {
    return(
      <>
        <header>
          <LogoHead />
          <Navbar routes={this.props.routes}/>
        </header>
        <div className="header-shadow"></div>
      </>
    );
  }
}

export default Header;