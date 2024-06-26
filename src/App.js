import "./App.css";
import React, { useState } from "react";
import { matrices } from "./matrixdata"; // test data for user selection

//import Grid from "react-css-grid";
const RIGHTARROW = "\u2192";
const LEFTARROW = "\u2190";
const UPARROW = "\u2191";
const DOWNARROW = "\u2193";
let spiral = []; // simple array to contain the spiral
let viz = []; // so it can be vizualised

//Visualize the matrix (which is held in the viz variable)
function ShowViz() {
  let m = viz.length;
  if (m === 0) {
    return (
      <>
        <h3>Empty Viz!</h3>
      </>
    );
  }
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
  viz = [];
  spiral = [];
  if (matrix.length === 0) {
    return (
      <>
        <h3>Empty!</h3>
      </>
    );
  }

  let m = matrix.length;
  let n = matrix[0].length;
  let maxX = n - 1;
  let maxY = m - 1;
  let minX = 0;
  let minY = 0;

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

const Select = ({ value, options, onChange }) => {
  return (
    <select name="Tests" value={value} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

// let user pick which matrix to show and viz
function SelectMatrix() {
  const [selectedMatrix, setSelectedMatrix] = useState(3); // start with the 3rd matrix rather than the first boring one

  const handleChange = (e) => {
    setSelectedMatrix(e.target.value);
  };

  return (
    <>
      <h2>Select a test matrix</h2>

      <form>
        <div className="h4 text-left mb-4 container-fluid">
          <label>
            <span>Select dimensions (m,n) </span>
            <Select
              value={selectedMatrix}
              options={matrices}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>

      <SpiralMatrix matrix={matrices[selectedMatrix].m} />
      <ShowViz />
    </>
  );
}
function App() {
  return (
    <div>
      <h1>Coding Challenge: Spiral Matrix</h1>
      <h4>
        Given an m x n matrix, return all elements of the matrix in spiral
        order.
      </h4>
      <SelectMatrix />
    </div>
  );
}

export default App;
