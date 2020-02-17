/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider-definitions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function MarkObj() { }
if (false) {
    /** @type {?|undefined} */
    MarkObj.prototype.style;
    /** @type {?} */
    MarkObj.prototype.label;
}
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
export function ExtendedMark() { }
if (false) {
    /** @type {?} */
    ExtendedMark.prototype.value;
    /** @type {?} */
    ExtendedMark.prototype.offset;
    /** @type {?} */
    ExtendedMark.prototype.config;
}
/**
 * Marks that would be rendered.
 * @record
 */
export function DisplayedMark() { }
if (false) {
    /** @type {?} */
    DisplayedMark.prototype.active;
    /** @type {?} */
    DisplayedMark.prototype.label;
    /** @type {?|undefined} */
    DisplayedMark.prototype.style;
}
/**
 * Steps that would be rendered.
 * @record
 */
export function DisplayedStep() { }
if (false) {
    /** @type {?} */
    DisplayedStep.prototype.active;
    /** @type {?|undefined} */
    DisplayedStep.prototype.style;
}
/**
 * @record
 */
export function SliderHandler() { }
if (false) {
    /** @type {?} */
    SliderHandler.prototype.offset;
    /** @type {?} */
    SliderHandler.prototype.value;
    /** @type {?} */
    SliderHandler.prototype.active;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function isConfigAObject(config) {
    return config instanceof Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsNkJBR0M7OztJQUZDLHdCQUFlOztJQUNmLHdCQUFjOztBQUtoQjtJQUFBO0lBRUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7Ozs7O0FBS0Qsa0NBSUM7OztJQUhDLDZCQUFjOztJQUNkLDhCQUFlOztJQUNmLDhCQUFhOzs7Ozs7QUFNZixtQ0FJQzs7O0lBSEMsK0JBQWdCOztJQUNoQiw4QkFBYzs7SUFDZCw4QkFBZTs7Ozs7O0FBTWpCLG1DQUdDOzs7SUFGQywrQkFBZ0I7O0lBQ2hCLDhCQUFlOzs7OztBQU9qQixtQ0FJQzs7O0lBSEMsK0JBQXNCOztJQUN0Qiw4QkFBcUI7O0lBQ3JCLCtCQUFnQjs7Ozs7O0FBR2xCLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBa0I7SUFDOUMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBWTtJQUMxQyxPQUFPLE1BQU0sWUFBWSxNQUFNLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgdHlwZSBNYXJrID0gc3RyaW5nIHwgTWFya09iajtcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrT2JqIHtcbiAgc3R5bGU/OiBvYmplY3Q7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE56TWFya3MgPSBNYXJrcztcblxuZXhwb3J0IGNsYXNzIE1hcmtzIHtcbiAgW2tleTogbnVtYmVyXTogTWFyaztcbn1cblxuLyoqXG4gKiBQcm9jZXNzZWQgc3RlcHMgdGhhdCB3b3VsZCBiZSBwYXNzZWQgdG8gc3ViIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5kZWRNYXJrIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIGNvbmZpZzogTWFyaztcbn1cblxuLyoqXG4gKiBNYXJrcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZE1hcmsgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN0eWxlPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFN0ZXBzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkU3RlcCBleHRlbmRzIEV4dGVuZGVkTWFyayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgc3R5bGU/OiBvYmplY3Q7XG59XG5cbmV4cG9ydCB0eXBlIFNsaWRlclNob3dUb29sdGlwID0gJ2Fsd2F5cycgfCAnbmV2ZXInIHwgJ2RlZmF1bHQnO1xuXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlcltdIHwgbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlckhhbmRsZXIge1xuICBvZmZzZXQ6IG51bWJlciB8IG51bGw7XG4gIHZhbHVlOiBudW1iZXIgfCBudWxsO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlQVJhbmdlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZhbHVlIGlzIG51bWJlcltdIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb25maWdBT2JqZWN0KGNvbmZpZzogTWFyayk6IGNvbmZpZyBpcyBNYXJrT2JqIHtcbiAgcmV0dXJuIGNvbmZpZyBpbnN0YW5jZW9mIE9iamVjdDtcbn1cbiJdfQ==