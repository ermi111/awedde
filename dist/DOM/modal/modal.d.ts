/**
 * Utility functions for working with modals.
 * @class
 */
export class Modal {
    /**
     * Create a modal with the given options.
     *
     * @param {Object} options - Options for configuring the modal (Id, class).
     * @returns {HTMLElement} - The created modal element.
     */
    static createModal(options: any): HTMLElement;
    /**
     * Open a modal with the specified ID.
     *
     * @param {string} modalId - The ID of the modal to be opened.
     */
    static openModal(modalId: string): void;
    /**
     * Close a modal with the specified ID.
     *
     * @param {string} modalId - The ID of the modal to be closed.
     */
    static closeModal(modalId: string): void;
    /**
     * Destroy a modal with the specified ID.
     *
     * @param {string} modalId - The ID of the modal to be destroyed.
     */
    static destroyModal(modalId: string): void;
    /**
     * Set the content of a modal with the specified ID.
     *
     * @param {string} modalId - The ID of the modal to set content for.
     * @param {string} content - The HTML content to set for the modal.
     */
    static setModalContent(modalId: string, content: string): void;
    /**
     * Get the content of a modal with the specified ID.
     *
     * @param {string} modalId - The ID of the modal to get content from.
     * @returns {string} - The HTML content of the modal.
     */
    static getModalContent(modalId: string): string;
}
