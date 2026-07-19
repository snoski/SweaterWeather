  import useNewDir from '../hooks/useNewDir.js';

const useNewColor = (color,maxChg) => {
    const newColor = {};   
    newColor.r = Math.min(Math.max(color.r + (useNewDir() * maxChg.r * Math.random()),0),255); 
    newColor.g = Math.min(Math.max(color.g + (useNewDir() * maxChg.g * Math.random()),0),255); 
    newColor.b = Math.min(Math.max(color.b + (useNewDir() * maxChg.b * Math.random()),0),255);

    return newColor;
  }

  export default useNewColor;