
import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit'
import IPtool from './IPtool';
import Packtool from './Packtool'


class App extends Component {
    render() {
        return (
            <><div className="App">
                <Banner />
                <Exhibit name="IPV4 Display"
                    children = 'Your IP is' >
                    <IPtool  url='https://api.ipify.org?format=json'/>
                        
                </Exhibit>
                <Exhibit name="IPV6 Display">
                    <IPtool url='https://api64.ipify.org?format=json' />

                </Exhibit>
                <Exhibit name="Latency Info">
                    <Packtool/>
                </Exhibit>
                
            </div></>
        );
    }
}

export default App;
