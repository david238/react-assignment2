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
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <hr />
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
