import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count : 0}
  onIncreament = () => {
    this.setState( prevState =>{
      console.log(`previous state value ${prevState.count}`)
      return  {cpunt : prevState.count + 1
      }
    })
  }
  onDecreament = () => {
    console.log('Decrement clicked')
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Counter </h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            {' '}
            Increase{' '}
          </button>
          <button className="button" onClick={this.onDecrement}>
            {' '}
            Decrease{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
