/*
 *Copyright (c) 2023 Awedde
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
    static convertBase64ToBlob(base64, contentType) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: contentType });
    }
    /**
     * Creates a Blob URL from a Blob.
     * @param {Blob} blob - The Blob to create a URL for.
     * @returns {string} - The Blob URL.
     */
    static createBlobURL(blob) {
        return URL.createObjectURL(blob);
    }
    /**
     * Revokes a Blob URL to free up resources.
     * @param {string} url - The Blob URL to revoke.
     */
    static revokeBlobURL(url) {
        URL.revokeObjectURL(url);
    }
    /**
     * Initiates a download of a Blob as a file.
     * @param {Blob} blob - The Blob to download.
     * @param {string} filename - The name to be given to the downloaded file.
     */
    static downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }
}
