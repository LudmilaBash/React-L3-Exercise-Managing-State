import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score.js';
import Game from './Game.js';


/*const numQuestions = 0;
const numCorrect = 0; */

class App extends Component {

  constructor(props)
  {
    super(props);
    const GameArr=this.CreateNumbers();

    this.state={
    numQuestions:0,
    numCorrect:0,
    value1: GameArr[0],
    value2: GameArr[1],
    value3: GameArr[2],
    proposedAnswer: GameArr[3]
  };
  }
  
  CreateNumbers(){
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }
    
   CheckAnswer(answer) {
    const {value1, value2, value3, proposedAnswer} = this.state;
    return  (value1+value2+value3 === proposedAnswer && answer==="true") ||
           (value1+value2+value3 !== proposedAnswer && answer==="false" );     
  }
  
  handleAnswer=(AnswerWasCorrect)=>
  {
   
    this.setState( (curState)=> ({numQuestions:curState.numQuestions+1})  );
    if(AnswerWasCorrect)
         this.setState( (curState)=>( {numCorrect:curState.numCorrect + 1 } ) );
  };
  

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game  handleAnswer={this.handleAnswer}/>
          <Score numCorrect= {this.state.numCorrect} numQuestions= {this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
