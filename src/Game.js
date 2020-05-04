import React, {Component} from 'react'

class Game extends Component{
  constructor(props){
  super(props);
  const GameArr=this.CreateNumbers();
  this.state={
    value1:GameArr[0],
    value2:GameArr[1],
    value3:GameArr[2],
    proposedAnswer:GameArr[3]
  }
  };
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
  
   EventHandler=(event)=>
  {
    const answer=event.target.name;
    const correct = this.CheckAnswer(answer);
    this.props.handleAnswer(correct);
    const Arr=this.CreateNumbers();
    this.setState({value1:Arr[0], value2:Arr[1], value3:Arr[2], proposedAnswer:Arr[3]});
  };

render(){
return(
<div>
  <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} =                  ${this.state.proposedAnswer}`}</p>
 </div>
          <button onClick = {this.EventHandler} name="true">True</button>
          <button onClick = {this.EventHandler}  name="false">False</button>
  
</div>  

  
  
); }}
export default Game;   