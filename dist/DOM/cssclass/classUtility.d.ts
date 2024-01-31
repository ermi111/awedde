/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for managing CSS classes on HTML elements.
 * @class
 */
export class ClassUtility {
    /**
     * Adds a CSS class to an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to add.
     */
    static addClass(element: HTMLElement, className: string): void;
    /**
     * Removes a CSS class from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to remove.
     */
    static removeClass(element: HTMLElement, className: string): void;
    /**
     * Checks if an HTML element has a specific CSS class.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to check.
     * @returns {boolean} True if the element has the class, false otherwise.
     */
    static hasClass(element: HTMLElement, className: string): boolean;
    /**
     * Toggles a CSS class on an HTML element. If the class is present, it is removed; otherwise, it is added.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to toggle.
     */
    static toggleClass(element: HTMLElement, className: string): void;
    /**
     * Replaces one CSS class with another on an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} oldClass - The class to be replaced.
     * @param {string} newClass - The class to replace it with.
     */
    static replaceClass(element: HTMLElement, oldClass: string, newClass: string): void;
    /**
     * Adds multiple CSS classes to an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {...string} classNames - The names of the CSS classes to add.
     */
    static addClasses(element: HTMLElement, ...classNames: string[]): void;
    /**
     * Removes multiple CSS classes from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {...string} classNames - The names of the CSS classes to remove.
     */
    static removeClasses(element: HTMLElement, ...classNames: string[]): void;
    /**
     * Replaces multiple CSS classes with new ones on an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {Object.<string, string>} classMap - An object where keys are old classes and values are new classes.
     */
    static replaceClasses(element: HTMLElement, classMap: {
        [x: string]: string;
    }): void;
    /**
     * Removes all CSS classes from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     */
    static removeAllClasses(element: HTMLElement): void;
    /**
     * Toggles a class on an HTML element conditionally based on a provided boolean condition.
     * @param {HTMLElement} element - The HTML element to toggle the class on.
     * @param {boolean} condition - The boolean condition determining which class to toggle.
     * @param {string} trueClass - The class to add when the condition is true.
     * @param {string} falseClass - The class to add when the condition is false.
     * @throws Will throw an error if the parameters are not of the expected types.
     */
    static toggleClassConditionally(element: HTMLElement, condition: boolean, trueClass: string, falseClass: string): void;
    /**
     * Retrieves an array of all CSS classes on an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @returns {string[]} An array of CSS class names.
     */
    static getAllClasses(element: HTMLElement): string[];
    /**
     * Checks if an HTML element has any of the specified classes.
     * @param {HTMLElement} element - The HTML element to check for classes.
     * @param {string[]} classArray - An array of class names to check.
     * @returns {boolean} Returns true if the element has any of the specified classes, otherwise false.
     */
    static hasAnyClass(element: HTMLElement, classArray: string[]): boolean;
    /**
     * Replaces the prefix of classes on an HTML element.
     * @param {HTMLElement} element - The HTML element to replace class prefixes on.
     * @param {string} oldPrefix - The prefix to replace in existing class names.
     * @param {string} newPrefix - The new prefix to replace the old prefix with.
     */
    static replaceClassPrefix(element: HTMLElement, oldPrefix: string, newPrefix: string): void;
    /**
     * Adds a class to an HTML element only if the class is not already present.
     * @param {HTMLElement} element - The HTML element to add the class to.
     * @param {string} className - The class name to add.
     */
    static addUniqueClass(element: HTMLElement, className: string): void;
    /**
     * Adds a class when the element enters the viewport.
     * @param {HTMLElement} element - The HTML element to add the class to.
     * @param {string} className - The class name to add.
     */
    static addClassOnViewportEnter(element: HTMLElement, className: string): void;
    /**
     * Toggles a class on focus and removes it on blur.
     * @param {HTMLElement} element - The HTML element to add the class to.
     * @param {string} className - The class name to add.
     */
    static toggleClassOnFocus(element: HTMLElement, className: string): void;
    /**
     * Toggles a class on an element based on idle time.
     * @param {HTMLElement} element - The target element.
     * @param {string} className - The class name to toggle.
     * @param {number} [idleTime=30000] - The idle time threshold in milliseconds.
     */
    static toggleClassOnIdleTime(element: HTMLElement, className: string, idleTime?: number): void;
    /**
     * Adds a class at regular intervals using setInterval.
     * @param {number} [interval=1000] - The interval in milliseconds.
     */
    static addClassOnInterval(element: any, className: any, interval?: number): void;
    /**
     * Toggles a class on an element based on device motion.
     * @param {HTMLElement} element - The target element.
     * @param {string} className - The class name to toggle.
     */
    static toggleClassOnDeviceMotion(element: HTMLElement, className: string): void;
    /**
     * Toggles a class on an element based on orientation change.
     * @param {HTMLElement} element - The target element.
     * @param {string} className - The class name to toggle.
     */
    static toggleClassOnOrientationChange(element: HTMLElement, className: string): void;
    /**
     * Toggles a class based on horizontal or vertical swipe.
     * @param {HTMLElement} element - The target element.
     * @param {string} className - The base class name to toggle.
     */
    static toggleClassOnSwipe(element: HTMLElement, className: string): void;
    /**
     * Toggles a class on an element based on network connection status change.
     * @param {HTMLElement} element - The target element.
     * @param {string} className - The class name to toggle.
     */
    static toggleClassOnConnectionStatus(element: HTMLElement, className: string): void;
    /**
     * Toggles a class when the geolocation changes.
     * @param {HTMLElement} element - The target element.
     * @param {string} className - The class name to toggle.
     */
    static toggleClassOnGeolocationChange(element: HTMLElement, className: string): void;
    /**
     * Toggles a class when the specified media query changes.
     * @param {HTMLElement} element - The HTML element to add the class to.
     * @param {string} className - The class name to add.
     * @param {string} mediaQuery - The media query string.
     */
    toggleClassOnMediaQueryChange(element: HTMLElement, className: string, mediaQuery: string): void;
    /**
     * Toggles a class when the element is copied.
     * @param {HTMLElement} element - The HTML element to add the class to.
     * @param {string} className - The class name to add.
     */
    toggleClassOnCopy(element: HTMLElement, className: string): void;
    /**
     * Removes a class at regular intervals using setInterval.
     * @param {number} [interval=1000] - The interval in milliseconds.
     */
    removeClassOnInterval(element: any, className: any, interval?: number): void;
}
