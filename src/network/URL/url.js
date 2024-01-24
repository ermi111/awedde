/*
 *Copyright (c) 2023 Awedde
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */

/**
 * Utility class for working with URLs.
 * @class
 */
export class URL {
    /**
     * Parses a specific query string parameter from a URL.
     * @param {string} url - The URL to parse.
     * @param {string} parameter - The query string parameter to retrieve.
     * @returns {string|null} - The value of the specified parameter or null if not found.
     */
    static parseQueryStringParameter(url, parameter) {
        const urlObject = new URL(url);
        return urlObject.searchParams.get(parameter);
    }

    /**
     * Replaces a query string parameter in a URL.
     * @param {string} url - The URL to modify.
     * @param {string} parameter - The query string parameter to replace.
     * @param {string} value - The new value for the parameter.
     * @returns {string} - The modified URL.
     */
    static replaceQueryStringParameter(url, parameter, value) {
        const urlObject = new URL(url);
        urlObject.searchParams.set(parameter, value);
        return urlObject.toString();
    }

    /**
     * Removes a query string parameter from a URL.
     * @param {string} url - The URL to modify.
     * @param {string} parameter - The query string parameter to remove.
     * @returns {string} - The modified URL.
     */
    static removeQueryStringParameter(url, parameter) {
        const urlObject = new URL(url);
        urlObject.searchParams.delete(parameter);
        return urlObject.toString();
    }

    /**
     * Merges a base URL with a relative URL.
     * @param {string} baseURL - The base URL.
     * @param {string} relativeURL - The relative URL.
     * @returns {string} - The merged URL.
     */
    static mergeURL(baseURL, relativeURL) {
        const urlObject = new URL(relativeURL, baseURL);
        return urlObject.toString();
    }

    /**
     * Parses a URL into an object.
     * @param {string} url - The URL to parse.
     * @returns {URL} - The URL object.
     */
    static parseURL(url) {
        return new URL(url);
    }

    /**
     * Serializes a URL object into a string.
     * @param {URL} urlObject - The URL object to serialize.
     * @returns {string} - The serialized URL.
     */
    static serializeURL(urlObject) {
        return urlObject.toString();
    }

    /**
     * Checks if a given string is a valid URL.
     * @param {string} url - The URL to validate.
     * @returns {boolean} - True if the URL is valid, false otherwise.
     */
    static isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }
}
