import { useState, useEffect } from 'react';
import './App.css';

//Components
import ColorRow from './components/ColorRow.jsx';

//Custom Hooks
import useNewColor from './hooks/useNewColor.js';

function App() {
  const [color, setColor] = useState({
    r:0,
    g:0,
    b:0
  });
  const [maxChg, setMaxChg] = useState({
    r:20,
    g:20,
    b:20
  });
  const [rows, setRows] = useState(100);
  const [numCols, setNumCols] = useState(10);
  
  const rowProps = [{color:color,maxChg:maxChg,numCols:numCols,row:0}];

  for (let i = 1; i < (rows); i++) {
    rowProps.push({
      color: useNewColor(rowProps[i-1].color,maxChg),
      maxChg:maxChg,
      numCols:numCols,
      row:i});
  }
  
  return (
    <>
      {rowProps.map((props) => (
        <ColorRow 
          color={props.color} 
          maxChg={props.maxChg} 
          numCols={props.numCols}
          row={props.row}
          />
      ))}
    </>
  )
}

export default App;
