/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 * @version 2.0.0
 */
/**
 * Utility functions for working with strings.
 * @class
 */
export class String {
    /**
     * Check if a string is empty.
     * @param {string} value - The string to check.
     * @returns {boolean} - True if the string is empty, false otherwise.
     */
    static isEmptyString(value: string): boolean;
    /**
     * Trim leading and trailing whitespace from a string.
     * @param {string} value - The string to trim.
     * @returns {string} - The trimmed string.
     */
    static trimString(value: string): string;
    /**
     * Capitalize the first letter of a string.
     * @param {string} value - The string to capitalize.
     * @returns {string} - The capitalized string.
     */
    static capitalizeString(value: string): string;
    /**
     * Check if a string starts with a specific substring.
     * @param {string} mainString - The main string.
     * @param {string} searchString - The substring to check for.
     * @returns {boolean} - True if the string starts with the substring, false otherwise.
     */
    static startsWithString(mainString: string, searchString: string): boolean;
    /**
     * Check if a string ends with a specific substring.
     * @param {string} mainString - The main string.
     * @param {string} searchString - The substring to check for.
     * @returns {boolean} - True if the string ends with the substring, false otherwise.
     */
    static endsWithString(mainString: string, searchString: string): boolean;
    /**
     * Check if a string contains a specific substring.
     * @param {string} mainString - The main string.
     * @param {string} searchString - The substring to check for.
     * @returns {boolean} - True if the string contains the substring, false otherwise.
     */
    static containsString(mainString: string, searchString: string): boolean;
    /**
     * Replace all occurrences of a substring in a string.
     * @param {string} mainString - The main string.
     * @param {string} searchString - The substring to replace.
     * @param {string} replacement - The string to replace with.
     * @returns {string} - The modified string.
     */
    static replaceAllOccurrences(mainString: string, searchString: string, replacement: string): string;
    /**
     * Format a string using values.
     * @param {string} template - The string template with placeholders.
     * @param {Object} values - The values to replace placeholders in the template.
     * @returns {string} - The formatted string.
     */
    static formatString(template: string, values: any): string;
    /**
     * Generate a random string of a specified length.
     * @param {number} length - The length of the random string.
     * @returns {string} - The generated random string.
     */
    static generateRandomString(length: number): string;
}
