/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with images.
 * @class
 */
export class Image {
    /**
     * Resize an image to fit within specified dimensions while maintaining aspect ratio.
     * @param {File} file - The image file.
     * @param {number} maxWidth - The maximum width of the resized image.
     * @param {number} maxHeight - The maximum height of the resized image.
     * @returns {Promise<Blob>} - A Promise that resolves to the resized image as a Blob.
     */
    static resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob>;
    /**
     * Rotate an image by a specified number of degrees.
     * @param {File} file - The image file.
     * @param {number} degrees - The number of degrees to rotate the image.
     * @returns {Promise<Blob>} - A Promise that resolves to the rotated image as a Blob.
     */
    static rotateImage(file: File, degrees: number): Promise<Blob>;
    /**
     * Compress an image by adjusting its quality.
     * @param {File} file - The image file.
     * @param {number} quality - The quality of the compressed image (0 to 1).
     * @returns {Promise<Blob>} - A Promise that resolves to the compressed image as a Blob.
     */
    static compressImage(file: File, quality: number): Promise<Blob>;
    /**
     * Crop an image based on specified coordinates.
     * @param {File} file - The image file.
     * @param {Object} coordinates - The coordinates for cropping (e.g., { x: 10, y: 20, width: 100, height: 150 }).
     * @returns {Promise<Blob>} - A Promise that resolves to the cropped image as a Blob.
     */
    static cropImage(file: File, coordinates: any): Promise<Blob>;
    /**
     * Flip an image along a specified axis.
     * @param {File} file - The image file.
     * @param {string} axis - The axis along which to flip the image ('horizontal' or 'vertical').
     * @returns {Promise<Blob>} - A Promise that resolves to the flipped image as a Blob.
     */
    static flipImage(file: File, axis: string): Promise<Blob>;
    /**
     * Convert an image to a base64-encoded string.
     * @param {File} file - The image file.
     * @returns {Promise<string>} - A Promise that resolves to the base64-encoded image string.
     */
    static convertImageToBase64(file: File): Promise<string>;
    /**
     * Preload a list of images and invoke a callback once all images are loaded.
     * @param {string[]} imageUrls - An array of image URLs to preload.
     * @param {function} callback - The callback function to invoke once all images are loaded.
     */
    static preloadImagesWithCallback(imageUrls: string[], callback: Function): void;
    /**
     * Calculate the aspect ratio of an image based on its width and height.
     * @param {number} width - The width of the image.
     * @param {number} height - The height of the image.
     * @returns {number} - The aspect ratio of the image.
     */
    static calculateAspectRatio(width: number, height: number): number;
}
