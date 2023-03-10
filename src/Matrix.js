import React, { useState } from 'react';

function Box({ index, handleClick, color }) {
    return (
        <td
            onClick={() => handleClick(index)}
            style={{
                height: '40px',
                width: '160px',
                border: '1px solid black',
                backgroundColor: color,
            }}
        ></td>
    );
}

const Matrix = () => {
    const [matrix, setMatrix] = useState(Array(16).fill(false));
    const [redBoxIndices, setRedBoxIndices] = useState([]);

    const handleClick = (index) => {
        let updatedRedBoxIndices;

        if (redBoxIndices.includes(index)) {
            updatedRedBoxIndices = redBoxIndices.filter((i) => i !== index);
        } else {
            updatedRedBoxIndices = redBoxIndices.slice(-1);
            updatedRedBoxIndices.push(index);
        }

        setRedBoxIndices(updatedRedBoxIndices);

        const updatedMatrix = matrix.map((value, i) =>
            updatedRedBoxIndices.includes(i)
                ? true 
                : false 
        );

        setMatrix(updatedMatrix);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '200px',
            }}
        >
            <table style={{ borderCollapse: 'collapse', borderSpacing: '0' }}>
                <tbody>
                    {[0, 4, 8, 12].map((rowIndex) => (
                        <tr key={rowIndex} style={{ height: '4px' }}>
                            {[0, 1, 2, 3].map((columnIndex) => (
                                <Box
                                    key={rowIndex + columnIndex}
                                    index={rowIndex + columnIndex}
                                    handleClick={handleClick}
                                    color={matrix[rowIndex + columnIndex] ? 'red' : 'blue'}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matrix;