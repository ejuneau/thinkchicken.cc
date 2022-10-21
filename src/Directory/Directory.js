import React from 'react';
import {
    Navigate,
    Routes,
    Route 
  } from 'react-router-dom';

import { PageNotFound } from '../Slices/PageNotFound/PageNotFound';

const returnComponent = (Component) => {
    return <Component />
}
class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    {
                        this.props.directory.map(page => {
                            return <li id={page.name} onClick={this.handleClick} key={`${page.name}`}><a href={page.name === "Home" ? "/" : `/${page.name}`}>{page.name}</a></li>
                        })
                    }
                </ul>
            </nav>
        )
    }
}

class Router extends React.Component {
    render() {
        return(
            <Routes>
                {
                    this.props.directory.map(page => {
                        return <Route path={page.name === "Home" ? "/" : `/${page.name}`} element={returnComponent(page)} key={page.name} />
                    })
                }
                <Route path="/Home" element={ <Navigate to="/" />} />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        )
    }
}

export { Navbar, Router };