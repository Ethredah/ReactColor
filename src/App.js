import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Button';


class App extends Component {

   constructor(props)
  {
    super(props);
    this.state = {color: [210, 156, 241]};
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick()
  {
    this.setState({
      color:this.chooseColor()
    })
  }

  render() {
    return (
      <div style={{padding: 70}}>

      <i>Make the background color change randomly and get the RGB equivalent to use with your designs if you like the color :)</i>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick = {this.handleClick} />
        
      </div>
    );
  }
}

export default App;
