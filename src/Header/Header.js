import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.props.handleClick.bind(this);
  }

  render() {
    return(
      <>
        <header>
          <div className="logo" id="Home" onClick={this.handleClick}>
            <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/.">https://</a></h1>
            <h1 id="Home" onClick={this.handleClick}><a href="/.">thickchicken</a></h1>
            <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/.">.cc</a></h1>
          </div>
          <nav>
            <ul>
              <li id="Home" onClick={this.handleClick}><a href="./">Home</a></li>
              <li id="About" onClick={this.handleClick}><a href="./">About</a></li>
              <li id="Services" onClick={this.handleClick}><a href="./">Services</a></li>
              <li id="Contact" onClick={this.handleClick}><a href="./">Contact</a></li>
              <li id="Login" onClick={this.handleClick}><a href="./">Login</a></li>
            </ul>
          </nav>
        </header>
        <div className="header-shadow"></div>
      </>
    );
  }
}

export default Header;