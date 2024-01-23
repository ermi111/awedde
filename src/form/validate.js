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
 * Utility class for form validation.
 * @class
 */
export class Validate {
    /**
     * Validates an email address.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - True if the email address is valid, false otherwise.
     */
    static validateEmailAddress(email) {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validates a phone number.
     * @param {string} phoneNumber - The phone number to validate.
     * @returns {boolean} - True if the phone number is valid, false otherwise.
     */
    static validatePhoneNumber(phoneNumber) {
        // Regular expression for basic phone number validation
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    /**
     * Validates a one-time password (OTP).
     * @param {string} otp - The OTP to validate.
     * @param {Object} options - Options for OTP validation (e.g., length).
     * @returns {boolean} - True if the OTP is valid, false otherwise.
     */
    static validateOTP(otp, options) {
        const { length = 6 } = options;
        const otpRegex = new RegExp(`^[0-9]{${length}}$`);
        return otpRegex.test(otp);
    }

    /**
     * Validates a token.
     * @param {string} token - The token to validate.
     * @returns {boolean} - True if the token is valid, false otherwise.
     */
    static validateToken(token) {
        return typeof token === 'string' && token.length > 0;
    }

    /**
     * Validates the strength of a password.
     * @param {string} password - The password to validate.
     * @param {Object} options - Options for password strength validation (e.g., minimum length).
     * @returns {boolean} - True if the password is strong, false otherwise.
     */
    static validatePasswordStrength(password, options) {
        const { minLength = 8 } = options;
        return password.length >= minLength;
    }
}
