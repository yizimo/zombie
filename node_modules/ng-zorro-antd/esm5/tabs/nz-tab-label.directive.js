/**
 * @fileoverview added by tsickle
 * Generated from: nz-tab-label.directive.ts
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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var NzTabLabelDirective = /** @class */ (function () {
    function NzTabLabelDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetLeft = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetWidth = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetTop = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetHeight = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    NzTabLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tab-label]',
                    exportAs: 'nzTabLabel',
                    host: {
                        '[class.ant-tabs-tab-disabled]': 'disabled'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabLabelDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTabLabelDirective.propDecorators = {
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabLabelDirective.prototype, "disabled", void 0);
    return NzTabLabelDirective;
}());
export { NzTabLabelDirective };
if (false) {
    /** @type {?} */
    NzTabLabelDirective.prototype.disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbIm56LXRhYi1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxEO0lBVUUsNkJBQW1CLFVBQXNCLEVBQUUsUUFBbUI7UUFBM0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsMkNBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDcEQsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNKLCtCQUErQixFQUFFLFVBQVU7cUJBQzVDO2lCQUNGOzs7O2dCQVZtQixVQUFVO2dCQUFTLFNBQVM7OzsyQkFZN0MsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O3lEQUFrQjtJQXFCNUMsMEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXRCWSxtQkFBbUI7OztJQUM5Qix1Q0FBMEM7O0lBRTlCLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXRhYi1sYWJlbF0nLFxuICBleHBvcnRBczogJ256VGFiTGFiZWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFicy10YWItZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFiTGFiZWxEaXJlY3RpdmUge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJzLXRhYicpO1xuICB9XG5cbiAgZ2V0T2Zmc2V0TGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICB9XG5cbiAgZ2V0T2Zmc2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBnZXRPZmZzZXRUb3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICB9XG5cbiAgZ2V0T2Zmc2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxufVxuIl19