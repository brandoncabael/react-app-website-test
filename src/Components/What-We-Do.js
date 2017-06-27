import React, { Component } from 'react';
import './Component.css';

class WhatWeDo extends Component {
    render() {
        return (
            <div className="WhatWeDo">
                <div className="WhatWeDo-header">
                    <h1>What We Do</h1>
                </div>
                <div className="WhatWeDo-body">
                    <p>
                        We specialize in anything in the full-stack web development space including but not limited to:
                    <br />
                        <ul>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>Docker</li>
                        </ul>
                    </p>
                </div>
            </div >
        );
    }
}
