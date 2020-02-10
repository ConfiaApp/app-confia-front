import React, { Component } from 'react';

// import { Container } from './styles';

export default class Teste extends Component {
  state = {
    tests: ['Teste1', 'Teste2', 'Teste3']
  }
  render() {
    console.log(this.state);
    return <ul>
      <li>Teste1</li>
      <li>Teste2</li>
      <li>Teste3</li>
    </ul>;
  }
}
