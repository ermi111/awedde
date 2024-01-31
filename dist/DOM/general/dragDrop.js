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
    static setDraggable(draggableElement, options = {}) {
        draggableElement.draggable = true;
        draggableElement.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', ''); // Required for some browsers to initiate drag
            if (options && typeof options.dragStart === 'function') {
                options.dragStart(event);
            }
        });
        draggableElement.addEventListener('dragend', (event) => {
            if (options && typeof options.dragEnd === 'function') {
                options.dragEnd(event);
            }
        });
    }
    /**
     * Destroy draggable behavior on an element.
     *
     * @param {HTMLElement} draggableElement - The element to remove draggable behavior from.
     */
    static destroyDraggable(draggableElement) {
        draggableElement.draggable = false;
        draggableElement.removeEventListener('dragstart', null);
        draggableElement.removeEventListener('dragend', null);
    }
    /**
     * Disable draggable behavior on an element.
     *
     * @param {HTMLElement} draggableElement - The element to disable draggable behavior on.
     */
    static disableDraggable(draggableElement) {
        draggableElement.draggable = false;
    }
    /**
     * Enable draggable behavior on an element.
     *
     * @param {HTMLElement} draggableElement - The element to enable draggable behavior on.
     */
    static enableDraggable(draggableElement) {
        draggableElement.draggable = true;
    }
    /**
     * Make an element droppable.
     *
     * @param {HTMLElement} droppableElement - The element to make droppable.
     * @param {Object} options - Additional options for configuring drop behavior.
     */
    static createDroppable(droppableElement, options = {}) {
        droppableElement.addEventListener('dragover', (event) => {
            event.preventDefault(); // Allow dropping
            if (options && typeof options.dragOver === 'function') {
                options.dragOver(event);
            }
        });
        droppableElement.addEventListener('drop', (event) => {
            event.preventDefault();
            if (options && typeof options.drop === 'function') {
                options.drop(event);
            }
        });
    }
    /**
     * Destroy droppable behavior on an element.
     *
     * @param {HTMLElement} droppableElement - The element to remove droppable behavior from.
     */
    static destroyDroppable(droppableElement) {
        droppableElement.removeEventListener('dragover', null);
        droppableElement.removeEventListener('drop', null);
    }
    /**
     * Disable droppable behavior on an element.
     *
     * @param {HTMLElement} droppableElement - The element to disable droppable behavior on.
     */
    static disableDroppable(droppableElement) {
        droppableElement.removeEventListener('dragover', null);
        droppableElement.removeEventListener('drop', null);
    }
    /**
     * Enable droppable behavior on an element.
     *
     * @param {HTMLElement} droppableElement - The element to enable droppable behavior on.
     */
    static enableDroppable(droppableElement) {
        droppableElement.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        droppableElement.addEventListener('drop', (event) => {
            event.preventDefault();
        });
    }
}
