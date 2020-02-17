/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
/**
 * @deprecated This interface has been removed to `ng-zorro-antd/core`. Please migrate to that.
 * @record
 */
export function NzMessageConfigLegacy() { }
if (false) {
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzAnimate;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzDuration;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzMaxStack;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzPauseOnHover;
    /** @type {?|undefined} */
    NzMessageConfigLegacy.prototype.nzTop;
}
/** @type {?} */
export var NZ_MESSAGE_DEFAULT_CONFIG = new InjectionToken('NZ_MESSAGE_DEFAULT_CONFIG');
/**
 * @deprecated 9.0.0 - Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.
 * @type {?}
 */
export var NZ_MESSAGE_CONFIG = new InjectionToken('NZ_MESSAGE_CONFIG');
var ɵ0 = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24
};
/** @type {?} */
export var NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_MESSAGE_DEFAULT_CONFIG,
    useValue: ɵ0
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUsvQywyQ0FNQzs7O0lBTEMsMENBQW9COztJQUNwQiwyQ0FBb0I7O0lBQ3BCLDJDQUFvQjs7SUFDcEIsK0NBQXlCOztJQUN6QixzQ0FBd0I7OztBQUcxQixNQUFNLEtBQU8seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQXdCLDJCQUEyQixDQUFDOzs7OztBQUsvRyxNQUFNLEtBQU8saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQXdCLG1CQUFtQixDQUFDO1NBSW5GO0lBQ1IsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsSUFBSTtJQUNoQixVQUFVLEVBQUUsQ0FBQztJQUNiLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLEtBQUssRUFBRSxFQUFFO0NBQ1Y7O0FBUkgsTUFBTSxLQUFPLGtDQUFrQyxHQUFHO0lBQ2hELE9BQU8sRUFBRSx5QkFBeUI7SUFDbEMsUUFBUSxJQU1QO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGludGVyZmFjZSBoYXMgYmVlbiByZW1vdmVkIHRvIGBuZy16b3Jyby1hbnRkL2NvcmVgLiBQbGVhc2UgbWlncmF0ZSB0byB0aGF0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSB7XG4gIG56QW5pbWF0ZT86IGJvb2xlYW47XG4gIG56RHVyYXRpb24/OiBudW1iZXI7XG4gIG56TWF4U3RhY2s/OiBudW1iZXI7XG4gIG56UGF1c2VPbkhvdmVyPzogYm9vbGVhbjtcbiAgbnpUb3A/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT4oJ05aX01FU1NBR0VfREVGQVVMVF9DT05GSUcnKTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCA5LjAuMCAtIEluamVjdGlvbiB0b2tlbiAnTlpfTUVTU0FHRV9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLlxuICovXG5leHBvcnQgY29uc3QgTlpfTUVTU0FHRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpNZXNzYWdlQ29uZmlnTGVnYWN5PignTlpfTUVTU0FHRV9DT05GSUcnKTtcblxuZXhwb3J0IGNvbnN0IE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUdfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcsXG4gIHVzZVZhbHVlOiB7XG4gICAgbnpBbmltYXRlOiB0cnVlLFxuICAgIG56RHVyYXRpb246IDMwMDAsXG4gICAgbnpNYXhTdGFjazogNyxcbiAgICBuelBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICBuelRvcDogMjRcbiAgfVxufTtcbiJdfQ==