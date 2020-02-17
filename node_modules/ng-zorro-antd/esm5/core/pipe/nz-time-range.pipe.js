/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-time-range.pipe.ts
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
import { Pipe } from '@angular/core';
import { timeUnits } from '../time';
import { padStart } from '../util';
var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    NzTimeRangePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        /** @type {?} */
        var duration = Number(value || 0);
        return timeUnits.reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        function (current, _a) {
            var _b = tslib_1.__read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    };
    NzTimeRangePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzTimeRange',
                    pure: true
                },] }
    ];
    return NzTimeRangePipe;
}());
export { NzTimeRangePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsicGlwZS9uei10aW1lLXJhbmdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVuQztJQUFBO0lBbUJBLENBQUM7Ozs7OztJQWRDLG1DQUFTOzs7OztJQUFULFVBQVUsS0FBc0IsRUFBRSxNQUEyQjtRQUEzQix1QkFBQSxFQUFBLG1CQUEyQjs7WUFDdkQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRWpDLE9BQU8sU0FBUyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsRUFBWTtnQkFBWiwwQkFBWSxFQUFYLFlBQUksRUFBRSxZQUFJO1lBQzNDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7b0JBQzFCLEdBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLFFBQVEsSUFBSSxHQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUksSUFBSSxNQUFHLEVBQUUsR0FBRyxDQUFDOzs7O2dCQUFFLFVBQUMsS0FBYTtvQkFDaEUsT0FBTyxRQUFRLENBQUMsR0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEdBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDOztnQkFsQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO29CQUNuQixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7SUFnQkQsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGltZVVuaXRzIH0gZnJvbSAnLi4vdGltZSc7XG5pbXBvcnQgeyBwYWRTdGFydCB9IGZyb20gJy4uL3V0aWwnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduelRpbWVSYW5nZScsXG4gIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lUmFuZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcycpOiBzdHJpbmcge1xuICAgIGxldCBkdXJhdGlvbiA9IE51bWJlcih2YWx1ZSB8fCAwKTtcblxuICAgIHJldHVybiB0aW1lVW5pdHMucmVkdWNlKChjdXJyZW50LCBbbmFtZSwgdW5pdF0pID0+IHtcbiAgICAgIGlmIChjdXJyZW50LmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gdW5pdCk7XG4gICAgICAgIGR1cmF0aW9uIC09IHYgKiB1bml0O1xuICAgICAgICByZXR1cm4gY3VycmVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7bmFtZX0rYCwgJ2cnKSwgKG1hdGNoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gcGFkU3RhcnQodi50b1N0cmluZygpLCBtYXRjaC5sZW5ndGgsICcwJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSwgZm9ybWF0KTtcbiAgfVxufVxuIl19