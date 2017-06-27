import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Main = () => <h2>Main</h2>
const About = () => <h2>About</h2>
const ContactUs = () => <h2>Contact Us</h2>
const WhatWeDo = () => <h2>WhatWeDo</h2>

const routes = [
    {
        path: './Components/About',
        component: About
    },
    {
        path: './Components/Contact-us',
        component: ContactUs
    },
    {
        path: './Components/What-We-Do',
        component: WhatWeDo
    }
]

const RouterConfig = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="./Components/About">About Us</Link></li>
                    <li><Link to="./Components/Contact-us">Contact Us</Link></li>
                        <li><Link to="./Components/What-We-Do">What We Do</Link></li>
    </ul>
    </div>
    </Router>
)

export default routes;
