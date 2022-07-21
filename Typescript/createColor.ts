/**
    * Creates a random hexadecimal color code.
    * @returns {string} The random color code.
*/

export function createColor(): string {
    return '#' + Math.floor(Math.random() * 0xffffff ).toString(16).padEnd(6, '0')
}