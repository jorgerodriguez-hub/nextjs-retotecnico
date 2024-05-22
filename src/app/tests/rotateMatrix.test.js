import rotateMatrixAnticlockwise from '../functions/rotateMatrix';

describe('rotateMatrixAnticlockwise', () => {
  test('debe girar una matriz en sentido antihorario', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    const rotatedMatrix = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
    ];

    expect(rotateMatrixAnticlockwise(matrix)).toEqual(rotatedMatrix);
  });

  test('debería devolver una matriz vacía para una matriz vacía', () => {
    const matrix = [];

    expect(rotateMatrixAnticlockwise(matrix)).toEqual([]);
  });

  test('debería arrojar un error para matrices no cuadradas', () => {
    const matrix = [
      [1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    expect(() => rotateMatrixAnticlockwise(matrix)).toThrow();
  });
});
