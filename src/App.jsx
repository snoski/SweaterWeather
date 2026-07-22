import { useState, useEffect } from 'react';
import './App.css';

//Components
import ColorRow from './components/ColorRow.jsx';

//Custom Hooks
import getNewColor from './hooks/getNewColor.js';

function App() {

  //establish state
  const [color, setColor] = useState({
    r:0,
    g:0,
    b:80
  });

  //speed limit of vertical color change
  const [maxChgY, setMaxChgY] = useState({
    r:4,
    g:4,
    b:4
  });

  //speed limit of horizontal color change
  const [maxChgX, setMaxChgX] = useState({
    r:4,
    g:4,
    b:4
  });
  
  const [numRows, setNumRows] = useState(480);
  const [numCols, setNumCols] = useState(400);
  
  //generate row props
  const rowProps = [{color:color,maxChgX:maxChgX,maxChgY:maxChgY,numCols:numCols,row:0}];
  for (let i = 1; i < (numRows); i++) {
    rowProps.push({
      color: getNewColor(rowProps[i-1].color,maxChgY),
      maxChgX:maxChgX,
      maxChgY:maxChgY,
      numCols:numCols,
      row:i});
  }
  
  //render the app
  return (
    <>
      {rowProps.map((props,index) => (
        <ColorRow 
          color={props.color} 
          maxChg={props.maxChgX}
          numCols={numCols}
          numRows={numRows}
          row={props.row}
          key={index}
          />
      ))}
    </>
  )
}

export default App;
