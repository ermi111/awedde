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
 * Utility class for detecting high-level user-related information.
 * @class - Detect
 */
export class DetectDevice {
    /**
     * Detect the user's browser information.
     * @returns {string} - The detected browser name.
     */
    static detectBrowser() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('chrome')) {
            return 'Chrome';
        } else if (userAgent.includes('firefox')) {
            return 'Firefox';
        } else if (userAgent.includes('safari')) {
            return 'Safari';
        } else if (userAgent.includes('edge')) {
            return 'Edge';
        } else if (userAgent.includes('opera') || userAgent.includes('opr/')) {
            return 'Opera';
        } else {
            return 'Unknown Browser';
        }
    }

    /**
     * Detect the user's operating system.
     * @returns {string} - The detected operating system.
     */
    static detectOS() {
        const platform = navigator.platform.toLowerCase();
        if (platform.includes('win')) {
            return 'Windows';
        } else if (platform.includes('mac')) {
            return 'Mac OS';
        } else if (platform.includes('linux')) {
            return 'Linux';
        } else {
            return 'Unknown OS';
        }
    }

    /**
     * Detect if the user is using a mobile device.
     * @returns {boolean} - True if the user is on a mobile device, false otherwise.
     */
    static detectMobileDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.includes('mobile') || userAgent.includes('android') || userAgent.includes('iphone');
    }

    /**
     * Detect if the user is using a touch device.
     * @returns {boolean} - True if the user is on a touch device, false otherwise.
     */
    static detectTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    /**
     * Detect the user's device type (desktop, tablet, mobile).
     * @returns {string} - The detected device type ("desktop", "tablet", "mobile").
     */
    static detectDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.includes('mobile') || userAgent.includes('android') || userAgent.includes('iphone')) {
            return 'mobile';
        } else if (userAgent.includes('tablet') || userAgent.includes('ipad')) {
            return 'tablet';
        } else {
            return 'desktop';
        }
    }

    /**
     * Detect the user's preferred language.
     * @returns {string} - The detected language code (e.g., "en" for English).
     */
    static detectLanguage() {
        return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '';
    }

    /**
     * Detect the user's time zone.
     * @returns {string} - The detected time zone (e.g., "America/New_York").
     */
    static detectTimeZone() {
        try {
            // Use Intl.DateTimeFormat to get the time zone
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (error) {
            console.error('Error detecting time zone:', error);
            return '';
        }
    }
}
