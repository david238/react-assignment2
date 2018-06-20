import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = { 
    word: '',
    word_array: [],
    txtlength: 0
  }
  
  inputChangeHandler = (event) => {
    // console.log('calling change handler' + event.target.value.length);
    const word = event.target.value;
    const wording = event.target.value.split('');
    const currentLength = event.target.value.length;
    this.setState({
      word: word,
      word_array: wording,
      txtlength: currentLength
    })
  }

  deleteLetterHandler = (event, index) => {
    const wording =  [...this.state.word_array];
    wording.splice(index, 1);
    const word = wording.join('');
    this.setState({ 
      word: word,
      txtlength: word.length,
      word_array: wording
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={(event) => this.inputChangeHandler(event)} value={this.state.word}/>
       <ValidationComponent txtlength={this.state.txtlength} />
        {
          this.state.word_array.map( (letter, index) => {
            return <CharComponent letter={letter}
            clicked={(event) => this.deleteLetterHandler(event, index)}
            key={index} />
          })
        }
      </div>
    );
  }
}

export default App;
