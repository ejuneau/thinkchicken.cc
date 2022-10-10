import React from "react";
import './About.css'


class About extends React.Component {

    render() {
        return (
            <>
            <div className ="splash"><h2>About Us: A chickencloud story</h2></div>
            <main id="AboutContainer">
                <div className="cover text-container" >
                    <h3>It all started with an idea:</h3>
                    <p>When did streaming services start acting like cable TV? Why am I paying more and more for less and less content? Why can't I access all the media I want in the same place?</p>  
                </div>     
            </main>
            
            <div className="intro">
                <div className="first text-container">
                    <h4>Since then, things have taken on a life of its own.</h4>
                    <p>The scope of my project has grown exponentially as I learned more and more about the world of technology that I've become so passionate about. This website (and its git repository) serves as a living portfolio, showing off new features, and documenting my progress as I learn more. It's important for me to be able to look back on the progress I've made to see how far I've come since I began, while remaining aware of just how much farther I can go.</p>
                </div>
                <div className="second text-container">
                    <h4>But what exactly <em>is</em> the chickencloud?</h4>
                    <p>To put it succinctly, the chickencloud is the name I gave my server. More technically, the server is a hypervisor running Proxmox Virtual Environment, which I use to host a number of containers and virtual machines. I built this server with used enterprise hardware that I was able to find for a cheap price, learning absolutely everything on my own. <br /><br /> As I mentioned above, this website is a living portfolio of my skills, evolving and expanding as I learn more skills. If you decide to explore my commit history, you might notice that the earliest version on log is iteration 5. Learning involves trying new things and making mistakes, and unfortunately that involves losing hours of work and more than a few terabytes of data along the way. <br /><br /> Thankfully, I figured out version control not long after that.</p>
                </div>
            </div>
            <div className="timeline">
                <h3>A brief history of the chickencloud</h3>
            </div>
            </>
        );
    }
}


export {About};