import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.props.handleClick.bind(this);
    }

  render() {
    return(
        <footer>
            <div className="footer-left">
            <div className="logo" id="Home" onClick={this.handleClick}>
            <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">https://</a></h1>
            <h1 id="Home" onClick={this.handleClick}><a href="/">thickchicken</a></h1>
            <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">.cc</a></h1>
          </div>
                <p>A chickencloud project.</p>
                <p>Iteration 5, 07/10/2022</p>
                <p>Snoring loudly from a closet in The Village 🏳️‍🌈</p>
            </div>
            <div className="footer-center">
                <nav>
                    <ul>
                        <li id="Home" onClick={this.handleClick}><a href="/">Home</a></li>
                        <li id="About" onClick={this.handleClick}><a href="/About">About</a></li>
                        <li id="Services" onClick={this.handleClick}><a href="/Services">Services</a></li>
                        <li id="Contact" onClick={this.handleClick}><a href="/Contact">Contact</a></li>
                        <li id="Login" onClick={this.handleClick}><a href="/Login">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-right"><p>Follow me on:</p>
                <a href="facebook.com"><p>facebook</p></a>
                <a href="instagram.com"><p>instagram</p></a>
                <a href="linkedin.com"><p>linkedin</p></a>
            </div>
        </footer>
    );
  }
}

export default Footer;