/**
 * @fileoverview added by tsickle
 * Generated from: nz-input.directive.ts
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
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-input]',
                    exportAs: 'nzInput',
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "nzSize === 'large'",
                        '[class.ant-input-sm]': "nzSize === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputDirective.prototype, "disabled", void 0);
    return NzInputDirective;
}());
export { NzInputDirective };
if (false) {
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBRWpFO0lBYUUsMEJBQVksUUFBbUIsRUFBRSxVQUFzQjtRQUg5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxTQUFTO29CQUNuQixJQUFJLEVBQUU7d0JBQ0osNEJBQTRCLEVBQUUsVUFBVTt3QkFDeEMsc0JBQXNCLEVBQUUsb0JBQW9CO3dCQUM1QyxzQkFBc0IsRUFBRSxvQkFBb0I7cUJBQzdDO2lCQUNGOzs7O2dCQVhzQyxTQUFTO2dCQUE1QixVQUFVOzs7eUJBYTNCLEtBQUs7MkJBQ0wsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O3NEQUFrQjtJQUs1Qyx1QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBUFksZ0JBQWdCOzs7SUFDM0Isa0NBQTJDOztJQUMzQyxvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXRdJyxcbiAgZXhwb3J0QXM6ICdueklucHV0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJzogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc21dJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWlucHV0Jyk7XG4gIH1cbn1cbiJdfQ==