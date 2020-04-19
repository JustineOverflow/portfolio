import React, {Component} from 'react';
import Header from './Header/Header.js';
import About from './About/About.js';
import MyWork from './MyWork/MyWork.js';
import Me from './Me/Me';
import Contact from "./Contact/Contact";

class App extends Component {
    render() {
        return (<div>
                <Header/>
                <About/>
                <MyWork/>
                <Me/>
                <Contact/>
            </div>
        );
    }
}

export default App;
