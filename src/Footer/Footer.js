import React from 'react';
import './Footer.css';


import { Navbar } from "../Directory/Directory";
import {LogoFoot} from '../Logo/Logo';

class Footer extends React.Component {
  render() {
    return(
        <footer>
            <div className="footer-left">
                <LogoFoot />
                <p>A chickencloud project.</p>
                <p>Website v6.1, 24/10/2022</p>
                <p>Snoring loudly from a closet in The Village 🏳️‍🌈</p>
            </div>
            <div className="footer-center">
                <Navbar goToTop={this.props.goToTop} routes={this.props.routes}/>
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