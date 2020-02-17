/**
 * @fileoverview added by tsickle
 * Generated from: nz-checkbox-group.component.ts
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
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function NzCheckBoxOptionInterface() { }
if (false) {
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.label;
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.value;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.checked;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.disabled;
}
var NzCheckboxGroupComponent = /** @class */ (function () {
    function NzCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.options = [];
        this.nzDisabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.onOptionChange = /**
     * @return {?}
     */
    function () {
        this.onChange(this.options);
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.trackByOption = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.value;
    };
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.options = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCheckboxGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-checkbox-group',
                    exportAs: 'nzCheckboxGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<label nz-checkbox\n       class=\"ant-checkbox-group-item\"\n       *ngFor=\"let option of options; trackBy:trackByOption\"\n       [nzDisabled]=\"option.disabled || nzDisabled\"\n       [(nzChecked)]=\"option.checked\"\n       (nzCheckedChange)=\"onOptionChange()\">\n  <span>{{ option.label }}</span>\n</label>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCheckboxGroupComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    NzCheckboxGroupComponent.propDecorators = {
        nzDisabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
    return NzCheckboxGroupComponent;
}());
export { NzCheckboxGroupComponent };
if (false) {
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.nzDisabled;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVsRCwrQ0FLQzs7O0lBSkMsMENBQWM7O0lBQ2QsMENBQWM7O0lBQ2QsNENBQWtCOztJQUNsQiw2Q0FBbUI7O0FBR3JCO0lBOEJFLGtDQUNVLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLEdBQXNCLEVBQzlCLFFBQW1CO1FBSFgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFqQmhDLGFBQVE7OztRQUF5QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQzs7UUFFNUMsY0FBUzs7O1FBQWMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDbEMsWUFBTyxHQUFnQyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWdCMUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQWZELGlEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGdEQUFhOzs7OztJQUFiLFVBQWMsTUFBYyxFQUFFLE1BQWlDO1FBQzdELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBV0QsMkNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFdBQVc7WUFDcEUsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCw2Q0FBVTs7OztJQUFWLFVBQVcsS0FBa0M7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELG1EQUFnQjs7OztJQUFoQixVQUFpQixFQUEwQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELG9EQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsbURBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMscVVBQWlEO29CQUNqRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLEVBQUM7NEJBQ3ZELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQS9CQyxVQUFVO2dCQUxILFlBQVk7Z0JBR25CLGlCQUFpQjtnQkFNakIsU0FBUzs7OzZCQWtDUixLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7Z0VBQW9CO0lBZ0Q5QywrQkFBQztDQUFBLEFBcEVELElBb0VDO1NBdERZLHdCQUF3Qjs7O0lBRW5DLDRDQUE0Qzs7SUFFNUMsNkNBQWtDOztJQUNsQywyQ0FBMEM7O0lBQzFDLDhDQUE0Qzs7Ozs7SUFXMUMsOENBQThCOzs7OztJQUM5QixnREFBa0M7Ozs7O0lBQ2xDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWNoZWNrYm94LWdyb3VwJyxcbiAgZXhwb3J0QXM6ICduekNoZWNrYm94R3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNoZWNrYm94R3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4gbnVsbDtcbiAgb3B0aW9uczogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG5cbiAgb25PcHRpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdHJhY2tCeU9wdGlvbihfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LWdyb3VwJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==