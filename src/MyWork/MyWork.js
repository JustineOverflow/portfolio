import React, {Component} from 'react';

class MyWork extends React.Component {
    render() {
        return (
            <div className="mywork">
                <div className="mywork-title">Some of my code</div>
                <div className="mywork-container">
                    <div className="mywork-container-project">Coding quiz
                        <img src="/img/coding-quiz.png" alt="coding-quiz" className="mywork-container-project-picture"/>
                    </div>
                    <div className="mywork-container-project">Gift app
                        <img src="/img/giftapp.png" alt="gift-app" className="mywork-container-project-picture"/>
                    </div>
                    <div className="mywork-container-project">Onride
                        <img src="/img/onride.png" alt="onride.io" className="mywork-container-project-picture"/>
                    </div>
                    <div className="mywork-container-project">Hangman
                        <img src="/img/beginning.png" alt="hangman" className="mywork-container-project-picture"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyWork;