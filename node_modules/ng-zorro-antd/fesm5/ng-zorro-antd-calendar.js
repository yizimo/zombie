import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, Output, Directive, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef, HostBinding, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzI18nService, DateHelperService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { isTemplateRef, isNonEmptyString, CandyDate, valueFunctionProp, warnDeprecation, toBoolean, InputBoolean } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: date-table-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateTableCellComponent = /** @class */ (function () {
    function DateTableCellComponent() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    DateTableCellComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[date-table-cell]',
                    exportAs: 'dateTableCell',
                    template: "<ng-container [ngSwitch]=\"prefixCls\">\n  <ng-container *ngSwitchCase=\"'ant-calendar'\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(cell.dateCellRender)\">\n        <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: { $implicit: cell.value }\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(cell.dateCellRender)\">\n        <span [innerHTML]=\"cell.dateCellRender\"></span>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\">\n          {{ cell.content }}\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n    <div class=\"ant-fullcalendar-date\">\n      <ng-container *ngIf=\"cell.dateFullCellRender else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"cell.dateFullCellRender; context: {$implicit: cell.value}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultCell>\n        <div class=\"{{ prefixCls }}-value\">{{ cell.content }}</div>\n        <div *ngIf=\"cell.dateCellRender\" class=\"{{ prefixCls }}-content\">\n          <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: {$implicit: cell.value}\"></ng-container>\n        </div>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>"
                }] }
    ];
    DateTableCellComponent.propDecorators = {
        prefixCls: [{ type: Input }],
        cell: [{ type: Input }]
    };
    return DateTableCellComponent;
}());
if (false) {
    /** @type {?} */
    DateTableCellComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableCellComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableCellComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableCellComponent.prototype.cell;
}

/**
 * @fileoverview added by tsickle
 * Generated from: date-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
function WeekDayLabel() { }
if (false) {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
function DateCell() { }
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
function WeekRow() { }
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

/**
 * @fileoverview added by tsickle
 * Generated from: month-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    /**
     * @param {?} _index
     * @return {?}
     */
    MonthTableComponent.prototype.trackYear = /**
     * @param {?} _index
     * @return {?}
     */
    function (_index) {
        return this.value ? this.value.getYear() : _index;
    };
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    function (_index, monthData) {
        return monthData.content;
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value.getMonth();
        /** @type {?} */
        var today = new CandyDate();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var month = this_1.value.setMonth(monthValue);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.chooseMonth(cell.month); }) // don't use monthValue here
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-month-panel-cell"] = true,
                    _a[this_1.prefixCls + "-month-panel-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-month-panel-selected-cell"] = monthValue === currentMonth,
                    _a[this_1.prefixCls + "-month-panel-current-cell"] = today.getYear() === this_1.value.getYear() && monthValue === today.getMonth(),
                    _a);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @private
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'month-table',
                    exportAs: 'monthTable',
                    template: "<table class=\"{{ prefixCls }}-month-panel-table\" cellSpacing=\"0\" role=\"grid\">\n  <tbody class=\"{{ prefixCls }}-month-panel-tbody\">\n    <tr *ngFor=\"let row of panelMonths; trackBy: trackYear\" role=\"row\">\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\" role=\"gridcell\" title=\"{{ monthCell.title }}\"\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\" [ngClass]=\"monthCell.classMap\">\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n            <div class=\"{{ prefixCls }}-month\">\n              <ng-container *ngIf=\"monthFullCellRender else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"monthFullCellRender; context: { $implicit: monthCell.value }\">\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{prefixCls}}-value\">{{ monthCell.content }}</div>\n                <div *ngIf=\"monthCellRender\" class=\"{{prefixCls}}-content\">\n                  <ng-container *ngTemplateOutlet=\"monthCellRender; context: { $implicit: monthCell.value }\">\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-calendar'\">\n            <a class=\"{{ prefixCls }}-month-panel-month\">{{ monthCell.content }}</a>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>"
                }] }
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        prefixCls: [{ type: Input }],
        monthCellRender: [{ type: Input }],
        monthFullCellRender: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());
