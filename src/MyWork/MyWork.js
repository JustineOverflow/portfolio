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
                        <a className="mywork-container-project" href="https://github.com/JustineOverflow/coding-quizz-reactjs" target="_blank"><img src="/img/coding-quiz.png" alt="coding-quiz" className="mywork-container-project-picture"/></a>
                    </div>
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Gift app</p>
                        <a className="mywork-container-project" href="https://github.com/JustineOverflow/Gift-list-app" target="_blank"><img src="/img/giftapp.png" alt="gift-app" className="mywork-container-project-picture"/></a>
                    </div>
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Onride</p>
                        <a className="mywork-container-project" href="https://onride.io/" target="_blank"><img src="/img/onride.png" alt="onride.io" className="mywork-container-project-picture"/></a>
                    </div>
                    <div className="mywork-container-project">
                        <p className="mywork-container-project-category">Hangman</p>
                        <a className="mywork-container-project" href="https://github.com/JustineOverflow/hangman-game-python" target="_blank"><img src="/img/beginning.png" alt="hangman" className="mywork-container-project-picture"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyWork;