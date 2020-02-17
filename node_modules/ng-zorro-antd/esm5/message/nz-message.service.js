/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core';
import { NzMessageBaseService } from './nz-message-base.service';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageServiceModule } from './nz-message.service.module';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "./nz-message.service.module";
var NzMessageService = /** @class */ (function (_super) {
    tslib_1.__extends(NzMessageService, _super);
    function NzMessageService(nzSingletonService, overlay, injector, cfr, appRef) {
        return _super.call(this, nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message') || this;
    }
    // Shortcut methods
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.success = 
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'success', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.error = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'error', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.info = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'info', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.warning = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'warning', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.loading = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'loading', content: content }, options);
    };
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.create = /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, content, options) {
        return this.createMessage({ type: type, content: content }, options);
    };
    NzMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzMessageServiceModule
                },] }
    ];
    /** @nocollapse */
    NzMessageService.ctorParameters = function () { return [
        { type: NzSingletonService },
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ NzMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef)); }, token: NzMessageService, providedIn: i3.NzMessageServiceModule });
    return NzMessageService;
}(NzMessageBaseService));
export { NzMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQUVyRTtJQUdzQyw0Q0FJckM7SUFDQywwQkFDRSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7ZUFFdEIsa0JBQU0sa0JBQWtCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsbUJBQW1COzs7Ozs7O0lBQ25CLGtDQUFPOzs7Ozs7O0lBQVAsVUFBUSxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxnQ0FBSzs7Ozs7SUFBTCxVQUFNLE9BQW1DLEVBQUUsT0FBOEI7UUFDdkUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssT0FBbUMsRUFBRSxPQUE4QjtRQUN0RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsa0NBQU87Ozs7O0lBQVAsVUFBUSxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxrQ0FBTzs7Ozs7SUFBUCxVQUFRLE9BQW1DLEVBQUUsT0FBOEI7UUFDekUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7Ozs7SUFFRCxpQ0FBTTs7Ozs7O0lBQU4sVUFDRSxJQUFtRSxFQUNuRSxPQUFtQyxFQUNuQyxPQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQTdDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLHNCQUFzQjtpQkFDbkM7Ozs7Z0JBVlEsa0JBQWtCO2dCQUZsQixPQUFPO2dCQUMrQyxRQUFRO2dCQUE5Qyx3QkFBd0I7Z0JBQXhDLGNBQWM7OzsyQkFUdkI7Q0FnRUMsQUE5Q0QsQ0FHc0Msb0JBQW9CLEdBMkN6RDtTQTNDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LW1lc3NhZ2UtYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSwgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbWVzc2FnZS5zZXJ2aWNlLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogTnpNZXNzYWdlU2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgTnpNZXNzYWdlQmFzZVNlcnZpY2U8XG4gIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgTnpNZXNzYWdlRGF0YSxcbiAgTnpNZXNzYWdlQ29uZmlnTGVnYWN5XG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgbnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsXG4gICAgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZlxuICApIHtcbiAgICBzdXBlcihuelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXksIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbWVzc2FnZScpO1xuICB9XG5cbiAgLy8gU2hvcnRjdXQgbWV0aG9kc1xuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgZXJyb3IoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2xvYWRpbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCBzdHJpbmcsXG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sXG4gICAgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zXG4gICk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=