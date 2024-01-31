/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with HTML element attributes.
 * @class
 */
export class Attribute {
    /**
     * Set the value of an attribute on an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} attributeName - The name of the attribute.
     * @param {string} attributeValue - The value to set for the attribute.
     */
    static setElementAttribute(element: HTMLElement, attributeName: string, attributeValue: string): void;
    /**
     * Remove an attribute from an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} attributeName - The name of the attribute to remove.
     */
    static removeElementAttribute(element: HTMLElement, attributeName: string): void;
    /**
     * Get the value of an attribute on an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} attributeName - The name of the attribute.
     * @returns {string|null} - The value of the attribute or null if the attribute is not set.
     */
    static getElementAttribute(element: HTMLElement, attributeName: string): string | null;
    /**
     * Set multiple attributes on an element.
     * @param {HTMLElement} element - The target element.
     * @param {Object} attributes - An object where keys are attribute names and values are attribute values.
     */
    static setElementAttributes(element: HTMLElement, attributes: any): void;
    /**
     * Get all attributes and their values from an element.
     * @param {HTMLElement} element - The target element.
     * @returns {Object} - An object containing all attributes and their values.
     */
    static getAllElementAttributes(element: HTMLElement): any;
    /**
     * Check if an element has a specific attribute.
     * @param {HTMLElement} element - The target element.
     * @param {string} attributeName - The name of the attribute to check.
     * @returns {boolean} - True if the element has the attribute, false otherwise.
     */
    static hasElementAttribute(element: HTMLElement, attributeName: string): boolean;
    /**
     * Toggle the presence of an attribute on an element.
     * If the attribute exists, it will be removed; if it doesn't exist, it will be added.
     * @param {HTMLElement} element - The target element.
     * @param {string} attributeName - The name of the attribute to toggle.
     */
    static toggleElementAttribute(element: HTMLElement, attributeName: string): void;
    /**
     * Remove all attributes from an element.
     * @param {HTMLElement} element - The target element.
     */
    static removeAllElementAttributes(element: HTMLElement): void;
}
