/**
 * @fileoverview added by tsickle
 * Generated from: polyfill/request-animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable:no-any typedef no-invalid-this
/** @type {?} */
var availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = setTimeout((/**
         * @return {?}
         */
        function () {
            callback(currTime + timeToCall);
        }), timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    });
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return (/**
         * @return {?}
         */
        function () { return 0; });
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "RequestAnimationFrame" in window; }))[0];
    return prefix ? ((/** @type {?} */ (window)))[prefix + "RequestAnimationFrame"] : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
export function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window; }))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[prefix + "CancelAnimationFrame"] || ((/** @type {?} */ (window)))[prefix + "CancelRequestAnimationFrame"])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
export var reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQVNNLGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7Ozs7QUFFakQsU0FBUyw2QkFBNkI7O1FBQ2hDLFFBQVEsR0FBRyxDQUFDO0lBQ2hCOzs7O0lBQU8sVUFBUyxRQUE4Qjs7WUFDdEMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOztZQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDOztZQUNwRCxFQUFFLEdBQUcsVUFBVTs7O1FBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUUsVUFBVSxDQUFDO1FBQ2QsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQUM7QUFDSixDQUFDOzs7O0FBRUQsU0FBUyx3QkFBd0I7SUFDL0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakM7OztRQUFPLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDO0tBQ2hCO0lBQ0QsSUFBSSxNQUFNLENBQUMscUJBQXFCLEVBQUU7UUFDaEMsMkNBQTJDO1FBQzNDLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsRDs7UUFFSyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUcsR0FBRywwQkFBdUIsSUFBSSxNQUFNLEVBQXZDLENBQXVDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUYsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBSSxNQUFNLDBCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixFQUFFLENBQUM7QUFDdEcsQ0FBQzs7Ozs7QUFDRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsRUFBVTtJQUNwRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFDL0IsT0FBTyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDeEM7O1FBQ0ssTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7SUFDckMsVUFBQSxHQUFHLElBQUksT0FBRyxHQUFHLHlCQUFzQixJQUFJLE1BQU0sSUFBTyxHQUFHLGdDQUE2QixJQUFJLE1BQU0sRUFBdkYsQ0FBdUYsRUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLE1BQU07UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUksTUFBTSx5QkFBc0IsQ0FBQyxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBSSxNQUFNLGdDQUE2QixDQUFDLENBQUM7WUFDM0csYUFBYTthQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUFHLHdCQUF3QixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSB0eXBlZGVmIG5vLWludmFsaWQtdGhpc1xuY29uc3QgYXZhaWxhYmxlUHJlZml4ZXMgPSBbJ21veicsICdtcycsICd3ZWJraXQnXTtcblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbihjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiBudW1iZXIge1xuICAgIGNvbnN0IGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICgpID0+IDA7XG4gIH1cbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy80NDY1XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xuICB9XG5cbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4ZXMuZmlsdGVyKGtleSA9PiBgJHtrZXl9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cpWzBdO1xuXG4gIHJldHVybiBwcmVmaXggPyAod2luZG93IGFzIGFueSlbYCR7cHJlZml4fVJlcXVlc3RBbmltYXRpb25GcmFtZWBdIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaWQ6IG51bWJlcik6IGFueSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgfVxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhlcy5maWx0ZXIoXG4gICAga2V5ID0+IGAke2tleX1DYW5jZWxBbmltYXRpb25GcmFtZWAgaW4gd2luZG93IHx8IGAke2tleX1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvd1xuICApWzBdO1xuXG4gIHJldHVybiBwcmVmaXhcbiAgICA/ICgod2luZG93IGFzIGFueSlbYCR7cHJlZml4fUNhbmNlbEFuaW1hdGlvbkZyYW1lYF0gfHwgKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXSlcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAuY2FsbCh0aGlzLCBpZClcbiAgICA6IGNsZWFyVGltZW91dChpZCk7XG59XG5cbmV4cG9ydCBjb25zdCByZXFBbmltRnJhbWUgPSBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiJdfQ==