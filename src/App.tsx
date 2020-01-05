import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";

interface IProps {}

interface IState {
  username: string;
  password: string;
  passwordCheck: string;
  isVisible: boolean;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      username: "",
      password: "",
      passwordCheck: "",
      isVisible: true
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.submit = this.submit.bind(this);
    this.sendStatus = this.sendStatus.bind(this);
    this.signUserIn = this.signUserIn.bind(this);
  }
  //las 3 funciones siguientes sirven para ir cambiando el estado y guardar lo que haya escrito en el input
  handleUsername(event: any) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event: any) {
    this.setState({
      password: event.target.value
    });
  }

  checkPassword(event: any) {
    this.setState({
      passwordCheck: event.target.value
    });
  }
  //funcion que se ejecuta al pulsar el boton de envio de formulario comprueba que los passwords coincidan
  // y que el username no este vacio
  submit() {
    const { password, passwordCheck, username } = this.state;
    if (
      password === passwordCheck &&
      username.length > 0 &&
      password.length > 0 &&
      passwordCheck.length > 0
    ) {
      this.signUserIn();
      this.setState({ isVisible: false });
    } else if (username.length === 0) {
      alert("Please enter a valid username");
    } else {
      alert("Password do not match, please check again");
    }
  }

  //funcion que se envia como props al hijo y el hijo ejecuta para volver a mostrar el formulario
  sendStatus(e: any) {
    this.setState({ isVisible: true });
  }

  //funcion para añadir el nuevo usuario a la base de datos
  async signUserIn() {
    // const response = await fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     user: this.state.username,
    //     pass: this.state.password
    //   })
    // });
    console.log(this.state.username)
    // const reply  = await response.text();
    // console.log(reply);
  }

  render() {
    return (
      <div>
        {this.state.isVisible && (
          <div className="mainDiv mt-5">
            <div className="form-group">
              <div className="row">
                <div className="col-4">
                  <label>Username</label>
                  <input
                    type="username"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Username"
                    onChange={this.handleUsername}
                  ></input>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                    onChange={this.handlePassword}
                  ></input>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Repeat Password"
                    onChange={this.checkPassword}
                  ></input>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-secondary boton"
              onClick={this.submit}
            >
              Login
            </button>
          </div>
        )}
        {!this.state.isVisible && <Counter sendStatus={this.sendStatus} />}
      </div>
    );
  }
}

export default App;
