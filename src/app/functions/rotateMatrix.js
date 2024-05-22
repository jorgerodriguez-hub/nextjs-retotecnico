const rotateMatrixAnticlockwise = (matrix) => {
  const n = matrix.length;

  if (n === 0) {
    return [];
  }

  if (!matrix.every(row => row.length === n)) {
    throw new Error('Matrix must be square');
  }

  const rotatedMatrix = [];

  for (let i = 0; i < n; i++) {
    rotatedMatrix.push([]);
    for (let j = 0; j < n; j++) {
      rotatedMatrix[i][j] = matrix[j][n - i - 1];
    }
  }

  return rotatedMatrix;
};

export default rotateMatrixAnticlockwise;