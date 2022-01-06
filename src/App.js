import React, {useState, useEffect, useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import axios from "axios";
import Homepage from './pages/homepage/Home';
import Aanmelden from './pages/aanmelden/Aanmelden';
import Contact from './pages/contact/Contact';
import Inloggen from './pages/inloggen/Inloggen';
import EenStad from './pages/eenstad/Eenstad';
import OpDeFiets from './pages/opdefiets/Opdefiets';

const apiKey = `e265816c2efb5c38bf3bc3fe7dfe63d9`

function App() {

    return (
        <>
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <Homepage/>
                        </Route>

                        <Route path="/opdefiets">
                            <OpDeFiets/>
                        </Route>

                        <Route path="/eenstad">
                            <EenStad/>
                        </Route>

                        <Route path="/contact">
                            <Contact/>
                        </Route>

                        <Route path="/inloggen">
                            <Inloggen/>
                        </Route>

                        <Route path="/aanmelden">
                            <Aanmelden/>
                        </Route>

                    </Switch>

                </Router>

        </>
    );
}

export default App;