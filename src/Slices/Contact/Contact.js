import React from "react";
import './Contact.css';


class Contact extends React.Component {
    name = "Contact";
    componentDidMount() {
        document.title="Contact | thinkchicken.cc"; 
     }

     render() {
        return (
            <>
            <div className ="splash"><h2>Like what you saw?</h2></div>
            <main id="ContactContainer">
                <div className="cover text-container" >
                    <h3>Looking to reach out?</h3>
                    <p>Unfortunately our CEO Pierogi is usually kept quite busy with many tasks (sleeping, eating, thinking about sleeping and/or eating, etc.) but fortunately I'm available to pass along a message.</p>  
                </div>     
            </main>
            
            <div className="intro">
                <div className="first text-container">
                    <h4>Pardon the disorganization, it's a mess in here.</h4>
                    <p>As you can no doubt tell, this website is under construction. I'm doing my best to add features and functionality as I go, but for now we'll just have to settle on the humble mailto: link.</p>
                </div>
                <div className="second text-container">
                    <h4>Contact Chickencloud</h4>
                    <p>And here is where I would put my fancy mail form. As I said earlier this site isn't where I want it just yet, so a simple link will have to suffice. <br></br>Click <a href="mailto:rcjuneau8@gmail.com">here</a> to send me an email.</p>
                </div>
            </div>
            </>
        );
    }
}

export {Contact};