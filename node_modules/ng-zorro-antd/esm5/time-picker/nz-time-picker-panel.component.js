/**
 * @fileoverview added by tsickle
 * Generated from: nz-time-picker-panel.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, reqAnimFrame, InputBoolean, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) { return (i + start) * step; }));
}
var NzTimePickerPanelComponent = /** @class */ (function () {
    function NzTimePickerPanelComponent(element, updateCls, cdr) {
        this.element = element;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.opened = false;
        this.nzDefaultOpenValue = new Date();
    }
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
                this.hourEnabled = charSet.has('H') || charSet.has('h');
                this.minuteEnabled = charSet.has('m');
                this.secondEnabled = charSet.has('s');
                if (this.hourEnabled) {
                    this.enabledColumns++;
                }
                if (this.minuteEnabled) {
                    this.enabledColumns++;
                }
                if (this.secondEnabled) {
                    this.enabledColumns++;
                }
                if (this.nzUse12Hours) {
                    this.build12Hours();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hourRanges = 24;
        /** @type {?} */
        var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        var startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i >= 12; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i > 12 ? i - 12 : i); }));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i < 12 || i === 24; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i === 24 || i === 0 ? 12 : i); }));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            var temp = tslib_1.__spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && _this.nzDisabledMinutes((/** @type {?} */ (_this.time.hours))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && _this.nzDisabledSeconds((/** @type {?} */ (_this.time.hours)), (/** @type {?} */ (_this.time.minutes))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.build12Hours = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isUpperForamt = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperForamt ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperForamt ? 'PM' : 'pm'
            }
        ];
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.select12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.selected12Hours = value.value;
        if (this._disabledHours) {
            this.buildHours();
        }
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
        this.scrollToSelected(this.use12HoursListElement.nativeElement, value.index, 120, '12-hour');
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }));
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.changed = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.touched = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.initPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.viewHours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, (/** @type {?} */ (_this.time.viewHours)), 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, (/** @type {?} */ (_this.time.minutes)), 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, (/** @type {?} */ (_this.time.seconds)), 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
            if (_this.nzUse12Hours && _this.use12HoursListElement) {
                /** @type {?} */
                var selectedHours = isNotNil(_this.time.selected12Hours)
                    ? _this.time.selected12Hours
                    : _this.time.default12Hours;
                /** @type {?} */
                var index = selectedHours === 'AM' ? 0 : 1;
                _this.scrollToSelected(_this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.changed();
            _this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, opened = changes.opened, nzDefaultOpenValue = changes.nzDefaultOpenValue;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (opened && opened.currentValue) {
            this.initPosition();
            this.selectInputRange();
        }
        if (nzDefaultOpenValue) {
            /** @type {?} */
            var value = nzDefaultOpenValue.currentValue;
            if (isNotNil(value)) {
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnChange = /**
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
    NzTimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    NzTimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker-panel',
                    exportAs: 'nzTimePickerPanel',
                    template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\n  <div\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\n    <div class=\"{{ prefixCls }}-input-wrap\">\n      <input\n        type=\"text\"\n        class=\"{{ prefixCls }}-input\"\n        [placeholder]=\"nzPlaceHolder\"\n        [nzTime]=\"format\"\n        [(ngModel)]=\"time.value\"\n        (blur)=\"time.changed()\">\n    </div>\n    <div class=\"{{ prefixCls }}-combobox\">\n      <div\n        *ngIf=\"hourEnabled\"\n        #hourListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let hour of hourRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n              (click)=\"selectHour(hour)\"\n              class=\"\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ hour.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"minuteEnabled\"\n        #minuteListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let minute of minuteRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n              (click)=\"selectMinute(minute)\"\n              class=\"\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ minute.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"secondEnabled\"\n        #secondListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let second of secondRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n              (click)=\"selectSecond(second)\"\n              class=\"\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ second.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"nzUse12Hours\"\n        #use12HoursListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let range of use12HoursRange \">\n            <li\n              *ngIf=\"!nzHideDisabledOptions\"\n              (click)=\"select12Hours(range)\"\n              class=\"\n                {{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\n              \"\n            >\n              {{ range.value }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n    </div>\n  </div>\n</div>",
                    providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: UpdateCls },
        { type: ChangeDetectorRef }
    ]; };
    NzTimePickerPanelComponent.propDecorators = {
        nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective, { static: false },] }],
        hourListElement: [{ type: ViewChild, args: ['hourListElement', { static: false },] }],
        minuteListElement: [{ type: ViewChild, args: ['minuteListElement', { static: false },] }],
        secondListElement: [{ type: ViewChild, args: ['secondListElement', { static: false },] }],
        use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement', { static: false },] }],
        nzInDatePicker: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzHideDisabledOptions: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        opened: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzAllowEmpty: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
    return NzTimePickerPanelComponent;
}());
export { NzTimePickerPanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.prefixCls;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.opened;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzDefaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.updateCls;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUUzQyxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBZ0IsRUFBRSxLQUFpQjtJQUFuQyxxQkFBQSxFQUFBLFFBQWdCO0lBQUUsc0JBQUEsRUFBQSxTQUFpQjtJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFs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biAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGVidWdFbGVtZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNOb3ROaWwsIHJlcUFuaW1GcmFtZSwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgYXMgVXBkYXRlQ2xzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xuXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIHN0YXJ0OiBudW1iZXIgPSAwKTogbnVtYmVyW10ge1xuICByZXR1cm4gbmV3IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzdGVwKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IChpICsgc3RhcnQpICogc3RlcCk7XG59XG5cbmV4cG9ydCB0eXBlIE56VGltZVBpY2tlclVuaXQgPSAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJzEyLWhvdXInO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbnotdGltZS1waWNrZXItcGFuZWwnLFxuICBleHBvcnRBczogJ256VGltZVBpY2tlclBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbVXBkYXRlQ2xzLCB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9uekhvdXJTdGVwID0gMTtcbiAgcHJpdmF0ZSBfbnpNaW51dGVTdGVwID0gMTtcbiAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwID0gMTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25Ub3VjaDogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gJ0hIOm1tOnNzJztcbiAgcHJpdmF0ZSBfZGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XG4gIHByaXZhdGUgX2Rpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XG4gIHByaXZhdGUgX2Rpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXRpbWUtcGlja2VyLXBhbmVsJztcbiAgdGltZSA9IG5ldyBUaW1lSG9sZGVyKCk7XG4gIGhvdXJFbmFibGVkID0gdHJ1ZTtcbiAgbWludXRlRW5hYmxlZCA9IHRydWU7XG4gIHNlY29uZEVuYWJsZWQgPSB0cnVlO1xuICBlbmFibGVkQ29sdW1ucyA9IDM7XG4gIGhvdXJSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBtaW51dGVSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBzZWNvbmRSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICB1c2UxMkhvdXJzUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+O1xuXG4gIEBWaWV3Q2hpbGQoTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIG56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU6IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ2hvdXJMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBob3VyTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnbWludXRlTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWludXRlTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnc2Vjb25kTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2Vjb25kTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgndXNlMTJIb3Vyc0xpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHVzZTEySG91cnNMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xuXG4gIEBJbnB1dCgpIG56SW5EYXRlUGlja2VyOiBib29sZWFuID0gZmFsc2U7IC8vIElmIGluc2lkZSBhIGRhdGUtcGlja2VyLCBtb3JlIGRpZmYgd29ya3MgbmVlZCB0byBiZSBkb25lXG4gIEBJbnB1dCgpIG56QWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbGVhclRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpVc2UxMkhvdXJzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dFbXB0eTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkSG91cnModmFsdWU6ICgpID0+IG51bWJlcltdKSB7XG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6ICgpID0+IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRIb3VycztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkTWludXRlcyh2YWx1ZTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRNaW51dGVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRTZWNvbmRzKHZhbHVlOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZFNlY29uZHMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkU2Vjb25kcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucyA9IDA7XG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XG4gICAgICB0aGlzLmhvdXJFbmFibGVkID0gY2hhclNldC5oYXMoJ0gnKSB8fCBjaGFyU2V0LmhhcygnaCcpO1xuICAgICAgdGhpcy5taW51dGVFbmFibGVkID0gY2hhclNldC5oYXMoJ20nKTtcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5taW51dGVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlY29uZEVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzKSB7XG4gICAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIb3VyU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbnpIb3VyU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56SG91clN0ZXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnpIb3VyU3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1pbnV0ZVN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256TWludXRlU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpNaW51dGVTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256TWludXRlU3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlY29uZFN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256U2Vjb25kU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTZWNvbmRTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256U2Vjb25kU3RlcDtcbiAgfVxuXG4gIHNlbGVjdElucHV0UmFuZ2UoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZS5zZXRSYW5nZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRIb3VycygpOiB2b2lkIHtcbiAgICBsZXQgaG91clJhbmdlcyA9IDI0O1xuICAgIGxldCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnMgJiYgdGhpcy5uekRpc2FibGVkSG91cnMoKTtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzKSB7XG4gICAgICBob3VyUmFuZ2VzID0gMTI7XG4gICAgICBpZiAoZGlzYWJsZWRIb3Vycykge1xuICAgICAgICBpZiAodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJykge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpbHRlciBhbmQgdHJhbnNmb3JtIGhvdXJzIHdoaWNoIGdyZWF0ZXIgb3IgZXF1YWwgdG8gMTJcbiAgICAgICAgICAgKiBbMCwgMSwgMiwgLi4uLCAxMiwgMTMsIDE0LCAxNSwgLi4uLCAyM10gPT4gWzEyLCAxLCAyLCAzLCAuLi4sIDExXVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPj0gMTIpLm1hcChpID0+IChpID4gMTIgPyBpIC0gMTIgOiBpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggbGVzcyB0aGFuIDEyXG4gICAgICAgICAgICogWzAsIDEsIDIsLi4uLCAxMiwgMTMsIDE0LCAxNSwgLi4uMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRIb3Vycy5maWx0ZXIoaSA9PiBpIDwgMTIgfHwgaSA9PT0gMjQpLm1hcChpID0+IChpID09PSAyNCB8fCBpID09PSAwID8gMTIgOiBpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXJ0SW5kZXggPSAxO1xuICAgIH1cbiAgICB0aGlzLmhvdXJSYW5nZSA9IG1ha2VSYW5nZShob3VyUmFuZ2VzLCB0aGlzLm56SG91clN0ZXAsIHN0YXJ0SW5kZXgpLm1hcChyID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiByLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycy5pbmRleE9mKHIpICE9PSAtMVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy5ob3VyUmFuZ2VbdGhpcy5ob3VyUmFuZ2UubGVuZ3RoIC0gMV0uaW5kZXggPT09IDEyKSB7XG4gICAgICBjb25zdCB0ZW1wID0gWy4uLnRoaXMuaG91clJhbmdlXTtcbiAgICAgIHRlbXAudW5zaGlmdCh0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xuICAgICAgdGVtcC5zcGxpY2UodGVtcC5sZW5ndGggLSAxLCAxKTtcbiAgICAgIHRoaXMuaG91clJhbmdlID0gdGVtcDtcbiAgICB9XG4gIH1cblxuICBidWlsZE1pbnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5taW51dGVSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uek1pbnV0ZVN0ZXApLm1hcChyID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiByLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpLmluZGV4T2YocikgIT09IC0xXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRTZWNvbmRzKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vjb25kUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpTZWNvbmRTdGVwKS5tYXAociA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogcixcbiAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiB0aGlzLm56RGlzYWJsZWRTZWNvbmRzKHRoaXMudGltZS5ob3VycyEsIHRoaXMudGltZS5taW51dGVzISkuaW5kZXhPZihyKSAhPT0gLTFcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBidWlsZDEySG91cnMoKTogdm9pZCB7XG4gICAgY29uc3QgaXNVcHBlckZvcmFtdCA9IHRoaXMuX2Zvcm1hdC5pbmNsdWRlcygnQScpO1xuICAgIHRoaXMudXNlMTJIb3Vyc1JhbmdlID0gW1xuICAgICAge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JhbXQgPyAnQU0nIDogJ2FtJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ1BNJyA6ICdwbSdcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgYnVpbGRUaW1lcygpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgdGhpcy5idWlsZDEySG91cnMoKTtcbiAgfVxuXG4gIHNlbGVjdEhvdXIoaG91cjogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldEhvdXJzKGhvdXIuaW5kZXgsIGhvdXIuZGlzYWJsZWQpO1xuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBob3VyLmluZGV4LCAxMjAsICdob3VyJyk7XG5cbiAgICBpZiAodGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzIHx8IHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0TWludXRlcyhtaW51dGUuaW5kZXgsIG1pbnV0ZS5kaXNhYmxlZCk7XG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWludXRlLmluZGV4LCAxMjAsICdtaW51dGUnKTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRTZWNvbmRzKHNlY29uZC5pbmRleCwgc2Vjb25kLmRpc2FibGVkKTtcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBzZWNvbmQuaW5kZXgsIDEyMCwgJ3NlY29uZCcpO1xuICB9XG5cbiAgc2VsZWN0MTJIb3Vycyh2YWx1ZTogeyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID0gdmFsdWUudmFsdWU7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSG91cnMpIHtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdmFsdWUuaW5kZXgsIDEyMCwgJzEyLWhvdXInKTtcbiAgfVxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMCwgdW5pdDogTnpUaW1lUGlja2VyVW5pdCk6IHZvaWQge1xuICAgIGNvbnN0IHRyYW5zSW5kZXggPSB0aGlzLnRyYW5zbGF0ZUluZGV4KGluZGV4LCB1bml0KTtcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RyYW5zSW5kZXhdIHx8XG4gICAgICBpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblswXSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxUbyhpbnN0YW5jZSwgY3VycmVudE9wdGlvbi5vZmZzZXRUb3AsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZUluZGV4KGluZGV4OiBudW1iZXIsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiBudW1iZXIge1xuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSB0aGlzLm56RGlzYWJsZWRIb3VycyAmJiB0aGlzLm56RGlzYWJsZWRIb3VycygpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkSG91cnMsIHRoaXMuaG91clJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSB0aGlzLm56RGlzYWJsZWRNaW51dGVzICYmIHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzISk7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRNaW51dGVzLCB0aGlzLm1pbnV0ZVJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgICAvLyBzZWNvbmRcbiAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kcyA9IHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkU2Vjb25kcywgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIDEyLWhvdXJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChbXSwgdGhpcy51c2UxMkhvdXJzUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHBlclRpY2sgPSAoZGlmZmVyZW5jZSAvIGR1cmF0aW9uKSAqIDEwO1xuXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xuICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggJiYgdGhpcy5uekhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluZGV4IC1cbiAgICAgICAgYXJyYXkucmVkdWNlKChwcmUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZSArICh2YWx1ZSA8IGluZGV4ID8gMSA6IDApO1xuICAgICAgICB9LCAwKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB0b3VjaGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uVG91Y2gpIHtcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNvbHVtbi0ke3RoaXMuZW5hYmxlZENvbHVtbnN9YF06IHRoaXMubnpJbkRhdGVQaWNrZXIgPyBmYWxzZSA6IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5hcnJvd2BdOiB0aGlzLmVuYWJsZWRDb2x1bW5zIDwgMyxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUxlZnRgXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaXNTZWxlY3RlZEhvdXIoaG91cjogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS52aWV3SG91cnMgfHxcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnZpZXdIb3VycykgJiYgaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMpXG4gICAgKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUubWludXRlcyB8fCAoIWlzTm90TmlsKHRoaXMudGltZS5taW51dGVzKSAmJiBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0TWludXRlcylcbiAgICApO1xuICB9XG5cbiAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5zZWNvbmRzIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLnNlY29uZHMpICYmIHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRTZWNvbmRzKVxuICAgICk7XG4gIH1cblxuICBpc1NlbGVjdGVkMTJIb3Vycyh2YWx1ZTogeyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyB8fFxuICAgICAgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzKSAmJiB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnMpXG4gICAgKTtcbiAgfVxuXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkICYmIHRoaXMuaG91ckxpc3RFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUudmlld0hvdXJzISwgMCwgJ2hvdXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMsIDAsICdob3VyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLm1pbnV0ZXMhLCAwLCAnbWludXRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzLCAwLCAnbWludXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlY29uZEVuYWJsZWQgJiYgdGhpcy5zZWNvbmRMaXN0RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLnNlY29uZHMpKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCAwLCAnc2Vjb25kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRTZWNvbmRzLCAwLCAnc2Vjb25kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3VycyAmJiB0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycylcbiAgICAgICAgICA/IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnNcbiAgICAgICAgICA6IHRoaXMudGltZS5kZWZhdWx0MTJIb3VycztcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEhvdXJzID09PSAnQU0nID8gMCA6IDE7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBpbmRleCwgMCwgJzEyLWhvdXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscywgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56SW5EYXRlUGlja2VyKSB7XG4gICAgICB0aGlzLnByZWZpeENscyA9ICdhbnQtY2FsZW5kYXItdGltZS1waWNrZXInO1xuICAgIH1cblxuICAgIHRoaXMudGltZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgICAgdGhpcy50b3VjaGVkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIG9wZW5lZCwgbnpEZWZhdWx0T3BlblZhbHVlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelVzZTEySG91cnMgJiYgIW56VXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgfVxuICAgIGlmIChvcGVuZWQgJiYgb3BlbmVkLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc2VsZWN0SW5wdXRSYW5nZSgpO1xuICAgIH1cbiAgICBpZiAobnpEZWZhdWx0T3BlblZhbHVlKSB7XG4gICAgICBjb25zdCB2YWx1ZTogRGF0ZSA9IG56RGVmYXVsdE9wZW5WYWx1ZS5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICAgIHRoaXMudGltZS5zZXREZWZhdWx0T3BlblZhbHVlKHRoaXMubnpEZWZhdWx0T3BlblZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldFZhbHVlKHZhbHVlLCB0aGlzLm56VXNlMTJIb3Vycyk7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG5cbiAgICAvLyBNYXJrIHRoaXMgY29tcG9uZW50IHRvIGJlIGNoZWNrZWQgbWFudWFsbHkgd2l0aCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGNoYW5naW5nIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2KVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxufVxuIl19