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
const DATE_ROW_NUM = 6;
/** @type {?} */
const DATE_COL_NUM = 7;
export class DateTableComponent {
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.prefixCls = 'ant-calendar';
        this.showWeek = false;
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.valueChange = new EventEmitter();
    }
    // Range ONLY
    /**
     * @param {?} date
     * @return {?}
     */
    set value(date) {
        // Show today by default
        this._value = this.activeDate = date || new CandyDate();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.render();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => {
                        /** @type {?} */
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate
                            ? previousCandyDate.isSameDay(value)
                            : previousCandyDate !== value;
                    })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue)), currentValue);
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        // Only change date not change time
        /** @type {?} */
        const newValue = this.value
            .setYear(value.getYear())
            .setMonth(value.getMonth())
            .setDate(value.getDate());
        this.valueChange.emit(newValue);
    }
    /**
     * @private
     * @return {?}
     */
    makeHeadWeekDays() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            const day = start.addDays(colIndex);
            weekDays[colIndex] = {
                short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                // eg. Tue
                veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    /**
     * @private
     * @return {?}
     */
    getVeryShortWeekFormat() {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n
                .getLocaleId()
                .toLowerCase()
                .indexOf('zh') === 0
                ? 'EEEEE'
                : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    }
    /**
     * @private
     * @return {?}
     */
    makeWeekRows() {
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < DATE_ROW_NUM; week++) {
            /** @type {?} */
            const weekStart = firstDayOfMonth.addDays(week * 7);
            /** @type {?} */
            const row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = weekStart.addDays(day);
                /** @type {?} */
                const dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                /** @type {?} */
                const label = this.dateHelper.format(date.nativeDate, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                const cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    dateCellRender: valueFunctionProp(this.dateCellRender, date),
                    // Customized content
                    dateFullCellRender: valueFunctionProp(this.dateFullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.changeValueFromInside(date)),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    () => this.dayHover.emit(date))
                };
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && date.isSameMonth(this.activeDate)) {
                    // Range selections
                    /** @type {?} */
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    /** @type {?} */
                    const start = rangeValue[0];
                    /** @type {?} */
                    const end = rangeValue[1];
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
                else if (date.isSameDay(this.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: date.isBeforeMonth(this.activeDate),
                    [`${this.prefixCls}-next-month-btn-day`]: date.isAfterMonth(this.activeDate),
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`${this.prefixCls}-current-week`]: row.isCurrent,
                [`${this.prefixCls}-active-week`]: row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByDateFn(_index, item) {
        return `${item.title}`;
    }
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByWeekFn(_index, item) {
        return `${item.year}-${item.weekNum}`;
    }
}
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
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: DateHelperService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhbGVuZGFyLyIsInNvdXJjZXMiOlsiZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFekYsWUFBWSxHQUFHLENBQUM7O01BQ2hCLFlBQVksR0FBRyxDQUFDO0FBVXRCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBNkI3QixZQUFvQixJQUFtQixFQUFVLFVBQTZCO1FBQTFELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQXhCckUsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQWdCbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUtoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDZDQUE2Qzs7UUFDdkYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRWtCLENBQUM7Ozs7OztJQW5CbEYsSUFDSSxLQUFLLENBQUMsSUFBZTtRQUN2Qix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUN6QztZQUNBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsTUFBb0I7UUFDM0MsSUFBSSxNQUFNLEVBQUU7O2tCQUNKLGFBQWEsR0FBNEIsTUFBTSxDQUFDLGFBQWE7O2tCQUM3RCxZQUFZLEdBQTRCLE1BQU0sQ0FBQyxZQUFZO1lBQ2pFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxDQUNMLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzdCLFlBQVksQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLE1BQU07b0JBQzVDLFlBQVksQ0FBQyxJQUFJOzs7OztvQkFBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTs7OEJBQzNCLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7d0JBQzlDLE9BQU8saUJBQWlCLFlBQVksU0FBUzs0QkFDM0MsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7NEJBQ3BDLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUM7b0JBQ2xDLENBQUMsRUFBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxhQUFhLEVBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQWUsRUFBRSxLQUFnQjtRQUNsRCxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxLQUFnQjs7O2NBRXRDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSzthQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVPLGdCQUFnQjs7Y0FDaEIsUUFBUSxHQUFtQixFQUFFOztjQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7UUFDbEcsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRTs7a0JBQ3BELEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUc7Z0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Z0JBQzNGLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsU0FBUzthQUMzRixDQUFDO1NBQ0g7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUk7aUJBQ2IsV0FBVyxFQUFFO2lCQUNiLFdBQVcsRUFBRTtpQkFDYixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLE9BQU87Z0JBQ1QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdDQUFnQztTQUMvQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTyxZQUFZOztjQUNaLFFBQVEsR0FBYyxFQUFFOztjQUN4QixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7UUFFNUcsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRTs7a0JBQ3hDLFNBQVMsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7O2tCQUM3QyxHQUFHLEdBQVk7Z0JBQ25CLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixTQUFTLEVBQUUsRUFBRTtnQkFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRTthQUMxQjtZQUVELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7O3NCQUMxQixJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7O3NCQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjO29CQUMvQyxDQUFDLENBQUMsVUFBVTtvQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLEVBQUUsWUFBWSxDQUFDOztzQkFDakUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDOztzQkFDM0QsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztzQkFFN0YsSUFBSSxHQUFhO29CQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQ3RCLEtBQUssRUFBRSxLQUFLO29CQUNaLFVBQVUsRUFBRSxLQUFLO29CQUNqQixVQUFVLEVBQUUsS0FBSztvQkFDakIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDOztvQkFDNUQsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQztvQkFDcEUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUM1QixPQUFPOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFBO29CQUMvQyxZQUFZOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzdDO2dCQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2pDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMzRDtnQkFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjtnQkFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzs7MEJBRXBFLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7MEJBQzdGLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDOzswQkFDckIsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksS0FBSyxFQUFFO3dCQUNULElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7NEJBQ3ZCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3lCQUNyQjt3QkFDRCxJQUFJLEdBQUcsRUFBRTs0QkFDUCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0NBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dDQUN2QixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs2QkFDckI7aUNBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0NBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzZCQUN2Qjt5QkFDRjtxQkFDRjtpQkFDRjtxQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2dCQUVELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO2dCQUVELElBQUksQ0FBQyxRQUFRLEdBQUc7b0JBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxFQUFFLElBQUk7b0JBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztvQkFDekMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUMxRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMscUJBQXFCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzVFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDbkQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQ3BELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO29CQUNyRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtvQkFDakUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO2lCQUN0RCxDQUFDO2dCQUVGLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO1lBRUQsR0FBRyxDQUFDLFFBQVEsR0FBRztnQkFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZUFBZSxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVM7Z0JBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxjQUFjLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUTthQUNoRCxDQUFDO1lBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxNQUFjLEVBQUUsSUFBYztRQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxNQUFjLEVBQUUsSUFBYTtRQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7O1lBbk9GLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDR1Q0FBd0M7YUFDekM7Ozs7WUFab0QsYUFBYTtZQUF6RCxpQkFBaUI7Ozt3QkFrQnZCLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7b0JBRUwsS0FBSzt5QkFVTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7dUJBRUwsTUFBTTswQkFDTixNQUFNOzs7O0lBMUJQLG9DQUFrQjs7SUFDbEIsMENBQTZCOztJQUM3QixzQ0FBb0I7O0lBRXBCLHVDQUE0Qzs7SUFDNUMsb0NBQXlDOztJQUN6QywyQ0FBb0M7O0lBQ3BDLHdDQUFpQzs7SUFZakMsd0NBQStCOztJQUMvQixzQ0FBbUM7O0lBQ25DLDBDQUE0Qzs7SUFDNUMsNENBQWtFOztJQUNsRSxnREFBc0U7O0lBRXRFLHNDQUE0RDs7SUFDNUQseUNBQStEOzs7OztJQUVuRCxrQ0FBMkI7Ozs7O0lBQUUsd0NBQXFDOzs7OztBQWlNaEYsa0NBR0M7OztJQUZDLDZCQUFjOztJQUNkLGlDQUFrQjs7Ozs7QUFHcEIsOEJBZ0JDOzs7SUFmQyx5QkFBWTs7SUFDWix5QkFBYzs7SUFDZCx5QkFBYzs7SUFDZCxrQ0FBMkM7O0lBQzNDLHNDQUErQzs7SUFDL0MsMkJBQWdCOztJQUNoQiw4QkFBcUI7O0lBQ3JCLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQix1Q0FBOEI7O0lBQzlCLHFDQUE0Qjs7SUFDNUIsNkJBQW9COztJQUNwQiw0QkFBa0I7Ozs7O0lBQ2xCLGlEQUErQjs7OztJQUMvQixrREFBcUI7Ozs7O0FBR3ZCLDZCQU9DOzs7SUFOQyw0QkFBb0I7O0lBQ3BCLDJCQUFtQjs7SUFDbkIsMEJBQWlCOztJQUNqQix1QkFBYzs7SUFDZCwyQkFBa0I7O0lBQ2xCLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AsIENhbmR5RGF0ZSwgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmNvbnN0IERBVEVfUk9XX05VTSA9IDY7XG5jb25zdCBEQVRFX0NPTF9OVU0gPSA3O1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYXRlLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgX3ZhbHVlOiBDYW5keURhdGU7XG4gIGhlYWRXZWVrRGF5czogV2Vla0RheUxhYmVsW107XG4gIHdlZWtSb3dzOiBXZWVrUm93W107XG5cbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUoZGF0ZTogQ2FuZHlEYXRlKSB7XG4gICAgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlIHx8IG5ldyBDYW5keURhdGUoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBDYW5keURhdGUge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGFjdGl2ZURhdGU6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgZGF0ZUNlbGxSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIGRhdGVGdWxsQ2VsbFJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF5SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmFjdGl2ZURhdGUpIHx8XG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy52YWx1ZSkgfHxcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5ob3ZlclZhbHVlKVxuICAgICkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcbiAgICBpZiAoY2hhbmdlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIUFycmF5LmlzQXJyYXkocHJldmlvdXNWYWx1ZSkgfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUubGVuZ3RoICE9PSBwcmV2aW91c1ZhbHVlLmxlbmd0aCB8fFxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2FuZHlEYXRlID0gcHJldmlvdXNWYWx1ZVtpbmRleF07XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNDYW5keURhdGUgaW5zdGFuY2VvZiBDYW5keURhdGVcbiAgICAgICAgICAgICAgPyBwcmV2aW91c0NhbmR5RGF0ZS5pc1NhbWVEYXkodmFsdWUpXG4gICAgICAgICAgICAgIDogcHJldmlvdXNDYW5keURhdGUgIT09IHZhbHVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCAmJiByaWdodC5pc1NhbWVEYXkobGVmdCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuaGVhZFdlZWtEYXlzID0gdGhpcy5tYWtlSGVhZFdlZWtEYXlzKCk7XG4gICAgICB0aGlzLndlZWtSb3dzID0gdGhpcy5tYWtlV2Vla1Jvd3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgLy8gT25seSBjaGFuZ2UgZGF0ZSBub3QgY2hhbmdlIHRpbWVcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIC5zZXRZZWFyKHZhbHVlLmdldFllYXIoKSlcbiAgICAgIC5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKVxuICAgICAgLnNldERhdGUodmFsdWUuZ2V0RGF0ZSgpKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlSGVhZFdlZWtEYXlzKCk6IFdlZWtEYXlMYWJlbFtdIHtcbiAgICBjb25zdCB3ZWVrRGF5czogV2Vla0RheUxhYmVsW10gPSBbXTtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcbiAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgREFURV9DT0xfTlVNOyBjb2xJbmRleCsrKSB7XG4gICAgICBjb25zdCBkYXkgPSBzdGFydC5hZGREYXlzKGNvbEluZGV4KTtcbiAgICAgIHdlZWtEYXlzW2NvbEluZGV4XSA9IHtcbiAgICAgICAgc2hvcnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdFJyA6ICdkZGQnKSwgLy8gZWcuIFR1ZVxuICAgICAgICB2ZXJ5U2hvcnQ6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmkxOG5cbiAgICAgICAgLmdldExvY2FsZUlkKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmluZGV4T2YoJ3poJykgPT09IDBcbiAgICAgICAgPyAnRUVFRUUnXG4gICAgICAgIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXG4gICAgfVxuICAgIHJldHVybiAnZGQnO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcbiAgICBjb25zdCB3ZWVrUm93czogV2Vla1Jvd1tdID0gW107XG4gICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xuXG4gICAgZm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCBEQVRFX1JPV19OVU07IHdlZWsrKykge1xuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gZmlyc3REYXlPZk1vbnRoLmFkZERheXMod2VlayAqIDcpO1xuICAgICAgY29uc3Qgcm93OiBXZWVrUm93ID0ge1xuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGlzQ3VycmVudDogZmFsc2UsXG4gICAgICAgIGRhdGVDZWxsczogW10sXG4gICAgICAgIHllYXI6IHdlZWtTdGFydC5nZXRZZWFyKClcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDc7IGRheSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB3ZWVrU3RhcnQuYWRkRGF5cyhkYXkpO1xuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlXG4gICAgICAgICAgPyAnbG9uZ0RhdGUnXG4gICAgICAgICAgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlci5sYW5nLmRhdGVGb3JtYXQnLCAnWVlZWS1NTS1ERCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ2RkJyA6ICdERCcpO1xuXG4gICAgICAgIGNvbnN0IGNlbGw6IERhdGVDZWxsID0ge1xuICAgICAgICAgIHZhbHVlOiBkYXRlLm5hdGl2ZURhdGUsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBkYXRlQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlQ2VsbFJlbmRlciwgZGF0ZSksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxuICAgICAgICAgIGRhdGVGdWxsQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlRnVsbENlbGxSZW5kZXIsIGRhdGUpLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2RhdGUuZ2V0RGF0ZSgpfWAsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoZGF0ZSksXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmRheUhvdmVyLmVtaXQoZGF0ZSlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhcm93LndlZWtOdW0pIHtcbiAgICAgICAgICByb3cud2Vla051bSA9IHRoaXMuZGF0ZUhlbHBlci5nZXRJU09XZWVrKGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZS5pc1RvZGF5KCkpIHtcbiAgICAgICAgICBjZWxsLmlzVG9kYXkgPSB0cnVlO1xuICAgICAgICAgIHJvdy5pc0N1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZFZhbHVlKSAmJiBkYXRlLmlzU2FtZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpIHtcbiAgICAgICAgICAvLyBSYW5nZSBzZWxlY3Rpb25zXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcmFuZ2VWYWx1ZVswXTtcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xuICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0LmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCkge1xuICAgICAgICAgICAgICBpZiAoZW5kLmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlLmlzQWZ0ZXJEYXkoc3RhcnQpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRlLmlzU2FtZURheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShkYXRlLm5hdGl2ZURhdGUpKSB7XG4gICAgICAgICAgY2VsbC5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10b2RheWBdOiBjZWxsLmlzVG9kYXksXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LW1vbnRoLWNlbGxgXTogZGF0ZS5pc0JlZm9yZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogZGF0ZS5pc0FmdGVyTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRheWBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZC1jZWxsYF06IGNlbGwuaXNEaXNhYmxlZCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1lbmQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbi1yYW5nZS1jZWxsYF06ICEhY2VsbC5pc0luUmFuZ2VcbiAgICAgICAgfTtcblxuICAgICAgICByb3cuZGF0ZUNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG5cbiAgICAgIHJvdy5jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jdXJyZW50LXdlZWtgXTogcm93LmlzQ3VycmVudCxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmUtd2Vla2BdOiByb3cuaXNBY3RpdmVcbiAgICAgIH07XG5cbiAgICAgIHdlZWtSb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla1Jvd3M7XG4gIH1cblxuICB0cmFja0J5RGF0ZUZuKF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQ2VsbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2l0ZW0udGl0bGV9YDtcbiAgfVxuXG4gIHRyYWNrQnlXZWVrRm4oX2luZGV4OiBudW1iZXIsIGl0ZW06IFdlZWtSb3cpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtpdGVtLnllYXJ9LSR7aXRlbS53ZWVrTnVtfWA7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWVrRGF5TGFiZWwge1xuICBzaG9ydDogc3RyaW5nO1xuICB2ZXJ5U2hvcnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbCB7XG4gIHZhbHVlOiBEYXRlO1xuICBsYWJlbDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkYXRlQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XG4gIGRhdGVGdWxsQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWRFbmREYXRlPzogYm9vbGVhbjtcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XG4gIG9uQ2xpY2soZGF0ZTogQ2FuZHlEYXRlKTogdm9pZDtcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cbiAgaXNBY3RpdmU/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IGN1cnJlbnQgc2V0dGluZyBkYXRlIHN0YXlzIGluXG4gIHdlZWtOdW0/OiBudW1iZXI7XG4gIHllYXI/OiBudW1iZXI7XG4gIGNsYXNzTWFwPzogb2JqZWN0O1xuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XG59XG4iXX0=