import React, {Component} from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about-title">
                    <div className="about-title-text">Technologies</div>
                </div>
                <div className="about-technologies">
                    <div className="about-technologies-frontend">
                        <p className="about-technologies-frontend-category">Frontend</p>
                        <div className="list">
                            <li>Javascript</li>
                            <li>react</li>
                            <li>HTML/CSS</li>
                            <li>SASS</li>
                        </div>
                    </div>

                    <svg className="about-shape"
                         viewBox="0 0 600 600"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <style type="text/css">
                            fill:url(#MyGradient)
                        </style>
                        <defs>
                            <linearGradient id="gradient">
                                <stop offset="0%" stopColor="rgba(255, 223, 213, 0.86)"/>
                                <stop offset="50%" stopColor="rgba(255, 199, 132, 0.83)"/>
                            </linearGradient>
                        </defs>
                        <g transform="translate(300,300)">
                            <path
                                d="M167,-127C207.3,-82.6,224.5,-13.7,212.3,51.9C200.1,117.6,158.4,180,102.1,204.1C45.7,228.2,-25.3,214.1,-74,180.4C-122.7,146.7,-149.1,93.4,-149.1,47.3C-149,1.1,-122.6,-37.8,-93.4,-79.6C-64.1,-121.5,-32.1,-166.2,15.6,-178.7C63.3,-191.2,126.7,-171.3,167,-127Z"
                                fill="url(#gradient)"/>
                        </g>
                    </svg>


                    <div className="about-technologies-backend">
                        <p className="about-technologies-backend-category">Backend</p>
                        <ul className="about-technologies-backend-list">
                            <li>NodeJS</li>
                            <li>express</li>
                            <li>npm</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>SQL</li>
                            <li>sequelize</li>
                            <li>MongoDB</li>
                            <li>mongoose</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;