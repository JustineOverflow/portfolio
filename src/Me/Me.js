import React, {Component} from 'react';

class Me extends React.Component {
    render() {
        return (<div className="me">
            <p className="me-title">About me</p>
            <div className="me-presentation">
                <div className="me-presentation-title">
                    <li>Self-taught</li>
                    <li>Communicative</li>
                    <li>Eager to learn</li>
                    <li>Diversity background</li>
                </div>
            </div>
            <div className="me-presentation">
                <div className="me-presentation-title">
                <p className="me-presentation-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
                    <div className="me-profile">
                </div>
            <svg
                className="me-shape"
                width="600"
                height="600"
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
                    <path d="M128.8,-89C176.2,-43.2,230.4,10.9,231.2,70.8C231.9,130.7,179.1,196.4,119.1,211.6C59.2,226.7,-8,191.3,-51.3,152.7C-94.6,114.1,-114.1,72.3,-135.6,19.2C-157.1,-33.9,-180.6,-98.3,-158.3,-138.4C-136,-178.5,-68,-194.2,-13.7,-183.3C40.7,-172.4,81.3,-134.8,128.8,-89Z" fill="url(#gradient)"/>
                </g>
            </svg>
            {/*<img className="me-profile-p2" src="/img/coding-table.jpg" alt="profile-picture"/>*/}
            {/*<img className="me-profile-p1" src="/img/profile.jpg" alt="profile-picture"/>*/}
        </div>)
    }
}

export default Me;