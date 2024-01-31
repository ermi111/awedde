/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with fullscreen functionality.
 * @class
 */
export class FullScreen {
    /**
     * Detects whether fullscreen mode is supported in the current browser.
     * @returns {boolean} - True if fullscreen is supported, false otherwise.
     */
    static detectFullscreenSupport(): boolean;
    /**
     * Enters fullscreen mode for the specified element.
     * @param {Element} element - The HTML element to enter fullscreen.
     */
    static enterFullscreen(element: Element): void;
    /**
     * Exits fullscreen mode.
     */
    static exitFullscreen(): void;
    /**
     * Gets the element currently in fullscreen mode.
     * @returns {Element|null} - The element in fullscreen, or null if no element is in fullscreen.
     */
    static getFullscreenElement(): Element | null;
}
