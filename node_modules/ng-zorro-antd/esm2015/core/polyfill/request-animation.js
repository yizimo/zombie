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
const availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    let lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        const currTime = new Date().getTime();
        /** @type {?} */
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        const id = setTimeout((/**
         * @return {?}
         */
        () => {
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
        () => 0);
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    const prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    key => `${key}RequestAnimationFrame` in window))[0];
    return prefix ? ((/** @type {?} */ (window)))[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
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
    const prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[`${prefix}CancelAnimationFrame`] || ((/** @type {?} */ (window)))[`${prefix}CancelRequestAnimationFrame`])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
export const reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztNQVNNLGlCQUFpQixHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7Ozs7QUFFakQsU0FBUyw2QkFBNkI7O1FBQ2hDLFFBQVEsR0FBRyxDQUFDO0lBQ2hCOzs7O0lBQU8sVUFBUyxRQUE4Qjs7Y0FDdEMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOztjQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDOztjQUNwRCxFQUFFLEdBQUcsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxHQUFFLFVBQVUsQ0FBQztRQUNkLFFBQVEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7OztBQUVELFNBQVMsd0JBQXdCO0lBQy9CLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDOzs7UUFBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUM7S0FDaEI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtRQUNoQywyQ0FBMkM7UUFDM0MsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOztVQUVLLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLElBQUksTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFGLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsR0FBRyxNQUFNLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixFQUFFLENBQUM7QUFDdEcsQ0FBQzs7Ozs7QUFDRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsRUFBVTtJQUNwRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFDL0IsT0FBTyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDeEM7O1VBQ0ssTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7SUFDckMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsc0JBQXNCLElBQUksTUFBTSxJQUFJLEdBQUcsR0FBRyw2QkFBNkIsSUFBSSxNQUFNLEVBQy9GLENBQUMsQ0FBQyxDQUFDO0lBRUosT0FBTyxNQUFNO1FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sNkJBQTZCLENBQUMsQ0FBQztZQUMzRyxhQUFhO2FBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQUcsd0JBQXdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXG5jb25zdCBhdmFpbGFibGVQcmVmaXhlcyA9IFsnbW96JywgJ21zJywgJ3dlYmtpdCddO1xuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcbiAgbGV0IGxhc3RUaW1lID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgIHJldHVybiBpZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gKCkgPT4gMDtcbiAgfVxuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzQ0NjVcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG4gIH1cblxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhlcy5maWx0ZXIoa2V5ID0+IGAke2tleX1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdylbMF07XG5cbiAgcmV0dXJuIHByZWZpeCA/ICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYF0gOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShpZDogbnVtYmVyKTogYW55IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICB9XG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeGVzLmZpbHRlcihcbiAgICBrZXkgPT4gYCR7a2V5fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cgfHwgYCR7a2V5fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93XG4gIClbMF07XG5cbiAgcmV0dXJuIHByZWZpeFxuICAgID8gKCh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgXSB8fCAod2luZG93IGFzIGFueSlbYCR7cHJlZml4fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWBdKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC5jYWxsKHRoaXMsIGlkKVxuICAgIDogY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuIl19