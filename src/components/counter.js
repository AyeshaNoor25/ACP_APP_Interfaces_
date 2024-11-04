import React, { Component } from 'react'

export class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
        
      }
    }
    increment(){
        this.setState({
            count: this.state.count +1 
        }
        )
    }
  render() {
    return (
        <>
        <h1>Welcome to counter!</h1>
        <p>Lets change state</p>
        <p>The count is{this.state.count}</p>

        </>
    )
  }
}

export default counter