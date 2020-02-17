/**
 * @fileoverview added by tsickle
 * Generated from: nz-divider.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class NzDividerComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
    }
    /**
     * @private
     * @return {?}
     */
    setClass() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            ['ant-divider']: true,
            [`ant-divider-${this.nzType}`]: true,
            [`ant-divider-with-text-${this.nzOrientation}`]: this.nzText,
            [`ant-divider-dashed`]: this.nzDashed
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
}
NzDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                template: "<span *ngIf=\"nzText\" class=\"ant-divider-inner-text\">\n  <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n</span>",
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzDividerComponent.propDecorators = {
    nzText: [{ type: Input }],
    nzType: [{ type: Input }],
    nzOrientation: [{ type: Input }],
    nzDashed: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
if (false) {
    /** @type {?} */
    NzDividerComponent.prototype.nzText;
    /** @type {?} */
    NzDividerComponent.prototype.nzType;
    /** @type {?} */
    NzDividerComponent.prototype.nzOrientation;
    /** @type {?} */
    NzDividerComponent.prototype.nzDashed;
    /**
     * @type {?}
     * @private
     */
    NzDividerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDividerComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RpdmlkZXIvIiwic291cmNlcyI6WyJuei1kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVzVFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBZTdCLFlBQW9CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBYjdGLFdBQU0sR0FBOEIsWUFBWSxDQUFDO1FBQ2pELGtCQUFhLEdBQWdDLFFBQVEsQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBVytELENBQUM7Ozs7O0lBVGxHLFFBQVE7UUFDZCxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQzNFLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSTtZQUNyQixDQUFDLGVBQWUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNwQyxDQUFDLHlCQUF5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUM1RCxDQUFDLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUlELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDZKQUEwQztnQkFDMUMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWxCQyxVQUFVO1lBUVcsd0JBQXdCOzs7cUJBWTVDLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOztvREFBa0I7OztJQUgxQyxvQ0FBNEM7O0lBQzVDLG9DQUEwRDs7SUFDMUQsMkNBQStEOztJQUMvRCxzQ0FBMEM7Ozs7O0lBVzlCLHdDQUE4Qjs7Ozs7SUFBRSxzREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZGl2aWRlcicsXG4gIGV4cG9ydEFzOiAnbnpEaXZpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpEaXZpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelR5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIG56T3JpZW50YXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEYXNoZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgWydhbnQtZGl2aWRlciddOiB0cnVlLFxuICAgICAgW2BhbnQtZGl2aWRlci0ke3RoaXMubnpUeXBlfWBdOiB0cnVlLFxuICAgICAgW2BhbnQtZGl2aWRlci13aXRoLXRleHQtJHt0aGlzLm56T3JpZW50YXRpb259YF06IHRoaXMubnpUZXh0LFxuICAgICAgW2BhbnQtZGl2aWRlci1kYXNoZWRgXTogdGhpcy5uekRhc2hlZFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19