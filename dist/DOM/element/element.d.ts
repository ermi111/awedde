/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with HTML elements.
 * @class
 */
export class Element {
    /**
     * Set the HTML content of an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} htmlContent - The HTML content to set.
     */
    static setElementHTML(element: HTMLElement, htmlContent: string): void;
    /**
     * Get the HTML content of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {string} - The HTML content of the element.
     */
    static getElementHTML(element: HTMLElement): string;
    /**
     * Set the text content of an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} textContent - The text content to set.
     */
    static setElementText(element: HTMLElement, textContent: string): void;
    /**
     * Get the text content of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {string} - The text content of the element.
     */
    static getElementText(element: HTMLElement): string;
    /**
     * Append a child element to a parent element.
     * @param {HTMLElement} parentElement - The parent element.
     * @param {HTMLElement} childElement - The child element to append.
     */
    static appendElement(parentElement: HTMLElement, childElement: HTMLElement): void;
    /**
     * Prepend a child element to a parent element.
     * @param {HTMLElement} parentElement - The parent element.
     * @param {HTMLElement} childElement - The child element to prepend.
     */
    static prependElement(parentElement: HTMLElement, childElement: HTMLElement): void;
    /**
     * Clone an element with its classes to another element.
     * @param {HTMLElement} sourceElement - The element to clone.
     * @param {HTMLElement} targetElement - The element to which the clone will be appended.
     */
    static cloneElementWithClasses(sourceElement: HTMLElement, targetElement: HTMLElement): void;
    /**
     * Wrap an element with another wrapper element.
     * @param {HTMLElement} element - The element to wrap.
     * @param {HTMLElement} wrapperElement - The wrapper element.
     */
    static wrapElement(element: HTMLElement, wrapperElement: HTMLElement): void;
    /**
 * Unwrap an element by removing its parent and placing its children in its position.
 * @param {HTMLElement} element - The element to unwrap.
 */
    static unwrapElement(element: HTMLElement): void;
    /**
     * Unwrap an element by removing its parent and placing its children in its position.
     * @param {HTMLElement} element - The element to unwrap.
     */
    static unwrapElement(element: HTMLElement): void;
    /**
     * Empty the content of an element by removing all its child nodes.
     * @param {HTMLElement} element - The target element.
     */
    static emptyElement(element: HTMLElement): void;
    /**
     * Empty the content of an element by removing all its child nodes.
     * @param {HTMLElement} element - The target element.
     */
    static emptyElement(element: HTMLElement): void;
    /**
     * Check if an element is currently visible in the viewport.
     * @param {HTMLElement} element - The element to check.
     * @returns {boolean} - True if the element is visible, false otherwise.
     */
    static isElementVisible(element: HTMLElement): boolean;
    /**
     * Check if an element is currently visible in the viewport.
     * @param {HTMLElement} element - The element to check.
     * @returns {boolean} - True if the element is visible, false otherwise.
     */
    static isElementVisible(element: HTMLElement): boolean;
    /**
     * Check if an element is currently hidden.
     * @param {HTMLElement} element - The element to check.
     * @returns {boolean} - True if the element is hidden, false otherwise.
     */
    static isElementHidden(element: HTMLElement): boolean;
    /**
     * Check if an element is currently hidden.
     * @param {HTMLElement} element - The element to check.
     * @returns {boolean} - True if the element is hidden, false otherwise.
     */
    static isElementHidden(element: HTMLElement): boolean;
    /**
     * Get the first child element of a parent element.
     * @param {HTMLElement} parentElement - The parent element.
     * @returns {HTMLElement|null} - The first child element or null if no child element exists.
     */
    static getFirstChildElement(parentElement: HTMLElement): HTMLElement | null;
    /**
     * Get the first child element of a parent element.
     * @param {HTMLElement} parentElement - The parent element.
     * @returns {HTMLElement|null} - The first child element or null if no child element exists.
     */
    static getFirstChildElement(parentElement: HTMLElement): HTMLElement | null;
    /**
     * Get the last child element of a parent element.
     * @param {HTMLElement} parentElement - The parent element.
     * @returns {HTMLElement|null} - The last child element or null if no child element exists.
     */
    static getLastChildElement(parentElement: HTMLElement): HTMLElement | null;
    /**
     * Get the last child element of a parent element.
     * @param {HTMLElement} parentElement - The parent element.
     * @returns {HTMLElement|null} - The last child element or null if no child element exists.
     */
    static getLastChildElement(parentElement: HTMLElement): HTMLElement | null;
    /**
     * Get the next sibling element of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {HTMLElement|null} - The next sibling element or null if no next sibling exists.
     */
    static getNextSiblingElement(element: HTMLElement): HTMLElement | null;
    /**
     * Get the next sibling element of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {HTMLElement|null} - The next sibling element or null if no next sibling exists.
     */
    static getNextSiblingElement(element: HTMLElement): HTMLElement | null;
    /**
     * Get the previous sibling element of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {HTMLElement|null} - The previous sibling element or null if no previous sibling exists.
     */
    static getPreviousSiblingElement(element: HTMLElement): HTMLElement | null;
    /**
     * Get the previous sibling element of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {HTMLElement|null} - The previous sibling element or null if no previous sibling exists.
     */
    static getPreviousSiblingElement(element: HTMLElement): HTMLElement | null;
    /**
     * Get child elements of a parent element by a specific class.
     * @param {HTMLElement} parentElement - The parent element.
     * @param {string} className - The class name to filter child elements.
     * @returns {Array<HTMLElement>} - An array of child elements with the specified class.
     */
    static getChildrenByClass(parentElement: HTMLElement, className: string): Array<HTMLElement>;
    /**
     * Get elements by a CSS selector within a specific context.
     * @param {string} selector - The CSS selector.
     * @param {HTMLElement|Document} context - The context within which to search for elements.
     * @returns {Array<HTMLElement>} - An array of elements matching the selector within the given context.
     */
    static getElementsBySelector(selector: string, context: HTMLElement | Document): Array<HTMLElement>;
    /**
     * Get the closest ancestor element matching a selector.
     * @param {HTMLElement} element - The target element.
     * @param {string} selector - The CSS selector to match.
     * @returns {HTMLElement|null} - The closest ancestor element matching the selector, or null if not found.
     */
    static getClosestElement(element: HTMLElement, selector: string): HTMLElement | null;
    /**
     * Find the first parent element matching a selector.
     * @param {HTMLElement} element - The target element.
     * @param {string} selector - The CSS selector to match.
     * @returns {HTMLElement|null} - The first parent element matching the selector, or null if not found.
     */
    static findParentElement(element: HTMLElement, selector: string): HTMLElement | null;
    /**
     * Find all ancestors of an element matching a selector.
     * @param {HTMLElement} element - The target element.
     * @param {string} selector - The CSS selector to match.
     * @returns {Array<HTMLElement>} - An array of ancestor elements matching the selector.
     */
    static findAncestors(element: HTMLElement, selector: string): Array<HTMLElement>;
    /**
     * Find all descendants of a parent element matching a selector.
     * @param {HTMLElement} parentElement - The parent element.
     * @param {string} selector - The CSS selector to match.
     * @returns {Array<HTMLElement>} - An array of descendant elements matching the selector.
     */
    static findDescendants(parentElement: HTMLElement, selector: string): Array<HTMLElement>;
    /**
     * Check if an element matches a CSS selector.
     * @param {HTMLElement} element - The target element.
     * @param {string} selector - The CSS selector to match.
     * @returns {boolean} - True if the element matches the selector, false otherwise.
     */
    static matchesSelector(element: HTMLElement, selector: string): boolean;
    /**
     * Find the closest common ancestor of an array of elements.
     * @param {Array<HTMLElement>} elements - The array of elements.
     * @returns {HTMLElement|null} - The closest common ancestor, or null if not found.
     */
    static closestCommonAncestor(elements: Array<HTMLElement>): HTMLElement | null;
    /**
     * Set data attribute on an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} key - The data attribute key.
     * @param {string} value - The data attribute value.
     */
    static setElementData(element: HTMLElement, key: string, value: string): void;
    /**
     * Get the value of a data attribute on an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} key - The data attribute key.
     * @returns {string|null} - The value of the data attribute or null if the attribute is not set.
     */
    static getElementData(element: HTMLElement, key: string): string | null;
    /**
     * Remove a data attribute from an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} key - The data attribute key to remove.
     */
    static removeElementData(element: HTMLElement, key: string): void;
    /**
     * Clear all data attributes from an element.
     * @param {HTMLElement} element - The target element.
     */
    static clearElementData(element: HTMLElement): void;
    /**
     * Get all data attributes and their values from an element.
     * @param {HTMLElement} element - The target element.
     * @returns {Object} - An object containing all data attributes and their values.
     */
    static getDataAttributes(element: HTMLElement): any;
    /**
     * Set the id attribute of an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} newId - The new id value.
     */
    static setElementId(element: HTMLElement, newId: string): void;
    /**
     * Get the id attribute of an element.
     * @param {HTMLElement} element - The target element.
     * @returns {string} - The id attribute value.
     */
    static getElementId(element: HTMLElement): string;
    /**
     * Generate a unique id with an optional prefix.
     * @param {string} prefix - The optional prefix for the id.
     * @returns {string} - The generated unique id.
     */
    static generateUniqueId(prefix: string): string;
    /**
     * Set a property on an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} propertyName - The name of the property to set.
     * @param {any} propertyValue - The value to set for the property.
     */
    static setElementProperty(element: HTMLElement, propertyName: string, propertyValue: any): void;
    /**
     * Get the value of a property on an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} propertyName - The name of the property to get.
     * @returns {any} - The value of the property.
     */
    static getElementProperty(element: HTMLElement, propertyName: string): any;
    /**
     * Remove a property from an element.
     * @param {HTMLElement} element - The target element.
     * @param {string} propertyName - The name of the property to remove.
     */
    static removeElementProperty(element: HTMLElement, propertyName: string): void;
}
