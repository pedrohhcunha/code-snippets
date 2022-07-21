/**
    * Create a promise that resolves after a delay.
    * @param {number} milliseconds The time to delay the promise in milliseconds
    * @returns {Promise<void>} A promise that resolves after the specified delay
*/

export async function delay (milliseconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}