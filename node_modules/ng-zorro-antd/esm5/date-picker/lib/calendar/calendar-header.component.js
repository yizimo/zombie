/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/calendar-header.component.ts
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
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from 'ng-zorro-antd/core';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.render();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @private
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    };
    /**
     * @private
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
        }
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: (/**
             * @return {?}
             */
            function () { return (_this.showTimePicker ? null : _this.changePanel('year')); }),
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: (/**
             * @return {?}
             */
            function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); }),
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(dayFormat)
            };
        }
        /** @type {?} */
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, (/** @type {?} */ (day)), year];
        }
        else {
            result = [year, month, (/** @type {?} */ (day))];
        }
        return result.filter((/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) { return !!selector; }));
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-header',
                    exportAs: 'calendarHeader',
                    template: "<div class=\"{{ prefixCls }}-header\">\n  <div style=\"position: relative;\">\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-year-btn\"\n      role=\"button\"\n      (click)=\"previousYear()\"\n      title=\"{{ locale.previousYear }}\"\n    ></a>\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-month-btn\"\n      role=\"button\"\n      (click)=\"previousMonth()\"\n      title=\"{{ locale.previousMonth }}\"\n    ></a>\n\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\n        <a class=\"{{ selector.className }}\"\n          role=\"button\"\n          (click)=\"selector.onClick ? selector.onClick() : null\"\n          title=\"{{ selector.title || null }}\"\n        >\n          {{ selector.label }}\n        </a>\n      </ng-container>\n    </span>\n\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-month-btn\"\n      role=\"button\"\n      (click)=\"nextMonth()\"\n      title=\"{{ locale.nextMonth }}\"\n    ></a>\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-year-btn\"\n      role=\"button\"\n      (click)=\"nextYear()\"\n      title=\"{{ locale.nextYear }}\"\n    ></a>\n  </div>\n\n  <ng-container [ngSwitch]=\"panelMode\">\n    <ng-container *ngSwitchCase=\"'decade'\">\n      <decade-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseDecade($event)\"\n      ></decade-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'year'\">\n      <year-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledYear\"\n        (valueChange)=\"onChooseYear($event)\"\n        (decadePanelShow)=\"changePanel('decade')\"\n      ></year-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'month'\">\n      <month-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledMonth\"\n        (valueChange)=\"onChooseMonth($event)\"\n        (yearPanelShow)=\"changePanel('year')\"\n      ></month-panel>\n    </ng-container>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        disabledYear: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        chooseDecade: [{ type: Output }],
        chooseYear: [{ type: Output }],
        chooseMonth: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
