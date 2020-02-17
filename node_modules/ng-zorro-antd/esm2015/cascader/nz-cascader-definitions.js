/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader-definitions.ts
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
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderOption() { }
if (false) {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderSearchOption() { }
if (false) {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
/**
 * @param {?} options
 * @return {?}
 */
export function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
export function NzCascaderComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.inputValue;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzChangeOnSelect;
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzChangeOn = function (option, level) { };
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzLoadData = function (node, index) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxvQ0FXQzs7O0lBVkMsK0JBQVk7O0lBQ1osK0JBQWU7O0lBQ2YsK0JBQWU7O0lBQ2Ysa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLGdDQUFpQjs7SUFDakIsZ0NBQTBCOztJQUMxQixrQ0FBOEI7Ozs7Ozs7QUFVaEMsMENBRUM7OztJQURDLG9DQUF5Qjs7Ozs7QUFLM0IseUNBR0M7OztJQUZDLHFDQUEwQjs7SUFDMUIscUNBQTBCOzs7Ozs7QUFHNUIsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE9BQXNDO0lBQ3ZFLE9BQU8sT0FBTyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ3RDLENBQUM7Ozs7OztBQU1ELGlEQVdDOzs7SUFWQyxpREFBbUI7O0lBQ25CLG1EQUE0Qzs7SUFDNUMsc0RBQXdCOztJQUN4QixzREFBd0I7O0lBQ3hCLHVEQUEwQjs7Ozs7O0lBRTFCLGdGQUE4RDs7Ozs7O0lBRzlELDhFQUFzRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljaycgfCAnaG92ZXInO1xuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclRyaWdnZXJUeXBlID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBOekNhc2NhZGVyU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnO1xuXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyRmlsdGVyID0gKHNlYXJjaFZhbHVlOiBzdHJpbmcsIHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXSkgPT4gYm9vbGVhbjtcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTb3J0ZXIgPSAoYTogTnpDYXNjYWRlck9wdGlvbltdLCBiOiBOekNhc2NhZGVyT3B0aW9uW10sIGlucHV0VmFsdWU6IHN0cmluZykgPT4gbnVtYmVyO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGUgcHJlZml4ZWQgdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlck9wdGlvbiB7XG4gIHZhbHVlPzogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBsYWJlbD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGlzTGVhZj86IGJvb2xlYW47XG4gIHBhcmVudD86IE56Q2FzY2FkZXJPcHRpb247XG4gIGNoaWxkcmVuPzogTnpDYXNjYWRlck9wdGlvbltdO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbn1cblxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlck9wdGlvbiA9IENhc2NhZGVyT3B0aW9uO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGUgcHJlZml4ZWQgdmVyc2lvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlclNlYXJjaE9wdGlvbiBleHRlbmRzIE56Q2FzY2FkZXJPcHRpb24ge1xuICBwYXRoOiBOekNhc2NhZGVyT3B0aW9uW107XG59XG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24gPSBDYXNjYWRlclNlYXJjaE9wdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBOelNob3dTZWFyY2hPcHRpb25zIHtcbiAgZmlsdGVyPzogTnpDYXNjYWRlckZpbHRlcjtcbiAgc29ydGVyPzogTnpDYXNjYWRlclNvcnRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hvd1NlYXJjaE9iamVjdChvcHRpb25zOiBOelNob3dTZWFyY2hPcHRpb25zIHwgYm9vbGVhbik6IG9wdGlvbnMgaXMgTnpTaG93U2VhcmNoT3B0aW9ucyB7XG4gIHJldHVybiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nO1xufVxuXG4vKipcbiAqIFRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3ksIHByb3ZpZGUgYW4gaW50ZXJmYWNlIG9mIGBOekNhc2NhZGVyQ29tcG9uZW50YFxuICogZm9yIGBOekNhc2NhZGVyU2VydmljZWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlIHtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBuelNob3dTZWFyY2g6IE56U2hvd1NlYXJjaE9wdGlvbnMgfCBib29sZWFuO1xuICBuekxhYmVsUHJvcGVydHk6IHN0cmluZztcbiAgbnpWYWx1ZVByb3BlcnR5OiBzdHJpbmc7XG4gIG56Q2hhbmdlT25TZWxlY3Q6IGJvb2xlYW47XG5cbiAgbnpDaGFuZ2VPbj8ob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG56TG9hZERhdGE/KG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKTogUHJvbWlzZUxpa2U8YW55Pjtcbn1cbiJdfQ==