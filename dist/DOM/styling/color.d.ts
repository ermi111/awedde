/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for advanced color usage.
 * @class Color
 */
export class Color {
    /**
     * Convert RGB values to Hex color code.
     * @param {number} r - Red value (0-255).
     * @param {number} g - Green value (0-255).
     * @param {number} b - Blue value (0-255).
     * @returns {string} Hex color code.
     */
    static rgbToHex(r: number, g: number, b: number): string;
    /**
     * Convert Hex color code to RGB values.
     * @param {string} hex - Hex color code.
     * @returns {?{r: number, g: number, b: number}} RGB values or null if invalid input.
     */
    static hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    } | null;
    /**
     * Convert RGBA values to Hex color code.
     * @param {number} r - Red value (0-255).
     * @param {number} g - Green value (0-255).
     * @param {number} b - Blue value (0-255).
     * @param {number} a - Alpha value (0-1).
     * @returns {string} Hex color code with alpha.
     */
    static rgbaToHex(r: number, g: number, b: number, a: number): string;
    /**
     * Convert Hex color code to RGBA string.
     * @param {string} hex - Hex color code.
     * @param {number} a - Alpha value (0-1).
     * @returns {?string} RGBA string or null if invalid input.
     */
    static hexToRgba(hex: string, a: number): string | null;
    /**
     * Calculate color brightness.
     * @param {string} color - Hex color code.
     * @returns {?number} Color brightness (0-1) or null if invalid input.
     */
    static colorBrightness(color: string): number | null;
    /**
     * Calculate color contrast between two colors.
     * @param {string} color1 - Hex color code.
     * @param {string} color2 - Hex color code.
     * @returns {?number} Color contrast (0-1) or null if invalid input.
     */
    static colorContrast(color1: string, color2: string): number | null;
    /**
     * Generate a random Hex color code.
     * @returns {string} Random Hex color code.
     */
    static generateRandomColor(): string;
    /**
     * Darkens a given color by a specified percentage.
     * @param {string} color - The input color (hexadecimal or RGB).
     * @param {number} percentage - The percentage by which to darken the color.
     * @returns {string} The darkened color.
     */
    static darkenColor(color: string, percentage: number): string;
    /**
     * Lightens a given color by a specified percentage.
     * @param {string} color - The input color (hexadecimal or RGB).
     * @param {number} percentage - The percentage by which to lighten the color.
     * @returns {string} The lightened color.
     */
    static lightenColor(color: string, percentage: number): string;
    /**
     * Calculates the luminance of a given color.
     * @param {string} color - The input color (hexadecimal or RGB).
     * @returns {number} The luminance value.
     */
    static calculateLuminance(color: string): number;
    /**
    * Checks if two colors are equal.
    * @param {string} color1 - The first color (hexadecimal or RGB).
    * @param {string} color2 - The second color (hexadecimal or RGB).
    * @returns {boolean} True if the colors are equal, false otherwise.
    */
    static areColorsEqual(color1: string, color2: string): boolean;
    /**
    * Converts HSL (Hue, Saturation, Lightness) values to RGB format.
    * @param {number} hue - The hue value (0-360).
    * @param {number} saturation - The saturation value (0-100).
    * @param {number} lightness - The lightness value (0-100).
    * @returns {Object} An object containing the red, green, and blue components.
    */
    static hslToRgb(hue: number, saturation: number, lightness: number): any;
    static hueToRgb(p: any, q: any, t: any): any;
    /**
    * Converts RGB color components to HSL (Hue, Saturation, Lightness) values.
    * @param {number} red - The red component (0-255).
    * @param {number} green - The green component (0-255).
    * @param {number} blue - The blue component (0-255).
    * @returns {Object} An object containing the hue, saturation, and lightness values.
    */
    static rgbToHsl(red: number, green: number, blue: number): any;
    /**
    * Mixes two colors together based on a specified weight.
    * @param {string} color1 - The first color (hexadecimal or RGB).
    * @param {string} color2 - The second color (hexadecimal or RGB).
    * @param {number} weight - The weight of the first color in the mixture (0-1).
    * @returns {string} The resulting mixed color.
    */
    static mixColors(color1: string, color2: string, weight: number): string;
    /**
    * Generates a gradient of colors between two given colors.
    * @param {string} startColor - The starting color (hexadecimal or RGB).
    * @param {string} endColor - The ending color (hexadecimal or RGB).
    * @param {number} steps - The number of steps in the gradient.
    * @returns {Array} An array of colors representing the gradient.
    */
    static generateColorGradient(startColor: string, endColor: string, steps: number): any[];
    /**
    * Inverts the color by subtracting each RGB component from 255.
    * @param {string} color - The input color (hexadecimal or RGB).
    * @returns {string} The inverted color.
    */
    static invertColor(color: string): string;
}
