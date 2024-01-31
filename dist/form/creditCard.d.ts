/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility functions for credit card-related operations.
 * @class
 */
export class CreditCard {
    /**
     * Check if the provided credit card number is valid.
     *
     * @param {string} cardNumber - The credit card number to validate.
     * @returns {boolean} - True if the credit card number is valid, false otherwise.
     */
    static isValidCreditCardNumber(cardNumber: string): boolean;
    /**
     * Check if the provided credit card expiry date is valid.
     *
     * @param {string} expiryDate - The credit card expiry date to validate (format: MM/YY).
     * @returns {boolean} - True if the expiry date is valid, false otherwise.
     */
    static isValidCreditCardExpiry(expiryDate: string): boolean;
    /**
     * Check if the provided credit card CVV is valid.
     *
     * @param {string} cvv - The credit card CVV to validate.
     * @returns {boolean} - True if the CVV is valid, false otherwise.
     */
    static isValidCreditCardCVV(cvv: string): boolean;
    /**
     * Mask the provided credit card number, showing only the last four digits.
     *
     * @param {string} cardNumber - The credit card number to mask.
     * @returns {string} - The masked credit card number.
     */
    static maskCreditCardNumber(cardNumber: string): string;
    /**
     * Format the provided credit card expiry date.
     *
     * @param {string} expiryDate - The credit card expiry date to format (MM/YY).
     * @returns {string} - The formatted expiry date.
     */
    static formatCreditCardExpiry(expiryDate: string): string;
    /**
     * Format the provided credit card CVV.
     *
     * @param {string} cvv - The credit card CVV to format.
     * @returns {string} - The formatted CVV.
     */
    static formatCreditCardCVV(cvv: string): string;
}
