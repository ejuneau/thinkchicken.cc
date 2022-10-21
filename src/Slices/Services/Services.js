import React from "react";


class Services extends React.Component {

    componentDidMount() {
        document.title="Services | thinkchicken.cc"; 
     }

    render() {
        return (
            <>
            <div className ="splash"><h2>!WIP! Services Page !WIP!</h2></div>
            <main>
                <div className="text-container">
                    <h3>Oh! Hello there.</h3>
                    <p>It seems like you've stumbled upon my publicly listed domain. Come on in, take your coat off. Something to drink, perhaps?</p>  
                </div>     
            </main>
            </>
        );
    }
}

class ServicesFull extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="text-container">
                    <h4>So what is the chickencloud?</h4>
                    <p>I'm so glad you asked."The chickencloud" is the loving pet name of the server that I built as a hobby during quarantine, named after my family dog Pierogi's pet name. I'm using it as a challenge to learn more about self-hosting and doing as much of the programming myself as possible. You can learn about my building process on the <a href="/about.html">About</a> page, and about the things I do with it on the <a href="/services.html">Services</a> page.This web page is very much a work in progress. It serves as a living portfolio for my skills, and is definitely subject to change! If you're a fan of what I've got going on here, or if you have any advice on how to clean up my design, you can reach out over at the <a href="/contact.html">Contact</a> page.</p>
                </div>
            </div>
        );
    }
}

export {Services, ServicesFull};