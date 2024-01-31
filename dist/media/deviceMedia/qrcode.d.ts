/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with QR codes.
 * @class
 */
export class QRCode {
    /**
     * Generates a QR code and renders it onto a canvas element.
     * @param {string} data - The data to be encoded in the QR code.
     * @param {number} size - The size of the QR code.
     * @param {HTMLCanvasElement} canvas - The canvas element to render the QR code onto.
     */
    static generateQRCode(data: string, size: number, canvas: HTMLCanvasElement): void;
    /**
     * Initializes the camera and scans for a QR code.
     * @param {HTMLVideoElement} video - The video element to display the camera feed.
     * @param {function} onScan - Callback function to handle the scanned QR code data.
     */
    static scanQRCode(video: HTMLVideoElement, onScan: Function): void;
}
