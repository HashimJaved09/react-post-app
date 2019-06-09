import React from 'react';

import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/contact');
    // }, 5000);
    return (
        <nav className="nav-wrapper indigo">
            <div className="container">
                <Link to="/" className="brand-logo">React</Link>
                <ul id="nav-mobile" className="right hide-on-small-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);