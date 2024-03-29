/*
 *Copyright (c) 2024 Awedde
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
 * Utility class for manipulating device storage.
 * @class
 */
export class DeviceStorage {
    /**
     * Get the total storage capacity of the device.
     * @returns {Promise<number>} - A promise that resolves with the total storage capacity in bytes.
     */
    static async getTotalStorageCapacity() {
        const storageInfo = await navigator.storage.estimate();
        return storageInfo.quota;
    }
    /**
     * Get the used storage space on the device.
     * @returns {Promise<number>} - A promise that resolves with the used storage space in bytes.
     */
    static async getUsedStorageSpace() {
        const storageInfo = await navigator.storage.estimate();
        return storageInfo.usage;
    }
    /**
     * Get the available storage space on the device.
     * @returns {Promise<number>} - A promise that resolves with the available storage space in bytes.
     */
    static async getAvailableStorageSpace() {
        const storageInfo = await navigator.storage.estimate();
        return storageInfo.quota - storageInfo.usage;
    }
    /**
     * Check if there is enough free space on the device for a given amount.
     * @param {number} requiredSpace - The required space in bytes.
     * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating if there is enough free space.
     */
    static async hasEnoughFreeSpace(requiredSpace) {
        return DeviceStorageManager.getAvailableStorageSpace().then((availableSpace) => availableSpace >= requiredSpace);
    }
    /**
     * Get the storage type of the device (e.g., 'temporary', 'persistent').
     * @returns {Promise<string>} - A promise that resolves with the storage type.
     */
    static async getStorageType() {
        const persisted = await navigator.storage.persisted();
        return (persisted ? 'persistent' : 'temporary');
    }
    /**
     * Request persistent storage on the device.
     * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating if the request was successful.
     */
    static async requestPersistentStorage() {
        if (navigator.storage && navigator.storage.persist) {
            const granted = await navigator.storage.persist();
            return granted === true;
        }
        return Promise.resolve(false);
    }
    /**
     * Get the default quota for persistent storage.
     * @returns {Promise<number>} - A promise that resolves with the default quota for persistent storage in bytes.
     */
    static async getDefaultPersistentStorageQuota() {
        const persisted = await navigator.storage.persisted();
        if (persisted) {
            return navigator.storage.persist().then((granted) => (granted ? 0 : -1));
        }
        return -1;
    }
}
