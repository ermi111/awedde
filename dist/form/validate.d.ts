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
    static validateEmailAddress(email: string): boolean;
    /**
     * Validates a phone number.
     * @param {string} phoneNumber - The phone number to validate.
     * @returns {boolean} - True if the phone number is valid, false otherwise.
     */
    static validatePhoneNumber(phoneNumber: string): boolean;
    /**
     * Validates a One-Time Password (OTP) entered by the user.
     *
     * @param {string} userOTP - The OTP entered by the user for validation.
     * @param {string} storedOTP - The predefined OTP stored for comparison.
     * @param {number} [expirationTime=5] - The expiration time for the OTP in minutes.
     * @param {number} [maxAttempts=3] - The maximum allowed attempts for OTP validation.
     *
     * @returns {Object} An object containing the validation result.
     * @property {boolean} success - Indicates whether the OTP validation was successful.
     * @property {string} message - A message providing information about the validation result.
     */
    static validateOTP(userOTP: string, storedOTP: string, expirationTime?: number, maxAttempts?: number): any;
    /**
     * Validates a JSON Web Token (JWT) entered by the user.
     * @param {string} userToken - The JWT entered by the user for validation.
     * @param {string} secretKey - The secret key used to sign the JWT.
     *
     * @returns {Object} An object containing the validation result.
     * @property {boolean} success - Indicates whether the JWT validation was successful.
     * @property {Object|null} payload - The decoded payload of the JWT (if successful).
     * @property {string} message - A message providing information about the validation result.
     */
    static validateJWT(userToken: string, secretKey: string): any;
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
    static validatePasswordStrength(password: string): string;
}
