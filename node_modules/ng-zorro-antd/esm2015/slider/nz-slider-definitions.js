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
export class Marks {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsNkJBR0M7OztJQUZDLHdCQUFlOztJQUNmLHdCQUFjOztBQUtoQixNQUFNLE9BQU8sS0FBSztDQUVqQjs7Ozs7QUFLRCxrQ0FJQzs7O0lBSEMsNkJBQWM7O0lBQ2QsOEJBQWU7O0lBQ2YsOEJBQWE7Ozs7OztBQU1mLG1DQUlDOzs7SUFIQywrQkFBZ0I7O0lBQ2hCLDhCQUFjOztJQUNkLDhCQUFlOzs7Ozs7QUFNakIsbUNBR0M7OztJQUZDLCtCQUFnQjs7SUFDaEIsOEJBQWU7Ozs7O0FBT2pCLG1DQUlDOzs7SUFIQywrQkFBc0I7O0lBQ3RCLDhCQUFxQjs7SUFDckIsK0JBQWdCOzs7Ozs7QUFHbEIsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFrQjtJQUM5QyxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7UUFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFZO0lBQzFDLE9BQU8sTUFBTSxZQUFZLE1BQU0sQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmV4cG9ydCB0eXBlIE1hcmsgPSBzdHJpbmcgfCBNYXJrT2JqO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtPYmoge1xuICBzdHlsZT86IG9iamVjdDtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTnpNYXJrcyA9IE1hcmtzO1xuXG5leHBvcnQgY2xhc3MgTWFya3Mge1xuICBba2V5OiBudW1iZXJdOiBNYXJrO1xufVxuXG4vKipcbiAqIFByb2Nlc3NlZCBzdGVwcyB0aGF0IHdvdWxkIGJlIHBhc3NlZCB0byBzdWIgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZE1hcmsge1xuICB2YWx1ZTogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgY29uZmlnOiBNYXJrO1xufVxuXG4vKipcbiAqIE1hcmtzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkTWFyayBleHRlbmRzIEV4dGVuZGVkTWFyayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3R5bGU/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogU3RlcHMgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRTdGVwIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBzdHlsZT86IG9iamVjdDtcbn1cblxuZXhwb3J0IHR5cGUgU2xpZGVyU2hvd1Rvb2x0aXAgPSAnYWx3YXlzJyB8ICduZXZlcicgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCB0eXBlIFNsaWRlclZhbHVlID0gbnVtYmVyW10gfCBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVySGFuZGxlciB7XG4gIG9mZnNldDogbnVtYmVyIHwgbnVsbDtcbiAgdmFsdWU6IG51bWJlciB8IG51bGw7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVBUmFuZ2UodmFsdWU6IFNsaWRlclZhbHVlKTogdmFsdWUgaXMgbnVtYmVyW10ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbmZpZ0FPYmplY3QoY29uZmlnOiBNYXJrKTogY29uZmlnIGlzIE1hcmtPYmoge1xuICByZXR1cm4gY29uZmlnIGluc3RhbmNlb2YgT2JqZWN0O1xufVxuIl19