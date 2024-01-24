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
 * Utility functions for working with local and session storage.
 * @class
 */
export class Storage {
    /**
     * Set a value in local storage.
     * @param {string} key - The key for the storage item.
     * @param {string} value - The value to be stored.
     */
    static localStorageSet(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Get a value from local storage.
     * @param {string} key - The key for the storage item.
     * @returns {any} - The stored value.
     */
    static localStorageGet(key) {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }

    /**
     * Remove a value from local storage.
     * @param {string} key - The key for the storage item to be removed.
     */
    static localStorageRemove(key) {
        localStorage.removeItem(key);
    }

    /**
     * Clear all items from local storage.
     */
    static localStorageClear() {
        localStorage.clear();
    }

    /**
     * Set a value in session storage.
     * @param {string} key - The key for the storage item.
     * @param {string} value - The value to be stored.
     */
    static sessionStorageSet(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Get a value from session storage.
     * @param {string} key - The key for the storage item.
     * @returns {any} - The stored value.
     */
    static sessionStorageGet(key) {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }

    /**
     * Remove a value from session storage.
     * @param {string} key - The key for the storage item to be removed.
     */
    static sessionStorageRemove(key) {
        sessionStorage.removeItem(key);
    }

    /**
     * Clear all items from session storage.
     */
    static sessionStorageClear() {
        sessionStorage.clear();
    }
}
