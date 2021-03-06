import React, {Component} from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wave-container">
                    <div className="wave"></div>
                </div>
                {/*<div className="header-top">*/}
                    <nav className="header-top-nav">
                        <button className="header-top-nav-li">Welcome</button>
                        <button className="header-top-nav-li">to my</button>
                        <button className="header-top-nav-li">website</button>
                        <div className="header-top-nav-location">
                        </div>
                    </nav>
                {/*</div>*/}
                <div className="header-intro">
                    <h1 className="header-intro-title"> Justine Fabre</h1>
                    <p className="header-intro-headline">Tech journey</p>
                    <h2 className="header-intro-subtitle">{'< '}Full Stack Developer{' />'}</h2>

                    <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                         viewBox="0 0 640 640"
                         shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                         image-rendering="optimizeQuality"
                         fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M0 320c0-88.36 35.812-168.368 93.722-226.278S231.64 0 320 0c88.359 0 168.368 35.812 226.278 93.722S639.999 231.641 639.999 320c0 88.36-35.811 168.368-93.721 226.278C488.368 604.188 408.358 640 320 640c-88.36 0-168.368-35.812-226.278-93.722S0 408.359 0 320zm219.605-51.745c-9.284-9.047-24.154-8.834-33.19.45-9.035 9.295-8.822 24.153.461 33.189l117.297 113.753 16.359-16.831-16.382 16.901c9.33 9.048 24.236 8.812 33.284-.52.26-.26.52-.543.755-.814l115.017-112.49c9.296-9.036 9.497-23.894.461-33.19-9.035-9.283-23.894-9.496-33.19-.448l-100.004 97.808-100.867-97.808zm-92.6-141.25C77.611 176.4 47.067 244.632 47.067 320c0 75.367 30.544 143.6 79.938 192.995C176.4 562.39 244.632 592.933 320 592.933c75.368 0 143.6-30.543 192.995-79.938C562.39 463.601 592.933 395.368 592.933 320c0-75.367-30.543-143.6-79.938-192.995C463.601 77.611 395.368 47.067 320 47.067c-75.367 0-143.6 30.544-192.995 79.938z"
                            fill-rule="nonzero"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Header;