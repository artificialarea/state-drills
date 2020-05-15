import React from 'react';

class Roulette extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      content: 'The Deer Hunter',
    }
    this.state.chamber = props.bulletInChamber
  }
  
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <button>Pull the trigger!</button>
      </div>
    )
  }
}

export default Roulette;