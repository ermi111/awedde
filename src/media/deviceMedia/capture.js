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
    static openCamera(options) {
        const { targetElementId } = options;

        return new Promise((resolve, reject) => {
            const videoElement = document.getElementById(targetElementId);

            if (!videoElement) {
                reject(new Error(`Element with ID ${targetElementId} not found.`));
                return;
            }

            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoElement.srcObject = stream;
                    resolve(stream);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    /**
     * Captures a photo from the camera stream.
     * @param {Object} options - Options for capturing a photo.
     * @param {string} options.targetElementId - The ID of the HTML element to display the camera stream.
     * @returns {Promise<Blob>} - A Promise that resolves to the captured photo as a Blob.
     */
    static capturePhoto(options) {
        const { targetElementId } = options;

        return new Promise((resolve, reject) => {
            const videoElement = document.getElementById(targetElementId);

            if (!videoElement || !videoElement.srcObject) {
                reject(new Error(`Element with ID ${targetElementId} not found or camera not opened.`));
                return;
            }

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            videoElement.addEventListener('loadedmetadata', () => {
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;

                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

                canvas.toBlob((blob) => resolve(blob), 'image/jpeg');
            });

            videoElement.onerror = () => {
                reject(new Error('Error capturing photo.'));
            };
        });
    }

    /**
     * Records video from the camera stream.
     * @param {Object} options - Options for recording video.
     * @param {string} options.targetElementId - The ID of the HTML element to display the camera stream.
     * @param {number} options.duration - The duration to record.
     * @returns {Promise<Blob>} - A Promise that resolves to the recorded video as a Blob.
     */
    static recordVideo(options) {
        const { targetElementId, duration } = options;
    
        return new Promise((resolve, reject) => {
            const videoElement = document.getElementById(targetElementId);
    
            if (!videoElement || !videoElement.srcObject) {
                reject(new Error(`Element with ID ${targetElementId} not found or camera not opened.`));
                return;
            }
    
            const mediaStream = videoElement.srcObject;
            const mediaRecorder = new MediaRecorder(mediaStream, {
                mimeType: 'video/webm',
            });
    
            const chunks = [];
    
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };
    
            mediaRecorder.onstop = () => {
                const videoBlob = new Blob(chunks, { type: 'video/webm' });
                resolve(videoBlob);
            };
    
            mediaRecorder.start();
    
            setTimeout(() => {
                mediaRecorder.stop();
            }, options.duration || 5000); // Default recording duration is 5 seconds
        });
    }
    
}