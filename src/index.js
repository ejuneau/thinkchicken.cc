import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaAngleUp } from "react-icons/fa";
import { BrowserRouter } from 'react-router-dom';

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

  directory = [Home, About, Services, Portfolio, Contact, Login];

  handleClick = e => {
 
  }



  render() {
    return(
      <BrowserRouter>
      <Header handleClick={this.handleClick} directory={this.directory}/>
      <Router directory={this.directory}/>
      <Footer handleClick={this.handleClick} directory={this.directory}/>
      <ScrollToTop />
      </BrowserRouter>
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