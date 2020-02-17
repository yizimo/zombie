/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal-ref.class.ts
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
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class NzModalRef {
}
if (false) {
    /** @type {?} */
    NzModalRef.prototype.afterOpen;
    /** @type {?} */
    NzModalRef.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.destroy = function (result) { };
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getElement = function () { };
    /**
     * Get the instance of the Modal itself
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getInstance = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU0sT0FBZ0IsVUFBVTtDQW1DL0I7OztJQWxDQywrQkFBcUM7O0lBQ3JDLGdDQUFtQzs7Ozs7SUFFbkMsNENBQXNCOzs7Ozs7SUFDdEIsbURBQWlDOzs7Ozs7SUFDakMscURBQW1DOzs7Ozs7SUFLbkMsaURBQTJCOzs7OztJQUMzQixxREFBK0I7Ozs7Ozs7SUFZL0IsMkRBQWtDOzs7Ozs7SUFLbEMsa0RBQW1DOzs7Ozs7SUFLbkMsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcblxuLyoqXG4gKiBBUEkgY2xhc3MgdGhhdCBwdWJsaWMgdG8gdXNlcnMgdG8gaGFuZGxlIHRoZSBtb2RhbCBpbnN0YW5jZS5cbiAqIE56TW9kYWxSZWYgaXMgYWltIHRvIGF2b2lkIGFjY2Vzc2luZyB0byB0aGUgbW9kYWwgaW5zdGFuY2UgZGlyZWN0bHkgYnkgdXNlcnMuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOek1vZGFsUmVmPFQgPSBhbnksIFIgPSBhbnk+IHtcbiAgYWJzdHJhY3QgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICBhYnN0cmFjdCBhZnRlckNsb3NlOiBPYnNlcnZhYmxlPFI+O1xuXG4gIGFic3RyYWN0IG9wZW4oKTogdm9pZDtcbiAgYWJzdHJhY3QgY2xvc2UocmVzdWx0PzogUik6IHZvaWQ7XG4gIGFic3RyYWN0IGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIG56T25Pay9uek9uQ2FuY2VsIGJ5IG1hbnVhbFxuICAgKi9cbiAgYWJzdHJhY3QgdHJpZ2dlck9rKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHRyaWdnZXJDYW5jZWwoKTogdm9pZDtcblxuICAvLyAvKipcbiAgLy8gICogUmV0dXJuIHRoZSBDb21wb25lbnRSZWYgb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcbiAgLy8gICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXG4gIC8vICAqL1xuICAvLyBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjx7fT47XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlIG9mIG56Q29udGVudCB3aGVuIHNwZWNpZnkgbnpDb250ZW50IGFzIGEgQ29tcG9uZW50XG4gICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRvbSBlbGVtZW50IG9mIHRoaXMgTW9kYWxcbiAgICovXG4gIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIE1vZGFsIGl0c2VsZlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudDtcbn1cbiJdfQ==