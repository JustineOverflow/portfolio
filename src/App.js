import React, {Component} from 'react';
import Header from './Header/Header.js';
import About from './About/About.js';
import MyWork from './MyWork/MyWork.js';

class App extends Component {
    render() {
        return (<div>
                <Header/>
                <About/>
                <MyWork/>
            </div>
        );
    }
}

export default App;
