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
                <h1 className="logo" id="Home" onClick={this.handleClick}>thinkchicken.cc</h1>
                <p>A chickencloud project.</p>
                <p>Iteration 5, 07/10/2022</p>
                <p>Snoring loudly from a closet in The Village 🏳️‍🌈</p>
            </div>
            <div className="footer-center">
                <nav>
                    <ul>
                        <li id="Home" onClick={this.handleClick}>Home</li>
                        <li id="About" onClick={this.handleClick}>About</li>
                        <li id="Services" onClick={this.handleClick}>Services</li>
                        <li id="Contact" onClick={this.handleClick}>Contact</li>
                        <li id="Login" onClick={this.handleClick}>Login</li>
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