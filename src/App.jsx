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

  // const getDir = () => Math.sign(0.5 - Math.random());

  // // useEffect(() => {
  // //   console.log("old color: ",color);
  // //   console.log("")
  // // },[color]);


  // const getNewColor = (color,maxChg) => {
  //   const newColor = {};   
  //   newColor.r = Math.min(Math.max(color.r + (getDir() * maxChg.r * Math.random()),0),255); 
  //   newColor.g = Math.min(Math.max(color.g + (getDir() * maxChg.g * Math.random()),0),255); 
  //   newColor.b = Math.min(Math.max(color.b + (getDir() * maxChg.b * Math.random()),0),255);

  //   return newColor;
  // }

  const rowProps = [];

  for (let i = 1; i < (rows + 1); i++) {
    rowProps.push({color:color,maxChg:maxChg,numCols:numCols,row:i});
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
