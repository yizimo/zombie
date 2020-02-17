/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/today-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
export class TodayButtonComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            let dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    }
    /**
     * @return {?}
     */
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
TodayButtonComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'today-button',
                exportAs: 'todayButton',
                template: "<a\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"isDisabled ? null : onClickToday()\"\n  title=\"{{ title }}\"\n>\n  {{ hasTimePicker ? locale.now : locale.today }}\n</a>"
            }] }
];
/** @nocollapse */
TodayButtonComponent.ctorParameters = () => [
    { type: DateHelperService }
];
TodayButtonComponent.propDecorators = {
    locale: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    disabledDate: [{ type: Input }],
    clickToday: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TodayButtonComponent.prototype.locale;
    /** @type {?} */
    TodayButtonComponent.prototype.hasTimePicker;
    /** @type {?} */
    TodayButtonComponent.prototype.disabledDate;
    /** @type {?} */
    TodayButtonComponent.prototype.clickToday;
    /** @type {?} */
    TodayButtonComponent.prototype.prefixCls;
    /** @type {?} */
    TodayButtonComponent.prototype.isDisabled;
    /** @type {?} */
    TodayButtonComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    TodayButtonComponent.prototype.now;
    /**
     * @type {?}
     * @private
     */
    TodayButtonComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBd0IsaUJBQWlCLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFVdEcsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWEvQixZQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVh4QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUdyQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUU5RCxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHcEIsUUFBRyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7SUFFVyxDQUFDOzs7OztJQUVyRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0U7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7OztnQkFFZCxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQy9DLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLFVBQVUsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQXdCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0RjtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlFQUFpRTtJQUMzRyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIseVFBQTBDO2FBQzNDOzs7O1lBVDhCLGlCQUFpQjs7O3FCQVc3QyxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFFTCxNQUFNOzs7O0lBSlAsc0NBQXlDOztJQUN6Qyw2Q0FBd0M7O0lBQ3hDLDRDQUE0Qzs7SUFFNUMsMENBQThEOztJQUU5RCx5Q0FBbUM7O0lBQ25DLDBDQUE0Qjs7SUFDNUIscUNBQWM7Ozs7O0lBRWQsbUNBQXlDOzs7OztJQUU3QiwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUsIERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RvZGF5LWJ1dHRvbicsXG4gIGV4cG9ydEFzOiAndG9kYXlCdXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJ3RvZGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9kYXlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBoYXNUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrVG9kYXkgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBub3c6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKHRoaXMubm93Lm5hdGl2ZURhdGUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5sb2NhbGUpIHtcbiAgICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xuICAgICAgbGV0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubG9jYWxlLmRhdGVGb3JtYXQ7XG4gICAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XG4gICAgICAgIGRhdGVGb3JtYXQgPSAodGhpcy5kYXRlSGVscGVyIGFzIERhdGVIZWxwZXJCeURhdGVQaXBlKS50cmFuc0NvbXBhdEZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMubm93Lm5hdGl2ZURhdGUsIGRhdGVGb3JtYXQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tUb2RheSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrVG9kYXkuZW1pdCh0aGlzLm5vdy5jbG9uZSgpKTsgLy8gVG8gcHJldmVudCB0aGUgXCJub3dcIiBiZWluZyBtb2RpZmllZCBmcm9tIG91dHNpZGUsIHdlIHVzZSBjbG9uZVxuICB9XG59XG4iXX0=