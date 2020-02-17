/**
 * @fileoverview added by tsickle
 * Generated from: config/config.service.ts
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
// tslint:disable no-any
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { NZ_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
/** @type {?} */
var isDefined = (/**
 * @param {?=} value
 * @return {?}
 */
function (value) {
    return value !== undefined;
});
var ɵ0 = isDefined;
var NzConfigService = /** @class */ (function () {
    function NzConfigService(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    NzConfigService.prototype.getConfigForComponent = /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        return this.config[componentName];
    };
    /**
     * @param {?} componentName
     * @return {?}
     */
    NzConfigService.prototype.getConfigChangeEventForComponent = /**
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        return this.configUpdated$.pipe(filter((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n === componentName; })), mapTo(undefined));
    };
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    NzConfigService.prototype.set = /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    function (componentName, value) {
        this.config[componentName] = tslib_1.__assign({}, this.config[componentName], value);
        this.configUpdated$.next(componentName);
    };
    NzConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NzConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzConfigService_Factory() { return new NzConfigService(i0.ɵɵinject(i1.NZ_CONFIG, 8)); }, token: NzConfigService, providedIn: "root" });
    return NzConfigService;
}());
export { NzConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConfigService.prototype.configUpdated$;
    /**
     * Global config holding property.
     * @type {?}
     * @private
     */
    NzConfigService.prototype.config;
}
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 * @template T
 * @param {?} componentName
 * @param {?=} innerDefaultValue
 * @return {?}
 */
// tslint:disable-next-line:typedef
export function WithConfig(componentName, innerDefaultValue) {
    return (/**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function ConfigDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        var privatePropName = "$$__assignedValue__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be override by " + componentName + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                /** @type {?} */
                var componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                /** @type {?} */
                var configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set: /**
             * @param {?=} value
             * @return {?}
             */
            function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    });
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBeUIsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0lBRXRELFNBQVM7Ozs7QUFBRyxVQUFTLEtBQVc7SUFDcEMsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQzdCLENBQUMsQ0FBQTs7QUFFRDtJQVNFLHlCQUEyQyxhQUF3QjtRQUwzRCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBTXJELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCwrQ0FBcUI7Ozs7O0lBQXJCLFVBQTZDLGFBQWdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELDBEQUFnQzs7OztJQUFoQyxVQUFpQyxhQUEwQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM3QixNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssYUFBYSxFQUFuQixDQUFtQixFQUFDLEVBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FDakIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCw2QkFBRzs7Ozs7O0lBQUgsVUFBMkIsYUFBZ0IsRUFBRSxLQUFrQjtRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyx3QkFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFLLEtBQUssQ0FBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQU9jLFFBQVEsWUFBSSxNQUFNLFNBQUMsU0FBUzs7OzBCQTlCM0M7Q0FpREMsQUE1QkQsSUE0QkM7U0F6QlksZUFBZTs7Ozs7O0lBQzFCLHlDQUF1RDs7Ozs7O0lBR3ZELGlDQUF5Qjs7Ozs7Ozs7Ozs7OztBQStCM0IsTUFBTSxVQUFVLFVBQVUsQ0FBSSxhQUEwQixFQUFFLGlCQUFxQjtJQUM3RTs7Ozs7O0lBQU8sU0FBUyxlQUFlLENBQUMsTUFBVyxFQUFFLFFBQWEsRUFBRSxrQkFBK0M7O1lBQ25HLGVBQWUsR0FBRyx3QkFBc0IsUUFBVTtRQUV4RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FDVixnQkFBYSxlQUFlLG9EQUE4QyxhQUFhLGdCQUFhLENBQ3JHLENBQUM7U0FDSDtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxHQUFHOzs7WUFBSDs7b0JBQ1EsYUFBYSxHQUNqQixrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFFNUcsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sYUFBYSxDQUFDO2lCQUN0Qjs7b0JBRUssZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTs7b0JBQ2pGLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUU3QyxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsR0FBRzs7OztZQUFILFVBQUksS0FBUztnQkFDWCxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtvQkFDaEQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDL0I7WUFDSCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGUgbm8tYW55XG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZmlsdGVyLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb25maWcsIE56Q29uZmlnS2V5LCBOWl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uKHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PGtleW9mIE56Q29uZmlnPigpO1xuXG4gIC8qKiBHbG9iYWwgY29uZmlnIGhvbGRpbmcgcHJvcGVydHkuICovXG4gIHByaXZhdGUgY29uZmlnOiBOekNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IE56Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnIHx8IHt9O1xuICB9XG5cbiAgZ2V0Q29uZmlnRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCk6IE56Q29uZmlnW1RdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV07XG4gIH1cblxuICBnZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChjb21wb25lbnROYW1lOiBOekNvbmZpZ0tleSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1VwZGF0ZWQkLnBpcGUoXG4gICAgICBmaWx0ZXIobiA9PiBuID09PSBjb21wb25lbnROYW1lKSxcbiAgICAgIG1hcFRvKHVuZGVmaW5lZClcbiAgICApO1xuICB9XG5cbiAgc2V0PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IE56Q29uZmlnW1RdKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gPSB7IC4uLnRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdLCAuLi52YWx1ZSB9O1xuICAgIHRoaXMuY29uZmlnVXBkYXRlZCQubmV4dChjb21wb25lbnROYW1lKTtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXNcbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuXG4vKipcbiAqIFRoaXMgZGVjb3JhdG9yIGlzIHVzZWQgdG8gZGVjb3JhdGUgcHJvcGVydGllcy4gSWYgYSBwcm9wZXJ0eSBpcyBkZWNvcmF0ZWQsIGl0IHdvdWxkIHRyeSB0byBsb2FkIGRlZmF1bHQgdmFsdWUgZnJvbVxuICogY29uZmlnLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxuZXhwb3J0IGZ1bmN0aW9uIFdpdGhDb25maWc8VD4oY29tcG9uZW50TmFtZTogTnpDb25maWdLZXksIGlubmVyRGVmYXVsdFZhbHVlPzogVCkge1xuICByZXR1cm4gZnVuY3Rpb24gQ29uZmlnRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogYW55LCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxUPik6IGFueSB7XG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX19hc3NpZ25lZFZhbHVlX18ke3Byb3BOYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlIGJ5ICR7Y29tcG9uZW50TmFtZX0gZGVjb3JhdG9yLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCk6IFQgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID1cbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xuXG4gICAgICAgIGlmIChpc0RlZmluZWQob3JpZ2luYWxWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChjb21wb25lbnROYW1lKSB8fCB7fTtcbiAgICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb21wb25lbnRDb25maWdbcHJvcE5hbWVdO1xuXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQoY29uZmlnVmFsdWUpID8gY29uZmlnVmFsdWUgOiBpbm5lckRlZmF1bHRWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU/OiBUKTogdm9pZCB7XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1twcml2YXRlUHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==