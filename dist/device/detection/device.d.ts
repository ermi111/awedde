/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for detecting high-level user-related information.
 * @class - Detect
 */
export class DetectDevice {
    /**
     * Detect the user's browser information.
     * @returns {string} - The detected browser name.
     */
    static detectBrowser(): string;
    /**
     * Detect the user's operating system.
     * @returns {string} - The detected operating system.
     */
    static detectOS(): string;
    /**
     * Detects whether the browser is running in a mobile environment.
     * @returns {boolean} - True if the browser is in a mobile environment, false otherwise.
     */
    static isMobileBrowser(): boolean;
    /**
     * Detect if the user is using a mobile device.
     * @returns {boolean} - True if the user is on a mobile device, false otherwise.
     */
    static detectMobileDevice(): boolean;
    /**
     * Detect if the user is using a touch device.
     * @returns {boolean} - True if the user is on a touch device, false otherwise.
     */
    static detectTouchDevice(): boolean;
    /**
     * Detect the user's device type (desktop, tablet, mobile).
     * @returns {string} - The detected device type ("desktop", "tablet", "mobile").
     */
    static detectDeviceType(): string;
    /**
     * Detect the user's preferred language.
     * @returns {string} - The detected language code (e.g., "en" for English).
     */
    static detectLanguage(): string;
    /**
     * Detect the user's time zone.
     * @returns {string} - The detected time zone (e.g., "America/New_York").
     */
    static detectTimeZone(): string;
}
