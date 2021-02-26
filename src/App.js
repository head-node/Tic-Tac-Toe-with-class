import React from "react";
import './App.css';
import GridRow from "./Components/Gridrow/index"
import Footer from "./Components/Footer/index"

class App extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
      gameState:[
        ["","",""],
        ["","",""],
        ["","",""]
      ], 
      playerTurn:"X"
    }
  } 
  handlePlayerClick=(rowIndex,colIndex)=>{
  const copiedGameState=[...this.state.gameState];
  copiedGameState[rowIndex][colIndex]=this.state.playerTurn;
  this.setState({
  gameState:copiedGameState,
  playerTurn:this.state.playerTurn==="X"?"O":"X"
  })
}
  render()
  { 
    return (
      
      <div className="container">
      <div id="board">
     {this.state.gameState.map((row,rowIndex)=>(
       <GridRow 
       row={row}
        rowIndex={rowIndex} 
        handlePlayerClick={this.handlePlayerClick}
        />
     ))}
      </div> 
      <Footer turn={this.state.playerTurn}/>
      </div>
      
    );
  }
}



export default App;
