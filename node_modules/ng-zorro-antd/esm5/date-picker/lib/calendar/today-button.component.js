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
var TodayButtonComponent = /** @class */ (function () {
    function TodayButtonComponent(dateHelper) {
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
    TodayButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabledDate) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var dateFormat = this.locale.dateFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
            }
            this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    };
    /**
     * @return {?}
     */
    TodayButtonComponent.prototype.onClickToday = /**
     * @return {?}
     */
    function () {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    };
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
    TodayButtonComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    TodayButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        disabledDate: [{ type: Input }],
        clickToday: [{ type: Output }]
    };
    return TodayButtonComponent;
}());
export { TodayButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBd0IsaUJBQWlCLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFFdEc7SUFxQkUsOEJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBWHhDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBR3JCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTlELGNBQVMsR0FBVyxjQUFjLENBQUM7UUFDbkMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUdwQixRQUFHLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUVXLENBQUM7Ozs7O0lBRXJELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRTtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTs7O2dCQUVkLFVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDL0MsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsVUFBVSxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBd0IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCwyQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxpRUFBaUU7SUFDM0csQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHlRQUEwQztpQkFDM0M7Ozs7Z0JBVDhCLGlCQUFpQjs7O3lCQVc3QyxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFFTCxNQUFNOztJQTJCVCwyQkFBQztDQUFBLEFBeENELElBd0NDO1NBaENZLG9CQUFvQjs7O0lBQy9CLHNDQUF5Qzs7SUFDekMsNkNBQXdDOztJQUN4Qyw0Q0FBNEM7O0lBRTVDLDBDQUE4RDs7SUFFOUQseUNBQW1DOztJQUNuQywwQ0FBNEI7O0lBQzVCLHFDQUFjOzs7OztJQUVkLG1DQUF5Qzs7Ozs7SUFFN0IsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVIZWxwZXJCeURhdGVQaXBlLCBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0b2RheS1idXR0b24nLFxuICBleHBvcnRBczogJ3RvZGF5QnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICd0b2RheS1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgaGFzVGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja1RvZGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICB0aXRsZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgbm93OiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLm5vdy5uYXRpdmVEYXRlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9jYWxlKSB7XG4gICAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcbiAgICAgIGxldCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxvY2FsZS5kYXRlRm9ybWF0O1xuICAgICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xuICAgICAgICBkYXRlRm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoZGF0ZUZvcm1hdCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0aGlzLm5vdy5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9kYXkoKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja1RvZGF5LmVtaXQodGhpcy5ub3cuY2xvbmUoKSk7IC8vIFRvIHByZXZlbnQgdGhlIFwibm93XCIgYmVpbmcgbW9kaWZpZWQgZnJvbSBvdXRzaWRlLCB3ZSB1c2UgY2xvbmVcbiAgfVxufVxuIl19