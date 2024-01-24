import { DetectFeature } from "./detection/features.js";
import { DetectDevice } from "./detection/device.js";
import { EnvInfo } from "./detection/envInfo.js";
import { Storage } from "./storage/storage.js";

/**
 * Device module containing utility classes for detecting features, devices, environment information, and storage.
 * @namespace
 * @property {DetectFeature} DetectFeature - Utility class for detecting browser features.
 * @property {DetectDevice} DetectDevice - Utility class for detecting device information.
 * @property {EnvInfo} EnvInfo - Utility class for retrieving environment information.
 * @property {Storage} Storage - Utility class for handling storage operations.
 */
const device = {
    /**
     * Utility class for detecting browser features.
     * @class
     */
    DetectFeature,

    /**
     * Utility class for detecting device information.
     * @class
     */
    DetectDevice,

    /**
     * Utility class for retrieving environment information.
     * @class
     */
    EnvInfo,

    /**
     * Utility class for handling storage operations.
     * @class
     */
    Storage
}

export default device;