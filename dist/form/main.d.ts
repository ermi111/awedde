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
    static generatePassword(length: number, options: object): string;
    /**
     * Hash a password with a salt.
     * @param {string} password - The password to hash.
     * @param {string} salt - The salt for hashing.
     * @returns {string} - The hashed password.
     */
    static hashPassword(password: string, salt: string): string;
    /**
     * Verify a password against its hash and salt.
     * @param {string} hash - The hashed password.
     * @param {string} password - The password to verify.
     * @param {string} salt - The salt used for hashing.
     * @returns {boolean} - True if the password is verified, false otherwise.
     */
    static verifyPassword(hash: string, password: string, salt: string): boolean;
    /**
     * Encrypt text with a key.
     * @param {string} text - The text to encrypt.
     * @param {string} key - The encryption key.
     * @returns {string} - The encrypted text.
     */
    static encryptText(text: string, key: string): string;
    /**
     * Decrypt encrypted text with a key.
     * @param {string} encryptedText - The encrypted text to decrypt.
     * @param {string} key - The decryption key.
     * @returns {string} - The decrypted text.
     */
    static decryptText(encryptedText: string, key: string): string;
    /**
     * Generate a secure token of the specified length.
     * @param {number} length - The length of the token.
     * @returns {string} - The generated secure token.
     */
    static generateToken(length: number): string;
    /**
     * Generate a secure one-time password (OTP) of the specified length.
     * @param {number} length - The length of the OTP.
     * @returns {string} - The generated OTP.
     */
    static generateOTP(length: number): string;
    /**
     * Disable all input elements in a form.
     * @param {HTMLFormElement} formElement - The form element to disable.
     */
    static disableForm(formElement: HTMLFormElement): void;
    /**
     * Enable all input elements in a form.
     * @param {HTMLFormElement} formElement - The form element to enable.
     */
    static enableForm(formElement: HTMLFormElement): void;
    /**
     * Scroll to the first error in a form.
     * @param {HTMLFormElement} formElement - The form element to scroll within.
     */
    static scrollToError(formElement: HTMLFormElement): void;
    /**
     * Show an error message associated with an element.
     * @param {HTMLElement} element - The element to show the error message for.
     * @param {string} message - The error message to display.
     */
    static showErrorMessage(element: HTMLElement, message: string): void;
    /**
     * Hide the error message associated with an element.
     * @param {HTMLElement} element - The element to hide the error message for.
     */
    static hideErrorMessage(element: HTMLElement): void;
    /**
     * Validate an input element.
     * @param {HTMLInputElement} inputElement - The input element to validate.
     * @returns {boolean} - True if the input is valid, false otherwise.
     */
    /**
     * Reset the value of an input element.
     * @param {HTMLInputElement} inputElement - The input element to reset.
     */
    static resetInput(inputElement: HTMLInputElement): void;
    /**
     * Disable an input element.
     * @param {HTMLInputElement} inputElement - The input element to disable.
     */
    static disableInput(inputElement: HTMLInputElement): void;
    /**
     * Enable an input element.
     * @param {HTMLInputElement} inputElement - The input element to enable.
     */
    static enableInput(inputElement: HTMLInputElement): void;
    /**
     * Toggle the validity of an input element.
     * @param {HTMLInputElement} inputElement - The input element to toggle validity for.
     * @param {boolean} isValid - True if the input is valid, false otherwise.
     */
    static toggleInputValidity(inputElement: HTMLInputElement, isValid: boolean): void;
    /**
     * Highlight an input element as invalid.
     * @param {HTMLInputElement} inputElement - The input element to highlight.
     */
    static highlightInvalidInput(inputElement: HTMLInputElement): void;
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
    static serializeFormData(formElement: HTMLFormElement): string;
    /**
     * Deserialize URL-encoded form data string and populate the form fields.
     * @param {HTMLFormElement} formElement - The HTML form element to populate.
     * @param {string} data - URL-encoded form data string.
     */
    static deserializeFormData(formElement: HTMLFormElement, data: string): void;
}
