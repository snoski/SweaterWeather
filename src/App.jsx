import { useState, useEffect } from 'react';
import './App.css';

//Components
import ColorRow from './components/ColorRow.jsx';

//Custom Hooks
import getNewColor from './hooks/getNewColor.js';

function App() {

  //establish state
  const [color, setColor] = useState({
    r:80,
    g:80,
    b:128
  });
  const [maxChg, setMaxChg] = useState({
    r:8,
    g:8,
    b:8
  });
  const [numRows, setNumRows] = useState(768);
  const [numCols, setNumCols] = useState(640);
  
  //generate row props
  const rowProps = [{color:color,maxChg:maxChg,numCols:numCols,row:0}];
  for (let i = 1; i < (numRows); i++) {
    rowProps.push({
      color: getNewColor(rowProps[i-1].color,maxChg),
      maxChg:maxChg,
      numCols:numCols,
      row:i});
  }
  
  //render the app
  return (
    <>
      {rowProps.map((props,index) => (
        <ColorRow 
          color={props.color} 
          maxChg={props.maxChg} 
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
