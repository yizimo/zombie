/**
 * @fileoverview added by tsickle
 * Generated from: nz-result.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
/** @type {?} */
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
const ExceptionStatus = ['404', '500', '403'];
export class NzResultComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     */
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStatusIcon();
        this.setClassMap();
    }
    /**
     * @private
     * @return {?}
     */
    setStatusIcon() {
        /** @type {?} */
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefix = 'ant-result';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [prefix]: true,
            [`${prefix}-${this.nzStatus}`]: true
        });
    }
}
NzResultComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: "<!-- Icon -->\n<div class=\"ant-result-icon\">\n  <ng-container *ngIf=\"!isException; else exceptionTpl\">\n    <ng-container *ngIf=\"icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\" nzTheme=\"fill\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-content *ngIf=\"!icon\" select=\"[nz-result-icon]\"></ng-content>\n  </ng-container>\n\n  <ng-template #exceptionTpl>\n    <ng-container [ngSwitch]=\"nzStatus\">\n      <nz-result-not-found *ngSwitchCase=\"'404'\"></nz-result-not-found>\n      <nz-result-server-error *ngSwitchCase=\"'500'\"></nz-result-server-error>\n      <nz-result-unauthorized *ngSwitchCase=\"'403'\"></nz-result-unauthorized>\n    </ng-container>\n  </ng-template>\n</div>\n\n<!-- Title and subTitle -->\n<ng-container *ngIf=\"nzTitle\">\n  <div class=\"ant-result-title\" *nzStringTemplateOutlet=\"nzTitle\">\n    {{ nzTitle }}\n  </div>\n</ng-container>\n<ng-content *ngIf=\"!nzTitle\" select=\"div[nz-result-title]\"></ng-content>\n\n<ng-container *ngIf=\"nzSubTitle\">\n  <div class=\"ant-result-subtitle\" *nzStringTemplateOutlet=\"nzSubTitle\">\n    {{ nzSubTitle }}\n  </div>\n</ng-container>\n<ng-content *ngIf=\"!nzSubTitle\" select=\"div[nz-result-subtitle]\"></ng-content>\n\n<!-- Content -->\n<ng-content select=\"nz-result-content, [nz-result-content]\"></ng-content>\n\n<!-- Extra -->\n<div class=\"ant-result-extra\" *ngIf=\"nzExtra\">\n  <ng-container *nzStringTemplateOutlet=\"nzExtra\">\n    {{ nzExtra }}\n  </ng-container>\n</div>\n<ng-content *ngIf=\"!nzExtra\" select=\"div[nz-result-extra]\"></ng-content>\n",
                providers: [NzUpdateHostClassService],
                styles: [`
      nz-result {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzResultComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzSubTitle: [{ type: Input }],
    nzExtra: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzResultComponent.prototype.nzIcon;
    /** @type {?} */
    NzResultComponent.prototype.nzTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzStatus;
    /** @type {?} */
    NzResultComponent.prototype.nzSubTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzExtra;
    /** @type {?} */
    NzResultComponent.prototype.icon;
    /** @type {?} */
    NzResultComponent.prototype.isException;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzResultComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFNeEQsT0FBTyxHQUFHO0lBQ2QsT0FBTyxFQUFFLGNBQWM7SUFDdkIsS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQixPQUFPLEVBQUUsU0FBUztDQUNuQjs7TUFDSyxlQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQWlCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFVNUIsWUFBb0Isd0JBQWtELEVBQVUsVUFBc0I7UUFBbEYsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQN0YsYUFBUSxHQUF1QixNQUFNLENBQUM7UUFLL0MsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFcUYsQ0FBQzs7OztJQUUxRyxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2QsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQ3hCLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFvQixDQUFDLElBQUksSUFBSTtnQkFDM0MsQ0FBQyxDQUFDLElBQUk7WUFDUixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRU8sV0FBVzs7Y0FDWCxNQUFNLEdBQUcsWUFBWTtRQUUzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQzNFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSTtZQUNkLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQix5bERBQXlDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt5QkFFbkM7Ozs7S0FJQzthQUVKOzs7O1lBNUJRLHdCQUF3QjtZQU4vQixVQUFVOzs7cUJBb0NULEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUpOLG1DQUE2Qzs7SUFDN0Msb0NBQTZDOztJQUM3QyxxQ0FBK0M7O0lBQy9DLHVDQUFpRDs7SUFDakQsb0NBQThDOztJQUU5QyxpQ0FBa0M7O0lBQ2xDLHdDQUFvQjs7Ozs7SUFFUixxREFBMEQ7Ozs7O0lBQUUsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56UmVzdWx0SWNvblR5cGUgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ2luZm8nIHwgJ3dhcm5pbmcnO1xuZXhwb3J0IHR5cGUgTnpFeGNlcHRpb25TdGF0dXNUeXBlID0gJzQwNCcgfCAnNTAwJyB8ICc0MDMnO1xuZXhwb3J0IHR5cGUgTnpSZXN1bHRTdGF0dXNUeXBlID0gTnpFeGNlcHRpb25TdGF0dXNUeXBlIHwgTnpSZXN1bHRJY29uVHlwZTtcblxuY29uc3QgSWNvbk1hcCA9IHtcbiAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcbiAgaW5mbzogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXG4gIHdhcm5pbmc6ICd3YXJuaW5nJ1xufTtcbmNvbnN0IEV4Y2VwdGlvblN0YXR1cyA9IFsnNDA0JywgJzUwMCcsICc0MDMnXTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXJlc3VsdCcsXG4gIGV4cG9ydEFzOiAnbnpSZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotcmVzdWx0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN0YXR1czogTnpSZXN1bHRTdGF0dXNUeXBlID0gJ2luZm8nO1xuICBASW5wdXQoKSBuelN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGlzRXhjZXB0aW9uID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdHVzSWNvbigpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdHVzSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5uekljb247XG5cbiAgICB0aGlzLmlzRXhjZXB0aW9uID0gRXhjZXB0aW9uU3RhdHVzLmluZGV4T2YodGhpcy5uelN0YXR1cykgIT09IC0xO1xuICAgIHRoaXMuaWNvbiA9IGljb25cbiAgICAgID8gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnXG4gICAgICAgID8gSWNvbk1hcFtpY29uIGFzIE56UmVzdWx0SWNvblR5cGVdIHx8IGljb25cbiAgICAgICAgOiBpY29uXG4gICAgICA6IHRoaXMuaXNFeGNlcHRpb25cbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IEljb25NYXBbdGhpcy5uelN0YXR1cyBhcyBOelJlc3VsdEljb25UeXBlXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC1yZXN1bHQnO1xuXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBbcHJlZml4XTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5uelN0YXR1c31gXTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=