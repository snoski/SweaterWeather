import { useState, useEffect } from 'react';
import useNewColor from '../hooks/useNewColor.js';

function ColorRow(props) {

  const colorArr = [props.color];
  for (let i = 1; i < (props.numCols + 1); i++) {
    colorArr.push(useNewColor(colorArr[i-1],props.maxChg));
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
