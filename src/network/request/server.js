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
 * Utility class for making AJAX requests and handling JSONP and Fetch API.
 * @class
 */
export class RequestServer {
    /**
     * Makes an AJAX request with the provided options.
     * @param {Object} options - The options for the AJAX request.
     */
    static ajax(options) {}

    /**
     * Makes a GET request.
     * @param {string} url - The URL for the GET request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static get(url, data, callback) {
        const xhr = new XMLHttpRequest();

        // Constructing the query string from the data object
        const queryString = Object.entries(data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
    
        // Appending the query string to the URL if data is provided
        const fullUrl = data ? `${url}?${queryString}` : url;
    
        xhr.open('GET', fullUrl, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Successful response, invoke the callback with the parsed response
                    callback(JSON.parse(xhr.responseText));
                } else {
                    // Error response, invoke the callback with null
                    callback(null);
                }
            }
        };
    
        xhr.send();
    
    }

    /**
     * Makes a POST request.
     * @param {string} url - The URL for the POST request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static post(url, data, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Successful response, invoke the callback with the parsed response
                    callback(JSON.parse(xhr.responseText));
                } else {
                    // Error response, invoke the callback with null
                    callback(null);
                }
            }
        };

        // Convert the data object to a JSON string and send it
        xhr.send(JSON.stringify(data));
    }

    /**
     * Makes a PUT request.
     * @param {string} url - The URL for the PUT request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static put(url, data, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Successful response, invoke the callback with the parsed response
                    callback(JSON.parse(xhr.responseText));
                } else {
                    // Error response, invoke the callback with null
                    callback(null);
                }
            }
        };

        // Convert the data object to a JSON string and send it
        xhr.send(JSON.stringify(data));
    }

    /**
     * Makes a PATCH request.
     * @param {string} url - The URL for the PATCH request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static patch(url, data, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('PATCH', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Successful response, invoke the callback with the parsed response
                    callback(JSON.parse(xhr.responseText));
                } else {
                    // Error response, invoke the callback with null
                    callback(null);
                }
            }
        };

        // Convert the data object to a JSON string and send it
        xhr.send(JSON.stringify(data));
    }

    /**
     * Makes a DELETE request.
     * @param {string} url - The URL for the DELETE request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static deleteRequest(url, data, callback) {
        const xhr = new XMLHttpRequest();

        // Constructing the query string from the data object
        const queryString = Object.entries(data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');

        // Appending the query string to the URL if data is provided
        const fullUrl = data ? `${url}?${queryString}` : url;

        xhr.open('DELETE', fullUrl, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Successful response, invoke the callback with the parsed response
                    callback(JSON.parse(xhr.responseText));
                } else {
                    // Error response, invoke the callback with null
                    callback(null);
                }
            }
        };

        xhr.send();
    }

    /**
     * Makes a JSONP request.
     * @param {string} url - The URL for the JSONP request.
     * @param {function} callback - The callback function to handle the response.
     */
    static jsonp(url, callback) {
        const script = document.createElement('script');
        script.src = url;

        // Attach the script to the document to initiate the JSONP request
        document.head.appendChild(script);

        // Define the callback function in the global scope
        window.jsonpCallback = function (data) {
            // Invoke the provided callback with the received data
            callback(data);

            // Remove the script element after the callback
            document.head.removeChild(script);

            // Clean up the global callback function
            delete window.jsonpCallback;
        };
    }

    /**
     * Makes a Fetch API request for JSON.
     * @param {string} url - The URL for the Fetch request.
     * @param {Object} options - Additional options for the Fetch request.
     */
    static fetchJson(url, options) {
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Invoke the provided callback with the parsed response
                callback(data);
            })
            .catch(error => {
                // Invoke the callback with an error if the request fails
                callback(null, error);
            });
    }
}
