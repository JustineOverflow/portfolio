import React, {Component} from 'react';

class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <div className="header-name">
                    <h1 className="header-name-title">Justine</h1>
                    <h1 className="header-name-subtitle">Fabre</h1>
                </div>
            </section>
        )
    }
}

export default Header;