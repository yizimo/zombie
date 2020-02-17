/**
 * @fileoverview added by tsickle
 * Generated from: time/candy-date.ts
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
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, differenceInHours, differenceInMinutes, differenceInSeconds, isSameDay, isSameHour, isSameMinute, isSameMonth, isSameSecond, isSameYear, isToday, isValid, setYear, startOfMonth, startOfWeek } from 'date-fns';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { warn } from '../logger';
/**
 * @param {?} rangeValue
 * @return {?}
 */
export function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        var _a = tslib_1.__read(rangeValue, 2), start = _a[0], end = _a[1];
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                warn('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.calendarStart = 
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    };
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = 
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = 
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return new CandyDate(setYear(this.nativeDate, year));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = 
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    function (date, grain) {
        if (grain === void 0) { grain = 'day'; }
        /** @type {?} */
        var fn;
        switch (grain) {
            case 'year':
                fn = isSameYear;
                break;
            case 'month':
                fn = isSameMonth;
                break;
            case 'day':
                fn = isSameDay;
                break;
            case 'hour':
                fn = isSameHour;
                break;
            case 'minute':
                fn = isSameMinute;
                break;
            case 'second':
                fn = isSameSecond;
                break;
            default:
                fn = isSameDay;
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'second');
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    CandyDate.prototype.compare = /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    function (date, grain, isBefore) {
        if (grain === void 0) { grain = 'day'; }
        if (isBefore === void 0) { isBefore = true; }
        if (date === null) {
            return false;
        }
        /** @type {?} */
        var fn;
        switch (grain) {
            case 'year':
                fn = differenceInCalendarYears;
                break;
            case 'month':
                fn = differenceInCalendarMonths;
                break;
            case 'day':
                fn = differenceInCalendarDays;
                break;
            case 'hour':
                fn = differenceInHours;
                break;
            case 'minute':
                fn = differenceInMinutes;
                break;
            case 'second':
                fn = differenceInSeconds;
                break;
            default:
                fn = differenceInCalendarDays;
                break;
        }
        return isBefore
            ? fn(this.nativeDate, this.toNativeDate(date)) < 0
            : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second');
    };
    // TODO: isBefore
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterYear = 
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second', false);
    };
    // Equal to today accurate to "day"
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = 
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    function () {
        return isToday(this.nativeDate);
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isValid(this.nativeDate);
    };
    // tslint:disable-next-line: no-any
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = 
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFlBQVksRUFDWixXQUFXLEVBQ1osTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFNakMsTUFBTSxVQUFVLGNBQWMsQ0FBQyxVQUF1QjtJQUNwRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDdkIsSUFBQSxrQ0FBeUIsRUFBeEIsYUFBSyxFQUFFLFdBQWlCO1FBQy9CLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0U7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7O0FBT0Q7Ozs7Ozs7SUFFRSxnREFBZ0Q7SUFFaEQsbUJBQVksSUFBNkI7UUFDdkMsSUFBSSxJ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biAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzLFxuICBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzLFxuICBkaWZmZXJlbmNlSW5Ib3VycyxcbiAgZGlmZmVyZW5jZUluTWludXRlcyxcbiAgZGlmZmVyZW5jZUluU2Vjb25kcyxcbiAgaXNTYW1lRGF5LFxuICBpc1NhbWVIb3VyLFxuICBpc1NhbWVNaW51dGUsXG4gIGlzU2FtZU1vbnRoLFxuICBpc1NhbWVTZWNvbmQsXG4gIGlzU2FtZVllYXIsXG4gIGlzVG9kYXksXG4gIGlzVmFsaWQsXG4gIHNldFllYXIsXG4gIHN0YXJ0T2ZNb250aCxcbiAgc3RhcnRPZldlZWtcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9hZGRfbW9udGhzJztcbmltcG9ydCBhZGRZZWFycyBmcm9tICdkYXRlLWZucy9hZGRfeWVhcnMnO1xuaW1wb3J0IHNldERheSBmcm9tICdkYXRlLWZucy9zZXRfZGF5JztcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICd5ZWFyJyB8ICdtb250aCcgfCAnZGF5JyB8ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCc7XG5leHBvcnQgdHlwZSBDYW5keURhdGVUeXBlID0gQ2FuZHlEYXRlIHwgRGF0ZSB8IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0UmFuZ2VWYWx1ZShyYW5nZVZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocmFuZ2VWYWx1ZSkpIHtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZVZhbHVlO1xuICAgIHJldHVybiBzdGFydCAmJiBlbmQgJiYgc3RhcnQuaXNBZnRlclNlY29uZChlbmQpID8gW2VuZCwgc3RhcnRdIDogW3N0YXJ0LCBlbmRdO1xuICB9XG4gIHJldHVybiByYW5nZVZhbHVlO1xufVxuLyoqXG4gKiBXcmFwcGluZyBraW5kIEFQSXMgZm9yIGRhdGUgb3BlcmF0aW5nIGFuZCB1bmlmeVxuICogTk9URTogZXZlcnkgbmV3IEFQSSByZXR1cm4gbmV3IENhbmR5RGF0ZSBvYmplY3Qgd2l0aG91dCBzaWRlIGVmZmVjdHMgdG8gdGhlIGZvcm1lciBEYXRlIG9iamVjdFxuICogTk9URTogbW9zdCBBUElzIGFyZSBiYXNlZCBvbiBsb2NhbCB0aW1lIG90aGVyIHRoYW4gY3VzdG9taXplZCBsb2NhbGUgaWQgKHRoaXMgbmVlZHMgdG9iZSBzdXBwb3J0IGluIGZ1dHVyZSlcbiAqIFRPRE86IHN1cHBvcnQgZm9ybWF0KCkgYWdhaW5zdCB0byBhbmd1bGFyJ3MgY29yZSBBUElcbiAqL1xuZXhwb3J0IGNsYXNzIENhbmR5RGF0ZSBpbXBsZW1lbnRzIEluZGV4YWJsZU9iamVjdCB7XG4gIG5hdGl2ZURhdGU6IERhdGU7XG4gIC8vIGxvY2FsZTogc3RyaW5nOyAvLyBDdXN0b20gc3BlY2lmaWVkIGxvY2FsZSBJRFxuXG4gIGNvbnN0cnVjdG9yKGRhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHdhcm4oJ1RoZSBzdHJpbmcgdHlwZSBpcyBub3QgcmVjb21tZW5kZWQgZm9yIGRhdGUtcGlja2VyLCB1c2UgXCJEYXRlXCIgdHlwZScpO1xuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IGRhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIChcIkRhdGVcIiBpcyBub3cgcmVjb21tZW5kZWQpJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gIC8vICAgcmV0dXJuIHRoaXMubG9jYWxlO1xuICAvLyB9XG5cbiAgLy8gc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQ2FuZHlEYXRlIHtcbiAgLy8gICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgLy8gICByZXR1cm4gdGhpcztcbiAgLy8gfVxuXG4gIGNhbGVuZGFyU3RhcnQob3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBudW1iZXIgfCB1bmRlZmluZWQgfSk6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSksIG9wdGlvbnMpKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IE5hdGl2ZSBzaG9ydGN1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNb250aCgpO1xuICB9XG5cbiAgZ2V0RGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXkoKTtcbiAgfVxuXG4gIGdldFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcbiAgfVxuXG4gIGdldERhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldEhvdXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgZ2V0TWludXRlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xuICB9XG5cbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgZ2V0TWlsbGlzZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjbG9uZSgpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSkpO1xuICB9XG5cbiAgc2V0SG1zKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICBkYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgfVxuXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRZZWFyKHRoaXMubmF0aXZlRGF0ZSwgeWVhcikpO1xuICB9XG5cbiAgYWRkWWVhcnMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XG4gIH1cblxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXG4gIC8vIE5PVEU6IERvbid0IHVzZSB0aGUgbmF0aXZlIEFQSSBmb3IgbW9udGggbWFuaXB1bGF0aW9uIGFzIGl0IG5vdCByZXN0cmljdCB0aGUgZGF0ZSB3aGVuIGl0IG92ZXJmbG93cywgZWcuIChuZXcgRGF0ZSgnMjAxOC03LTMxJykpLnNldE1vbnRoKDEpIHdpbGwgYmUgZGF0ZSBvZiAyMDE4LTMtMDMgaW5zdGVhZCBvZiAyMDE4LTItMjhcbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xuICB9XG5cbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRNb250aHModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcbiAgfVxuXG4gIHNldERheShkYXk6IG51bWJlciwgb3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBudW1iZXIgfSk6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0RGF5KHRoaXMubmF0aXZlRGF0ZSwgZGF5LCBvcHRpb25zKSk7XG4gIH1cblxuICBzZXREYXRlKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICBkYXRlLnNldERhdGUoYW1vdW50KTtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgfVxuXG4gIGFkZERheXMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xuICB9XG5cbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5Jyk6IGJvb2xlYW4ge1xuICAgIGxldCBmbjtcbiAgICBzd2l0Y2ggKGdyYWluKSB7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgZm4gPSBpc1NhbWVZZWFyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgZm4gPSBpc1NhbWVNb250aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICBmbiA9IGlzU2FtZURheTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgZm4gPSBpc1NhbWVIb3VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgIGZuID0gaXNTYW1lTWludXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGZuID0gaXNTYW1lU2Vjb25kO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZuID0gaXNTYW1lRGF5O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpO1xuICB9XG5cbiAgaXNTYW1lWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICd5ZWFyJyk7XG4gIH1cblxuICBpc1NhbWVNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdtb250aCcpO1xuICB9XG5cbiAgaXNTYW1lRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ2RheScpO1xuICB9XG5cbiAgaXNTYW1lSG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdob3VyJyk7XG4gIH1cblxuICBpc1NhbWVNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbWludXRlJyk7XG4gIH1cblxuICBpc1NhbWVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnc2Vjb25kJyk7XG4gIH1cblxuICBjb21wYXJlKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5JywgaXNCZWZvcmU6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XG4gICAgaWYgKGRhdGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGZuO1xuICAgIHN3aXRjaCAoZ3JhaW4pIHtcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkhvdXJzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluTWludXRlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJblNlY29uZHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNCZWZvcmVcbiAgICAgID8gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPCAwXG4gICAgICA6IGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpID4gMDtcbiAgfVxuXG4gIGlzQmVmb3JlWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAneWVhcicpO1xuICB9XG5cbiAgaXNCZWZvcmVNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnKTtcbiAgfVxuXG4gIGlzQmVmb3JlRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdkYXknKTtcbiAgfVxuXG4gIGlzQmVmb3JlSG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnaG91cicpO1xuICB9XG5cbiAgaXNCZWZvcmVNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScpO1xuICB9XG5cbiAgaXNCZWZvcmVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3NlY29uZCcpO1xuICB9XG5cbiAgLy8gVE9ETzogaXNCZWZvcmVcbiAgaXNBZnRlclllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInLCBmYWxzZSk7XG4gIH1cblxuICBpc0FmdGVyTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21vbnRoJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlckRheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnZGF5JywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlckhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInLCBmYWxzZSk7XG4gIH1cblxuICBpc0FmdGVyTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtaW51dGUnLCBmYWxzZSk7XG4gIH1cblxuICBpc0FmdGVyU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdzZWNvbmQnLCBmYWxzZSk7XG4gIH1cblxuICAvLyBFcXVhbCB0byB0b2RheSBhY2N1cmF0ZSB0byBcImRheVwiXG4gIGlzVG9kYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzVG9kYXkodGhpcy5uYXRpdmVEYXRlKTtcbiAgfVxuXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzVmFsaWQodGhpcy5uYXRpdmVEYXRlKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IGFueSk6IERhdGUge1xuICAgIHJldHVybiBkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZTtcbiAgfVxufVxuIl19