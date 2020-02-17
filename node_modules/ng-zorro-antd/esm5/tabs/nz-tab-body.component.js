/**
 * @fileoverview added by tsickle
 * Generated from: nz-tab-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzTabBodyComponent = /** @class */ (function () {
    function NzTabBodyComponent() {
        this.active = false;
        this.forceRender = false;
    }
    NzTabBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-tab-body]',
                    exportAs: 'nzTabBody',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-container *ngIf=\"active || forceRender\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</ng-container>",
                    host: {
                        '[class.ant-tabs-tabpane-active]': 'active',
                        '[class.ant-tabs-tabpane-inactive]': '!active'
                    }
                }] }
    ];
    NzTabBodyComponent.propDecorators = {
        content: [{ type: Input }],
        active: [{ type: Input }],
        forceRender: [{ type: Input }]
    };
    return NzTabBodyComponent;
}());
export { NzTabBodyComponent };
if (false) {
    /** @type {?} */
    NzTabBodyComponent.prototype.content;
    /** @type {?} */
    NzTabBodyComponent.prototype.active;
    /** @type {?} */
    NzTabBodyComponent.prototype.forceRender;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRztJQUFBO1FBY1csV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7O2dCQWhCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLHlJQUEyQztvQkFDM0MsSUFBSSxFQUFFO3dCQUNKLGlDQUFpQyxFQUFFLFFBQVE7d0JBQzNDLG1DQUFtQyxFQUFFLFNBQVM7cUJBQy9DO2lCQUNGOzs7MEJBRUUsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBQ1IseUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQUpZLGtCQUFrQjs7O0lBQzdCLHFDQUFvQzs7SUFDcEMsb0NBQXdCOztJQUN4Qix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotdGFiLWJvZHldJyxcbiAgZXhwb3J0QXM6ICduelRhYkJvZHknLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWItYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYnBhbmUtYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZS1pbmFjdGl2ZV0nOiAnIWFjdGl2ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYkJvZHlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcmNlUmVuZGVyID0gZmFsc2U7XG59XG4iXX0=