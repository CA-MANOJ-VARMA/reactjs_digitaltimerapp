import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {inputValue: 25, minutes: 25, seconds: 0, paused: true}

  incFunction = () => {
    this.setState(prevState => ({
      inputValue: prevState.inputValue + 1,
      minutes: prevState.inputValue + 1,
    }))
  }

  decFunction = () => {
    this.setState(prevState => ({
      inputValue: prevState.inputValue - 1,
      minutes: prevState.inputValue - 1,
    }))
  }

  startTimerFunction = () => {
    const {paused} = this.state
    console.log('Hello')
    if (paused) {
      this.intervalId = setInterval(() => {
        this.setState(prevState =>
          prevState.seconds === 0
            ? {minutes: prevState.minutes - 1, seconds: 59}
            : {seconds: prevState.seconds - 1},
        )
      }, 1000)
    } else {
      clearInterval(this.intervalId)
    }
  }

  startPauseFunction = () => {
    const {paused} = this.state
    this.setState({paused: !paused})
    this.startTimerFunction()
  }

  resetFunction = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 25, seconds: 0, paused: true, inputValue: 25})
  }

  render() {
    const {inputValue, minutes, seconds, paused} = this.state
    console.log(seconds.toString().length)
    return (
      <div className="css-bg-container">
        <h1>Digital Timer</h1>
        <div className="css-inside-container">
          <div className="css-timer-container">
            <h1>
              {minutes}:
              {seconds.toString().length === 1 ? `0${seconds}` : seconds}
            </h1>
            {paused ? <p>Paused</p> : <p>Running</p>}
          </div>
          <div className="css-functions-input-container">
            <div className="css-start-stop-container">
              <div className="css-start-container">
                <button
                  type="button"
                  className="css-start-stop-reset-image-button-itself"
                  onClick={this.startPauseFunction}
                >
                  {paused ? (
                    <>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="play icon"
                        className="css-start-stop-reset-image-itself"
                      />
                      <p>Start</p>
                    </>
                  ) : (
                    <>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        alt="pause icon"
                        className="css-start-stop-reset-image-itself"
                      />
                      <p>Pause</p>
                    </>
                  )}
                </button>
              </div>
              <div className="css-start-container">
                <button
                  type="button"
                  className="css-start-stop-reset-image-button-itself"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="css-start-stop-reset-image-itself"
                    onClick={this.resetFunction}
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
            <div className="css-input-container">
              <p>Set Timer limit</p>
              <div className="css-inc-dec-container">
                <button
                  type="button"
                  className="css-inc-dec-button-itself"
                  onClick={paused ? this.decFunction : null}
                >
                  -
                </button>
                <p className="css-inputTimerValue-pargraph">{inputValue}</p>
                <button
                  type="button"
                  className="css-inc-dec-button-itself"
                  onClick={paused ? this.incFunction : null}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
