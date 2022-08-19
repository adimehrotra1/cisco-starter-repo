import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
const websocke = new W3CWebSocket('ws://localhost:55455');

class Packtool extends Component{

    constructor(props){
        super(props);
        this.state = {
            latency : null
        };
    }
    componentDidMount(){
        websocke.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
        
    }
    render(){
        return(
             <span>
                 {this.state.latency}
             </span>
        )
    }

}

export default Packtool