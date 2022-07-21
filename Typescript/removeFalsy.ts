/**
    * Remove falsy values from an array.
    * @param {Array} arr The array to remove falsy values from
    * @returns {Array} The array without falsy values
*/

export function removeFalsy(arr: any[]): any[] {
    return arr.filter(Boolean)
}