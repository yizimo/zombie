/**
 * @fileoverview added by tsickle
 * Generated from: nz-card-grid.directive.ts
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
var NzCardGridDirective = /** @class */ (function () {
    function NzCardGridDirective(elementRef, renderer) {
        this.nzHoverable = true;
        renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
    }
    NzCardGridDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-card-grid]',
                    exportAs: 'nzCardGrid',
                    host: {
                        '[class.ant-card-hoverable]': 'nzHoverable'
                    }
                },] }
    ];
    /** @nocollapse */
    NzCardGridDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCardGridDirective.propDecorators = {
        nzHoverable: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);
    return NzCardGridDirective;
}());
export { NzCardGridDirective };
if (false) {
    /** @type {?} */
    NzCardGridDirective.prototype.nzHoverable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1ncmlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FyZC8iLCJzb3VyY2VzIjpbIm56LWNhcmQtZ3JpZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxEO0lBU0UsNkJBQVksVUFBc0IsRUFBRSxRQUFtQjtRQUQ5QixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUVuRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osNEJBQTRCLEVBQUUsYUFBYTtxQkFDNUM7aUJBQ0Y7Ozs7Z0JBVG1CLFVBQVU7Z0JBQVMsU0FBUzs7OzhCQVc3QyxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7NERBQTZCO0lBSXZELDBCQUFDO0NBQUEsQUFaRCxJQVlDO1NBTFksbUJBQW1COzs7SUFDOUIsMENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWNhcmQtZ3JpZF0nLFxuICBleHBvcnRBczogJ256Q2FyZEdyaWQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogJ256SG92ZXJhYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2FyZEdyaWREaXJlY3RpdmUge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIb3ZlcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQtZ3JpZCcpO1xuICB9XG59XG4iXX0=