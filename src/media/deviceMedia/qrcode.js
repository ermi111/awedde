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
    static generateQRCode(data, size, canvas) {
        const qrCanvas = document.createElement('canvas');
        qrCanvas.width = size;
        qrCanvas.height = size;

        const qrContext = qrCanvas.getContext('2d');
        qrContext.clearRect(0, 0, size, size);

        const qr = new QRCode(qrCanvas, {
            text: data,
            width: size,
            height: size,
        });

        // Render the QR code onto the specified canvas
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        context.drawImage(qrCanvas, 0, 0);
    }

    /**
     * Initializes the camera and scans for a QR code.
     * @param {HTMLVideoElement} video - The video element to display the camera feed.
     * @param {function} onScan - Callback function to handle the scanned QR code data.
     */
    static scanQRCode(video, onScan) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then((stream) => {
                video.srcObject = stream;
                video.play();

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                const scanFrame = () => {
                    context.drawImage(video, 0, 0, video.width, video.height);
                    const imageData = context.getImageData(0, 0, video.width, video.height);

                    try {
                        const code = jsQR(imageData.data, imageData.width, imageData.height, {
                            inversionAttempts: 'dontInvert',
                        });

                        if (code) {
                            onScan(code.data);
                        }
                    } catch (error) {
                        console.error('Error scanning QR code:', error);
                    }

                    requestAnimationFrame(scanFrame);
                };

                scanFrame();
            })
            .catch((error) => {
                console.error('Error accessing camera:', error);
            });
    }

}