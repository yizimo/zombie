/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/calendar-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
var CalendarInputComponent = /** @class */ (function () {
    function CalendarInputComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    CalendarInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.inputRef.nativeElement.focus(); }));
        }
    };
    /**
     * @param {?} event
     * @param {?=} isEnter
     * @return {?}
     */
    CalendarInputComponent.prototype.onInputKeyup = /**
     * @param {?} event
     * @param {?=} isEnter
     * @return {?}
     */
    function (event, isEnter) {
        if (isEnter === void 0) { isEnter = false; }
        /** @type {?} */
        var date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        this.value = date;
        this.valueChange.emit({ date: date, isEnter: isEnter });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarInputComponent.prototype.toReadableInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    CalendarInputComponent.prototype.checkValidInputDate = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = ((/** @type {?} */ (event.target))).value;
        /** @type {?} */
        var date = new CandyDate(input);
        this.invalidInputClass = '';
        if (!date.isValid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = this.prefixCls + "-input-invalid";
            return null;
        }
        return date;
    };
    CalendarInputComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-input',
                    exportAs: 'calendarInput',
                    template: "<div class=\"{{ prefixCls }}-input-wrap\">\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\n    <input\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\n      value=\"{{ toReadableInput(value) }}\"\n      (input)=\"onInputKeyup($event)\"\n      (keyup.enter)=\"onInputKeyup($event, true)\"\n      #inputElement\n    />\n  </div>\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\"></a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CalendarInputComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    CalendarInputComponent.propDecorators = {
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        value: [{ type: Input }],
        autoFocus: [{ type: Input }],
        inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
        valueChange: [{ type: Output }]
    };
    return CalendarInputComponent;
}());
export { CalendarInputComponent };
if (false) {
    /** @type {?} */
    CalendarInputComponent.prototype.locale;
    /** @type {?} */
    CalendarInputComponent.prototype.format;
    /** @type {?} */
    CalendarInputComponent.prototype.placeholder;
    /** @type {?} */
    CalendarInputComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarInputComponent.prototype.value;
    /** @type {?} */
    CalendarInputComponent.prototype.autoFocus;
    /** @type {?} */
    CalendarInputComponent.prototype.inputRef;
    /** @type {?} */
    CalendarInputComponent.prototype.valueChange;
    /** @type {?} */
    CalendarInputComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarInputComponent.prototype.invalidInputClass;
    /**
     * @type {?}
     * @private
     */
    CalendarInputComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRjtJQXVCRSxnQ0FBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFMOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBeUMsQ0FBQztRQUUzRixjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztJQUVxQixDQUFDOzs7O0lBRXJELHlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBbkMsQ0FBbUMsRUFBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNkNBQVk7Ozs7O0lBQVosVUFBYSxLQUFvQixFQUFFLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7O1lBQ25ELElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBRTVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDdEUsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxnREFBZTs7OztJQUFmLFVBQWdCLEtBQWdCO1FBQzlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVFLENBQUM7Ozs7OztJQUVPLG9EQUFtQjs7Ozs7SUFBM0IsVUFBNEIsS0FBWTs7WUFDaEMsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBb0IsQ0FBQyxDQUFDLEtBQUs7O1lBQ2hELElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNELDZDQUE2QztZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQU0sSUFBSSxDQUFDLFNBQVMsbUJBQWdCLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIseWdCQUE0QztpQkFDN0M7Ozs7Z0JBVFEsaUJBQWlCOzs7eUJBV3ZCLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBRUwsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUUxQyxNQUFNOztJQXlDVCw2QkFBQztDQUFBLEFBM0RELElBMkRDO1NBbkRZLHNCQUFzQjs7O0lBQ2pDLHdDQUF5Qzs7SUFDekMsd0NBQXdCOztJQUN4Qiw2Q0FBNkI7O0lBQzdCLDhDQUE0Qzs7SUFFNUMsdUNBQTBCOztJQUMxQiwyQ0FBNEI7O0lBQzVCLDBDQUFrRTs7SUFFbEUsNkNBQTJGOztJQUUzRiwyQ0FBbUM7O0lBQ25DLG1EQUErQjs7Ozs7SUFFbkIsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItaW5wdXQnLFxuICBleHBvcnRBczogJ2NhbGVuZGFySW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWlucHV0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dFJlZjogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogQ2FuZHlEYXRlOyBpc0VudGVyOiBib29sZWFuIH0+KCk7XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgaW52YWxpZElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0S2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGlzRW50ZXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNoZWNrVmFsaWRJbnB1dERhdGUoZXZlbnQpO1xuXG4gICAgaWYgKCFkYXRlIHx8ICh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShkYXRlLm5hdGl2ZURhdGUpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh7IGRhdGUsIGlzRW50ZXIgfSk7XG4gIH1cblxuICB0b1JlYWRhYmxlSW5wdXQodmFsdWU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCkgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tWYWxpZElucHV0RGF0ZShldmVudDogRXZlbnQpOiBDYW5keURhdGUgfCBudWxsIHtcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBDYW5keURhdGUoaW5wdXQpO1xuXG4gICAgdGhpcy5pbnZhbGlkSW5wdXRDbGFzcyA9ICcnO1xuICAgIGlmICghZGF0ZS5pc1ZhbGlkKCkgfHwgaW5wdXQgIT09IHRoaXMudG9SZWFkYWJsZUlucHV0KGRhdGUpKSB7XG4gICAgICAvLyBTaG91bGQgYWxzbyBtYXRjaCB0aGUgaW5wdXQgZm9ybWF0IGV4YWN0bHlcbiAgICAgIHRoaXMuaW52YWxpZElucHV0Q2xhc3MgPSBgJHt0aGlzLnByZWZpeENsc30taW5wdXQtaW52YWxpZGA7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuIl19