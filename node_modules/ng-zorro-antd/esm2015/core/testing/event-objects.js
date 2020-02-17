/**
 * @fileoverview added by tsickle
 * Generated from: testing/event-objects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} button
 * @return {?}
 */
export function createMouseEvent(type, x = 0, y = 0, button = 0) {
    /** @type {?} */
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: (/**
         * @return {?}
         */
        () => 1) });
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
export function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    const event = document.createEvent('UIEvent');
    /** @type {?} */
    const touchDetails = { pageX, pageY, clientX: pageX, clientY: pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
export function createKeyboardEvent(type, keyCode, target, key) {
    // tslint:disable-next-line:no-any
    /** @type {?} */
    const event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    /** @type {?} */
    const originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    }
    else {
        event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            () => keyCode) },
        key: { get: (/**
             * @return {?}
             */
            () => key) },
        target: { get: (/**
             * @return {?}
             */
            () => target) }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            () => true) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
export function createFakeEvent(type, canBubble = true, cancelable = true) {
    /** @type {?} */
    const event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRlc3RpbmcvZXZlbnQtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsSUFBWSxDQUFDLEVBQUUsSUFBWSxDQUFDLEVBQUUsU0FBaUIsQ0FBQzs7VUFDdkYsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBRWhELEtBQUssQ0FBQyxjQUFjLENBQ2xCLElBQUksRUFDSixJQUFJLENBQUMsZUFBZSxFQUNwQixLQUFLLENBQUMsZ0JBQWdCLEVBQ3RCLE1BQU0sQ0FBQyxVQUFVLEVBQ2pCLENBQUMsQ0FBQyxZQUFZLEVBQ2QsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxFQUNsQixLQUFLLENBQUMsY0FBYyxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixNQUFNLENBQUMsWUFBWSxFQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7SUFFRiw4REFBOEQ7SUFDOUQsa0RBQWtEO0lBQ2xELE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUc7OztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUMsQ0FBQztJQUUxRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxRQUFnQixDQUFDLEVBQUUsUUFBZ0IsQ0FBQzs7OztVQUczRSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7O1VBQ3ZDLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0lBQ3JFLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9DLHVGQUF1RjtJQUN2RixxQkFBcUI7SUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUM3QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNsQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN4QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtLQUMxQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWdCLEVBQUUsR0FBWTs7O1VBRXpGLEtBQUssR0FBRyxtQkFBQSxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFPOztVQUNwRCxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYztJQUVuRCw2RUFBNkU7SUFDN0UsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO1FBQ3RCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdEU7U0FBTTtRQUNMLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pFO0lBRUQsd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxFQUFFLEdBQUc7OztZQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQSxFQUFFO1FBQy9CLEdBQUcsRUFBRSxFQUFFLEdBQUc7OztZQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxFQUFFLEdBQUc7OztZQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQSxFQUFFO0tBQzlCLENBQUMsQ0FBQztJQUVILG9GQUFvRjtJQUNwRixtQ0FBbUM7SUFDbkMsS0FBSyxDQUFDLGNBQWM7OztJQUFHO1FBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7O1lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLDJDQUEyQztRQUMzQyxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFBLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsWUFBcUIsSUFBSSxFQUFFLGFBQXNCLElBQUk7O1VBQzNGLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUMzQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0MsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKiBDcmVhdGVzIGEgYnJvd3NlciBNb3VzZUV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBvcHRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vdXNlRXZlbnQodHlwZTogc3RyaW5nLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBidXR0b246IG51bWJlciA9IDApOiBNb3VzZUV2ZW50IHtcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xuXG4gIGV2ZW50LmluaXRNb3VzZUV2ZW50KFxuICAgIHR5cGUsXG4gICAgdHJ1ZSAvKiBjYW5CdWJibGUgKi8sXG4gICAgZmFsc2UgLyogY2FuY2VsYWJsZSAqLyxcbiAgICB3aW5kb3cgLyogdmlldyAqLyxcbiAgICAwIC8qIGRldGFpbCAqLyxcbiAgICB4IC8qIHNjcmVlblggKi8sXG4gICAgeSAvKiBzY3JlZW5ZICovLFxuICAgIHggLyogY2xpZW50WCAqLyxcbiAgICB5IC8qIGNsaWVudFkgKi8sXG4gICAgZmFsc2UgLyogY3RybEtleSAqLyxcbiAgICBmYWxzZSAvKiBhbHRLZXkgKi8sXG4gICAgZmFsc2UgLyogc2hpZnRLZXkgKi8sXG4gICAgZmFsc2UgLyogbWV0YUtleSAqLyxcbiAgICBidXR0b24gLyogYnV0dG9uICovLFxuICAgIG51bGwgLyogcmVsYXRlZFRhcmdldCAqL1xuICApO1xuXG4gIC8vIGBpbml0TW91c2VFdmVudGAgZG9lc24ndCBhbGxvdyB1cyB0byBwYXNzIHRoZSBgYnV0dG9uc2AgYW5kXG4gIC8vIGRlZmF1bHRzIGl0IHRvIDAgd2hpY2ggbG9va3MgbGlrZSBhIGZha2UgZXZlbnQuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2J1dHRvbnMnLCB7IGdldDogKCkgPT4gMSB9KTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKiBDcmVhdGVzIGEgYnJvd3NlciBUb3VjaEV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvdWNoRXZlbnQodHlwZTogc3RyaW5nLCBwYWdlWDogbnVtYmVyID0gMCwgcGFnZVk6IG51bWJlciA9IDApOiBVSUV2ZW50IHtcbiAgLy8gSW4gZmF2b3Igb2YgY3JlYXRpbmcgZXZlbnRzIHRoYXQgd29yayBmb3IgbW9zdCBvZiB0aGUgYnJvd3NlcnMsIHRoZSBldmVudCBpcyBjcmVhdGVkXG4gIC8vIGFzIGEgYmFzaWMgVUkgRXZlbnQuIFRoZSBuZWNlc3NhcnkgZGV0YWlscyBmb3IgdGhlIGV2ZW50IHdpbGwgYmUgc2V0IG1hbnVhbGx5LlxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdVSUV2ZW50Jyk7XG4gIGNvbnN0IHRvdWNoRGV0YWlscyA9IHsgcGFnZVgsIHBhZ2VZLCBjbGllbnRYOiBwYWdlWCwgY2xpZW50WTogcGFnZVkgfTtcbiAgZXZlbnQuaW5pdFVJRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwKTtcblxuICAvLyBNb3N0IG9mIHRoZSBicm93c2VycyBkb24ndCBoYXZlIGEgXCJpbml0VG91Y2hFdmVudFwiIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZVxuICAvLyB0aGUgdG91Y2ggZGV0YWlscy5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHtcbiAgICB0b3VjaGVzOiB7IHZhbHVlOiBbdG91Y2hEZXRhaWxzXSB9LFxuICAgIHRhcmdldFRvdWNoZXM6IHsgdmFsdWU6IFt0b3VjaERldGFpbHNdIH0sXG4gICAgY2hhbmdlZFRvdWNoZXM6IHsgdmFsdWU6IFt0b3VjaERldGFpbHNdIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKiogRGlzcGF0Y2hlcyBhIGtleWRvd24gZXZlbnQgZnJvbSBhbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHRhcmdldD86IEVsZW1lbnQsIGtleT86IHN0cmluZyk6IEtleWJvYXJkRXZlbnQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0tleWJvYXJkRXZlbnQnKSBhcyBhbnk7XG4gIGNvbnN0IG9yaWdpbmFsUHJldmVudERlZmF1bHQgPSBldmVudC5wcmV2ZW50RGVmYXVsdDtcblxuICAvLyBGaXJlZm94IGRvZXMgbm90IHN1cHBvcnQgYGluaXRLZXlib2FyZEV2ZW50YCwgYnV0IHN1cHBvcnRzIGBpbml0S2V5RXZlbnRgLlxuICBpZiAoZXZlbnQuaW5pdEtleUV2ZW50KSB7XG4gICAgZXZlbnQuaW5pdEtleUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwga2V5Q29kZSk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQuaW5pdEtleWJvYXJkRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCBrZXksIDAsICcnLCBmYWxzZSk7XG4gIH1cblxuICAvLyBXZWJraXQgQnJvd3NlcnMgZG9uJ3Qgc2V0IHRoZSBrZXlDb2RlIHdoZW4gY2FsbGluZyB0aGUgaW5pdCBmdW5jdGlvbi5cbiAgLy8gU2VlIHJlbGF0ZWQgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNjczNVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhldmVudCwge1xuICAgIGtleUNvZGU6IHsgZ2V0OiAoKSA9PiBrZXlDb2RlIH0sXG4gICAga2V5OiB7IGdldDogKCkgPT4ga2V5IH0sXG4gICAgdGFyZ2V0OiB7IGdldDogKCkgPT4gdGFyZ2V0IH1cbiAgfSk7XG5cbiAgLy8gSUUgd29uJ3Qgc2V0IGBkZWZhdWx0UHJldmVudGVkYCBvbiBzeW50aGV0aWMgZXZlbnRzIHNvIHdlIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnZGVmYXVsdFByZXZlbnRlZCcsIHsgZ2V0OiAoKSA9PiB0cnVlIH0pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICByZXR1cm4gb3JpZ2luYWxQcmV2ZW50RGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqIENyZWF0ZXMgYSBmYWtlIGV2ZW50IG9iamVjdCB3aXRoIGFueSBkZXNpcmVkIGV2ZW50IHR5cGUuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmFrZUV2ZW50KHR5cGU6IHN0cmluZywgY2FuQnViYmxlOiBib29sZWFuID0gdHJ1ZSwgY2FuY2VsYWJsZTogYm9vbGVhbiA9IHRydWUpOiBFdmVudCB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gIGV2ZW50LmluaXRFdmVudCh0eXBlLCBjYW5CdWJibGUsIGNhbmNlbGFibGUpO1xuICByZXR1cm4gZXZlbnQ7XG59XG4iXX0=