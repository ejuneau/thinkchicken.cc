import React from 'react';
import {
    Navigate,
    Route,
    Routes,
  } from 'react-router-dom';

import { PageNotFound } from '../Slices/PageNotFound/PageNotFound';



class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    {
                        this.props.routes.map(({name, route, comp}) => ((
                            <li key={name}>< a href={route}>{name}</a></li>
                        )))
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
                    this.props.routes.map(({name, route, comp}) => ((
                        <Route key={name} exact path={route === "/Home" ? "/" : route} element={comp} />
                    )))
                }
                <Route path="/Home" element={ <Navigate to="/" />} />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        )
    }
}

export { Navbar, Router };