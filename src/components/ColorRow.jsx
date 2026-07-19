import { useState, useEffect } from 'react'

function ColorRow(props) {
  

  const getDir = () => Math.sign(0.5 - Math.random());

  // useEffect(() => {
  //   console.log("ColorRow props: ",props);
  // },[props]);


  const getNewColor = (color,maxChg) => {
    const newColor = {};   
    newColor.r = Math.min(Math.max(color.r + (getDir() * maxChg.r * Math.random()),0),255); 
    newColor.g = Math.min(Math.max(color.g + (getDir() * maxChg.g * Math.random()),0),255); 
    newColor.b = Math.min(Math.max(color.b + (getDir() * maxChg.b * Math.random()),0),255);

    return newColor;
  }

  const colorArr = [props.color];
  for (let i = 1; i < (props.numCols + 1); i++) {
    colorArr.push(getNewColor(colorArr[i-1],props.maxChg));
  }
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      {colorArr.map((renderColor) => (
        <div style={{height: "20px", width: "10vw", backgroundColor:`rgb(
          ${renderColor.r},
          ${renderColor.g},
          ${renderColor.b}
        )`}}>
        </div>
      ))}
    </div>
  )
}

export default ColorRow;
