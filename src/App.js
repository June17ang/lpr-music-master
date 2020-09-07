import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello !</h1>
                <p>My name is xxx, I am a software engineer</p>
                <p>I am always looking forward to working on meaningful projects.</p>

                {
                    this.state.displayBio ? (
                        <div>This is my bio</div>
                    ) : null
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}