/**
 * @fileoverview added by tsickle
 * Generated from: time/candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const [start, end] = rangeValue;
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
export class CandyDate {
    // locale: string; // Custom specified locale ID
    /**
     * @param {?=} date
     */
    constructor(date) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    calendarStart(options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        return new CandyDate(setYear(this.nativeDate, year));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    isSame(date, grain = 'day') {
        /** @type {?} */
        let fn;
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameYear(date) {
        return this.isSame(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMonth(date) {
        return this.isSame(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameDay(date) {
        return this.isSame(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameHour(date) {
        return this.isSame(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMinute(date) {
        return this.isSame(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameSecond(date) {
        return this.isSame(date, 'second');
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    compare(date, grain = 'day', isBefore = true) {
        if (date === null) {
            return false;
        }
        /** @type {?} */
        let fn;
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeYear(date) {
        return this.compare(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMonth(date) {
        return this.compare(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeDay(date) {
        return this.compare(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeHour(date) {
        return this.compare(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMinute(date) {
        return this.compare(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeSecond(date) {
        return this.compare(date, 'second');
    }
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterYear(date) {
        return this.compare(date, 'year', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMonth(date) {
        return this.compare(date, 'month', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterDay(date) {
        return this.compare(date, 'day', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterHour(date) {
        return this.compare(date, 'hour', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMinute(date) {
        return this.compare(date, 'minute', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterSecond(date) {
        return this.compare(date, 'second', false);
    }
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    isToday() {
        return isToday(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isValid() {
        return isValid(this.nativeDate);
    }
    // tslint:disable-next-line: no-any
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toNativeDate(date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRpbWUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsWUFBWSxFQUNaLFdBQVcsRUFDWixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQU1qQyxNQUFNLFVBQVUsY0FBYyxDQUFDLFVBQXVCO0lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtjQUN2QixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVO1FBQy9CLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0U7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDOzs7Ozs7O0FBT0QsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBSXBCLFlBQVksSUFBNkI7UUFDdkMsSUFBSSxJ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Q2xDLENBQUM7Ozs7Ozs7SUFHTyxZQUFZLENBQUMsSUFBUztRQUM1QixPQUFPLElBQUksWUFBWSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7OztJQXhRQywrQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLFxuICBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyxcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyxcbiAgZGlmZmVyZW5jZUluSG91cnMsXG4gIGRpZmZlcmVuY2VJbk1pbnV0ZXMsXG4gIGRpZmZlcmVuY2VJblNlY29uZHMsXG4gIGlzU2FtZURheSxcbiAgaXNTYW1lSG91cixcbiAgaXNTYW1lTWludXRlLFxuICBpc1NhbWVNb250aCxcbiAgaXNTYW1lU2Vjb25kLFxuICBpc1NhbWVZZWFyLFxuICBpc1RvZGF5LFxuICBpc1ZhbGlkLFxuICBzZXRZZWFyLFxuICBzdGFydE9mTW9udGgsXG4gIHN0YXJ0T2ZXZWVrXG59IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocyc7XG5pbXBvcnQgYWRkWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkX3llYXJzJztcbmltcG9ydCBzZXREYXkgZnJvbSAnZGF0ZS1mbnMvc2V0X2RheSc7XG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnO1xuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlVHlwZSA9IENhbmR5RGF0ZSB8IERhdGUgfCBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJhbmdlVmFsdWUocmFuZ2VWYWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJhbmdlVmFsdWUpKSB7XG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2VWYWx1ZTtcbiAgICByZXR1cm4gc3RhcnQgJiYgZW5kICYmIHN0YXJ0LmlzQWZ0ZXJTZWNvbmQoZW5kKSA/IFtlbmQsIHN0YXJ0XSA6IFtzdGFydCwgZW5kXTtcbiAgfVxuICByZXR1cm4gcmFuZ2VWYWx1ZTtcbn1cbi8qKlxuICogV3JhcHBpbmcga2luZCBBUElzIGZvciBkYXRlIG9wZXJhdGluZyBhbmQgdW5pZnlcbiAqIE5PVEU6IGV2ZXJ5IG5ldyBBUEkgcmV0dXJuIG5ldyBDYW5keURhdGUgb2JqZWN0IHdpdGhvdXQgc2lkZSBlZmZlY3RzIHRvIHRoZSBmb3JtZXIgRGF0ZSBvYmplY3RcbiAqIE5PVEU6IG1vc3QgQVBJcyBhcmUgYmFzZWQgb24gbG9jYWwgdGltZSBvdGhlciB0aGFuIGN1c3RvbWl6ZWQgbG9jYWxlIGlkICh0aGlzIG5lZWRzIHRvYmUgc3VwcG9ydCBpbiBmdXR1cmUpXG4gKiBUT0RPOiBzdXBwb3J0IGZvcm1hdCgpIGFnYWluc3QgdG8gYW5ndWxhcidzIGNvcmUgQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBDYW5keURhdGUgaW1wbGVtZW50cyBJbmRleGFibGVPYmplY3Qge1xuICBuYXRpdmVEYXRlOiBEYXRlO1xuICAvLyBsb2NhbGU6IHN0cmluZzsgLy8gQ3VzdG9tIHNwZWNpZmllZCBsb2NhbGUgSURcblxuICBjb25zdHJ1Y3RvcihkYXRlPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gZGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICB3YXJuKCdUaGUgc3RyaW5nIHR5cGUgaXMgbm90IHJlY29tbWVuZGVkIGZvciBkYXRlLXBpY2tlciwgdXNlIFwiRGF0ZVwiIHR5cGUnKTtcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBkYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCAoXCJEYXRlXCIgaXMgbm93IHJlY29tbWVuZGVkKScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldExvY2FsZSgpOiBzdHJpbmcge1xuICAvLyAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgLy8gfVxuXG4gIC8vIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IENhbmR5RGF0ZSB7XG4gIC8vICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cblxuICBjYWxlbmRhclN0YXJ0KG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIHwgdW5kZWZpbmVkIH0pOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHN0YXJ0T2ZXZWVrKHN0YXJ0T2ZNb250aCh0aGlzLm5hdGl2ZURhdGUpLCBvcHRpb25zKSk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBOYXRpdmUgc2hvcnRjdXRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBnZXRNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldERheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XG4gIH1cblxuICBnZXRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCk7XG4gIH1cblxuICBnZXREYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXRlKCk7XG4gIH1cblxuICBnZXRIb3VycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcbiAgfVxuXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbnV0ZXMoKTtcbiAgfVxuXG4gIGdldFNlY29uZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIGdldE1pbGxpc2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBOZXcgaW1wbGVtZW50aW5nIEFQSXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY2xvbmUoKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpKTtcbiAgfVxuXG4gIHNldEhtcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyLCBzZWNvbmQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XG4gICAgZGF0ZS5zZXRIb3Vycyhob3VyLCBtaW51dGUsIHNlY29uZCk7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gIH1cblxuICBzZXRZZWFyKHllYXI6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLm5hdGl2ZURhdGUsIHllYXIpKTtcbiAgfVxuXG4gIGFkZFllYXJzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRZZWFycyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xuICB9XG5cbiAgLy8gTk9URTogbW9udGggc3RhcnRzIGZyb20gMFxuICAvLyBOT1RFOiBEb24ndCB1c2UgdGhlIG5hdGl2ZSBBUEkgZm9yIG1vbnRoIG1hbmlwdWxhdGlvbiBhcyBpdCBub3QgcmVzdHJpY3QgdGhlIGRhdGUgd2hlbiBpdCBvdmVyZmxvd3MsIGVnLiAobmV3IERhdGUoJzIwMTgtNy0zMScpKS5zZXRNb250aCgxKSB3aWxsIGJlIGRhdGUgb2YgMjAxOC0zLTAzIGluc3RlYWQgb2YgMjAxOC0yLTI4XG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldE1vbnRoKHRoaXMubmF0aXZlRGF0ZSwgbW9udGgpKTtcbiAgfVxuXG4gIGFkZE1vbnRocyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkTW9udGhzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XG4gIH1cblxuICBzZXREYXkoZGF5OiBudW1iZXIsIG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIH0pOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldERheSh0aGlzLm5hdGl2ZURhdGUsIGRheSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc2V0RGF0ZShhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XG4gICAgZGF0ZS5zZXREYXRlKGFtb3VudCk7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gIH1cblxuICBhZGREYXlzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgfVxuXG4gIGlzU2FtZShkYXRlOiBDYW5keURhdGVUeXBlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ2RheScpOiBib29sZWFuIHtcbiAgICBsZXQgZm47XG4gICAgc3dpdGNoIChncmFpbikge1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIGZuID0gaXNTYW1lWWVhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIGZuID0gaXNTYW1lTW9udGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgZm4gPSBpc1NhbWVEYXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgIGZuID0gaXNTYW1lSG91cjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBmbiA9IGlzU2FtZU1pbnV0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICBmbiA9IGlzU2FtZVNlY29uZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmbiA9IGlzU2FtZURheTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKTtcbiAgfVxuXG4gIGlzU2FtZVllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAneWVhcicpO1xuICB9XG5cbiAgaXNTYW1lTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbW9udGgnKTtcbiAgfVxuXG4gIGlzU2FtZURheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdkYXknKTtcbiAgfVxuXG4gIGlzU2FtZUhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnaG91cicpO1xuICB9XG5cbiAgaXNTYW1lTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ21pbnV0ZScpO1xuICB9XG5cbiAgaXNTYW1lU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ3NlY29uZCcpO1xuICB9XG5cbiAgY29tcGFyZShkYXRlOiBDYW5keURhdGVUeXBlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ2RheScsIGlzQmVmb3JlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChkYXRlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmbjtcbiAgICBzd2l0Y2ggKGdyYWluKSB7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5Ib3VycztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbk1pbnV0ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5TZWNvbmRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzQmVmb3JlXG4gICAgICA/IGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpIDwgMFxuICAgICAgOiBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKSA+IDA7XG4gIH1cblxuICBpc0JlZm9yZVllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInKTtcbiAgfVxuXG4gIGlzQmVmb3JlTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21vbnRoJyk7XG4gIH1cblxuICBpc0JlZm9yZURheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnZGF5Jyk7XG4gIH1cblxuICBpc0JlZm9yZUhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInKTtcbiAgfVxuXG4gIGlzQmVmb3JlTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtaW51dGUnKTtcbiAgfVxuXG4gIGlzQmVmb3JlU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdzZWNvbmQnKTtcbiAgfVxuXG4gIC8vIFRPRE86IGlzQmVmb3JlXG4gIGlzQWZ0ZXJZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICd5ZWFyJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlck1vbnRoKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtb250aCcsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJEYXkoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdob3VyJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlck1pbnV0ZShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbWludXRlJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlclNlY29uZChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJywgZmFsc2UpO1xuICB9XG5cbiAgLy8gRXF1YWwgdG8gdG9kYXkgYWNjdXJhdGUgdG8gXCJkYXlcIlxuICBpc1RvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1RvZGF5KHRoaXMubmF0aXZlRGF0ZSk7XG4gIH1cblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMubmF0aXZlRGF0ZSk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxuICBwcml2YXRlIHRvTmF0aXZlRGF0ZShkYXRlOiBhbnkpOiBEYXRlIHtcbiAgICByZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUubmF0aXZlRGF0ZSA6IGRhdGU7XG4gIH1cbn1cbiJdfQ==