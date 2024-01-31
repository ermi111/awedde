/**
 * @author - Ermiyas Arage
 * @license Apache-2.0
 */
/**
 * Utility functions for drag-and-drop interactions.
 * @class
 */
export class DragDrop {
    /**
     * Make an element draggable.
     *
     * @param {HTMLElement} draggableElement - The element to make draggable.
     * @param {Object} options - Additional options for configuring drag behavior.
     */
    static setDraggable(draggableElement: HTMLElement, options?: any): void;
    /**
     * Destroy draggable behavior on an element.
     *
     * @param {HTMLElement} draggableElement - The element to remove draggable behavior from.
     */
    static destroyDraggable(draggableElement: HTMLElement): void;
    /**
     * Disable draggable behavior on an element.
     *
     * @param {HTMLElement} draggableElement - The element to disable draggable behavior on.
     */
    static disableDraggable(draggableElement: HTMLElement): void;
    /**
     * Enable draggable behavior on an element.
     *
     * @param {HTMLElement} draggableElement - The element to enable draggable behavior on.
     */
    static enableDraggable(draggableElement: HTMLElement): void;
    /**
     * Make an element droppable.
     *
     * @param {HTMLElement} droppableElement - The element to make droppable.
     * @param {Object} options - Additional options for configuring drop behavior.
     */
    static createDroppable(droppableElement: HTMLElement, options?: any): void;
    /**
     * Destroy droppable behavior on an element.
     *
     * @param {HTMLElement} droppableElement - The element to remove droppable behavior from.
     */
    static destroyDroppable(droppableElement: HTMLElement): void;
    /**
     * Disable droppable behavior on an element.
     *
     * @param {HTMLElement} droppableElement - The element to disable droppable behavior on.
     */
    static disableDroppable(droppableElement: HTMLElement): void;
    /**
     * Enable droppable behavior on an element.
     *
     * @param {HTMLElement} droppableElement - The element to enable droppable behavior on.
     */
    static enableDroppable(droppableElement: HTMLElement): void;
}
