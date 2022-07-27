
import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit'
import IPtool from './IPtool';


class App extends Component {
    render() {
        return (
            <><div className="App">
                <Banner />
                <Exhibit name="IPV4 Display"
                    children = 'Your IP is' >() 
                </Exhibit>
                <Exhibit name="IPV6 Display"></Exhibit><Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
                
            </div></>
        );
    }
}

export default App;
