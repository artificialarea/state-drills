import React from 'react'

class Bomb extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            counter: 0
        }
    }

    static defaultProps = {
      counter: 0
    }

    componentDidMount(){
      this.interval =  setInterval(() => {
            let newCounter = this.state.counter + 1
            this.setState({
                counter : newCounter
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){

        let sound = 'sound'
        if (this.state.counter % 2 === 0){
            sound = 'Tik'
        }
        else{
            sound = 'Tok'
        }
        if(this.state.counter === 10){
            sound = 'BooM'
            this.componentWillUnmount()
        }

        return(
            <div>
                <p>{sound}</p>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default Bomb;