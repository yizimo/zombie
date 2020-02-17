/**
 * @fileoverview added by tsickle
 * Generated from: nz-tr.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzTableComponent } from './nz-table.component';
var NzTrDirective = /** @class */ (function () {
    function NzTrDirective(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (toBoolean(value)) {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
            else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
        },
        enumerable: true,
        configurable: true
    });
    NzTrDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'tr:not([mat-row]):not([mat-header-row])',
                    host: {
                        '[class.ant-table-row]': 'nzTableComponent'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTrDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTrDirective.propDecorators = {
        nzExpand: [{ type: Input }]
    };
    return NzTrDirective;
}());
export { NzTrDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.renderer;
    /** @type {?} */
    NzTrDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBbUJFLHVCQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ0EsZ0JBQWtDO1FBRnJELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNBLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDNUQsQ0FBQztJQWZKLHNCQUNJLG1DQUFROzs7OztRQURaLFVBQ2EsS0FBYztZQUN6QixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7YUFDakY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO2FBQ3BGO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQWpCRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELElBQUksRUFBRTt3QkFDSix1QkFBdUIsRUFBRSxrQkFBa0I7cUJBQzVDO2lCQUNGOzs7O2dCQVZtQixVQUFVO2dCQUF5QixTQUFTO2dCQUV2RCxnQkFBZ0IsdUJBd0JwQixJQUFJLFlBQUksUUFBUTs7OzJCQWRsQixLQUFLOztJQWdCUixvQkFBQztDQUFBLEFBeEJELElBd0JDO1NBakJZLGFBQWE7Ozs7OztJQWF0QixtQ0FBOEI7Ozs7O0lBQzlCLGlDQUEyQjs7SUFDM0IseUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RyOm5vdChbbWF0LXJvd10pOm5vdChbbWF0LWhlYWRlci1yb3ddKScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yb3ddJzogJ256VGFibGVDb21wb25lbnQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0b0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnRcbiAgKSB7fVxufVxuIl19