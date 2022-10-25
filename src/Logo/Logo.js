import React from 'react';
import './Logo.css';

export class LogoHead extends React.Component {
    render() {
        return (
            <div className="logo-head" id="Home" onClick={this.handleClick}>
                <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">https://</a></h1>
                <h1 id="Home" onClick={this.handleClick}><a href="/">thickchicken</a></h1>
                <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">.cc</a></h1>
            </div>
        )
    }
}

export class LogoFoot extends React.Component {
    render() {
        return (
            <div className="logo-foot" id="Home" onClick={this.handleClick}>
                <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">https://</a></h1>
                <h1 id="Home" onClick={this.handleClick}><a href="/">thickchicken</a></h1>
                <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">.cc</a></h1>
            </div>
        )
    }
}