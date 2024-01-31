/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility functions for working with objects.
 * @class
 */
export class Obj {
    /**
     * Compare two objects for equality.
     * @param {Object} obj1 - The first object.
     * @param {Object} obj2 - The second object.
     * @returns {boolean} - True if the objects are equal, false otherwise.
     */
    static compareObjects(obj1: any, obj2: any): boolean;
    /**
     * Deep clone an object.
     * @param {Object} obj - The object to clone.
     * @returns {Object} - The cloned object.
     */
    static deepCloneObject(obj: any): any;
    /**
     * Deep merge two objects.
     * @param {Object} target - The target object.
     * @param {Object} source - The source object.
     * @returns {Object} - The merged object.
     */
    static deepMergeObjects(target: any, source: any): any;
    /**
     * Deep freeze an object.
     * @param {Object} obj - The object to freeze.
     * @returns {Object} - The frozen object.
     */
    static deepFreezeObject(obj: any): any;
    /**
     * Check if an object is a plain object.
     * @param {Object} obj - The object to check.
     * @returns {boolean} - True if the object is a plain object, false otherwise.
     */
    static isPlainObject(obj: any): boolean;
    /**
     * Check if an object is empty (has no own properties).
     * @param {Object} obj - The object to check.
     * @returns {boolean} - True if the object is empty, false otherwise.
     */
    static isObjectEmpty(obj: any): boolean;
    /**
     * Check if two objects are equal.
     * @param {Object} obj1 - The first object.
     * @param {Object} obj2 - The second object.
     * @returns {boolean} - True if the objects are equal, false otherwise.
     */
    static isObjectEqual(obj1: any, obj2: any): boolean;
    /**
     * Check if an object is a subset of another object.
     * @param {Object} subset - The potential subset.
     * @param {Object} superset - The superset.
     * @returns {boolean} - True if the subset is a subset of the superset, false otherwise.
     */
    static isObjectSubset(subset: any, superset: any): boolean;
    /**
     * Get the keys of an object.
     * @param {Object} obj - The object.
     * @returns {Array} - An array containing the keys of the object.
     */
    static getObjectKeys(obj: any): any[];
    /**
     * Get the values of an object.
     * @param {Object} obj - The object.
     * @returns {Array} - An array containing the values of the object.
     */
    static getObjectValues(obj: any): any[];
    /**
     * Get the entries of an object (key-value pairs).
     * @param {Object} obj - The object.
     * @returns {Array} - An array containing the entries of the object.
     */
    static getObjectEntries(obj: any): any[];
    /**
     * Map over the values of an object and apply a function.
     * @param {Object} obj - The object.
     * @param {Function} callback - The function to apply to each value.
     * @returns {Object} - A new object with the same keys and the modified values.
     */
    static objectMap(obj: any, callback: Function): any;
    /**
     * Filter an object based on a predicate function.
     * @param {Object} obj - The object.
     * @param {Function} predicate - The predicate function to filter values.
     * @returns {Object} - A new object containing only the values that satisfy the predicate.
     */
    static objectFilter(obj: any, predicate: Function): any;
    /**
     * Reduce an object to a single value using a callback function.
     * @param {Object} obj - The object.
     * @param {Function} callback - The callback function to execute on each value.
     * @param {*} initialValue - The initial value for the reduction.
     * @returns {*} - The final reduced value.
     */
    static objectReduce(obj: any, callback: Function, initialValue: any): any;
    /**
     * Iterate over the values of an object and apply a function.
     * @param {Object} obj - The object.
     * @param {Function} callback - The function to apply to each value.
     */
    static objectForEach(obj: any, callback: Function): void;
    /**
     * Pick specified keys from an object.
     * @param {Object} obj - The object.
     * @param {Array} keys - An array of keys to pick.
     * @returns {Object} - A new object containing only the specified keys.
     */
    static objectPick(obj: any, keys: any[]): any;
    /**
     * Omit specified keys from an object.
     * @param {Object} obj - The object.
     * @param {Array} keys - An array of keys to omit.
     * @returns {Object} - A new object excluding the specified keys.
     */
    static objectOmit(obj: any, keys: any[]): any;
    /**
     * Rename keys in an object based on a provided key mapping.
     * @param {Object} obj - The object.
     * @param {Object} keyMap - An object representing the key mapping, where keys are old keys and values are new keys.
     * @returns {Object} - A new object with keys renamed according to the key mapping.
     */
    static objectRenameKeys(obj: any, keyMap: any): any;
    /**
     * Flip keys and values in an object.
     * @param {Object} obj - The object.
     * @returns {Object} - A new object with keys and values swapped.
     */
    static objectFlipKeys(obj: any): any;
    /**
     * Merge two objects.
     * @param {Object} obj1 - The first object.
     * @param {Object} obj2 - The second object.
     * @returns {Object} - A new object containing the merged properties of obj1 and obj2.
     */
    static objectMerge(obj1: any, obj2: any): any;
    /**
     * Zip two arrays into an object where the elements of the first array become keys and the elements of the second array become values.
     * @param {Array} keys - The array of keys.
     * @param {Array} values - The array of values.
     * @returns {Object} - A new object zipped from the keys and values arrays.
     */
    static objectZip(keys: any[], values: any[]): any;
    /**
     * Convert an object to a query string.
     * @param {Object} obj - The object.
     * @returns {string} - A query string representation of the object.
     */
    static objectToQueryString(obj: any): string;
    /**
     * Convert a query string to an object.
     * @param {string} queryString - The query string.
     * @returns {Object} - An object representation of the query string.
     */
    static queryStringToObject(queryString: string): any;
}
