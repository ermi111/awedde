import { Element } from "./element/element.js";
import { Attribute } from "./element/attribute.js";
import { Obj } from "./composite/object.js";
import { String } from "./composite/string.js";
import { Color } from "./styling/color.js";
import { InlineStyle } from "./styling/inline.js";
import { ClassUtility } from "./cssclass/classUtility.js";
import { DragDrop } from "./general/dragDrop.js";
import { Scroll } from "./general/scroll.js";
import { Modal } from "./modal/modal.js";


/**
 * DOM module containing utility classes for handling DOM elements, attributes, composite objects, strings,
 * styling (color and inline styles), CSS class utilities, drag and drop, scrolling, and modals.
 * @namespace
 * @property {Element} Element - Utility class for handling DOM elements.
 * @property {Attribute} Attribute - Utility class for handling element attributes.
 * @property {Obj} Obj - Utility class for composite objects.
 * @property {String} String - Utility class for string manipulation.
 * @property {Color} Color - Utility class for handling colors.
 * @property {InlineStyle} InlineStyle - Utility class for managing inline styles.
 * @property {ClassUtility} ClassUtility - Utility class for working with CSS classes.
 * @property {DragDrop} DragDrop - Utility class for drag and drop functionality.
 * @property {Scroll} Scroll - Utility class for handling scrolling.
 * @property {Modal} Modal - Utility class for modal dialogs.
 */
const dom = {
    /**
     * Utility class for handling DOM elements.
     * @class
     */
    Element,

    /**
     * Utility class for handling element attributes.
     * @class
     */
    Attribute,

    /**
     * Utility class for composite objects.
     * @class
     */
    Obj,

    /**
     * Utility class for string manipulation.
     * @class
     */
    String,

    /**
     * Utility class for handling colors.
     * @class
     */
    Color,

    /**
     * Utility class for managing inline styles.
     * @class
     */
    InlineStyle,

    /**
     * Utility class for working with CSS classes.
     * @class
     */
    ClassUtility,

    /**
     * Utility class for handling scrolling.
     * @class
     */
    Scroll,

    /**
     * Utility class for drag and drop functionality.
     * @class
     */
    DragDrop,

    /**
     * Utility class for modal dialogs.
     */
    Modal
}

export default dom;