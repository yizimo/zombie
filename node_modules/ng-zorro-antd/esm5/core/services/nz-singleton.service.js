/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-singleton.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable no-any
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as i0 from "@angular/core";
/**
 * @record
 */
function SingletonRegistryItem() { }
if (false) {
    /** @type {?} */
    SingletonRegistryItem.prototype.target;
}
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 * @type {?}
 */
var testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
var NzSingletonService = /** @class */ (function () {
    function NzSingletonService() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    Object.defineProperty(NzSingletonService.prototype, "singletonRegistry", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.registerSingletonWithKey = /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    function (key, target) {
        /** @type {?} */
        var alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        var item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    NzSingletonService.prototype.getSingletonWithKey = /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzSingletonService.prototype.withNewTarget = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return {
            target: target
        };
    };
    NzSingletonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NzSingletonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
    return NzSingletonService;
}());
export { NzSingletonService };
if (false) {
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     * @type {?}
     * @private
     */
    NzSingletonService.prototype._singletonRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1zaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBRTFELG9DQUVDOzs7SUFEQyx1Q0FBWTs7Ozs7OztJQU9SLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQzs7Ozs7QUFNbkU7SUFBQTs7Ozs7OztRQWNVLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO0tBb0J2RTtJQTlCQyxzQkFBWSxpREFBaUI7Ozs7O1FBQTdCO1lBQ0UsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQy9FLENBQUM7OztPQUFBOzs7Ozs7SUFVRCxxREFBd0I7Ozs7O0lBQXhCLFVBQXlCLEdBQVcsRUFBRSxNQUFXOztZQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1lBQzdDLElBQUksR0FBMEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBRS9HLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxnREFBbUI7Ozs7O0lBQW5CLFVBQXVCLEdBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakcsQ0FBQzs7Ozs7O0lBRU8sMENBQWE7Ozs7O0lBQXJCLFVBQXNCLE1BQVc7UUFDL0IsT0FBTztZQUNMLE1BQU0sUUFBQTtTQUNQLENBQUM7SUFDSixDQUFDOztnQkFqQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzZCQTlCRDtDQThEQyxBQWxDRCxJQWtDQztTQS9CWSxrQkFBa0I7Ozs7Ozs7Ozs7SUFXN0IsZ0RBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8vIHRzbGludDpkaXNhYmxlIG5vLWFueVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuaW50ZXJmYWNlIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XG4gIHRhcmdldDogYW55O1xufVxuXG4vKipcbiAqIFdoZW4gcnVubmluZyBpbiB0ZXN0LCBzaW5nbGV0b25zIHNob3VsZCBub3QgYmUgZGVzdHJveWVkLiBTbyB3ZSBrZWVwIHJlZmVyZW5jZXMgb2Ygc2luZ2xldG9uc1xuICogaW4gdGhpcyBnbG9iYWwgdmFyaWFibGUuXG4gKi9cbmNvbnN0IHRlc3RTaW5nbGVSZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+KCk7XG5cbi8qKlxuICogU29tZSBzaW5nbGV0b25zIHNob3VsZCBoYXZlIGxpZmUgY3ljbGUgdGhhdCBpcyBzYW1lIHRvIEFuZ3VsYXIncy4gVGhpcyBzZXJ2aWNlIG1ha2Ugc3VyZSB0aGF0XG4gKiB0aG9zZSBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgaW4gSE1SLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOelNpbmdsZXRvblNlcnZpY2Uge1xuICBwcml2YXRlIGdldCBzaW5nbGV0b25SZWdpc3RyeSgpOiBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+IHtcbiAgICByZXR1cm4gZW52aXJvbm1lbnQuaXNUZXN0TW9kZSA/IHRlc3RTaW5nbGVSZWdpc3RyeSA6IHRoaXMuX3NpbmdsZXRvblJlZ2lzdHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcmVnaXN0cnkgaXMgdXNlZCB0byByZWdpc3RlciBzaW5nbGV0b24gaW4gZGV2IG1vZGUuXG4gICAqIFNvIHRoYXQgc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIHdoZW4gaG90IG1vZHVsZSByZWxvYWQgaGFwcGVucy5cbiAgICpcbiAgICogVGhpcyB3b3JrcyBpbiBwcm9kIG1vZGUgdG9vIGJ1dCB3aXRoIG5vIHNwZWNpZmljIGVmZmVjdC5cbiAgICovXG4gIHByaXZhdGUgX3NpbmdsZXRvblJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4oKTtcblxuICByZWdpc3RlclNpbmdsZXRvbldpdGhLZXkoa2V5OiBzdHJpbmcsIHRhcmdldDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgYWxyZWFkeUhhdmUgPSB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpO1xuICAgIGNvbnN0IGl0ZW06IFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSA9IGFscmVhZHlIYXZlID8gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5nZXQoa2V5KSEgOiB0aGlzLndpdGhOZXdUYXJnZXQodGFyZ2V0KTtcblxuICAgIGlmICghYWxyZWFkeUhhdmUpIHtcbiAgICAgIHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuc2V0KGtleSwgaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2luZ2xldG9uV2l0aEtleTxUPihrZXk6IHN0cmluZyk6IFQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5oYXMoa2V5KSA/ICh0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmdldChrZXkpIS50YXJnZXQgYXMgVCkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB3aXRoTmV3VGFyZ2V0KHRhcmdldDogYW55KTogU2luZ2xldG9uUmVnaXN0cnlJdGVtIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0XG4gICAgfTtcbiAgfVxufVxuIl19