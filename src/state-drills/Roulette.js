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

  toBeOrNotToBe() {
    clearTimeout(this.timer)
    const randomChamber = Math.ceil(Math.random() * this.props.bulletInChamber)
    console.log(`Spinning Stopped at Chamber ${randomChamber}`)

    if (randomChamber === this.state.chamber) {
      this.setState({
        content: 'BANG!! You\'re dead.',
      })
    } else {
      this.setState({
        content: 'Phew! You\'re safe.',
        chamber: randomChamber,
      })
    }
  }
  
  handleTrigger = () => {
    console.log('bullet in chamber ' + this.state.chamber)
    this.setState({
      spinningTheChamber: true,
      content: 'spinning the chamber and pulling the trigger! ...'
    })

    this.timer = setTimeout(() => {
      this.toBeOrNotToBe()
    }, 2000)

  }
  
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        <button onClick={this.handleTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}

export default Roulette;