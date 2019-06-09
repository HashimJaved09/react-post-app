import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.css';

import Home from './components/home';
import Post from './components/post';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch> {/* allows Only One Route to be displayed  */}
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/:id' component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
