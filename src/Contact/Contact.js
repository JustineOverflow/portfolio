import React, {Component} from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p className="contact-title">Contact me</p>

                <div className="contact-container">
                    <div className="contact-container-box">
                        <p className="contact-container-box-subtitle">Get in touch with me:</p>
                        <button className="contact-container-box-subtitle-button">
                            <i className="fas fa-envelope-open-text"></i>
                            Email
                        </button>
                    </div>
                    <div className="contact-container-box">
                        <p className="contact-container-box-subtitle">Get more insights about my background:</p>
                        <button className="contact-container-box-subtitle-button">
                            <i className="fab fa-linkedin"></i>
                            Linkedlin
                        </button>
                    </div>
                    <div className="contact-container-box">
                        <p className="contact-container-box-subtitle">Read more code:</p>
                        <button className="contact-container-box-subtitle-button">
                            <i className="fab fa-github-square"></i>
                            Github
                        </button>
                    </div>
                </div>
                <i className="contact-icon fas fa-laptop-code"></i>
                <div className="footer">
                    Justine Fabre - 2020
                </div>
            </div>
        )
    }
}

export default Contact;