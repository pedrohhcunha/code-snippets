/**
    * Copy a specified text to the clipboard
    * @param {string} text The text to copy
    * @returns {Promise<void>} A promise that resolves when the text has been copied to the clipboard
*/

export async function copyToClipboard(text: string): Promise<void> {
    await navigator.clipboard.writeText(text)
}