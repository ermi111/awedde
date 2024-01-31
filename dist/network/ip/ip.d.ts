/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility class for working with IP addresses in both IPv4 and IPv6 formats.
 * @class
 */
export class IP {
    /**
     * Validates an IPv4 address.
     * @param {string} ip - The IPv4 address to validate.
     * @returns {boolean} - True if the IPv4 address is valid, false otherwise.
     */
    static validateIPv4Address(ip: string): boolean;
    /**
     * Validates an IPv6 address.
     * @param {string} ip - The IPv6 address to validate.
     * @returns {boolean} - True if the IPv6 address is valid, false otherwise.
     */
    static validateIPv6Address(ip: string): boolean;
    /**
     * Converts an IPv4 address to IPv6 format.
     * @param {string} ip - The IPv4 address to convert.
     * @returns {string} - The IPv6 address derived from the given IPv4 address.
     */
    static convertIPv4ToIPv6(ip: string): string;
    /**
     * Converts an IPv6 address to IPv4 format.
     * @param {string} ip - The IPv6 address to convert.
     * @returns {string|null} - The IPv4 address derived from the given IPv6 address,
     *                          or null if the input is not a valid IPv6 address with an IPv4 prefix.
     */
    static convertIPv6ToIPv4(ip: string): string | null;
}
