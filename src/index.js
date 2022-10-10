import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaAngleUp } from "react-icons/fa";


import './App.css';
import './ScrollToTop.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Home } from './Slices/Home/Home';
import { About } from './Slices/About/About';
import { Services } from './Slices/Services/Services';
import { Contact } from './Slices/Contact/Contact';
import { Login } from './Slices/Login/Login';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      activeSlice: <Home />
    }
  }
  setActiveSlice = slice => {
    switch(slice) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Services":
        return <Services />;
      case "Contact":
        return <Contact />;
      case "Login":
        return <Login />;
      default:
        return <Home />;
    }
  }
    
  handleClick = e => {
 
    this.setState({ activeSlice: this.setActiveSlice(e.target.id) })
  }



  render() {
    return(
      <>
      <Header handleClick={this.handleClick} />
      {this.state.activeSlice}
      <Footer handleClick={this.handleClick} />
      <ScrollToTop />
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