/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for managing CSS styles on HTML elements (Inline styling in JS).
 * @class
 */
export class InlineStyle {
    /**
     * Adds inline CSS styles to an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {Object.<string, string>} styles - An object where keys are style properties and values are style values.
     */
    static addStyles(element: HTMLElement, styles: {
        [x: string]: string;
    }): void;
    /**
     * Removes inline CSS styles from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {...string} properties - The names of the style properties to remove.
     */
    static removeStyles(element: HTMLElement, ...properties: string[]): void;
    /**
     * Retrieves an object containing all inline CSS styles of an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @returns {Object.<string, string>} An object where keys are style properties and values are style values.
     */
    static getAllStyles(element: HTMLElement): {
        [x: string]: string;
    };
    /**
     * Sets the display style property of an HTML element to 'none'.
     * @param {HTMLElement} element - The HTML element.
     */
    static hideElement(element: HTMLElement): void;
    /**
     * Sets the display style property of an HTML element to its default value.
     * @param {HTMLElement} element - The HTML element.
     */
    static showElement(element: HTMLElement): void;
    /**
     * Get the computed style of an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} property - The CSS property to retrieve.
     * @returns {string} - The computed value of the specified property.
     */
    static getComputedStyle(element: HTMLElement, property: string): string;
    /**
     * Get the dimensions (width and height) of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {Object} - An object containing 'width' and 'height' properties.
     */
    static getElementDimensions(element: HTMLElement): any;
    /**
     * Copies the styles from one HTML element to another.
     * @param {HTMLElement} sourceElement - The HTML element whose styles will be copied.
     * @param {HTMLElement} targetElement - The HTML element to which styles will be applied.
     */
    static copyStyles(sourceElement: HTMLElement, targetElement: HTMLElement): void;
}
