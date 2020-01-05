import React, { Component } from "react";
// import PropTypes from "react"

interface IProps {
    sendStatus:any
}

interface IState {
  seconds: number;
}
class Counter extends Component<IProps, IState> {
  private intervalId: any;
  constructor(props: IProps) {
    super(props);

    this.state = {
      seconds: 5
    };
    this.start = this.start.bind(this);
  }
  render() {
      const {sendStatus}= this.props;
      //si los segundos son cinco arranco la cuenta atras
      if(this.state.seconds === 5){
          this.start()
      }
      //si llega a cero paro el contador
    else if (this.state.seconds === 0) {
      clearInterval(this.intervalId);
      sendStatus();
    }
    return (
      <div>   
        <h3>
          User created!!! in {this.state.seconds} seconds you will be redirected to the form
        </h3>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  start() {
    this.intervalId = setInterval(() => {
      this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
    }, 1000);
  }
}

export default Counter;
