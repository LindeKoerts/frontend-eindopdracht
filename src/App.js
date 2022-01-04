import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Homepage from './pages/homepage/Home';
import Aanmelden from './pages/aanmelden/Aanmelden';
import Contact from './pages/contact/Contact';
import Inloggen from './pages/inloggen/Inloggen';
import EenStad from './pages/eenstad/Eenstad';
import OpDeFiets from './pages/opdefiets/Opdefiets';
import PageHeader from "./components/pageheader/PageHeader";

function App (){
    return (
        <Router>
            <Header/>
            <PageHeader/>
            <Switch>

                <Route exact path="/">
                    <Homepage/>
                </Route>

                <Route path="/opedefiets">
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

    );
}

export default App;
