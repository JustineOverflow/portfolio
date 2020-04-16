import React, {Component} from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about"> About
                <div>
                    <p>
                        Frontend :
                        <ul>
                            <li>React</li>
                            <li>HTML/CSS/SASS</li>
                            <li>React</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <p>
                        Backend :
                        <ul>
                            <li>NodeJS, express, npm</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>Relational Databases: SQL</li>
                            <li>Non-relational Databases: MongoDB</li>
                            <li>Docker</li>
                            <li>APIs</li>
                        </ul>
                    </p>

                </div>
                <p>journey into tech</p>
                <p>Learning path</p>
            </div>
        )
    }
}

export default About;