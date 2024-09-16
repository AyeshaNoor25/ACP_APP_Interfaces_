import React, { Component } from 'react';

class Welcome extends Component {

render(){

    return (
    
    <> <h1>Welcome {this.props.name}</h1>
    <p>how are you {this.props.name}, this is number {this.props.number}</p></>
   

    )
}


}


export default Welcome;