import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import {Navbar} from '../Directory/Directory';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.props.handleClick.bind(this);
  }

  render() {
    return(
      <>
        <header>
          <Logo />
          <Navbar directory={this.props.directory}/>
        </header>
        <div className="header-shadow"></div>
      </>
    );
  }
}

export default Header;