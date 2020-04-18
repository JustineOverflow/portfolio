import React, {Component} from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p className="contact-title">Contact me</p>
                <button className="contact-button">Email</button>
                <button className="contact-button">Linkedlin</button>
                <button className="contact-button">Github</button>
            </div>
        )
    }
}

export default Contact;