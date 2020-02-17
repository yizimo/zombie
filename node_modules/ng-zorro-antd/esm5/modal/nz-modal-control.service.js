/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal-control.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import * as i0 from "@angular/core";
import * as i1 from "./nz-modal-control.service.module";
/**
 * @record
 */
function RegisteredMeta() { }
if (false) {
    /** @type {?} */
    RegisteredMeta.prototype.modalRef;
    /** @type {?} */
    RegisteredMeta.prototype.afterOpenSubscription;
    /** @type {?} */
    RegisteredMeta.prototype.afterCloseSubscription;
}
var NzModalControlService = /** @class */ (function () {
    function NzModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: 
        // Track singleton afterAllClose through over the injection tree
        /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.afterAllClose : (/** @type {?} */ (this.rootAfterAllClose));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: 
        // Track singleton openModals array through over the injection tree
        /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.openModals : (/** @type {?} */ (this.rootOpenModals));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : (/** @type {?} */ (this.rootRegisteredMetaMap));
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.registerModal = 
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            /** @type {?} */
            var afterOpenSubscription = modalRef.afterOpen.subscribe((/**
             * @return {?}
             */
            function () { return _this.openModals.push(modalRef); }));
            /** @type {?} */
            var afterCloseSubscription = modalRef.afterClose.subscribe((/**
             * @return {?}
             */
            function () { return _this.removeOpenModal(modalRef); }));
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.deregisterModal = 
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.hasRegistered = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    // Close all registered opened modals
    /**
     * @return {?}
     */
    NzModalControlService.prototype.closeAll = 
    // Close all registered opened modals
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.removeOpenModal = /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    NzModalControlService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzModalControlServiceModule
                },] }
    ];
    /** @nocollapse */
    NzModalControlService.ctorParameters = function () { return [
        { type: NzModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    /** @nocollapse */ NzModalControlService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzModalControlService_Factory() { return new NzModalControlService(i0.ɵɵinject(NzModalControlService, 12)); }, token: NzModalControlService, providedIn: i1.NzModalControlServiceModule });
    return NzModalControlService;
}());
export { NzModalControlService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootOpenModals;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootAfterAllClose;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootRegisteredMetaMap;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.parentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7OztBQUdoRiw2QkFJQzs7O0lBSEMsa0NBQXFCOztJQUNyQiwrQ0FBb0M7O0lBQ3BDLGdEQUFxQzs7QUFHdkM7SUF1QkUsK0JBQTRDLGFBQW9DO1FBQXBDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQVR4RSxtQkFBYyxHQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRSxzQkFBaUIsR0FBeUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFGLDBCQUFxQixHQUEyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQWxCcEYsc0JBQUksZ0RBQWE7UUFEakIsZ0VBQWdFOzs7Ozs7UUFDaEU7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQztRQUN6RixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDZDQUFVO1FBRGQsbUVBQW1FOzs7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Z0NBM0NuQztDQTJGQyxBQXZFRCxJQXVFQztTQXBFWSxxQkFBcUI7Ozs7OztJQVdoQywrQ0FBNkU7Ozs7O0lBQzdFLGtEQUFrRzs7Ozs7SUFDbEcsc0RBQThHOzs7OztJQU9sRyw4Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UubW9kdWxlJztcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XG5cbmludGVyZmFjZSBSZWdpc3RlcmVkTWV0YSB7XG4gIG1vZGFsUmVmOiBOek1vZGFsUmVmO1xuICBhZnRlck9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IE56TW9kYWxDb250cm9sU2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29udHJvbFNlcnZpY2Uge1xuICAvLyBUcmFjayBzaW5nbGV0b24gYWZ0ZXJBbGxDbG9zZSB0aHJvdWdoIG92ZXIgdGhlIGluamVjdGlvbiB0cmVlXG4gIGdldCBhZnRlckFsbENsb3NlKCk6IFN1YmplY3Q8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UuYWZ0ZXJBbGxDbG9zZSA6IHRoaXMucm9vdEFmdGVyQWxsQ2xvc2UhO1xuICB9XG5cbiAgLy8gVHJhY2sgc2luZ2xldG9uIG9wZW5Nb2RhbHMgYXJyYXkgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxuICBnZXQgb3Blbk1vZGFscygpOiBOek1vZGFsUmVmW10ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2Uub3Blbk1vZGFscyA6IHRoaXMucm9vdE9wZW5Nb2RhbHMhO1xuICB9XG5cbiAgcHJpdmF0ZSByb290T3Blbk1vZGFsczogTnpNb2RhbFJlZltdIHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBbXTtcbiAgcHJpdmF0ZSByb290QWZ0ZXJBbGxDbG9zZTogU3ViamVjdDx2b2lkPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByb290UmVnaXN0ZXJlZE1ldGFNYXA6IE1hcDxOek1vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldCByZWdpc3RlcmVkTWV0YU1hcCgpOiBNYXA8TnpNb2RhbFJlZiwgUmVnaXN0ZXJlZE1ldGE+IHtcbiAgICAvLyBSZWdpc3RlcmVkIG1vZGFsIGZvciBsYXRlciB1c2FnZVxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UucmVnaXN0ZXJlZE1ldGFNYXAgOiB0aGlzLnJvb3RSZWdpc3RlcmVkTWV0YU1hcCE7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIHBhcmVudFNlcnZpY2U6IE56TW9kYWxDb250cm9sU2VydmljZSkge31cblxuICAvLyBSZWdpc3RlciBhIG1vZGFsIHRvIGxpc3RlbiBpdHMgb3Blbi9jbG9zZVxuICByZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1JlZ2lzdGVyZWQobW9kYWxSZWYpKSB7XG4gICAgICBjb25zdCBhZnRlck9wZW5TdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlck9wZW4uc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW1vdmVPcGVuTW9kYWwobW9kYWxSZWYpKTtcblxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5zZXQobW9kYWxSZWYsIHsgbW9kYWxSZWYsIGFmdGVyT3BlblN1YnNjcmlwdGlvbiwgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBkZXJlZ2lzdGVyIG1vZGFsc1xuICBkZXJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcbiAgICBjb25zdCByZWdpc3RlcmVkTWV0YSA9IHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZ2V0KG1vZGFsUmVmKTtcbiAgICBpZiAocmVnaXN0ZXJlZE1ldGEpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGlzIG1vZGFsIGlmIGl0IGlzIHN0aWxsIGluIHRoZSBvcGVuZWQgbW9kYWwgbGlzdCAoTk9URTogaXQgbWF5IHRyaWdnZXIgXCJhZnRlckFsbENsb3NlXCIpXG4gICAgICB0aGlzLnJlbW92ZU9wZW5Nb2RhbChyZWdpc3RlcmVkTWV0YS5tb2RhbFJlZik7XG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlck9wZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyQ2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZGVsZXRlKG1vZGFsUmVmKTtcbiAgICB9XG4gIH1cblxuICBoYXNSZWdpc3RlcmVkKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuaGFzKG1vZGFsUmVmKTtcbiAgfVxuXG4gIC8vIENsb3NlIGFsbCByZWdpc3RlcmVkIG9wZW5lZCBtb2RhbHNcbiAgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgbGV0IGkgPSB0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzW2ldLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgaWYgKCF0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZS5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=