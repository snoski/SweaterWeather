import getNewColor from '../hooks/getNewColor.js';

function ColorRow(props) {

  //generate color array
  const colorArr = [props.color];
  for (let i = 1; i < (props.numCols); i++) {
    colorArr.push(getNewColor(colorArr[i-1],props.maxChg));
  }

  //render the row
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      {colorArr.map((renderColor,index) => (
        <div style={{
          height: (1 / props.numRows) * 100 +"vh",
          width: (1 / props.numCols) * 100 +"vw", 
          backgroundColor:`rgb(
            ${renderColor.r},
            ${renderColor.g},
            ${renderColor.b}
          )`}}
        key={index}
        >
        </div>
      ))}
    </div>
  )
}

export default ColorRow;
