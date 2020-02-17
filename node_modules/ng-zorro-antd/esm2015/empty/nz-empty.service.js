/**
 * @fileoverview added by tsickle
 * Generated from: nz-empty.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { warnDeprecation, NzConfigService, PREFIX } from 'ng-zorro-antd/core';
import { NZ_DEFAULT_EMPTY_CONTENT } from './nz-empty-config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-empty-config";
/**
 * @template T
 */
// tslint:disable-next-line:no-any
export class NzEmptyService {
    /**
     * @param {?} nzConfigService
     * @param {?} legacyDefaultEmptyContent
     */
    constructor(nzConfigService, legacyDefaultEmptyContent) {
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation(`'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.`);
        }
        /** @type {?} */
        const userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe((/**
         * @return {?}
         */
        () => {
            this.userDefaultContent$.next(this.getUserDefaultEmptyContent());
        }));
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    setDefaultContent(content) {
        warnDeprecation(`'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.`);
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(`${PREFIX} 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get ${content}.`);
        }
    }
    /**
     * @return {?}
     */
    resetDefault() {
        warnDeprecation(`'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.`);
        this.userDefaultContent$.next(undefined);
    }
    /**
     * @private
     * @return {?}
     */
    getUserDefaultEmptyContent() {
        return ((this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent ||
            this.legacyDefaultEmptyContent);
    }
}
NzEmptyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzEmptyService.ctorParameters = () => [
    { type: NzConfigService },
    { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
];
/** @nocollapse */ NzEmptyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NzEmptyService.prototype.userDefaultContent$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.legacyDefaultEmptyContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUF3Qix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBS25GLGtDQUFrQztBQUNsQyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFHekIsWUFDVSxlQUFnQyxFQUNjLHlCQUFrQztRQURoRixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDYyw4QkFBeUIsR0FBekIseUJBQXlCLENBQVM7UUFKMUYsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQW1DLFNBQVMsQ0FBQyxDQUFDO1FBTXJGLElBQUkseUJBQXlCLEVBQUU7WUFDN0IsZUFBZSxDQUNiLHdHQUF3RyxDQUN6RyxDQUFDO1NBQ0g7O2NBRUssdUJBQXVCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1FBRWpFLElBQUksdUJBQXVCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUE4QjtRQUM5QyxlQUFlLENBQ2IsdUdBQXVHLENBQ3hHLENBQUM7UUFFRixJQUNFLE9BQU8sT0FBTyxLQUFLLFFBQVE7WUFDM0IsT0FBTyxLQUFLLFNBQVM7WUFDckIsT0FBTyxLQUFLLElBQUk7WUFDaEIsT0FBTyxZQUFZLFdBQVc7WUFDOUIsT0FBTyxZQUFZLElBQUksRUFDdkI7WUFDQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUNiLEdBQUcsTUFBTSw4RUFBOEUsT0FBTyxHQUFHLENBQ2xHLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsZUFBZSxDQUNiLDZIQUE2SCxDQUM5SCxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVPLDBCQUEwQjtRQUNoQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtZQUNqRixJQUFJLENBQUMseUJBQXlCLENBQy9CLENBQUM7SUFDSixDQUFDOzs7WUE1REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTnlCLGVBQWU7WUFIVyxJQUFJLHVCQWdCbkQsTUFBTSxTQUFDLHdCQUF3QixjQUFHLFFBQVE7Ozs7O0lBSjdDLDZDQUF1Rjs7Ozs7SUFHckYseUNBQXdDOzs7OztJQUN4QyxtREFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIE56Q29uZmlnU2VydmljZSwgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpFbXB0eUN1c3RvbUNvbnRlbnQsIE5aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCB9IGZyb20gJy4vbnotZW1wdHktY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY2xhc3MgTnpFbXB0eVNlcnZpY2U8VCA9IGFueT4ge1xuICB1c2VyRGVmYXVsdENvbnRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekVtcHR5Q3VzdG9tQ29udGVudCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBJbmplY3QoTlpfREVGQVVMVF9FTVBUWV9DT05URU5UKSBAT3B0aW9uYWwoKSBwcml2YXRlIGxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnQ6IFR5cGU8VD5cbiAgKSB7XG4gICAgaWYgKGxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnQpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCdOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOWl9DT05GSUcnLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckRlZmF1bHRFbXB0eUNvbnRlbnQgPSB0aGlzLmdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk7XG5cbiAgICBpZiAodXNlckRlZmF1bHRFbXB0eUNvbnRlbnQpIHtcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHVzZXJEZWZhdWx0RW1wdHlDb250ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudCgnZW1wdHknKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodGhpcy5nZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldERlZmF1bHRDb250ZW50KGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudCk6IHZvaWQge1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIGAnc2V0RGVmYXVsdENvbnRlbnQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOekNvbmZpZ1NlcnZpY2UnLmBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8XG4gICAgICBjb250ZW50ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIGNvbnRlbnQgPT09IG51bGwgfHxcbiAgICAgIGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiB8fFxuICAgICAgY29udGVudCBpbnN0YW5jZW9mIFR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke1BSRUZJWH0gJ3VzZURlZmF1bHRDb250ZW50JyBleHBlY3QgJ3N0cmluZycsICd0ZW1wbGF0ZVJlZicgb3IgJ2NvbXBvbmVudCcgYnV0IGdldCAke2NvbnRlbnR9LmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXREZWZhdWx0KCk6IHZvaWQge1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIGAncmVzZXREZWZhdWx0JyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTnpDb25maWdTZXJ2aWNlJyBhbmQgcHJvdmlkZSBhbiAndW5kZWZpbmVkJy5gXG4gICAgKTtcbiAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpOiBUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8c3RyaW5nPiB8IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoJ2VtcHR5JykgfHwge30pLm56RGVmYXVsdEVtcHR5Q29udGVudCB8fFxuICAgICAgdGhpcy5sZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50XG4gICAgKTtcbiAgfVxufVxuIl19