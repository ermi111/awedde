export default dom;
declare namespace dom {
    export { Element };
    export { Attribute };
    export { Obj };
    export { String };
    export { Color };
    export { InlineStyle };
    export { ClassUtility };
    export { Scroll };
    export { DragDrop };
    export { Modal };
}
import { Element } from "./element/element.js";
import { Attribute } from "./element/attribute.js";
import { Obj } from "./composite/object.js";
import { String } from "./composite/string.js";
import { Color } from "./styling/color.js";
import { InlineStyle } from "./styling/inline.js";
import { ClassUtility } from "./cssclass/classUtility.js";
import { Scroll } from "./general/scroll.js";
import { DragDrop } from "./general/dragDrop.js";
import { Modal } from "./modal/modal.js";
