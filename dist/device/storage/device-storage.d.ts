/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for manipulating device storage.
 * @class
 */
export class DeviceStorage {
    /**
     * Get the total storage capacity of the device.
     * @returns {Promise<number>} - A promise that resolves with the total storage capacity in bytes.
     */
    static getTotalStorageCapacity(): Promise<number>;
    /**
     * Get the used storage space on the device.
     * @returns {Promise<number>} - A promise that resolves with the used storage space in bytes.
     */
    static getUsedStorageSpace(): Promise<number>;
    /**
     * Get the available storage space on the device.
     * @returns {Promise<number>} - A promise that resolves with the available storage space in bytes.
     */
    static getAvailableStorageSpace(): Promise<number>;
    /**
     * Check if there is enough free space on the device for a given amount.
     * @param {number} requiredSpace - The required space in bytes.
     * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating if there is enough free space.
     */
    static hasEnoughFreeSpace(requiredSpace: number): Promise<boolean>;
    /**
     * Get the storage type of the device (e.g., 'temporary', 'persistent').
     * @returns {Promise<string>} - A promise that resolves with the storage type.
     */
    static getStorageType(): Promise<string>;
    /**
     * Request persistent storage on the device.
     * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating if the request was successful.
     */
    static requestPersistentStorage(): Promise<boolean>;
    /**
     * Get the default quota for persistent storage.
     * @returns {Promise<number>} - A promise that resolves with the default quota for persistent storage in bytes.
     */
    static getDefaultPersistentStorageQuota(): Promise<number>;
}
