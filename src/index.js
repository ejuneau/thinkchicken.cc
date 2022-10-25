import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaAngleUp } from "react-icons/fa";
import { BrowserRouter } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import './App.css';
import './ScrollToTop.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import {Router} from './Directory/Directory';


import { Home } from './Slices/Home/Home';
import { About } from './Slices/About/About';
import { Services } from './Slices/Services/Services';
import { Portfolio } from './Slices/Portfolio/Portfolio';
import { Contact } from './Slices/Contact/Contact';
import { Login } from './Slices/Login/Login';




class App extends React.Component {

  routes = [
    {
      name: "Home",
      route: "/Home",
      comp: <Home />
    },
    {
      name: "About",
      route: "/About",
      comp: <About />
    },
    {
      name: "Services",
      route: "/Services",
      comp: <Services />
    },
    {
      name: "Portfolio",
      route: "/Portfolio",
      comp: <Portfolio />
    },
    {
      name: "Contact",
      route: "/Contact",
      comp: <Contact />
    },
    {
      name: "Login",
      route: "/Login",
      comp: <Login />
    }
  ];

  render() {
    return(
      <>
      <BrowserView>
        <BrowserRouter>
        <Header goToTop={goToTop} routes={this.routes}/>
        <Router goToTop={goToTop} routes={this.routes}/>
        <Footer goToTop={goToTop} routes={this.routes}/>
        <ScrollToTop />
        </BrowserRouter>
      </BrowserView>

      {/* WIP MOBILE VIEW */}

      <MobileView>
      <header className="mobile-head">
        <h1>thinkchicken.cc</h1>
        <p>[WIP] Mobile Site</p>
      </header>
        <div className="header-shadow"></div>

          <div className="mobile-home">
            <h1>Mobile site coming soon!</h1>
            <p>Check out this website on a desktop for now, I promise it looks better than this 😉</p>
            <div className="mobile-home-image" ></div>
          </div>

          <footer className="mobile-foot">
            <div className=" mobile-footer-left">
                <p>A chickencloud project.</p>
                <p>Website v6.1, 24/10/2022</p>
                <p>Snoring loudly from a closet in The Village 🏳️‍🌈</p>
            </div>

            <div className="mobile-footer-right">
                <p>Follow me on: 
                    <br></br>
                    <a href="https://github.com/ejuneau">GitHub</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/e-juneau/">LinkedIn</a>
                    <br></br>
                    <a href="https://www.instagram.com/rcjuneau/">Instagram</a>
                </p>
            </div>
        </footer>
      </MobileView>
      </>
    )
  }

}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  return (
      <div className="top-to-btm">
          {" "}
          {showTopBtn && (
              <FaAngleUp
                  className="icon-position icon-style"
                  onClick={goToTop}
              />
          )}{" "}
      </div>
  );
};