if (false) {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /**
     * @type {?}
     * @private
     */
    CalendarHeaderComponent.prototype.yearToMonth;
    /**
     * @type {?}
     * @private
     */
    CalendarHeaderComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
if (false) {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /**
     * @return {?}
     */
    YearMonthDaySelector.prototype.onClick = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHL0M7SUErQkUsaUNBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBckJ4QyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFHdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRzVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUVoRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDN0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDM0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRS9ELGNBQVMsR0FBVyxjQUFjLENBQUM7UUFHM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyw4SUFBOEk7SUFFaEksQ0FBQzs7OztJQUVyRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtTQUN2RDtRQUNELElBQUksQ0FB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ZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw4dEVBQTZDO2lCQUM5Qzs7OztnQkFaOEIsaUJBQWlCOzs7eUJBYzdDLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO3dCQUVMLEtBQUs7OEJBQ0wsTUFBTTs0QkFFTixLQUFLO2tDQUNMLE1BQU07K0JBRU4sTUFBTTs2QkFDTixNQUFNOzhCQUNOLE1BQU07O0lBMklULDhCQUFDO0NBQUEsQUFuS0QsSUFtS0M7U0EzSlksdUJBQXVCOzs7SUFDbEMseUNBQXlDOztJQUN6Qyw2Q0FBb0M7O0lBQ3BDLDZDQUFvQzs7SUFDcEMsZ0RBQWdEOztJQUNoRCwrQ0FBK0M7O0lBQy9DLGlEQUF5Qzs7SUFFekMsd0NBQTBCOztJQUMxQiw4Q0FBK0Q7O0lBRS9ELDRDQUE4Qjs7SUFDOUIsa0RBQW1FOztJQUVuRSwrQ0FBZ0U7O0lBQ2hFLDZDQUE4RDs7SUFDOUQsOENBQStEOztJQUUvRCw0Q0FBbUM7O0lBQ25DLHdEQUE4Qzs7Ozs7SUFFOUMsOENBQXFDOzs7OztJQUV6Qiw2Q0FBcUM7Ozs7O0FBc0luRCwwQ0FLQzs7O0lBSkMseUNBQWtCOztJQUNsQixxQ0FBZTs7SUFDZixxQ0FBYzs7OztJQUNkLHlEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUsIERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWhlYWRlcicsXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGVuYWJsZVByZXY6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGlzYWJsZWRNb250aDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkWWVhcjogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGU7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hvb3NlRGVjYWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VZZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIHllYXJNb250aERheVNlbGVjdG9yczogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcblxuICBwcml2YXRlIHllYXJUb01vbnRoOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgc2hvdWxkIGNoYW5nZSB0byBtb250aCBwYW5lbCB3aGVuIGN1cnJlbnQgaXMgeWVhciBwYW5lbCAoaWYgcmVmZXJlcj1tb250aCwgaXQgc2hvdWxkIHNob3cgbW9udGggcGFuZWwgd2hlbiBjaG9vc2VkIGEgeWVhcilcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYW5keURhdGUoKTsgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5zaG93VGltZVBpY2tlciB8fCBjaGFuZ2VzLnBhbmVsTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91c1llYXIoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigtMSk7XG4gIH1cblxuICBuZXh0WWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xuICB9XG5cbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9Nb250aCgtMSk7XG4gIH1cblxuICBuZXh0TW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvTW9udGgoMSk7XG4gIH1cblxuICBjaGFuZ2VQYW5lbChtb2RlOiBQYW5lbE1vZGUsIHZhbHVlPzogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkNob29zZURlY2FkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicsIHZhbHVlKTtcbiAgICB0aGlzLmNob29zZURlY2FkZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hvb3NlWWVhcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCh0aGlzLnllYXJUb01vbnRoID8gJ21vbnRoJyA6ICdkYXRlJywgdmFsdWUpO1xuICAgIHRoaXMueWVhclRvTW9udGggPSBmYWxzZTsgLy8gQ2xlYXJcbiAgICB0aGlzLmNob29zZVllYXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbkNob29zZU1vbnRoKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdkYXRlJywgdmFsdWUpO1xuICAgIHRoaXMueWVhclRvTW9udGggPSBmYWxzZTsgLy8gQ2xlYXJcbiAgICB0aGlzLmNob29zZU1vbnRoLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlVG9Nb250aFBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ21vbnRoJyk7XG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy55ZWFyTW9udGhEYXlTZWxlY3RvcnMgPSB0aGlzLmNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ290b01vbnRoKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRNb250aHMoYW1vdW50KSk7XG4gIH1cblxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXREYXRlVGltZShsb2NhbGVGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCBsb2NhbGVGb3JtYXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVZZWFyTW9udGhEYXlTZWxlY3RvcnMoKTogWWVhck1vbnRoRGF5U2VsZWN0b3JbXSB7XG4gICAgbGV0IHllYXI6IFllYXJNb250aERheVNlbGVjdG9yO1xuICAgIGxldCBtb250aDogWWVhck1vbnRoRGF5U2VsZWN0b3I7XG4gICAgbGV0IGRheTogWWVhck1vbnRoRGF5U2VsZWN0b3I7XG5cbiAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcbiAgICBsZXQgeWVhckZvcm1hdDogc3RyaW5nID0gdGhpcy5sb2NhbGUueWVhckZvcm1hdDtcbiAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XG4gICAgICB5ZWFyRm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoeWVhckZvcm1hdCk7XG4gICAgfVxuICAgIHllYXIgPSB7XG4gICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS15ZWFyLXNlbGVjdGAsXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUueWVhclNlbGVjdCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+ICh0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlUGFuZWwoJ3llYXInKSksXG4gICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZSh5ZWFyRm9ybWF0KVxuICAgIH07XG5cbiAgICBtb250aCA9IHtcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXNlbGVjdGAsXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUubW9udGhTZWxlY3QsXG4gICAgICBvbkNsaWNrOiAoKSA9PiAodGhpcy5zaG93VGltZVBpY2tlciA/IG51bGwgOiB0aGlzLmNoYW5nZVRvTW9udGhQYW5lbCgpKSxcbiAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0IHx8ICdNTU0nKVxuICAgIH07XG5cbiAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcbiAgICBsZXQgZGF5Rm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxvY2FsZS5kYXlGb3JtYXQ7XG4gICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xuICAgICAgZGF5Rm9ybWF0ID0gKHRoaXMuZGF0ZUhlbHBlciBhcyBEYXRlSGVscGVyQnlEYXRlUGlwZSkudHJhbnNDb21wYXRGb3JtYXQoZGF5Rm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd1RpbWVQaWNrZXIpIHtcbiAgICAgIGRheSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tZGF5LXNlbGVjdGAsXG4gICAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKGRheUZvcm1hdClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcblxuICAgIGlmICh0aGlzLmxvY2FsZS5tb250aEJlZm9yZVllYXIpIHtcbiAgICAgIHJlc3VsdCA9IFttb250aCwgZGF5ISwgeWVhcl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFt5ZWFyLCBtb250aCwgZGF5IV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoc2VsZWN0b3IgPT4gISFzZWxlY3Rvcik7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBZZWFyTW9udGhEYXlTZWxlY3RvciB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgb25DbGljaz8oKTogdm9pZDtcbn1cbiJdfQ==