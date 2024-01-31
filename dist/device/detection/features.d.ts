/**
* @author - Ermiyas Arage
* @license Apache-2.0
*/
/**
 * Class for detecting various browser features and APIs.
 * @class
 */
export class DetectFeature {
    /**
     * Detects the presence of ad blockers.
     * @returns {boolean} True if an ad blocker is detected, false otherwise.
     */
    static detectAdBlocker(): boolean;
    /**
     * Detects WebGL support in the browser.
     * @returns {boolean} True if WebGL is supported, false otherwise.
     */
    static detectWebGLSupport(): boolean;
    /**
     * Detects WebP image format support.
     * @returns {Promise<boolean>} A promise that resolves to true if WebP is supported, false otherwise.
     */
    static detectWebP(): Promise<boolean>;
    /**
     * Detects if cookies are enabled in the browser.
     * @returns {boolean} True if cookies are enabled, false otherwise.
     */
    static detectCookiesEnabled(): boolean;
    /**
     * Detects if the Do Not Track (DNT) header is enabled.
     * @returns {boolean} True if Do Not Track is enabled, false otherwise.
     */
    static detectDoNotTrack(): boolean;
    /**
     * Detects if local storage is supported in the browser.
     * @returns {boolean} True if local storage is supported, false otherwise.
     */
    static detectLocalStorage(): boolean;
    /**
     * Detects if session storage is supported in the browser.
     * @returns {boolean} True if session storage is supported, false otherwise.
     */
    static detectSessionStorage(): boolean;
    /**
     * Detects if WebSockets are supported in the browser.
     * @returns {boolean} True if WebSockets are supported, false otherwise.
     */
    static detectWebSockets(): boolean;
    /**
     * Detects if Web Workers are supported in the browser.
     * @returns {boolean} True if Web Workers are supported, false otherwise.
     */
    static detectWebWorkers(): boolean;
    /**
     * Detects if SVG support is available in the browser.
     * @returns {boolean} True if SVG is supported, false otherwise.
     */
    static detectSVGSupport(): boolean;
    /**
     * Detects if inline SVG support is available in the browser.
     * @returns {boolean} True if inline SVG is supported, false otherwise.
     */
    static detectInlineSVGSupport(): boolean;
    /**
     * Detects if Canvas is supported in the browser.
     * @returns {boolean} True if Canvas is supported, false otherwise.
     */
    static detectCanvasSupport(): boolean;
    /**
     * Detects audio format support in the browser.
     * @returns {boolean} True if audio format is supported, false otherwise.
     */
    static detectAudioFormatSupport(): boolean;
    /**
     * Detects video format support in the browser.
     * @returns {boolean} True if video format is supported, false otherwise.
     */
    static detectVideoFormatSupport(): boolean;
    /**
     * Detects Battery API support in the browser.
     * @returns {boolean} True if Battery API is supported, false otherwise.
     */
    static detectBatteryAPI(): boolean;
    /**
     * Detects Speech Recognition API support in the browser.
     *
     * @returns {boolean} True if Speech Recognition API is supported, false otherwise.
     */
    static detectSpeechRecognitionAPI(): boolean;
    /**
     * Detects WebRTC support in the browser.
     *
     * @returns {boolean} True if WebRTC is supported, false otherwise.
     */
    static detectWebRTC(): boolean;
    /**
     * Detects Pointer Events support in the browser.
     *
     * @returns {boolean} True if Pointer Events are supported, false otherwise.
     */
    static detectPointerEvents(): boolean;
    /**
     * Detects Touch Events support in the browser.
     * @returns {boolean} True if Touch Events are supported, false otherwise.
     */
    static detectTouchEvents(): boolean;
    /**
     * Detects Retina Display support in the browser.
     * @returns {boolean} True if Retina Display is supported, false otherwise.
     */
    static detectRetinaDisplay(): boolean;
    /**
     * Detects Vibration API support in the browser.
     * @returns {boolean} True if Vibration API is supported, false otherwise.
     */
    static detectVibrationAPI(): boolean;
    /**
     * Detects Clipboard API support in the browser.
     * @returns {boolean} True if Clipboard API is supported, false otherwise.
     */
    static detectClipboardAPI(): boolean;
    /**
     * Detects Speech Synthesis API support in the browser.
     * @returns {boolean} True if Speech Synthesis API is supported, false otherwise.
     */
    static detectSpeechSynthesisAPI(): boolean;
    /**
     * Detects Fullscreen API support in the browser.
     * @returns {boolean} True if Fullscreen API is supported, false otherwise.
     */
    static detectFullscreenAPI(): boolean;
    /**
     * Detects Orientation API support in the browser.
     * @returns {boolean} True if Orientation API is supported, false otherwise.
     */
    static detectOrientationAPI(): boolean;
    /**
     * Detects Gamepad API support in the browser.
     * @returns {boolean} True if Gamepad API is supported, false otherwise.
     */
    static detectGamepadAPI(): boolean;
    /**
     * Detects FileSystem API support in the browser.
     * @returns {boolean} True if FileSystem API is supported, false otherwise.
     */
    static detectFileSystemAPI(): boolean;
    /**
     * Detects Pointer Lock API support in the browser.
     * @returns {boolean} True if Pointer Lock API is supported, false otherwise.
     */
    static detectPointerLockAPI(): boolean;
    /**
     * Detects Permissions API support in the browser.
     * @returns {boolean} True if Permissions API is supported, false otherwise.
     */
    static detectPermissionsAPI(): boolean;
    /**
     * Detects Credential Management API support in the browser.
     * @returns {boolean} True if Credential Management API is supported, false otherwise.
     */
    static detectCredentialManagementAPI(): boolean;
    /**
     * Detects Payment Request API support in the browser.
     * @returns {boolean} True if Payment Request API is supported, false otherwise.
     */
    static detectPaymentRequestAPI(): boolean;
    /**
     * Detects WebAuthn API support in the browser.
     * @returns {boolean} True if WebAuthn API is supported, false otherwise.
     */
    static detectWebAuthnAPI(): boolean;
    /**
     * Detects Media Recorder API support in the browser.
     * @returns {boolean} True if Media Recorder API is supported, false otherwise.
     */
    static detectMediaRecorderAPI(): boolean;
    /**
     * Detects Media Source Extensions support in the browser.
     * @returns {boolean} True if Media Source Extensions are supported, false otherwise.
     */
    static detectMediaSourceExtensions(): boolean;
    /**
     * Detects Web Bluetooth API support in the browser.
     * @returns {boolean} True if Web Bluetooth API is supported, false otherwise.
     */
    static detectWebBluetoothAPI(): boolean;
    /**
     * Detects Broadcast Channel API support in the browser.
     * @returns {boolean} True if Broadcast Channel API is supported, false otherwise.
     */
    static detectBroadcastChannelAPI(): boolean;
    /**
     * Detects FileSystem Access API support in the browser.
     * @returns {boolean} True if FileSystem Access API is supported, false otherwise.
     */
    static detectFileSystemAccessAPI(): boolean;
    /**
     * Detects Media Capabilities API support in the browser.
     * @returns {boolean} True if Media Capabilities API is supported, false otherwise.
     */
    static detectMediaCapabilitiesAPI(): boolean;
    /**
     * Detects Picture-in-Picture API support in the browser.
     * @returns {boolean} True if Picture-in-Picture API is supported, false otherwise.
     */
    static detectPictureInPictureAPI(): boolean;
    /**
     * Detects WebP image format support using modern APIs.
     * @returns {boolean} True if WebP image format is supported, false otherwise.
     */
    static detectWebPImageSupport(): boolean;
    /**
     * Detects EventSource API support in the browser.
     * @returns {boolean} True if EventSource API is supported, false otherwise.
     */
    static detectEventSourceAPI(): boolean;
    /**
     * Detects Fetch API support in the browser.
     * @returns {boolean} True if Fetch API is supported, false otherwise.
     */
    static detectFetchAPI(): boolean;
    /**
     * Detects FormData API support in the browser.
     * @returns {boolean} True if FormData API is supported, false otherwise.
     */
    static detectFormDataAPI(): boolean;
    /**
     * Detects Intersection Observer API support in the browser.
     * @returns {boolean} True if Intersection Observer API is supported, false otherwise.
     */
    static detectIntersectionObserverAPI(): boolean;
    /**
     * Detects Mutation Observer API support in the browser.
     * @returns {boolean} True if Mutation Observer API is supported, false otherwise.
     */
    static detectMutationObserverAPI(): boolean;
    /**
     * Detects Resize Observer API support in the browser.
     * @returns {boolean} True if Resize Observer API is supported, false otherwise.
     */
    static detectResizeObserverAPI(): boolean;
    /**
     * Detects Performance API support in the browser.
     * @returns {boolean} True if Performance API is supported, false otherwise.
     */
    static detectPerformanceAPI(): boolean;
    /**
     * Detects Geolocation API support in the browser.
     * @returns {boolean} True if Geolocation API is supported, false otherwise.
     */
    static detectGeolocationAPI(): boolean;
    /**
     * Detects Page Visibility API support in the browser.
     * @returns {boolean} True if Page Visibility API is supported, false otherwise.
     */
    static detectPageVisibilityAPI(): boolean;
    /**
     * Detects Idle API support in the browser.
     * @returns {boolean} True if Idle API is supported, false otherwise.
     */
    static detectIdle(): boolean;
    /**
     * Detects Credentials API support in the browser.
     * @returns {boolean} True if Credentials API is supported, false otherwise.
     */
    static detectCredentialsAPI(): boolean;
    /**
     * Detects Web Share API support in the browser.
     * @returns {boolean} True if Web Share API is supported, false otherwise.
     */
    static detectWebShareAPI(): boolean;
    /**
     * Detects Background Sync API support in the browser.
     * @returns {boolean} True if Background Sync API is supported, false otherwise.
     */
    static detectBackgroundSyncAPI(): boolean;
    /**
     * Detects Notification API support in the browser.
     * @returns {boolean} True if Notification API is supported, false otherwise.
     */
    static detectNotificationAPI(): boolean;
    /**
     * Detects Push API support in the browser.
     * @returns {boolean} True if Push API is supported, false otherwise.
     */
    static detectPushAPI(): boolean;
    /**
     * Detects Notifications API support in the browser.
     * @returns {boolean} True if Notifications API is supported, false otherwise.
     */
    static detectNotificationsAPI(): boolean;
    /**
     * Detects Service Worker API support in the browser.
     * @returns {boolean} True if Service Worker API is supported, false otherwise.
     */
    static detectServiceWorkerAPI(): boolean;
    /**
     * Detects Share API support in the browser.
     * @returns {boolean} True if Share API is supported, false otherwise.
     */
    static detectShareAPI(): boolean;
    /**
     * Detects ImageBitmap API support in the browser.
     * @returns {boolean} True if ImageBitmap API is supported, false otherwise.
     */
    static detectImageBitmapAPI(): boolean;
    /**
     * Detects Audio Context API support in the browser.
     * @returns {boolean} True if Audio Context API is supported, false otherwise.
     */
    static detectAudioContextAPI(): boolean;
    /**
     * Detects WebGL 2.0 API support in the browser.
     * @returns {boolean} True if WebGL 2.0 API is supported, false otherwise.
     */
    static detectWebGL2API(): boolean;
    /**
     * Detects WebVR API support in the browser.
     * @returns {boolean} True if WebVR API is supported, false otherwise.
     */
    static detectWebVRAPI(): boolean;
    /**
     * Detects WebXR API support in the browser.
     * @returns {boolean} True if WebXR API is supported, false otherwise.
     */
    static detectWebXRAPI(): boolean;
    /**
     * Detects Offscreen Canvas API support in the browser.
     * @returns {boolean} True if Offscreen Canvas API is supported, false otherwise.
     */
    static detectOffscreenCanvasAPI(): boolean;
    /**
     * Detects Gamepad Haptic API support in the browser.
     * @returns {boolean} True if Gamepad Haptic API is supported, false otherwise.
     */
    static detectGamepadHapticAPI(): boolean;
    /**
     * Detects Presentation API support in the browser.
     * @returns {boolean} True if Presentation API is supported, false otherwise.
     */
    static detectPresentationAPI(): boolean;
    /**
     * Detects Wake Lock API support in the browser.
     * @returns {boolean} True if Wake Lock API is supported, false otherwise.
     */
    static detectWakeLockAPI(): boolean;
    /**
     * Detects Ambient Light Sensor API support in the browser.
     * @returns {boolean} True if Ambient Light Sensor API is supported, false otherwise.
     */
    static detectAmbientLightSensorAPI(): boolean;
    /**
     * Detects Proximity Sensor API support in the browser.
     * @returns {boolean} True if Proximity Sensor API is supported, false otherwise.
     */
    static detectProximitySensorAPI(): boolean;
    /**
     * Detects Accelerometer API support in the browser.
     * @returns {boolean} True if Accelerometer API is supported, false otherwise.
     */
    static detectAccelerometerAPI(): boolean;
    /**
     * Detects Gyroscope API support in the browser.
     * @returns {boolean} True if Gyroscope API is supported, false otherwise.
     */
    static detectGyroscopeAPI(): boolean;
    /**
     * Detects Magnetometer API support in the browser.
     * @returns {boolean} True if Magnetometer API is supported, false otherwise.
     */
    static detectMagnetometerAPI(): boolean;
    /**
     * Detects Generic Sensor API support in the browser.
     * @returns {boolean} True if Generic Sensor API is supported, false otherwise.
     */
    static detectGenericSensorAPI(): boolean;
    /**
     * Detects WebUSB API support in the browser.
     * @returns {boolean} True if WebUSB API is supported, false otherwise.
     */
    static detectWebUSBAPI(): boolean;
    /**
     * Detects Serial API support in the browser.
     * @returns {boolean} True if Serial API is supported, false otherwise.
     */
    static detectSerialAPI(): boolean;
    /**
     * Detects Bluetooth API support in the browser.
     * @returns {boolean} True if Bluetooth API is supported, false otherwise.
     */
    static detectBluetoothAPI(): boolean;
    /**
     * Detects NFC API support in the browser.
     * @returns {boolean} True if NFC API is supported, false otherwise.
     */
    static detectNFCAPI(): boolean;
    /**
     * Detects WebNFC API support in the browser.
     * @returns {boolean} True if WebNFC API is supported, false otherwise.
     */
    static detectWebNFCAPI(): boolean;
    /**
     * Detects Image Capture API support in the browser.
     * @returns {boolean} True if Image Capture API is supported, false otherwise.
     */
    static detectImageCaptureAPI(): boolean;
    /**
     * Detects Media Devices API support in the browser.
     * @returns {boolean} True if Media Devices API is supported, false otherwise.
     */
    static detectMediaDevicesAPI(): boolean;
    /**
     * Detects Screen Capture API support in the browser.
     * @returns {boolean} True if Screen Capture API is supported, false otherwise.
     */
    static detectScreenCaptureAPI(): boolean;
    /**
     * Detects WebXR Device API support in the browser.
     * @returns {boolean} True if WebXR Device API is supported, false otherwise.
     */
    static detectWebXRDeviceAPI(): boolean;
    /**
     * Detects WebXR Session API support in the browser.
     * @returns {boolean} True if WebXR Session API is supported, false otherwise.
     */
    static detectWebXRSessionAPI(): boolean;
    /**
     * Detects WebXR Frame API support in the browser.
     * @returns {boolean} True if WebXR Frame API is supported, false otherwise.
     */
    static detectWebXRFrameAPI(): boolean;
    /**
     * Detects WebXR Input Source API support in the browser.
     * @returns {boolean} True if WebXR Input Source API is supported, false otherwise.
     */
    static detectWebXRInputSourceAPI(): boolean;
    /**
     * Detects WebXR Pose API support in the browser.
     * @returns {boolean} True if WebXR Pose API is supported, false otherwise.
     */
    static detectWebXRPoseAPI(): boolean;
    /**
     * Detects WebXR Hit Test API support in the browser.
     * @returns {boolean} True if WebXR Hit Test API is supported, false otherwise.
     */
    static detectWebXRHitTestAPI(): boolean;
    /**
     * Detects WebXR Hand API support in the browser.
     * @returns {boolean} True if WebXR Hand API is supported, false otherwise.
     */
    static detectWebXRHandAPI(): boolean;
    /**
     * Detects WebXR Spatial Tracking API support in the browser.
     * @returns {boolean} True if WebXR Spatial Tracking API is supported, false otherwise.
     */
    static detectWebXRSpatialTrackingAPI(): boolean;
    /**
     * Detects WebXR Viewer Reference Space API support in the browser.
     * @returns {boolean} True if WebXR Viewer Reference Space API is supported, false otherwise.
     */
    static detectWebXRViewerReferenceSpaceAPI(): boolean;
    /**
     * Detects WebXR Reference Space API support in the browser.
     * @returns {boolean} True if WebXR Reference Space API is supported, false otherwise.
     */
    static detectWebXRReferenceSpaceAPI(): boolean;
    /**
     * Detects WebXR Viewer API support in the browser.
     * @returns {boolean} True if WebXR Viewer API is supported, false otherwise.
     */
    static detectWebXRViewerAPI(): boolean;
    /**
     * Detects WebXR Layer API support in the browser.
     * @returns {boolean} True if WebXR Layer API is supported, false otherwise.
     */
    static detectWebXRLayerAPI(): boolean;
    /**
     * Detects WebXR Input API support in the browser.
     * @returns {boolean} True if WebXR Input API is supported, false otherwise.
     */
    static detectWebXRInputAPI(): boolean;
    /**
     * Detects WebXR Hand Tracking API support in the browser.
     * @returns {boolean} True if WebXR Hand Tracking API is supported, false otherwise.
     */
    static detectWebXRHandTrackingAPI(): boolean;
    /**
     * Detects WebXR Depth API support in the browser.
     * @returns {boolean} True if WebXR Depth API is supported, false otherwise.
     */
    static detectWebXRDepthAPI(): boolean;
    /**
     * Detects WebXR Light Estimation API support in the browser.
     * @returns {boolean} True if WebXR Light Estimation API is supported, false otherwise.
     */
    static detectWebXRLightEstimationAPI(): boolean;
    /**
     * Detects WebXR DOM Overlay API support in the browser.
     * @returns {boolean} True if WebXR DOM Overlay API is supported, false otherwise.
     */
    static detectWebXRDOMOverlayAPI(): boolean;
    /**
     * Detects WebXR DOM Overlay State API support in the browser.
     * @returns {boolean} True if WebXR DOM Overlay State API is supported, false otherwise.
     */
    static detectWebXRDOMOverlayStateAPI(): boolean;
    /**
     * Detects WebXR DOM Overlay Position API support in the browser.
     * @returns {boolean} True if WebXR DOM Overlay Position API is supported, false otherwise.
     */
    static detectWebXRDOMOverlayPositionAPI(): boolean;
    /**
     * Detects WebXR DOM Overlay Type API support in the browser.
     * @returns {boolean} True if WebXR DOM Overlay Type API is supported, false otherwise.
     */
    static detectWebXRDOMOverlayTypeAPI(): boolean;
    /**
     * Detects WebXR Gamepad API support in the browser.
     * @returns {boolean} True if WebXR Gamepad API is supported, false otherwise.
     */
    static detectWebXRGamepadAPI(): boolean;
    /**
     * Detects WebXR Gamepad Button API support in the browser.
     * @returns {boolean} True if WebXR Gamepad Button API is supported, false otherwise.
     */
    static detectWebXRGamepadButtonAPI(): boolean;
    /**
     * Detects WebXR Gamepad Pose API support in the browser.
     * @returns {boolean} True if WebXR Gamepad Pose API is supported, false otherwise.
     */
    static detectWebXRGamepadPoseAPI(): boolean;
    /**
     * Detects WebXR Frame Of Reference API support in the browser.
     * @returns {boolean} True if WebXR Frame Of Reference API is supported, false otherwise.
     */
    static detectWebXRFrameOfReferenceAPI(): boolean;
    /**
     * Detects WebXR Frame Request Callback API support in the browser.
     * @returns {boolean} True if WebXR Frame Request Callback API is supported, false otherwise.
     */
    static detectWebXRFrameRequestCallbackAPI(): boolean;
    /**
     * Detects WebXR Audio Listener API support in the browser.
     * @returns {boolean} True if WebXR Audio Listener API is supported, false otherwise.
     */
    static detectWebXRAudioListenerAPI(): boolean;
    /**
     * Detects WebXR Audio Context API support in the browser.
     * @returns {boolean} True if WebXR Audio Context API is supported, false otherwise.
     */
    static detectWebXRAudioContextAPI(): boolean;
    /**
     * Detects WebXR Input Source Event API support in the browser.
     * @returns {boolean} True if WebXR Input Source Event API is supported, false otherwise.
     */
    static detectWebXRInputSourceEventAPI(): boolean;
    /**
     * Detects WebXR Input Source Array API support in the browser.
     * @returns {boolean} True if WebXR Input Source Array API is supported, false otherwise.
     */
    static detectWebXRInputSourceArrayAPI(): boolean;
    /**
     * Detects WebXR Input Source Hand API support in the browser.
     * @returns {boolean} True if WebXR Input Source Hand API is supported, false otherwise.
     */
    static detectWebXRInputSourceHandAPI(): boolean;
    /**
     * Detects WebXR Input Source Haptic Actuator API support in the browser.
     * @returns {boolean} True if WebXR Input Source Haptic Actuator API is supported, false otherwise.
     */
    static detectWebXRInputSourceHapticActuatorAPI(): boolean;
    /**
     * Detects WebXR Input Source Pose API support in the browser.
     * @returns {boolean} True if WebXR Input Source Pose API is supported, false otherwise.
     */
    static detectWebXRInputSourcePoseAPI(): boolean;
    /**
     * Detects WebXR Input Source Pose State API support in the browser.
     * @returns {boolean} True if WebXR Input Source Pose State API is supported, false otherwise.
     */
    static detectWebXRInputSourcePoseStateAPI(): boolean;
    /**
     * Detects WebXR Input Source Profile API support in the browser.
     * @returns {boolean} True if WebXR Input Source Profile API is supported, false otherwise.
     */
    static detectWebXRInputSourceProfileAPI(): boolean;
    /**
     * Detects WebXR Input Source Target Ray Mode API support in the browser.
     * @returns {boolean} True if WebXR Input Source Target Ray Mode API is supported, false otherwise.
     */
    static detectWebXRInputSourceTargetRayModeAPI(): boolean;
    /**
     * Detects WebXR Input Source Target Ray Space API support in the browser.
     * @returns {boolean} True if WebXR Input Source Target Ray Space API is supported, false otherwise.
     */
    static detectWebXRInputSourceTargetRaySpaceAPI(): boolean;
    /**
     * Detects WebXR Input Source Touchpad API support in the browser.
     * @returns {boolean} True if WebXR Input Source Touchpad API is supported, false otherwise.
     */
    static detectWebXRInputSourceTouchpadAPI(): boolean;
    /**
     * Detects WebXR Input Source Vibration Actuator API support in the browser.
     * @returns {boolean} True if WebXR Input Source Vibration Actuator API is supported, false otherwise.
     */
    static detectWebXRInputSourceVibrationActuatorAPI(): boolean;
    /**
     * Detects WebXR Hit Test Source API support in the browser.
     * @returns {boolean} True if WebXR Hit Test Source API is supported, false otherwise.
     */
    static detectWebXRHitTestSourceAPI(): boolean;
    /**
     * Detects WebXR Hit Test Source Offset API support in the browser.
     * @returns {boolean} True if WebXR Hit Test Source Offset API is supported, false otherwise.
     */
    static detectWebXRHitTestSourceOffsetAPI(): boolean;
    /**
     * Detects WebXR Hit Test Source Pose API support in the browser.
     * @returns {boolean} True if WebXR Hit Test Source Pose API is supported, false otherwise.
     */
    static detectWebXRHitTestSourcePoseAPI(): boolean;
    /**
     * Detects WebXR Hit Test Source Ray Space API support in the browser.
     * @returns {boolean} True if WebXR Hit Test Source Ray Space API is supported, false otherwise.
     */
    static detectWebXRHitTestSourceRaySpaceAPI(): boolean;
    /**
     * Detects WebXR Hit Test Result API support in the browser.
     * @returns {boolean} True if WebXR Hit Test Result API is supported, false otherwise.
     */
    static detectWebXRHitTestResultAPI(): boolean;
    /**
     * Detects WebXR Image API support in the browser.
     * @returns {boolean} True if WebXR Image API is supported, false otherwise.
     */
    static detectWebXRImageAPI(): boolean;
    /**
     * Detects WebXR Image Bitmap API support in the browser.
     * @returns {boolean} True if WebXR Image Bitmap API is supported, false otherwise.
     */
    static detectWebXRImageBitmapAPI(): boolean;
    /**
     * Detects WebXR Image Bitmap Array API support in the browser.
     * @returns {boolean} True if WebXR Image Bitmap Array API is supported, false otherwise.
     */
    static detectWebXRImageBitmapArrayAPI(): boolean;
    /**
     * Detects WebXR Image Bitmap Rendering Context API support in the browser.
     * @returns {boolean} True if WebXR Image Bitmap Rendering Context API is supported, false otherwise.
     */
    static detectWebXRImageBitmapRenderingContextAPI(): boolean;
    /**
     * Detects WebXR Image Bitmap Rendering Context Sync API support in the browser.
     * @returns {boolean} True if WebXR Image Bitmap Rendering Context Sync API is supported, false otherwise.
     */
    static detectWebXRImageBitmapRenderingContextSyncAPI(): boolean;
    /**
     * Detects WebXR Image Decode API support in the browser.
     * @returns {boolean} True if WebXR Image Decode API is supported, false otherwise.
     */
    static detectWebXRImageDecodeAPI(): boolean;
    /**
     * Detects WebXR Image Encode API support in the browser.
     * @returns {boolean} True if WebXR Image Encode API is supported, false otherwise.
     */
    static detectWebXRImageEncodeAPI(): boolean;
}
