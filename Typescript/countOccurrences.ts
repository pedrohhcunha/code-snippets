/**
    * Count the number of occurrences of a value in an array
    * @param {Array} arr The array to count occurrences in
    * @param {*} value The value to count occurrences of
    * @returns {number} The number of occurrences of the value in the array
*/

export function countOccurrences(arr: any[], value: any): number {
    return arr.reduce((acc, curr) => {
        return curr === value ? acc + 1 : acc
    }, 0)
}