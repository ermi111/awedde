/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for manipulating both local and session storage.
 */
export class BrowserStorage {
    /**
     * Sets a key-value pair in local storage.
     * @param {string} key - The key for the storage item.
     * @param {string} value - The value to be stored.
     */
    static setLocal(key: string, value: string): void;
    /**
     * Gets the value associated with a key from local storage.
     * @param {string} key - The key for the storage item.
     * @returns {string|null} - The stored value or null if the key is not found.
     */
    static getLocal(key: string): string | null;
    /**
     * Removes a key-value pair from local storage.
     * @param {string} key - The key for the storage item to be removed.
     */
    static removeLocal(key: string): void;
    /**
     * Clears all key-value pairs from local storage.
     */
    static clearLocal(): void;
    /**
     * Sets a key-value pair in session storage.
     * @param {string} key - The key for the storage item.
     * @param {string} value - The value to be stored.
     */
    static setSession(key: string, value: string): void;
    /**
     * Gets the value associated with a key from session storage.
     * @param {string} key - The key for the storage item.
     * @returns {string|null} - The stored value or null if the key is not found.
     */
    static getSession(key: string): string | null;
    /**
     * Removes a key-value pair from session storage.
     * @param {string} key - The key for the storage item to be removed.
     */
    static removeSession(key: string): void;
    /**
     * Clears all key-value pairs from session storage.
     */
    static clearSession(): void;
    /**
     * Retrieves the key at the specified index from local storage.
     * @param {number} index - The index of the key to retrieve.
     * @returns {string|null} - The key or null if the index is out of bounds.
     */
    static getLocalKeyByIndex(index: number): string | null;
    /**
     * Retrieves the key at the specified index from session storage.
     * @param {number} index - The index of the key to retrieve.
     * @returns {string|null} - The key or null if the index is out of bounds.
     */
    static getSessionKeyByIndex(index: number): string | null;
    /**
     * Retrieves the number of key-value pairs stored in local storage.
     * @returns {number} - The number of key-value pairs.
     */
    static getLocalLength(): number;
    /**
     * Retrieves the number of key-value pairs stored in session storage.
     * @returns {number} - The number of key-value pairs.
     */
    static getSessionLength(): number;
    /**
     * Checks if a key exists in local storage.
     * @param {string} key - The key to check for existence.
     * @returns {boolean} - True if the key exists, false otherwise.
     */
    static isLocalKeyExists(key: string): boolean;
    /**
     * Checks if a key exists in session storage.
     * @param {string} key - The key to check for existence.
     * @returns {boolean} - True if the key exists, false otherwise.
     */
    static isSessionKeyExists(key: string): boolean;
    /**
     * Retrieves all keys stored in local storage.
     * @returns {Array<string>} - An array containing all keys in local storage.
     */
    static getAllLocalKeys(): Array<string>;
    /**
     * Retrieves all keys stored in session storage.
     * @returns {Array<string>} - An array containing all keys in session storage.
     */
    static getAllSessionKeys(): Array<string>;
    /**
     * Retrieves all values stored in local storage.
     * @returns {Array<string>} - An array containing all values in local storage.
     */
    static getAllLocalValues(): Array<string>;
    /**
     * Retrieves all values stored in session storage.
     * @returns {Array<string>} - An array containing all values in session storage.
     */
    static getAllSessionValues(): Array<string>;
    /**
     * Retrieves all key-value pairs stored in local storage.
     * @returns {Object} - An object containing all key-value pairs in local storage.
     */
    static getAllLocalItems(): any;
    /**
     * Retrieves all key-value pairs stored in session storage.
     * @returns {Object} - An object containing all key-value pairs in session storage.
     */
    static getAllSessionItems(): any;
}
