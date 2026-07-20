import getNewDir from './getNewDir.js';

const getNewColor = (color,maxChg) => {
    const newColor = {};   
    newColor.r = Math.min(Math.max(color.r + (getNewDir() * maxChg.r * Math.random()),0),255); 
    newColor.g = Math.min(Math.max(color.g + (getNewDir() * maxChg.g * Math.random()),0),255); 
    newColor.b = Math.min(Math.max(color.b + (getNewDir() * maxChg.b * Math.random()),0),255);

    return newColor;
  }

  export default getNewColor;