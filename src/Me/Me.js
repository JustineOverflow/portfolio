import React, {Component} from 'react';

class Me extends React.Component {
    render() {
        return (<div className="me">
                <p className="me-title">About me</p>
                <svg
                    className="me-shape"
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
                            d="M128.8,-89C176.2,-43.2,230.4,10.9,231.2,70.8C231.9,130.7,179.1,196.4,119.1,211.6C59.2,226.7,-8,191.3,-51.3,152.7C-94.6,114.1,-114.1,72.3,-135.6,19.2C-157.1,-33.9,-180.6,-98.3,-158.3,-138.4C-136,-178.5,-68,-194.2,-13.7,-183.3C40.7,-172.4,81.3,-134.8,128.8,-89Z"
                            fill="url(#gradient)"/>
                    </g>
                </svg>
                <div className="me-container">
                    <div className="me-container-presentation">
                        <div className="me-container-presentation-music">
                            <i className="me-container-presentation-icon fas fa-guitar"></i>
                            <div>
                                <p className="me-container-presentation-title">Music</p>
                                <p className="me-container-presentation-text">From the age of 6, I grew up in a music environment. I have learned accordion for 13 years, along with 4 years of trumpet and currently enjoying the guitar during my free time.</p>
                            </div>
                        </div>
                        <div className="me-container-presentation-travel">
                            <i className="me-container-presentation-icon fas fa-globe-europe"></i>
                            <div>
                                <p className="me-container-presentation-title">International</p>
                                <p className="me-container-presentation-text">I am currently living in London and originally from France. I love discovering and learning new cultures, this is why I also lived one year in Sweden and 10 months in Amsterdam.</p>
                            </div>
                        </div>
                        <div className="me-container-presentation-sport">
                            <i className="me-container-presentation-icon fas fa-running"></i>
                            <div>
                                <p className="me-container-presentation-title">Sport</p>
                                <p className="me-container-presentation-text">Between coding sessions, I love taking some time off to exercice! I did 6 years of classic dance, but also tried Kung Fu and Capoeira. I am currently enjoying doing fitness.</p>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="me-container-presentation-coding">
                            <i className="me-container-presentation-icon fas fa-code"></i>
                            <div>
                                <p className="me-container-presentation-title">Coding</p>
                                <p className="me-container-presentation-text">Coding is also a hobbie, and I like spending time learning new technologies and working on side projects. Almost no day goes without code!</p>
                            </div>
                        </div>
                    </div>
                    <img className="me-profile-p1" src="/img/profile.jpg" alt="profile-picture"/>
                </div>
            </div>
        )
    }
}

export default Me;