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
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    /**
     * @private
     * @return {?}
     */
    get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    registerSingletonWithKey(key, target) {
        /** @type {?} */
        const alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        const item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    withNewTarget(target) {
        return {
            target
        };
    }
}
NzSingletonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NzSingletonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1zaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBRTFELG9DQUVDOzs7SUFEQyx1Q0FBWTs7Ozs7OztNQU9SLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQzs7Ozs7QUFTbkUsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjs7Ozs7OztRQWNVLHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO0tBb0J2RTs7Ozs7SUE5QkMsSUFBWSxpQkFBaUI7UUFDM0IsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQy9FLENBQUM7Ozs7OztJQVVELHdCQUF3QixDQUFDLEdBQVcsRUFBRSxNQUFXOztjQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2NBQzdDLElBQUksR0FBMEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBRS9HLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBSSxHQUFXO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUFXO1FBQy9CLE9BQU87WUFDTCxNQUFNO1NBQ1AsQ0FBQztJQUNKLENBQUM7OztZQWpDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7OztJQVlDLGdEQUFzRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1hbnlcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmludGVyZmFjZSBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xuICB0YXJnZXQ6IGFueTtcbn1cblxuLyoqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGVzdCwgc2luZ2xldG9ucyBzaG91bGQgbm90IGJlIGRlc3Ryb3llZC4gU28gd2Uga2VlcCByZWZlcmVuY2VzIG9mIHNpbmdsZXRvbnNcbiAqIGluIHRoaXMgZ2xvYmFsIHZhcmlhYmxlLlxuICovXG5jb25zdCB0ZXN0U2luZ2xlUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xuXG4vKipcbiAqIFNvbWUgc2luZ2xldG9ucyBzaG91bGQgaGF2ZSBsaWZlIGN5Y2xlIHRoYXQgaXMgc2FtZSB0byBBbmd1bGFyJ3MuIFRoaXMgc2VydmljZSBtYWtlIHN1cmUgdGhhdFxuICogdGhvc2Ugc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIGluIEhNUi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTaW5nbGV0b25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZXQgc2luZ2xldG9uUmVnaXN0cnkoKTogTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPiB7XG4gICAgcmV0dXJuIGVudmlyb25tZW50LmlzVGVzdE1vZGUgPyB0ZXN0U2luZ2xlUmVnaXN0cnkgOiB0aGlzLl9zaW5nbGV0b25SZWdpc3RyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJlZ2lzdHJ5IGlzIHVzZWQgdG8gcmVnaXN0ZXIgc2luZ2xldG9uIGluIGRldiBtb2RlLlxuICAgKiBTbyB0aGF0IHNpbmdsZXRvbnMgZ2V0IGRlc3Ryb3llZCB3aGVuIGhvdCBtb2R1bGUgcmVsb2FkIGhhcHBlbnMuXG4gICAqXG4gICAqIFRoaXMgd29ya3MgaW4gcHJvZCBtb2RlIHRvbyBidXQgd2l0aCBubyBzcGVjaWZpYyBlZmZlY3QuXG4gICAqL1xuICBwcml2YXRlIF9zaW5nbGV0b25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+KCk7XG5cbiAgcmVnaXN0ZXJTaW5nbGV0b25XaXRoS2V5KGtleTogc3RyaW5nLCB0YXJnZXQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGFscmVhZHlIYXZlID0gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5oYXMoa2V5KTtcbiAgICBjb25zdCBpdGVtOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0gPSBhbHJlYWR5SGF2ZSA/IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhIDogdGhpcy53aXRoTmV3VGFyZ2V0KHRhcmdldCk7XG5cbiAgICBpZiAoIWFscmVhZHlIYXZlKSB7XG4gICAgICB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LnNldChrZXksIGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNpbmdsZXRvbldpdGhLZXk8VD4oa2V5OiBzdHJpbmcpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSkgPyAodGhpcy5zaW5nbGV0b25SZWdpc3RyeS5nZXQoa2V5KSEudGFyZ2V0IGFzIFQpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aE5ld1RhcmdldCh0YXJnZXQ6IGFueSk6IFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldFxuICAgIH07XG4gIH1cbn1cbiJdfQ==