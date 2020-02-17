import React, { Component } from "react";

// import { Container } from './styles';

export default class Teste extends Component {
  state = {
    newTest: "",
    tests: ["Teste1", "Teste2", "Teste3"]
  };
  handleInputChange = e => {
    this.setState({ newTest: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ tests: [...this.state.tests, this.state.newTest], newTest: '' });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTest}</h1>
        <ul>
          {this.state.tests.map(test => (
            <li key={test}>{test}</li>
          ))}
        </ul>
        <input type="text" onChange={this.handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
