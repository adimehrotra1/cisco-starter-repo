import React, { Component } from 'react';

class Packtool extends Component{
    websocket = new WebSocket('ws://localhost:55455' , "protocol1" )
    constructor(props){
        super(props);
        this.state = {
            latency : null
        };
    }
    componentDidMount(){
        
        (data => this.setState({latency : data.str("9")}))
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