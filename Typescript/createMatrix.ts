/**
    * Creates a matrix with the specified dimensions.
    * @param {number} rows The number of rows in the matrix
    * @param {number} columns The number of columns in the matrix
    * @param {any} defaultValue The default value for each cell in the matrix
    * @returns {any[][]} The matrix with the specified dimensions
*/

export function createMatrix(rows: number, columns: number, defaultValue: any): any[][] {
    return new Array(rows).fill(new Array(rows).fill(defaultValue))
}