/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with Blobs.
 * @class
 */
export class Blob {
    /**
     * Converts a base64-encoded string to a Blob.
     * @param {string} base64 - The base64-encoded string.
     * @param {string} contentType - The content type of the Blob (e.g., 'image/jpeg').
     * @returns {Blob} - The Blob created from the base64 string.
     */
    static convertBase64ToBlob(base64: string, contentType: string): Blob;
    /**
     * Creates a Blob URL from a Blob.
     * @param {Blob} blob - The Blob to create a URL for.
     * @returns {string} - The Blob URL.
     */
    static createBlobURL(blob: Blob): string;
    /**
     * Revokes a Blob URL to free up resources.
     * @param {string} url - The Blob URL to revoke.
     */
    static revokeBlobURL(url: string): void;
    /**
     * Initiates a download of a Blob as a file.
     * @param {Blob} blob - The Blob to download.
     * @param {string} filename - The name to be given to the downloaded file.
     */
    static downloadBlob(blob: Blob, filename: string): void;
}
