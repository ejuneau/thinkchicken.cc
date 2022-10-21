import React from "react";
import './PageNotFound.css';




export class PageNotFound extends React.Component {
    name = "PageNotFound";
    
    componentDidMount() {
       document.title="404 😞 | thinkchicken.cc"; 
    }

    render() {
        return (
            <>
            <div className ="splash"><h2>404: Page not found!</h2></div>
            <main id="PNFContainer">
                <div className="cover text-container" >
                    <h3>Oh no.</h3>
                    <p>Looks like we can't find this page. <br></br><br></br>If you were just messing around trying to break the site, congrats! Click <a href="/">here</a> to head back to the home page. <br></br><br></br>If you ended up here from browsing the website normally click <a href="/Contact">here</a> to contact me and explain what went wrong.</p>  
                </div>     
            </main>
            </>
        );
    }
}