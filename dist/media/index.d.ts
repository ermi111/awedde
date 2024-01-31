export default media;
declare namespace media {
    export { Image };
    export { File };
    export { Capture };
    export { Blob };
    export { FullScreen };
    export { QRCode };
}
import { Image } from "./deviceMedia/image.js";
import { File } from "./file/file.js";
import { Capture } from "./deviceMedia/capture.js";
import { Blob } from "./file/blob.js";
import { FullScreen } from "./deviceMedia/fullScreen.js";
import { QRCode } from "./deviceMedia/qrcode.js";
