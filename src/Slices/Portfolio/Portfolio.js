import React from "react";
import './Portfolio.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const projects = [
    {
    key: 1,
    title: "Flashcards!",
    description: <p>A simple web app, as part of Codecademy's courses. Users can create topics, and add quizzes to them. Quizzes contain flashcards which are user-generated. The project was built in HTML, CSS, and Javascript using React and Redux libraries.</p>,
    link: "https://ejuneau.github.io/CA_Flashcards/"
    },
    {
    key: 2,
    title: "Ravenous",
    description: <p>A Single-Page Application (SPA) from Codecademy's courses. This project uses the Yelp API to provide a detailed list of search results based on query term, location, and sorting preferences. <br></br>Note that this project requires enabling of the CORS demo server, which can be done from <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noreferrer">this</a> link.</p>,
    link: "https://ejuneau.github.io/CA_Ravenous/"
    },
    {
    key: 3,
    title: "Jammming",
    description: <p>Another SPA built with React from Codecademy's courses. This project uses Spotify's API to allow users to search for artists, songs, and albums and build a custom playlist that is then saved to the user's Spotify Library.</p>,
    link: "https://ejuneau.github.io/CA_Jammming/"
    }
]


class Portfolio extends React.Component {
    name = "Portfolio";
    componentDidMount() {
        document.title="Portfolio | thinkchicken.cc"; 
     }

     render() {
        return (
            <>
            <div className="splash"><h2>Projects completed at Thinkchicken!</h2></div>
            <main id="PortfolioContainer">
                <div className="cover text-container">
                    <h3>This is the fun part.</h3>
                    <p>Here's a list of some of the projects I've completed since I began learning to code (this website aside). <br></br> I'll be updating this page as I add new projects to my GitHub, so do stay tuned!</p>  
                </div>     
            </main>
            <div id="ProjectCarousel">
                <CarouselProvider naturalSlideWidth={2560} naturalSlideHeight={640} totalSlides={projects.length} infinite="yes" >
                    <Slider>
                        {
                            projects.map(({key, title, description, link}) => {
                                return (
                                    <Slide index={key} key={key}>
                                        <h4>{title}</h4>
                                        {description}
                                        <a href={link} className="viewProject" target="_blank" rel="noreferrer">View Project</a>
                                    </Slide>
                            )})
                        }
                    </Slider>
                    <div className="buttons">
                        <ButtonBack className="backButton">Back</ButtonBack>
                        <div className="buttonSpacer"></div>
                        <DotGroup className="dotGroup"></DotGroup>
                        <div className="buttonSpacer"></div>
                        <ButtonNext className="nextButton">Next</ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
            </>
        );
    }
}

export {Portfolio};