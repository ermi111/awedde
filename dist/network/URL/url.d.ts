/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with URLs.
 * @class
 */
export class URLAwedde {
    /**
     * Parses a query string and returns an object containing the parameters.
     *
     * @param {string} queryString - The query string to parse.
     * @returns {object} - An object containing key-value pairs of parameters.
     */
    static parseQueryStringParameters(queryString: string): object;
    /**
     * Replaces or adds a query string parameter in a URL.
     *
     * @param {string} url - The URL to modify.
     * @param {string} key - The parameter key to replace or add.
     * @param {string} value - The new value for the parameter.
     * @returns {string} - The modified URL.
     */
    static replaceQueryStringParameter(url: string, key: string, value: string): string;
    /**
     * Removes a query string parameter from a URL.
     *
     * @param {string} url - The URL to modify.
     * @param {string} key - The parameter key to remove.
     * @returns {string} - The modified URL.
     */
    static removeQueryStringParameter(url: string, key: string): string;
    /**
     * Merges two URLs by combining their components.
     *
     * @param {string} baseURL - The base URL.
     * @param {string} relativeURL - The relative URL to be merged with the base URL.
     *
     * @returns {string} The merged URL.
     */
    static mergeURL(baseURL: string, relativeURL: string): string;
    /**
     * Parses a URL into an object.
     * @param {string} url - The URL to parse.
     * @returns {URL} - The URL object.
     */
    static parseURL(url: string): URL;
    /**
     * Serializes a URL object into a string.
     * @param {URL} urlObject - The URL object to serialize.
     * @returns {string} - The serialized URL.
     */
    static serializeURL(urlObject: URL): string;
    /**
     * Checks if a given string is a valid URL.
     * @param {string} url - The URL to validate.
     * @returns {boolean} - True if the URL is valid, false otherwise.
     */
    static isValidURL(url: string): boolean;
}