if (false) {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.monthCellRender;
    /** @type {?} */
    MonthTableComponent.prototype.monthFullCellRender;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /**
     * @type {?}
     * @private
     */
    MonthTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
function PanelMonthData() { }
if (false) {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
    /** @type {?} */
    PanelMonthData.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar-cells.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzDateCellDirective = /** @class */ (function () {
    function NzDateCellDirective() {
    }
    NzDateCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzDateCell]',
                    exportAs: 'nzDateCell'
                },] }
    ];
    return NzDateCellDirective;
}());
var NzMonthCellDirective = /** @class */ (function () {
    function NzMonthCellDirective() {
    }
    NzMonthCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzMonthCell]',
                    exportAs: 'nzMonthCell'
                },] }
    ];
    return NzMonthCellDirective;
}());
var NzDateFullCellDirective = /** @class */ (function () {
    function NzDateFullCellDirective() {
    }
    NzDateFullCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzDateFullCell]',
                    exportAs: 'nzDateFullCell'
                },] }
    ];
    return NzDateFullCellDirective;
}());
var NzMonthFullCellDirective = /** @class */ (function () {
    function NzMonthFullCellDirective() {
    }
    NzMonthFullCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzMonthFullCell]',
                    exportAs: 'nzMonthFullCell'
                },] }
    ];
    return NzMonthFullCellDirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCalendarHeaderComponent = /** @class */ (function () {
    function NzCalendarHeaderComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.modeChange = new EventEmitter();
        this.activeDate = new CandyDate();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpYears = /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpMonths = /**
     * @private
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = this.activeDate.setMonth(i);
            /** @type {?} */
            var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    NzCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar-header',
                    exportAs: 'nzCalendarHeader',
                    template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\"> \n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n</nz-select>\n\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n</nz-select>\n\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n</nz-radio-group>\n",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    NzCalendarHeaderComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    NzCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        fullscreen: [{ type: Input }],
        modeChange: [{ type: Output }],
        activeDate: [{ type: Input }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return NzCalendarHeaderComponent;
}());
if (false) {
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.months;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.dateHelper;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(new CandyDate(value), false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzDateCell || this.nzDateCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzDateFullCell || this.nzDateFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMonthCell || this.nzMonthCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMonthFullCell || this.nzMonthFullCellChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzFullscreen;
        },
        /**
         * @deprecated use `[nzFullscreen]` instead.
         */
        set: /**
         * @deprecated use `[nzFullscreen]` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzCard' is going to be removed in 9.0.0. Please use 'nzFullscreen' instead.");
            this.nzFullscreen = !toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = this.activeDate.setYear(year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = this.activeDate.setMonth(month);
        this.updateDate(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(new CandyDate((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar',
                    exportAs: 'nzCalendar',
                    template: "<nz-calendar-header [fullscreen]=\"nzFullscreen\" [activeDate]=\"activeDate\" [(mode)]=\"nzMode\"\n  (modeChange)=\"onModeChange($event)\" (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</nz-calendar-header>\n\n<div class=\"{{prefixCls}} {{prefixCls}}-full\" [class.ant-fullcalendar-fullscreen]=\"nzFullscreen\">\n  <div class=\"{{prefixCls}}-calendar-body\">\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <date-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [dateCellRender]=\"dateCell\"\n    [dateFullCellRender]=\"dateFullCell\" (valueChange)=\"onDateSelect($event)\"></date-table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <month-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [monthCellRender]=\"monthCell\"\n    [monthFullCellRender]=\"monthFullCell\" (valueChange)=\"onDateSelect($event)\"></month-table>\n</ng-template>",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzCalendarComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzModeChange: [{ type: Output }],
        nzPanelChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzValue: [{ type: Input }],
        nzValueChange: [{ type: Output }],
        nzDateCell: [{ type: Input }],
        nzDateCellChild: [{ type: ContentChild, args: [NzDateCellDirective, { static: false, read: TemplateRef },] }],
        nzDateFullCell: [{ type: Input }],
        nzDateFullCellChild: [{ type: ContentChild, args: [NzDateFullCellDirective, { static: false, read: TemplateRef },] }],
        nzMonthCell: [{ type: Input }],
        nzMonthCellChild: [{ type: ContentChild, args: [NzMonthCellDirective, { static: false, read: TemplateRef },] }],
        nzMonthFullCell: [{ type: Input }],
        nzMonthFullCellChild: [{ type: ContentChild, args: [NzMonthFullCellDirective, { static: false, read: TemplateRef },] }],
        nzFullscreen: [{ type: Input }, { type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }],
        nzCard: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
if (false) {
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /**
     * Cannot use \@Input and \@ContentChild on one variable
     * because { static: false } will make \@Input property get delayed
     *
     * @type {?}
     */
    NzCalendarComponent.prototype.nzDateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzFullscreen;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        DateTableCellComponent,
                        MonthTableComponent
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        MonthTableComponent
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
                },] }
    ];
    return NzCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DateTableCellComponent, DateTableComponent, MonthTableComponent, NzCalendarComponent, NzCalendarHeaderComponent, NzCalendarModule, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective };
//# sourceMappingURL=ng-zorro-antd-calendar.js.map
