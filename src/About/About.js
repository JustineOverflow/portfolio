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
                            <li>React</li>
                            <li>HTML/CSS/SASS</li>
                            <li>React</li>
                        </div>
                    </div>

                    <div className="about-technologies-backend">
                        <p className="about-technologies-backend-category">Backend</p>
                        <ul className="about-technologies-backend-list">
                            <li>NodeJS, express, npm</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>Relational Databases: SQL</li>
                            <li>Non-relational Databases: MongoDB</li>
                            <li>Docker</li>
                            <li>APIs</li>
                        </ul>
                    </div>
                </div>
                <p>journey into tech</p>
                <p>Learning path</p>
            </div>
        )
    }
}

export default About;