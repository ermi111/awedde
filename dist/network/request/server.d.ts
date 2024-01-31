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
     * @param {string} options.method - The HTTP method for the request (e.g., 'GET', 'POST').
     * @param {string} options.url - The URL to make the request to.
     * @param {Object} [options.headers] - Additional headers to include in the request.
     * @param {string|FormData} [options.data] - The data to include in the request body.
     * @param {function} [options.success] - Callback function to handle a successful response.
     * @param {function} [options.error] - Callback function to handle an error response.
     */
    static ajax(options: {
        method: string;
        url: string;
        headers?: any;
        data?: string | FormData;
        success?: Function;
        error?: Function;
    }): void;
    /**
     * Makes a GET request.
     * @param {string} url - The URL for the GET request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static get(url: string, data: any, callback: Function): void;
    /**
     * Makes a POST request.
     * @param {string} url - The URL for the POST request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static post(url: string, data: any, callback: Function): void;
    /**
     * Makes a PUT request.
     * @param {string} url - The URL for the PUT request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static put(url: string, data: any, callback: Function): void;
    /**
     * Makes a PATCH request.
     * @param {string} url - The URL for the PATCH request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static patch(url: string, data: any, callback: Function): void;
    /**
     * Makes a DELETE request.
     * @param {string} url - The URL for the DELETE request.
     * @param {Object} data - The data to be sent with the request.
     * @param {function} callback - The callback function to handle the response.
     */
    static deleteRequest(url: string, data: any, callback: Function): void;
    /**
     * Makes a JSONP request.
     * @param {string} url - The URL for the JSONP request.
     * @param {function} callback - The callback function to handle the response.
     */
    static jsonp(url: string, callback: Function): void;
    /**
     * Makes a Fetch API request for JSON.
     * @param {string} url - The URL for the Fetch request.
     * @param {Object} options - Additional options for the Fetch request.
     */
    static fetchJson(url: string, options: any): void;
}
