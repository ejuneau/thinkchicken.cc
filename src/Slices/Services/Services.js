import React from "react";
import './Services.css';


class Services extends React.Component {

    componentDidMount() {
        document.title="Services | thinkchicken.cc"; 
     }

    render() {
        return (
            <>
            <div className ="splash"><h2>!WIP! Services Page !WIP!</h2></div>
            <main id="ServicesContainer">
                <div className="text-container">
                    <h3>Working on it...</h3>
                    <p>This part of the website is still under construction. Check back later to see what I get up to! <br></br> <br></br> To-do : Add a list of all the services currently running on the chickencloud.</p>  
                </div>     
            </main>
            </>
        );
    }
}

export {Services};