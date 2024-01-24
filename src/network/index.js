import { URL } from "./URL/url.js";
import { RequestServer } from "./request/server.js";
import { IP } from "./ip/ip.js";
import { WebWorker } from "./webWorker/webWorker.js";

/**
 * Network module containing utility classes for URLs, server requests, and IP addresses.
 * @namespace
 * @property {URL} URL - URL utility class.
 * @property {RequestServer} RequestServer - Class for making server requests.
 * @property {IP} IP - Utility class for handling IP addresses.
 */
const network = {
    /**
     * Utility class for working with URLs.
     * @class
     */
    URL,

    /**
     * Utility class for making AJAX requests and handling JSONP and Fetch API.
     * @class
     */
    RequestServer,

    /**
     * Utility class for working with IP addresses in both IPv4 and IPv6 formats.
     * @class
     */
    IP,

    /**
     * Utility functions for working with web workers.
     * @class
     */
    WebWorker
};

export default network;
