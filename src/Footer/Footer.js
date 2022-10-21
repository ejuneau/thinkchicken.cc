import React from 'react';
import './Footer.css';


import { Navbar } from "../Directory/Directory";
import Logo from '../Logo/Logo';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.props.handleClick.bind(this);
    }

  render() {
    return(
        <footer>
            <div className="footer-left">
                <Logo />
                <p>A chickencloud project.</p>
                <p>Website v6.0, 21/10/2022</p>
                <p>Snoring loudly from a closet in The Village 🏳️‍🌈</p>
            </div>
            <div className="footer-center">
                <Navbar directory={this.props.directory}/>
            </div>
            <div className="footer-right">
                <p>Follow me on: 
                    <br></br>
                    <a href="https://github.com/ejuneau">GitHub</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/e-juneau/">LinkedIn</a>
                    <br></br>
                    <a href="https://www.instagram.com/rcjuneau/">Instagram</a>
                </p>
            </div>
        </footer>
    );
  }
}

export default Footer;