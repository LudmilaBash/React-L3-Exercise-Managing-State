import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*const numQuestions = 0;
const numCorrect = 0; */

class App extends Component {
  /*
  We could have declared the state variable inside of the constructor like this:
  constructor(props){
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    };
  } */
  constructor(props)
  {
    super(props);
    this.GameArr=this.CreateNumbers();

    this.state={
    numQuestions:0,
    numCorrect:0,
    value1:this.GameArr[0],
    value2:this.GameArr[1],
    value3:this.GameArr[2],
    proposedAnswer:this.GameArr[3]
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
    return  (this.state.value1+this.state.value2+this.state.value3 === this.state.proposedAnswer && answer==="true") ||
           (this.state.value1+this.state.value2+this.state.value3 !== this.state.proposedAnswer && answer==="false" );     
  }
  
  EventHandler=(event)=>
  {
    const answer=event.target.name;
    const correct = this.CheckAnswer(answer);
    this.setState( (curState)=> ({numQuestions:curState.numQuestions+1})  );
    if(correct)
         this.setState( (curState)=>( {numCorrect:curState.numCorrect + 1 } ) );
    const Arr=this.CreateNumbers();
    this.setState({value1:Arr[0], value2:Arr[1], value3:Arr[2], proposedAnswer:Arr[3]});
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
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick = {this.EventHandler} name="true">True</button>
          <button onClick = {this.EventHandler}  name="false">False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
