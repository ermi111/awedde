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

const dom = {
    Element,
    Attribute,
    Obj,
    String,
    Color,
    InlineStyle,
    ClassUtility,
    Scroll,
    DragDrop,
    Modal
}

export default dom;