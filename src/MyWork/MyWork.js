import React, {Component} from 'react';

class MyWork extends React.Component {
    render() {
        return (
            <div className="mywork">
                <div className="mywork-title">Some of my code</div>
                <p className="mywork-subtitle">Hover the mouse cursor over the project for more information!</p>
                <div className="mywork-container">
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Coding quiz</p>
                        <img src="/img/coding-quiz.png" alt="coding-quiz" className="mywork-container-project-picture"/>
                    </div>
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Gift app</p>
                        <img src="/img/giftapp.png" alt="gift-app" className="mywork-container-project-picture"/>
                    </div>
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Onride</p>
                        <img src="/img/onride.png" alt="onride.io" className="mywork-container-project-picture"/>
                    </div>
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Hangman</p>
                        <img src="/img/beginning.png" alt="hangman" className="mywork-container-project-picture"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyWork;