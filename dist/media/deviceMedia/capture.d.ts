/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with the camera.
 * @class
 */
export class Capture {
    /**
     * Opens the device camera and streams video to a specified element.
     * @param {Object} options - Options for opening the camera.
     * @param {string} options.targetElementId - The ID of the HTML element to display the camera stream.
     * @returns {Promise<MediaStream>} - A Promise that resolves to the camera stream.
     */
    static openCamera(options: {
        targetElementId: string;
    }): Promise<MediaStream>;
    /**
     * Captures a photo from the camera stream.
     * @param {Object} options - Options for capturing a photo.
     * @param {string} options.targetElementId - The ID of the HTML element to display the camera stream.
     * @returns {Promise<Blob>} - A Promise that resolves to the captured photo as a Blob.
     */
    static capturePhoto(options: {
        targetElementId: string;
    }): Promise<Blob>;
    /**
     * Records video from the camera stream.
     * @param {Object} options - Options for recording video.
     * @param {string} options.targetElementId - The ID of the HTML element to display the camera stream.
     * @param {number} options.duration - The duration to record.
     * @returns {Promise<Blob>} - A Promise that resolves to the recorded video as a Blob.
     */
    static recordVideo(options: {
        targetElementId: string;
        duration: number;
    }): Promise<Blob>;
}
