// TEST MATRICES
const matrix0 = [[1, 2, 3]];
const matrix1 = [[1], [2], [3]];
const matrix2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
const matrix6 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
];
const matrix7 = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
];
const matrix = [];
const matrix10 = [1];
const matrixAlpha = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
export const matrices = [
  {
    value: 0,
    label: "1x3",
    m: matrix0,
  },
  {
    value: 1,
    label: "3x1",
    m: matrix1,
  },
  {
    value: 2,
    label: "3x2",
    m: matrix2,
  },
  {
    value: 3,
    label: "3x3",
    m: matrix3,
  },
  {
    value: 4,
    label: "3x4",
    m: matrix4,
  },

  {
    value: 5,
    label: "5x4",
    m: matrix5,
  },

  {
    value: 6,
    label: "6x4",
    m: matrix6,
  },

  {
    value: 7,
    label: "5x8",
    m: matrix7,
  },

  {
    value: 8,
    label: "Alpha 3x3",
    m: matrixAlpha,
  },

  {
    value: 9,
    label: "Empty matrix",
    m: matrix,
  },
  /* {
    value: 10,
    label: "Single element",
    m: matrix10,
  }, */
];
