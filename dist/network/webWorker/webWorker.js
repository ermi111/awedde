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
 * Utility functions for working with web workers.
 * @class
 */
export class WebWorker {
    /**
     * Create a new web worker.
     * @param {string} scriptUrl - The URL of the worker script.
     * @returns {Worker} - The created web worker.
     */
    static createWorker(scriptUrl) {
        return new Worker(scriptUrl);
    }
    /**
     * Terminate a web worker.
     * @param {Worker} worker - The web worker to terminate.
     */
    static terminateWorker(worker) {
        worker.terminate();
    }
    /**
     * Post a message to a web worker.
     * @param {Worker} worker - The web worker to send the message to.
     * @param {any} message - The message to post to the worker.
     */
    static postMessageToWorker(worker, message) {
        worker.postMessage(message);
    }
    /**
     * Handle messages from a web worker.
     * @param {Worker} worker - The web worker to listen for messages.
     * @param {Function} callback - The callback function to handle messages.
     */
    static handleWorkerMessage(worker, callback) {
        worker.onmessage = (event) => {
            callback(event.data);
        };
    }
}
