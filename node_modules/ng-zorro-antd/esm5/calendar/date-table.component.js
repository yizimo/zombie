/**
 * @fileoverview added by tsickle
 * Generated from: date-table.component.ts
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
import { valueFunctionProp, CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
/** @type {?} */
var DATE_ROW_NUM = 6;
/** @type {?} */
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    Object.defineProperty(DateTableComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: 
        // Range ONLY
        /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            // Show today by default
            this._value = this.activeDate = date || new CandyDate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.render();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change) {
            /** @type {?} */
            var previousValue_1 = change.previousValue;
            /** @type {?} */
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    function (value, index) {
                        /** @type {?} */
                        var previousCandyDate = previousValue_1[index];
                        return previousCandyDate instanceof CandyDate
                            ? previousCandyDate.isSameDay(value)
                            : previousCandyDate !== value;
                    })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue_1)), currentValue);
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // Only change date not change time
        /** @type {?} */
        var newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadWeekDays = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekDays = [];
        /** @type {?} */
        var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            var day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                // eg. Tue
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n
                .getLocaleId()
                .toLowerCase()
                .indexOf('zh') === 0
                ? 'EEEEE'
                : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.makeWeekRows = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        var _this = this;
        /** @type {?} */
        var weekRows = [];
        /** @type {?} */
        var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var week = 0; week < DATE_ROW_NUM; week++) {
            /** @type {?} */
            var weekStart = firstDayOfMonth.addDays(week * 7);
            /** @type {?} */
            var row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            var _loop_1 = function (day) {
                var _a;
                /** @type {?} */
                var date = weekStart.addDays(day);
                /** @type {?} */
                var dateFormat = this_1.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                /** @type {?} */
                var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                var cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this_1.dateCellRender, date),
                    // Customized content
                    dateFullCellRender: valueFunctionProp(this_1.dateFullCellRender, date),
                    content: "" + date.getDate(),
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.changeValueFromInside(date); }),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    function () { return _this.dayHover.emit(date); })
                };
                if (this_1.showWeek && !row.weekNum) {
                    row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (Array.isArray(this_1.selectedValue) && date.isSameMonth(this_1.activeDate)) {
                    // Range selections
                    /** @type {?} */
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    /** @type {?} */
                    var start = rangeValue[0];
                    /** @type {?} */
                    var end = rangeValue[1];
                    if (start) {
                        if (start.isSameDay(date)) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            row.isActive = true;
                        }
                        if (end) {
                            if (end.isSameDay(date)) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                row.isActive = true;
                            }
                            else if (date.isAfterDay(start) && date.isBeforeDay(end)) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (date.isSameDay(this_1.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if (this_1.disabledDate && this_1.disabledDate(date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-today"] = cell.isToday,
                    _a[this_1.prefixCls + "-last-month-cell"] = date.isBeforeMonth(this_1.activeDate),
                    _a[this_1.prefixCls + "-next-month-btn-day"] = date.isAfterMonth(this_1.activeDate),
                    _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                    _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                    _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                    _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                    _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                    _a);
                row.dateCells.push(cell);
            };
            var this_1 = this;
            for (var day = 0; day < 7; day++) {
                _loop_1(day);
            }
            row.classMap = (_a = {},
                _a[this.prefixCls + "-current-week"] = row.isCurrent,
                _a[this.prefixCls + "-active-week"] = row.isActive,
                _a);
            weekRows.push(row);
        }
        return weekRows;
    };
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    DateTableComponent.prototype.trackByDateFn = /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return "" + item.title;
    };
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    DateTableComponent.prototype.trackByWeekFn = /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return item.year + "-" + item.weekNum;
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-table',
                    exportAs: 'dateTable',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\n      </th>\n      <th *ngFor=\"let cell of headWeekDays\" role=\"columnheader\" title=\"{{ cell.short }}\"\n        class=\"{{ prefixCls }}-column-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of weekRows;trackBy:trackByWeekFn\" [ngClass]=\"row.classMap\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\n        {{ row.weekNum }}\n      </td>\n      <td *ngFor=\"let cell of row.dateCells;trackBy:trackByDateFn\" title=\"{{ cell.title }}\" role=\"gridcell\" [ngClass]=\"cell.classMap\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\" (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\n        date-table-cell [prefixCls]=\"prefixCls\" [cell]=\"cell\">\n      </td>\n    </tr>\n  </tbody>\n</table>"
                }] }
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    DateTableComponent.propDecorators = {
        prefixCls: [{ type: Input }],
        locale: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        value: [{ type: Input }],
        activeDate: [{ type: Input }],
        showWeek: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateCellRender: [{ type: Input }],
        dateFullCellRender: [{ type: Input }],
        dayHover: [{ type: Output }],
        valueChange: [{ type: Output }]
    };
    return DateTableComponent;
}());
export { DateTableComponent };
if (false) {
    /** @type {?} */
    DateTableComponent.prototype._value;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.locale;
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.activeDate;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateCellRender;
    /** @type {?} */
    DateTableComponent.prototype.dateFullCellRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function WeekDayLabel() { }
if (false) {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
if (false) {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.label;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.dateCellRender;
    /** @type {?} */
    DateCell.prototype.dateFullCellRender;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /**
     * @param {?} date
     * @return {?}
     */
    DateCell.prototype.onClick = function (date) { };
    /**
     * @return {?}
     */
    DateCell.prototype.onMouseEnter = function () { };
}
/**
 * @record
 */
export function WeekRow() { }
if (false) {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.year;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFekYsWUFBWSxHQUFHLENBQUM7O0lBQ2hCLFlBQVksR0FBRyxDQUFDO0FBRXRCO0lBcUNFLDRCQUFvQixJQUFtQixFQUFVLFVBQTZCO1FBQTFELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQXhCckUsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQWdCbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUtoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDZDQUE2Qzs7UUFDdkYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRWtCLENBQUM7SUFuQmxGLHNCQUNJLHFDQUFLOzs7O1FBS1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7OztRQVJELFVBQ1UsSUFBZTtZQUN2Qix3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzFELENBQUM7OztPQUFBOzs7O0lBaUJELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FB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Q0wsS0FBSztxQ0FDTCxLQUFLOzJCQUVMLE1BQU07OEJBQ04sTUFBTTs7SUFpTVQseUJBQUM7Q0FBQSxBQXBPRCxJQW9PQztTQTVOWSxrQkFBa0I7OztJQUM3QixvQ0FBa0I7O0lBQ2xCLDBDQUE2Qjs7SUFDN0Isc0NBQW9COztJQUVwQix1Q0FBNEM7O0lBQzVDLG9DQUF5Qzs7SUFDekMsMkNBQW9DOztJQUNwQyx3Q0FBaUM7O0lBWWpDLHdDQUErQjs7SUFDL0Isc0NBQW1DOztJQUNuQywwQ0FBNEM7O0lBQzVDLDRDQUFrRTs7SUFDbEUsZ0RBQXNFOztJQUV0RSxzQ0FBNEQ7O0lBQzVELHlDQUErRDs7Ozs7SUFFbkQsa0NBQTJCOzs7OztJQUFFLHdDQUFxQzs7Ozs7QUFpTWhGLGtDQUdDOzs7SUFGQyw2QkFBYzs7SUFDZCxpQ0FBa0I7Ozs7O0FBR3BCLDhCQWdCQzs7O0lBZkMseUJBQVk7O0lBQ1oseUJBQWM7O0lBQ2QseUJBQWM7O0lBQ2Qsa0NBQTJDOztJQUMzQyxzQ0FBK0M7O0lBQy9DLDJCQUFnQjs7SUFDaEIsOEJBQXFCOztJQUNyQiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsdUNBQThCOztJQUM5QixxQ0FBNEI7O0lBQzVCLDZCQUFvQjs7SUFDcEIsNEJBQWtCOzs7OztJQUNsQixpREFBK0I7Ozs7SUFDL0Isa0RBQXFCOzs7OztBQUd2Qiw2QkFPQzs7O0lBTkMsNEJBQW9COztJQUNwQiwyQkFBbUI7O0lBQ25CLDBCQUFpQjs7SUFDakIsdUJBQWM7O0lBQ2QsMkJBQWtCOztJQUNsQiw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wLCBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5jb25zdCBEQVRFX1JPV19OVU0gPSA2O1xuY29uc3QgREFURV9DT0xfTlVNID0gNztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXG4gIGV4cG9ydEFzOiAnZGF0ZVRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIF92YWx1ZTogQ2FuZHlEYXRlO1xuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xuICB3ZWVrUm93czogV2Vla1Jvd1tdO1xuXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKGRhdGU6IENhbmR5RGF0ZSkge1xuICAgIC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5hY3RpdmVEYXRlID0gZGF0ZSB8fCBuZXcgQ2FuZHlEYXRlKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRhdGVDZWxsUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBkYXRlRnVsbENlbGxSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5hY3RpdmVEYXRlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuaG92ZXJWYWx1ZSlcbiAgICApIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0NhbmR5RGF0ZSA9IHByZXZpb3VzVmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlXG4gICAgICAgICAgICAgID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKVxuICAgICAgICAgICAgICA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQgJiYgcmlnaHQuaXNTYW1lRGF5KGxlZnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmhlYWRXZWVrRGF5cyA9IHRoaXMubWFrZUhlYWRXZWVrRGF5cygpO1xuICAgICAgdGhpcy53ZWVrUm93cyA9IHRoaXMubWFrZVdlZWtSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIC8vIE9ubHkgY2hhbmdlIGRhdGUgbm90IGNoYW5nZSB0aW1lXG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICAuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpXG4gICAgICAuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSlcbiAgICAgIC5zZXREYXRlKHZhbHVlLmdldERhdGUoKSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XG4gICAgY29uc3Qgd2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXgrKykge1xuICAgICAgY29uc3QgZGF5ID0gc3RhcnQuYWRkRGF5cyhjb2xJbmRleCk7XG4gICAgICB3ZWVrRGF5c1tjb2xJbmRleF0gPSB7XG4gICAgICAgIHNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnRScgOiAnZGRkJyksIC8vIGVnLiBUdWVcbiAgICAgICAgdmVyeVNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKSkgLy8gZWcuIFR1XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gd2Vla0RheXM7XG4gIH1cblxuICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pMThuXG4gICAgICAgIC5nZXRMb2NhbGVJZCgpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmRleE9mKCd6aCcpID09PSAwXG4gICAgICAgID8gJ0VFRUVFJ1xuICAgICAgICA6ICdFRUVFRUUnOyAvLyBVc2UgZXh0cmVtZSBzaG9ydCBmb3IgY2hpbmVzZVxuICAgIH1cbiAgICByZXR1cm4gJ2RkJztcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVdlZWtSb3dzKCk6IFdlZWtSb3dbXSB7XG4gICAgY29uc3Qgd2Vla1Jvd3M6IFdlZWtSb3dbXSA9IFtdO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcblxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgREFURV9ST1dfTlVNOyB3ZWVrKyspIHtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGZpcnN0RGF5T2ZNb250aC5hZGREYXlzKHdlZWsgKiA3KTtcbiAgICAgIGNvbnN0IHJvdzogV2Vla1JvdyA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBkYXRlQ2VsbHM6IFtdLFxuICAgICAgICB5ZWFyOiB3ZWVrU3RhcnQuZ2V0WWVhcigpXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xuICAgICAgICBjb25zdCBkYXRlID0gd2Vla1N0YXJ0LmFkZERheXMoZGF5KTtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZVxuICAgICAgICAgID8gJ2xvbmdEYXRlJ1xuICAgICAgICAgIDogdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdkZCcgOiAnREQnKTtcblxuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcbiAgICAgICAgICB2YWx1ZTogZGF0ZS5uYXRpdmVEYXRlLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgZGF0ZUNlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZUNlbGxSZW5kZXIsIGRhdGUpLCAvLyBDdXN0b21pemVkIGNvbnRlbnRcbiAgICAgICAgICBkYXRlRnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZUZ1bGxDZWxsUmVuZGVyLCBkYXRlKSxcbiAgICAgICAgICBjb250ZW50OiBgJHtkYXRlLmdldERhdGUoKX1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKGRhdGUpLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gdGhpcy5kYXlIb3Zlci5lbWl0KGRhdGUpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXJvdy53ZWVrTnVtKSB7XG4gICAgICAgICAgcm93LndlZWtOdW0gPSB0aGlzLmRhdGVIZWxwZXIuZ2V0SVNPV2VlayhkYXRlLm5hdGl2ZURhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGUuaXNUb2RheSgpKSB7XG4gICAgICAgICAgY2VsbC5pc1RvZGF5ID0gdHJ1ZTtcbiAgICAgICAgICByb3cuaXNDdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0ZWRWYWx1ZSkgJiYgZGF0ZS5pc1NhbWVNb250aCh0aGlzLmFjdGl2ZURhdGUpKSB7XG4gICAgICAgICAgLy8gUmFuZ2Ugc2VsZWN0aW9uc1xuICAgICAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB0aGlzLmhvdmVyVmFsdWUgJiYgdGhpcy5ob3ZlclZhbHVlLmxlbmd0aCA/IHRoaXMuaG92ZXJWYWx1ZSA6IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHJhbmdlVmFsdWVbMF07XG4gICAgICAgICAgY29uc3QgZW5kID0gcmFuZ2VWYWx1ZVsxXTtcbiAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgIGlmIChzdGFydC5pc1NhbWVEYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgICAgICAgaWYgKGVuZC5pc1NhbWVEYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc0FmdGVyRGF5KHN0YXJ0KSAmJiBkYXRlLmlzQmVmb3JlRGF5KGVuZCkpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlzSW5SYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUoZGF0ZS5uYXRpdmVEYXRlKSkge1xuICAgICAgICAgIGNlbGwuaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdG9kYXlgXTogY2VsbC5pc1RvZGF5LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1tb250aC1jZWxsYF06IGRhdGUuaXNCZWZvcmVNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1tb250aC1idG4tZGF5YF06IGRhdGUuaXNBZnRlck1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1kYXlgXTogY2VsbC5pc1NlbGVjdGVkLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWQtY2VsbGBdOiBjZWxsLmlzRGlzYWJsZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1zdGFydC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZW5kLWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taW4tcmFuZ2UtY2VsbGBdOiAhIWNlbGwuaXNJblJhbmdlXG4gICAgICAgIH07XG5cbiAgICAgICAgcm93LmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICByb3cuY2xhc3NNYXAgPSB7XG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY3VycmVudC13ZWVrYF06IHJvdy5pc0N1cnJlbnQsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYWN0aXZlLXdlZWtgXTogcm93LmlzQWN0aXZlXG4gICAgICB9O1xuXG4gICAgICB3ZWVrUm93cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtSb3dzO1xuICB9XG5cbiAgdHJhY2tCeURhdGVGbihfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUNlbGwpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtpdGVtLnRpdGxlfWA7XG4gIH1cblxuICB0cmFja0J5V2Vla0ZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBXZWVrUm93KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7aXRlbS55ZWFyfS0ke2l0ZW0ud2Vla051bX1gO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla0RheUxhYmVsIHtcbiAgc2hvcnQ6IHN0cmluZztcbiAgdmVyeVNob3J0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGwge1xuICB2YWx1ZTogRGF0ZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGF0ZUNlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xuICBkYXRlRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWRTdGFydERhdGU/OiBib29sZWFuO1xuICBpc1NlbGVjdGVkRW5kRGF0ZT86IGJvb2xlYW47XG4gIGlzSW5SYW5nZT86IGJvb2xlYW47XG4gIGNsYXNzTWFwPzogb2JqZWN0O1xuICBvbkNsaWNrKGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQ7XG4gIG9uTW91c2VFbnRlcigpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtSb3cge1xuICBpc0N1cnJlbnQ/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IHRvZGF5IHN0YXlzIGluXG4gIGlzQWN0aXZlPzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCBjdXJyZW50IHNldHRpbmcgZGF0ZSBzdGF5cyBpblxuICB3ZWVrTnVtPzogbnVtYmVyO1xuICB5ZWFyPzogbnVtYmVyO1xuICBjbGFzc01hcD86IG9iamVjdDtcbiAgZGF0ZUNlbGxzOiBEYXRlQ2VsbFtdO1xufVxuIl19