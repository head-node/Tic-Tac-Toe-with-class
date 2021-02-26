import React from "react";
import "./Grid-Row.css";
import GridItem from "../Griditem";

class GridRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    let gridRow = [<GridItem />, <GridItem />, <GridItem />];
    return (
      <div className="grid-row">
        {this.props.row.map((col, colIndex) => (
          <GridItem 
          handlePlayerClick={this.props.handlePlayerClick}
          rowIndex={this.props.rowIndex} colIndex={colIndex} colText={col} />
        ))}
      </div>
    );
  }
}
export default GridRow;
