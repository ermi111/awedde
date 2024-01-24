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


import crypto from "crypto";
import { ClassUtility }  from '../DOM/cssclass/classUtility.js';
import { InlineStyle } from '../DOM/styling/inline.js';
import { Element } from '../DOM/element/element.js';


/**
 * Utility class for form related tasks
 * @class
 */
export class FormAction {
    /**
     * Generate a random password.
     * @param {number} length - The length of the password.
     * @param {object} options - Additional options for password generation (eg. charset).
     * @returns {string} - The generated password.
     */
    static generatePassword(length, options) {
        const charset = options.charset || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    /**
     * Hash a password with a salt.
     * @param {string} password - The password to hash.
     * @param {string} salt - The salt for hashing.
     * @returns {string} - The hashed password.
     */
    static hashPassword(password, salt) {
        const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
        return hashedPassword;
    }

    /**
     * Verify a password against its hash and salt.
     * @param {string} hash - The hashed password.
     * @param {string} password - The password to verify.
     * @param {string} salt - The salt used for hashing.
     * @returns {boolean} - True if the password is verified, false otherwise.
     */
    static verifyPassword(hash, password, salt) {
        const hashedPassword = this.hashPassword(password, salt);
        return hash === hashedPassword;
    }

    /**
     * Encrypt text with a key.
     * @param {string} text - The text to encrypt.
     * @param {string} key - The encryption key.
     * @returns {string} - The encrypted text.
     */
    static encryptText(text, key) {
        const cipher = crypto.createCipheriv('aes-256-cbc', key);
        let encryptedText = cipher.update(text, 'utf-8', 'hex');
        encryptedText += cipher.final('hex');
        return encryptedText;
    }

    /**
     * Decrypt encrypted text with a key.
     * @param {string} encryptedText - The encrypted text to decrypt.
     * @param {string} key - The decryption key.
     * @returns {string} - The decrypted text.
     */
    static decryptText(encryptedText, key) {
        const decipher = crypto.createDecipheriv('aes-256-cbc', key);
        let decryptedText = decipher.update(encryptedText, 'hex', 'utf-8');
        decryptedText += decipher.final('utf-8');
        return decryptedText;
    }

    /**
     * Generate a secure token of the specified length.
     * @param {number} length - The length of the token.
     * @returns {string} - The generated secure token.
     */
    static generateToken(length) {
        const token = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
        return token;
    }

    /**
     * Generate a secure one-time password (OTP) of the specified length.
     * @param {number} length - The length of the OTP.
     * @returns {string} - The generated OTP.
     */
    static generateOTP(length) {
        const otp = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
        return otp;
    }

    /**
     * Disable all input elements in a form.
     * @param {HTMLFormElement} formElement - The form element to disable.
     */
    static disableForm(formElement) {
        const inputs = formElement.querySelectorAll('input, textarea, select');
        inputs.forEach(input => (input.disabled = true));
    }

    /**
     * Enable all input elements in a form.
     * @param {HTMLFormElement} formElement - The form element to enable.
     */
    static enableForm(formElement) {
        const inputs = formElement.querySelectorAll('input, textarea, select');
        inputs.forEach(input => (input.disabled = false));
    }

    /**
     * Scroll to the first error in a form.
     * @param {HTMLFormElement} formElement - The form element to scroll within.
     */
    static scrollToError(formElement) {
        const firstError = formElement.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Show an error message associated with an element.
     * @param {HTMLElement} element - The element to show the error message for.
     * @param {string} message - The error message to display.
     */
    static showErrorMessage(element, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        Element.setElementText(errorElement, message);
        Element.prependElement(errorElement, element.nextSibling);
    }

    /**
     * Hide the error message associated with an element.
     * @param {HTMLElement} element - The element to hide the error message for.
     */
    static hideErrorMessage(element) {
        const errorElement = element.parentNode.querySelector('.error');
        if (errorElement) {
            Element.unwrapElement(errorElement);
        }
    }

    /**
     * Validate an input element.
     * @param {HTMLInputElement} inputElement - The input element to validate.
     * @returns {boolean} - True if the input is valid, false otherwise.
     */
    /**
     * Reset the value of an input element.
     * @param {HTMLInputElement} inputElement - The input element to reset.
     */
    static resetInput(inputElement) {
        inputElement.value = '';
    }

    /**
     * Disable an input element.
     * @param {HTMLInputElement} inputElement - The input element to disable.
     */
    static disableInput(inputElement) {
        inputElement.disabled = true;
    }

    /**
     * Enable an input element.
     * @param {HTMLInputElement} inputElement - The input element to enable.
     */
    static enableInput(inputElement) {
        inputElement.disabled = false;
    }

    /**
     * Toggle the validity of an input element.
     * @param {HTMLInputElement} inputElement - The input element to toggle validity for.
     * @param {boolean} isValid - True if the input is valid, false otherwise.
     */
    static toggleInputValidity(inputElement, isValid) {
        inputElement.setCustomValidity(isValid ? '' : 'Invalid input');
    }

    /**
     * Highlight an input element as invalid.
     * @param {HTMLInputElement} inputElement - The input element to highlight.
     */
    static highlightInvalidInput(inputElement) {
        ClassUtility.addClass(inputElement, 'invalid');

        if (ClassUtility.hasClass(inputElement, 'invalid')) {
            InlineStyle.addStyles(inputElement, {borderColor: 'red'});
        }
    }
}



/**
 * Utility class to serialize a form data or deserialize
 * @class
 */
export class SerializeForm {
    /**
     * Serialize form data into a URL-encoded string.
     * @param {HTMLFormElement} formElement - The HTML form element to serialize.
     * @returns {string} URL-encoded form data string.
     */
    static serializeFormData(formElement) {
        /**
         * @type {Array<string>}
         */
        const formDataArray = [];
        
        for (const field of new FormData(formElement)) {
            formDataArray.push(`${encodeURIComponent(field[0])}=${encodeURIComponent(field[1])}`);
        }

        return formDataArray.join('&');
    }

    /**
     * Deserialize URL-encoded form data string and populate the form fields.
     * @param {HTMLFormElement} formElement - The HTML form element to populate.
     * @param {string} data - URL-encoded form data string.
     */
    static deserializeFormData(formElement, data) {
        const formDataPairs = data.split('&');
        
        for (const pair of formDataPairs) {
            const [name, value] = pair.split('=');
            const decodedName = decodeURIComponent(name);
            const decodedValue = decodeURIComponent(value);

            const inputElement = formElement.elements.namedItem(decodedName);

            if (inputElement) {
                if (inputElement.type === 'checkbox' || inputElement.type === 'radio') {
                    inputElement.checked = inputElement.value === decodedValue;
                } else {
                    inputElement.value = decodedValue;
                }
            }
        }
    }

}