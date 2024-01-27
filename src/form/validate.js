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
     *
     * @param {string} email - The email address to validate.
     * @returns {boolean} - Returns true if the email is valid, otherwise false.
     */
    static validateEmailAddress(email) {
        // Regular expression to validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Check if the email format is valid
        if (!emailRegex.test(email)) {
            return false;
        }
    
        // Split the email address into local and domain parts
        const [localPart, domainPart] = email.split('@');
    
        // Validate the length of the local and domain parts
        if (localPart.length > 64 || domainPart.length > 255) {
            return false;
        }
    
        // Validate the length of the combined local and domain parts
        if (email.length > 320) {
            return false;
        }
    
        // Validate the characters in the local part
        const localPartRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
        if (!localPartRegex.test(localPart)) {
            return false;
        }
    
        // Validate the characters in the domain part
        const domainPartRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
        if (!domainPartRegex.test(domainPart)) {
            return false;
        }
    
        // Validate the top-level domain (TLD)
        const tldRegex = /^[a-zA-Z]{2,}$/;
        const topLevelDomain = domainPart.split('.').pop();
        if (!tldRegex.test(topLevelDomain)) {
            return false;
        }
    
        // All validation checks passed, the email is valid
        return true;
    }

    /**
     * Validates a phone number.
     * @param {string} phoneNumber - The phone number to validate.
     * @returns {boolean} - True if the phone number is valid, false otherwise.
     */
    static validatePhoneNumber(phoneNumber) {
        // Regular expression to validate the phone number format
        const phoneRegex = /^[0-9+\(\)#\.\s\-]+$/;

        // Check if the phone number format is valid
        if (!phoneRegex.test(phoneNumber)) {
            return false;
        }

        // Remove non-digit characters for length validation
        const digitsOnly = phoneNumber.replace(/\D/g, '');

        // Validate the minimum and maximum length of the phone number
        if (digitsOnly.length < 8 || digitsOnly.length > 15) {
            return false;
        }

        // Validate the country code (assuming country code starts with '+')
        const countryCodeRegex = /^\+(\d{1,4})$/;
        const countryCodeMatch = phoneNumber.match(countryCodeRegex);
        if (countryCodeMatch && countryCodeMatch[1].length > 4) {
            return false;
        }
        // All validation checks passed, the phone number is valid
        return true;
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
     *
     * @param {string} password - The password to validate.
     * @returns {string} - Returns a string indicating the strength level:
     *   - "Weak" for weak passwords
     *   - "Moderate" for moderately strong passwords
     *   - "Strong" for strong passwords
     *   - "Very Strong" for very strong passwords
     */
    static validatePasswordStrength(password) {
        // Minimum and maximum length requirements
        const minLength = 8;
        const maxLength = 100;
    
        // Regular expressions for character class checks
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    
        // Check for minimum length
        if (password.length < minLength) {
            return "Weak - Too short";
        }
    
        // Check for maximum length
        if (password.length > maxLength) {
            return "Moderate - Too long";
        }
    
        // Check for the presence of different character classes
        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasDigit = digitRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
    
        // Count the number of fulfilled conditions
        const conditionsFulfilled = [hasUppercase, hasLowercase, hasDigit, hasSpecialChar].filter(Boolean).length;
    
        // Strength determination based on fulfilled conditions
        if (conditionsFulfilled === 1) {
            return "Weak - Low complexity";
        } else if (conditionsFulfilled === 2) {
            return "Moderate - Moderate complexity";
        } else if (conditionsFulfilled === 3) {
            return "Strong - High complexity";
        } else if (conditionsFulfilled === 4) {
            return "Very Strong - Very high complexity";
        } else {
            return "Weak - Insufficient complexity";
        }
    }
    
}
