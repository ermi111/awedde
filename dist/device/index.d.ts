export default device;
declare namespace device {
    export { DetectFeature };
    export { DetectDevice };
    export { EnvInfo };
    export { BrowserStorage };
    export { DeviceStorage };
}
import { DetectFeature } from "./detection/features.js";
import { DetectDevice } from "./detection/device.js";
import { EnvInfo } from "./detection/envInfo.js";
import { BrowserStorage } from "./storage/browser-storage.js";
import { DeviceStorage } from "./storage/device-storage.js";
