
import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Card from './Card';
import IPtool from './IPtool';
import Packtool from './Packtool'



class App extends Component {
    render() {
        return (
            <><div className="App">
                <Banner />
                <Card name="IPV4 Display"
                    children = 'Your IP is' >
                    <IPtool  url='https://api.ipify.org?format=json'/>
                        
                </Card>
                <Card name="IPV6 Display">
                    <IPtool url='https://api64.ipify.org?format=json' />

                </Card>
                <Card name="Latency Info">
                    <Packtool/>
                </Card>
                
            </div></>
        );
    }
}

export default App;
