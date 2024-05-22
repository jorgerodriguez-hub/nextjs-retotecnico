'use client';

import { useState } from 'react';
import rotateMatrixAnticlockwise from './functions/rotateMatrix';

const RotateMatrixPage = () => {
  const [inputMatrix, setInputMatrix] = useState('');
  const [outputMatrix, setOutputMatrix] = useState([]);

  const handleInputChange = (event) => {
    setInputMatrix(event.target.value);
  };

  const handleRotate = () => {
    const matrix = JSON.parse(inputMatrix);
    const rotatedMatrix = rotateMatrixAnticlockwise(matrix);
    setOutputMatrix(rotatedMatrix);
  };

  return (
    <div className="container">
      <h1 className="mb-3">Rotar matriz en sentido horario</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Ingresa la matriz. Ejemplo: [[1,2], [3,4]]"
        value={inputMatrix}
        onChange={handleInputChange}
      />
      <button className="btn-rotate p-5" onClick={handleRotate}>Rotar</button>

      {outputMatrix.length > 0 && (
        <div>
          <h2>Matriz Original</h2>
          <text>{JSON.stringify(JSON.parse(inputMatrix), null, 2)}</text>

          <h2>Matriz Rotada</h2>
          <text>{JSON.stringify(outputMatrix, null, 2)}</text>
        </div>
      )}
    </div>
  );
};

export default RotateMatrixPage;