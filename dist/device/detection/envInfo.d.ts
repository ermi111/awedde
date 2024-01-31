/**
 * Utility class for retrieving various user environment information.
 * @class - GetUtils
 */
export class EnvInfo {
    /**
     * Get the browser window size.
     * @returns {Object} - An object with 'width' and 'height' properties representing the window size.
     */
    static getBrowserWindowSize(): any;
    /**
     * Get the screen resolution.
     * @returns {Object} - An object with 'width' and 'height' properties representing the screen resolution.
     */
    static getScreenResolution(): any;
    /**
     * Get the battery status asynchronously.
     * @param {Function} callback - The callback function to receive the battery status.
     */
    static getBatteryStatus(callback: Function): void;
    /**
     * Get the network status asynchronously.
     * @param {Function} callback - The callback function to receive the network status.
     */
    static getNetworkStatus(callback: Function): void;
    /**
     * Get the device orientation asynchronously.
     * @param {Function} callback - The callback function to receive the device orientation.
     */
    static getDeviceOrientation(callback: Function): void;
    /**
     * Get the device motion asynchronously.
     * @param {Function} callback - The callback function to receive the device motion.
     */
    static getDeviceMotion(callback: Function): void;
    /**
     * Get the available media devices asynchronously.
     * @param {Function} callback - The callback function to receive the media devices.
     */
    static getMediaDevices(callback: Function): void;
    /**
     * Get the location information based on IP address asynchronously using ipinfo.io.
     * @param {string} ip - The IP address.
     * @param {Function} callback - The callback function to receive the location information.
     */
    static getLocationByIP(ip: string, callback: Function): void;
    /**
     * Get the geolocation asynchronously.
     * @param {Function} callback - The callback function to receive the geolocation.
     */
    static getGeolocation(callback: Function): void;
}
