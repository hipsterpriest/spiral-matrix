import "./App.css";
const RIGHTARROW = "\u2192";
const LEFTARROW = "\u2190";
const UPARROW = "\u2191";
const DOWNARROW = "\u2193";
const spiral = [];

function ShowMatrix({ matrix }) {
  //const matrix = props.matrix; // pull out the matrix from the props
  let m = matrix.length;
  let n = matrix[0].length;
  console.log("Mxn", m, n);
  const printMatrix = (
    <div>
      {matrix.map((items) => {
        return (
          <section>
            {items.map((subItems) => {
              return (
                <>
                  {subItems < 10 ? "\u00A0\u00A0" : ""}
                  {subItems}{" "}
                </>
              );
            })}
          </section>
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

  const viz = [];
  const board = new Array();
  let rows = m * 2;
  for (var i = 0; i < rows; i++) board[i] = new Array(".", ".", ".");

  while (minY <= maxY && minX <= maxX) {
    // Go across the matrix til the end
    for (let i = minX; i <= maxX; i++) {
      spiral.push(matrix[minY][i]);
      board[minY][i] = matrix[minY][i];

      console.log(matrix[minY][i], ":", minX, minY, maxX, maxY);
    }

    // Jump down to the next row
    minY++;
    // Now go down to the last item in that column
    for (let i = minY; i <= maxY; i++) {
      spiral.push(matrix[i][maxX]);
      spiral.push(DOWNARROW);
      console.log("2.", matrix[i][maxX], ":", minX, minY, maxX, maxY);
    }

    // Only go back a column if you've got somewhere to go back to
    if (minY <= maxY) {
      maxX--;
      // Now run back to the starting point, minX
      for (let i = maxX; i >= minX; i--) {
        spiral.push(matrix[maxY][i]);
        spiral.push(LEFTARROW);
        console.log("3.", matrix[maxY][i], ":", minX, minY, maxX, maxY);
      }
    }

    // Only go back up a row if you've gone across
    if (minX <= maxX) {
      maxY--;
      // Keep going up til the minY reached
      for (let i = maxY; i >= minY; i--) {
        spiral.push(matrix[i][minX]);
        spiral.push(UPARROW);
        console.log("4.", matrix[i][minX], ":", minX, minY, maxX, maxY);
      }
    }

    // ... and in again
    minX++;
  }

  console.log("VIZ:", viz);
  console.log("SPIZ:", spiral);
  console.log("BOARD:", board);
  return (
    <div>
      <h2>Spiral Output</h2>
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

function App() {
  return (
    <div>
      <h1>Coding Challenge: Spiral Matrix</h1>
      <ShowMatrix matrix={matrix3} />
      <SpiralMatrix matrix={matrix3} />
    </div>
  );
}
//<ShowMatrix matrix={spiral} />
export default App;



import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          X <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
