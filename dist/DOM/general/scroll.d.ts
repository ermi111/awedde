/**
 * Utility class for scroll-related operations.
 * @class
 */
export class Scroll {
    /**
     * Fades in an element over a specified duration.
     * @param {HTMLElement} element - The element to fade in.
     * @param {number} duration - The duration of the fade-in animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the fade-in is complete.
     */
    static fadeIn(element: HTMLElement, duration: number, callback?: Function): void;
    /**
     * Fades out an element over a specified duration.
     * @param {HTMLElement} element - The element to fade out.
     * @param {number} duration - The duration of the fade-out animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the fade-out is complete.
     */
    static fadeOut(element: HTMLElement, duration: number, callback?: Function): void;
    /**
     * Slides down an element over a specified duration.
     * @param {HTMLElement} element - The element to slide down.
     * @param {number} duration - The duration of the slide-down animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the slide-down is complete.
     */
    static slideDown(element: HTMLElement, duration: number, callback?: Function): void;
    /**
     * Slides up an element over a specified duration.
     * @param {HTMLElement} element - The element to slide up.
     * @param {number} duration - The duration of the slide-up animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the slide-up is complete.
     */
    static slideUp(element: HTMLElement, duration: number, callback?: Function): void;
    /**
     * Toggles the visibility of an element by sliding it up or down over a specified duration.
     * @param {HTMLElement} element - The element to toggle.
     * @param {number} duration - The duration of the slide animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the toggle is complete.
     */
    static slideToggle(element: HTMLElement, duration: number, callback?: Function): void;
    /**
     * Toggles a class on an element when scrolling past a specified offset.
     * @param {HTMLElement} element - The element to toggle the class on.
     * @param {string} className - The class to toggle.
     * @param {number} offset - The offset from the top of the page to trigger the class toggle.
     */
    static toggleClassOnScroll(element: HTMLElement, className: string, offset: number): void;
    /**
     * Scrolls smoothly to the top of the page over a specified duration.
     * @param {number} duration - The duration of the smooth scroll in milliseconds.
     */
    static smoothScrollToTop(duration: number): void;
    /**
     * Animate opacity of an element.
     * @param {HTMLElement} element - The element to animate.
     * @param {number} startOpacity - The starting opacity value.
     * @param {number} endOpacity - The ending opacity value.
     * @param {number} duration - The duration of the animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the animation is complete.
     * @private
     */
    private static animateOpacity;
    /**
     * Animate height of an element.
     * @param {HTMLElement} element - The element to animate.
     * @param {number} startHeight - The starting height value.
     * @param {number} endHeight - The ending height value.
     * @param {number} duration - The duration of the animation in milliseconds.
     * @param {Function} [callback] - An optional callback function to execute after the animation is complete.
     * @private
     */
    private static animateHeight;
    /**
     * Get the full height of an element including padding and border.
     * @param {HTMLElement} element - The element.
     * @returns {number} - The full height of the element.
     * @private
     */
    private static getFullHeight;
    /**
     * Check if an element is currently visible in the viewport.
     * @param {HTMLElement} element - The element to check.
     * @returns {boolean} - True if the element is visible, false otherwise.
     * @private
     */
    private static isElementVisible;
    /**
     * Easing function for animations (quadratic in/out).
     * @param {number} t - The current time.
     * @param {number} b - The starting value.
     * @param {number} c - The change in value.
     * @param {number} d - The duration of the animation.
     * @returns {number} - The eased value.
     * @private
     */
    private static easeInOutQuad;
    /**
     * Scrolls smoothly to the specified position over a specified duration.
     * @param {number} targetPosition - The target scroll position.
     * @param {number} duration - The duration of the smooth scroll in milliseconds.
     * @private
     */
    private static smoothScrollToPosition;
    /**
     * Scrolls smoothly to the specified element over a specified duration.
     * @param {HTMLElement} element - The target element to scroll to.
     * @param {number} duration - The duration of the smooth scroll in milliseconds.
     */
    static smoothScrollToElement(element: HTMLElement, duration: number): void;
    /**
     * Scrolls to the specified element without animation.
     * @param {HTMLElement} element - The target element to scroll to.
     */
    static scrollToElement(element: HTMLElement): void;
    /**
     * Scrolls smoothly to the top of the page over a specified duration.
     * @param {number} duration - The duration of the smooth scroll in milliseconds.
     */
    static scrollToTop(duration: number): void;
    /**
     * Scrolls smoothly to the bottom of the page over a specified duration.
     * @param {number} duration - The duration of the smooth scroll in milliseconds.
     */
    static scrollToBottom(duration: number): void;
    /**
     * Scrolls to the specified position within an element.
     * @param {HTMLElement} element - The element containing the scrollable content.
     * @param {number} position - The target scroll position within the element.
     */
    static scrollToPosition(element: HTMLElement, position: number): void;
    /**
     * Gets the current scroll position within an element.
     * @param {HTMLElement} element - The element containing the scrollable content.
     * @returns {number} - The current scroll position within the element.
     */
    static getScrollPosition(element: HTMLElement): number;
    /**
     * Disables scrolling on the entire page.
     */
    static disableScroll(): void;
    /**
     * Enables scrolling on the entire page.
     */
    static enableScroll(): void;
    /**
     * Gets the current scroll position of the viewport from the top.
     * @returns {number} - The current scroll position of the viewport from the top.
     */
    static getViewportScrollTop(): number;
    /**
     * Gets the current scroll position of the viewport from the left.
     * @returns {number} - The current scroll position of the viewport from the left.
     */
    static getViewportScrollLeft(): number;
    /**
     * Gets the current scroll position of the entire document from the top.
     * @returns {number} - The current scroll position of the document from the top.
     */
    static getDocumentScrollTop(): number;
    /**
     * Gets the current scroll position of the entire document from the left.
     * @returns {number} - The current scroll position of the document from the left.
     */
    static getDocumentScrollLeft(): number;
}
