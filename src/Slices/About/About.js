import React from "react";
import './About.css'


class About extends React.Component {

    render() {
        return (
            <>
            <div className ="splash"><h2>About Us: A chickencloud story</h2></div>
            <main id="AboutContainer">
                <div className="text-container" >
                    <h3>It all started with an idea:</h3>
                    <p>When did streaming services start acting like cable TV? Why am I paying more and more for less and less content? Why can't I access all the media I want in the same place?</p>  
                </div>     
            </main>
            
            <div className="intro">
                <div className="text-container">
                    <h4>Since then, things have </h4>
                    <p>I'm so glad you asked."The chickencloud" is the loving pet name of the server that I built as a hobby during quarantine, named after my family dog Pierogi's pet name. I'm using it as a challenge to learn more about self-hosting and doing as much of the programming myself as possible. You can learn about my building process on the <a href="/about.html">About</a> page, and about the things I do with it on the <a href="/services.html">Services</a> page.This web page is very much a work in progress. It serves as a living portfolio for my skills, and is definitely subject to change! If you're a fan of what I've got going on here, or if you have any advice on how to clean up my design, you can reach out over at the <a href="/contact.html">Contact</a> page.</p>
                </div>
            </div>
            </>
        );
    }
}


export {About};