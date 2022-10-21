import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo" id="Home" onClick={this.handleClick}>
                <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">https://</a></h1>
                <h1 id="Home" onClick={this.handleClick}><a href="/">thickchicken</a></h1>
                <h1 className="fade-in" id="Home" onClick={this.handleClick}><a href="/">.cc</a></h1>
            </div>
        )
    }
}