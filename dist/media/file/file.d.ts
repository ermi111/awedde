/**
 * Utility class for working with files.
 * @class
 */
export class File {
    /**
     * Gets the MIME type of a file.
     * @param {File} file - The file to get the MIME type for.
     * @returns {string} - The MIME type of the file.
     */
    static getMimeType(file: File): string;
    /**
     * Validates whether the file has an allowed file type.
     * @param {File} file - The file to validate.
     * @param {string[]} allowedTypes - An array of allowed MIME types.
     * @returns {boolean} - True if the file type is allowed, false otherwise.
     */
    static validateFileType(file: File, allowedTypes: string[]): boolean;
    /**
     * Validates whether the file size is within the specified limit.
     * @param {File} file - The file to validate.
     * @param {number} maxSize - The maximum allowed size in bytes.
     * @returns {boolean} - True if the file size is within the limit, false otherwise.
     */
    static validateFileSize(file: File, maxSize: number): boolean;
    /**
     * Uploads a file using a basic XMLHttpRequest without external dependencies.
     * @param {File} file - The file to upload.
     * @param {string} url - The URL to upload the file to.
     * @param {function} progressCallback - A callback function to handle upload progress (optional).
     * @returns {Promise<string>} - A Promise that resolves to the server response.
     */
    static uploadFile(file: File, url: string, progressCallback: Function): Promise<string>;
    /**
     * Downloads a file from the server using the RequestServer class.
     * @param {string} fileUrl - The URL for the zip file to be downloaded.
     * @param {string} fileName - The desired name for the downloaded zip file.
     * @returns {Promise<void>} A Promise that resolves once the download is complete.
     */
    static downloadZip(fileUrl: string, fileName: string): Promise<void>;
    /**
     * Unzips a provided zip file blob and returns an array of extracted files.
     *
     * @param {Blob} zipBlob - The Blob object representing the zip file.
     * @returns {Promise<Array<{ name: string, content: string }>>} A Promise that resolves with an array of objects,
     * each containing the name and content of an extracted file.
     */
    static unzip(zipBlob: Blob): Promise<Array<{
        name: string;
        content: string;
    }>>;
    /**
     * Zips an array of text content into a single zip file.
     *
     * @param {Array<{ name: string, content: string }>} files - Array of objects containing the name and content of each file.
     * @param {string} zipFileName - The desired name for the zip file.
     * @returns {Blob} Blob representing the zip file.
     */
    static zip(files: Array<{
        name: string;
        content: string;
    }>, zipFileName: string): Blob;
}
