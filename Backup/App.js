import "./App.css";
import React, { useState } from "react";
//import Grid from "react-css-grid";
const RIGHTARROW = "\u2192";
const LEFTARROW = "\u2190";
const UPARROW = "\u2191";
const DOWNARROW = "\u2193";
let spiral = []; // simple array to contain the spiral
let viz = []; // so it can be vizualised

function ShowViz() {
  let m = viz.length;
  let n = viz[0].length;
  console.log("VIZ: Mxn", m, n);
  document.documentElement.style.setProperty("--colNum", n); // change the value of the CSS variable colNum
  const printMatrix = (
    <div className="wrapper">
      {viz.map((items) => {
        return (
          <>
            {items.map((subItems) => {
              return <div className="box">{subItems}</div>;
            })}
          </>
        );
      })}
    </div>
  );

  return (
    <>
      <h2>Matrix viz</h2>
      <div className="wrapper">
        Size (m x n): {m / 2}x{n / 2}
        <span>{printMatrix}</span>
      </div>
    </>
  );
}
function ShowMatrix({ matrix }) {
  //const matrix = props.matrix; // pull out the matrix from the props
  let m = matrix.length;
  let n = matrix[0].length;
  //console.log("Mxn", m, n);
  const printMatrix = (
    <div className="wrapper">
      {matrix.map((items) => {
        return (
          <>
            {items.map((subItems) => {
              return <div className="box">{subItems}</div>;
            })}
          </>
        );
      })}
    </div>
  );

  return (
    <>
      <h2>Matrix</h2>
      <div>
        Size (m x n): {m}x{n}
        <p>{printMatrix}</p>
      </div>
    </>
  );
}

function SpiralMatrix(props) {
  const matrix = props.matrix; // pull out the matrix from the props
  let m = matrix.length;
  let n = matrix[0].length;
  let maxX = n - 1;
  let maxY = m - 1;
  let minX = 0;
  let minY = 0;
  spiral = [];
  viz = [];

  //Set up Viz that is twice the size of the input matrix to allow for the arrows
  viz = new Array(m * 2).fill(" ");
  for (let i = 0; i < m * 2; i++) viz[i] = new Array(n * 2).fill(" ");

  while (minY <= maxY && minX <= maxX) {
    // Go across the matrix til the end
    for (let i = minX; i <= maxX; i++) {
      spiral.push(matrix[minY][i]);
      console.log("Right:", i);
      //spiral.push(RIGHTARROW);
      viz[minY * 2][i * 2] = matrix[minY][i];
      if (i < maxX) viz[minY * 2][i * 2 + 1] = RIGHTARROW; // Won't be needed if at the end of the row (it must be down)
    }

    // Jump down to the next row
    minY++;
    // Now go down to the last item in that column
    for (let i = minY; i <= maxY; i++) {
      spiral.push(matrix[i][maxX]);
      console.log("Down:", i);
      //spiral.push(DOWNARROW);
      viz[i * 2][maxX * 2] = matrix[i][maxX];
      viz[i * 2 - 1][maxX * 2] = DOWNARROW;
    }

    // Only go back a column if you've got somewhere to go back to
    if (minY <= maxY) {
      maxX--;
      // Now run back to the starting point, minX
      for (let i = maxX; i >= minX; i--) {
        spiral.push(matrix[maxY][i]);
        //spiral.push(LEFTARROW);
        console.log("Left:", i);
        viz[maxY * 2][i * 2] = matrix[maxY][i];
        viz[maxY * 2][i * 2 + 1] = LEFTARROW;
      }
    }

    // Only go back up a row if you've gone across
    if (minX <= maxX) {
      maxY--;
      // Keep going up til the minY reached
      for (let i = maxY; i >= minY; i--) {
        spiral.push(matrix[i][minX]);
        //spiral.push(UPARROW);
        console.log("Up:", i);
        viz[i * 2][minX * 2] = matrix[i][minX];
        viz[i * 2 + 1][minX * 2] = UPARROW;
      }
    }

    // if there's another number to go add in a right arrow
    console.log("minX, MaxX, minY", minX, maxX, minY);
    if (minX < maxX && minY <= maxY) viz[minY * 2][minX * 2 + 1] = RIGHTARROW;
    // ... and in again
    minX++;
  }

  console.log("NEW VIZ:", viz);
  for (let i = 0; i < m * 2; i++) {
    for (let j = 0; j < n * 2; j++) console.log(viz[i][j]);
  }
  console.log("SPIZ:", spiral);

  return (
    <div>
      <h2>Spiral output</h2>
      <p>
        {spiral.map((item) => {
          return <>{item} </>;
        })}
      </p>
    </div>
  );
}

// TEST MATRICES
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const matrix3 = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
];

const matrix4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix5 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const matrix6 = [[1, 2, 3]];

const matrix7 = [[1], [2], [3]];

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const matrix8 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const matrixAlpha = [
  ["A", "B"],
  ["C", "D"],
  ["E", "F"],
];

function App() {
  return (
    <div>
      <h1>Coding Challenge: Spiral Matrix</h1>

      <SpiralMatrix matrix={matrixAlpha} />
      <ShowViz />
    </div>
  );
}

export default App;
