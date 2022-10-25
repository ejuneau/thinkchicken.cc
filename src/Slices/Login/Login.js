import React from "react";
import './Login.css';


class Login extends React.Component {
    name = "Login";
    componentDidMount() {
        document.title="Login | thinkchicken.cc"; 
     }

    render() {
        return (
            <>
            <div className ="splash"><h2>!WIP! Login Page !WIP!</h2></div>
            <main id="LoginContainer">
                <div className="text-container">
                    <h3>Working on it...</h3>
                    <p>This part of the website is still under construction. Check back later to see what I get up to! <br></br> <br></br> To-do : Add Login functionality to access chickencloud services</p>  
                </div>     
            </main>
            </>
        );
    }
}

export {Login};