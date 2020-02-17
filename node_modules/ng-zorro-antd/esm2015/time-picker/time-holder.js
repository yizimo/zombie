/**
 * @fileoverview added by tsickle
 * Generated from: time-holder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { isNotNil } from 'ng-zorro-antd/core';
export class TimeHolder {
    constructor() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._selected12Hours = undefined;
        this._use12Hours = false;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    setDefaultValueIfNil() {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setMinutes(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).minutes = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setHours(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setSeconds(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).seconds = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setUse12Hours(value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            if (isNotNil(this._value)) {
                this._hours = (/** @type {?} */ (this._value)).getHours();
                this._minutes = (/** @type {?} */ (this._value)).getMinutes();
                this._seconds = (/** @type {?} */ (this._value)).getSeconds();
                if (this._use12Hours && isNotNil(this._hours)) {
                    this._selected12Hours = this._hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                this._clear();
            }
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    setValue(value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        (/** @type {?} */ (this)).value = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
    }
    /**
     * @private
     * @return {?}
     */
    _clear() {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                (/** @type {?} */ (this._value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                (/** @type {?} */ (this._value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (!isNotNil(this._selected12Hours)) {
                    this._selected12Hours = this.default12Hours;
                }
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this._hours)) < 12) {
                    (/** @type {?} */ (this._hours)) += 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this._hours)) >= 12) {
                    (/** @type {?} */ (this._hours)) -= 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
            }
            this._value = new Date((/** @type {?} */ (this._value)));
        }
        this.changed();
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this._value);
    }
    /**
     * \@description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     * @return {?}
     */
    get viewHours() {
        return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour((/** @type {?} */ (this._hours))) : this._hours;
    }
    /**
     * \@description
     * Value hours
     * Get realHours and its range is [0, 1, 2, ..., 22, 23]
     * @return {?}
     */
    get realHours() {
        return this._hours;
    }
    /**
     * \@description
     * Same as realHours
     * @see realHours
     * @return {?}
     */
    get hours() {
        return this._hours;
    }
    /**
     * \@description
     * Set viewHours to realHours
     * @param {?} value
     * @return {?}
     */
    set hours(value) {
        if (value !== this._hours) {
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && value !== 12) {
                    (/** @type {?} */ (this._hours)) = ((/** @type {?} */ (value))) + 12;
                }
                else if (this.selected12Hours === 'AM' && value === 12) {
                    this._hours = 0;
                }
                else {
                    this._hours = value;
                }
            }
            else {
                this._hours = value;
            }
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get minutes() {
        return this._minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minutes(value) {
        if (value !== this._minutes) {
            this._minutes = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get seconds() {
        return this._seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set seconds(value) {
        if (value !== this._seconds) {
            this._seconds = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get selected12Hours() {
        return this._selected12Hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected12Hours(value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this._selected12Hours) {
            this._selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get defaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultOpenValue(value) {
        if (this._defaultOpenValue !== value) {
            this._defaultOpenValue = value;
            this.update();
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setDefaultOpenValue(value) {
        (/** @type {?} */ (this)).defaultOpenValue = value;
        return (/** @type {?} */ (this));
    }
    /**
     * \@description
     * Get deafultViewHours when defaultOpenValue is setted
     * @see viewHours
     * @return {?}
     */
    get defaultViewHours() {
        /** @type {?} */
        const hours = this._defaultOpenValue.getHours();
        return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
    }
    /**
     * \@description
     * Get defaultRealHours when defaultOpenValue is setted
     * @see realHours
     * @return {?}
     */
    get defaultRealHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * \@description
     * Same as defaultRealHours
     * @return {?}
     */
    get defaultHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * @return {?}
     */
    get defaultMinutes() {
        return this._defaultOpenValue.getMinutes();
    }
    /**
     * @return {?}
     */
    get defaultSeconds() {
        return this._defaultOpenValue.getSeconds();
    }
    /**
     * @return {?}
     */
    get default12Hours() {
        return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    calculateViewHour(value) {
        /** @type {?} */
        const selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._seconds;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._minutes;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._selected12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._use12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._defaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsidGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsTUFBTSxPQUFPLFVBQVU7SUFxUnJCO1FBcFJRLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLFdBQU0sR0FBdUIsU0FBUyxDQUFDO1FBQ3ZDLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLHFCQUFnQixHQUF1QixTQUFTLENBQUM7UUFDakQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isc0JBQWlCLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVyQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQTZReEIsQ0FBQzs7OztJQTNRaEIsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2I7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxRQUFpQjtR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Q2pDLDhCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFRpbWVIb2xkZXIge1xuICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2hvdXJzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX21pbnV0ZXM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQxMkhvdXJzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3VzZTEySG91cnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wZW5WYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8RGF0ZT4oKTtcblxuICBzZXREZWZhdWx0VmFsdWVJZk5pbCgpOiB2b2lkIHtcbiAgICBpZiAoIWlzTm90TmlsKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh0aGlzLmRlZmF1bHRPcGVuVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1pbnV0ZXModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XG4gICAgdGhpcy5taW51dGVzID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRIb3Vycyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcbiAgICB0aGlzLmhvdXJzID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xuICAgIHRoaXMuc2Vjb25kcyA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VXNlMTJIb3Vycyh2YWx1ZTogYm9vbGVhbik6IHRoaXMge1xuICAgIHRoaXMuX3VzZTEySG91cnMgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBjaGFuZ2VzKCk6IE9ic2VydmFibGU8RGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5fdmFsdWUhLmdldEhvdXJzKCk7XG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLl92YWx1ZSEuZ2V0TWludXRlcygpO1xuICAgICAgICB0aGlzLl9zZWNvbmRzID0gdGhpcy5fdmFsdWUhLmdldFNlY29uZHMoKTtcbiAgICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5faG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCwgdXNlMTJIb3Vycz86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoaXNOb3ROaWwodXNlMTJIb3VycykpIHtcbiAgICAgIHRoaXMuX3VzZTEySG91cnMgPSB1c2UxMkhvdXJzIGFzIGJvb2xlYW47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKGlzTm90TmlsKHRoaXMuX2hvdXJzKSB8fCBpc05vdE5pbCh0aGlzLl9taW51dGVzKSB8fCBpc05vdE5pbCh0aGlzLl9zZWNvbmRzKSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9ob3VycyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9taW51dGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5kZWZhdWx0SG91cnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5ob3VycyEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX21pbnV0ZXMpKSB7XG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLmRlZmF1bHRNaW51dGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdmFsdWUhLnNldE1pbnV0ZXModGhpcy5taW51dGVzISk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuZGVmYXVsdFNlY29uZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0U2Vjb25kcyh0aGlzLnNlY29uZHMhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcbiAgICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9zZWxlY3RlZDEySG91cnMpKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5kZWZhdWx0MTJIb3VycztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdQTScgJiYgdGhpcy5faG91cnMhIDwgMTIpIHtcbiAgICAgICAgICB0aGlzLl9ob3VycyEgKz0gMTI7XG4gICAgICAgICAgdGhpcy5fdmFsdWUhLnNldEhvdXJzKHRoaXMuX2hvdXJzISk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHRoaXMuX2hvdXJzISA+PSAxMikge1xuICAgICAgICAgIHRoaXMuX2hvdXJzISAtPSAxMjtcbiAgICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5faG91cnMhKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKHRoaXMuX3ZhbHVlISk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG5cbiAgY2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQodGhpcy5fdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBVSSB2aWV3IGhvdXJzXG4gICAqIEdldCB2aWV3SG91cnMgd2hpY2ggaXMgc2VsZWN0ZWQgaW4gYHRpbWUtcGlja2VyLXBhbmVsYCBhbmQgaXRzIHJhbmdlIGlzIFsxMiwgMSwgMiwgLi4uLCAxMV1cbiAgICovXG4gIGdldCB2aWV3SG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLl9ob3VycykgPyB0aGlzLmNhbGN1bGF0ZVZpZXdIb3VyKHRoaXMuX2hvdXJzISkgOiB0aGlzLl9ob3VycztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVmFsdWUgaG91cnNcbiAgICogR2V0IHJlYWxIb3VycyBhbmQgaXRzIHJhbmdlIGlzIFswLCAxLCAyLCAuLi4sIDIyLCAyM11cbiAgICovXG4gIGdldCByZWFsSG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faG91cnM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNhbWUgYXMgcmVhbEhvdXJzXG4gICAqIEBzZWUgcmVhbEhvdXJzXG4gICAqL1xuICBnZXQgaG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faG91cnM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNldCB2aWV3SG91cnMgdG8gcmVhbEhvdXJzXG4gICAqL1xuICBzZXQgaG91cnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5faG91cnMpIHtcbiAgICAgIGlmICh0aGlzLl91c2UxMkhvdXJzKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSAhPT0gMTIpIHtcbiAgICAgICAgICB0aGlzLl9ob3VycyEgPSAodmFsdWUgYXMgbnVtYmVyKSArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHZhbHVlID09PSAxMikge1xuICAgICAgICAgIHRoaXMuX2hvdXJzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWludXRlcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW51dGVzO1xuICB9XG5cbiAgc2V0IG1pbnV0ZXModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbWludXRlcykge1xuICAgICAgdGhpcy5fbWludXRlcyA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2Vjb25kcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRzO1xuICB9XG5cbiAgc2V0IHNlY29uZHModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc2Vjb25kcykge1xuICAgICAgdGhpcy5fc2Vjb25kcyA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQxMkhvdXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkMTJIb3VycztcbiAgfVxuXG4gIHNldCBzZWxlY3RlZDEySG91cnModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSEudG9VcHBlckNhc2UoKSAhPT0gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB2YWx1ZSEudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRPcGVuVmFsdWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWU7XG4gIH1cblxuICBzZXQgZGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9kZWZhdWx0T3BlblZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy5kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEdldCBkZWFmdWx0Vmlld0hvdXJzIHdoZW4gZGVmYXVsdE9wZW5WYWx1ZSBpcyBzZXR0ZWRcbiAgICogQHNlZSB2aWV3SG91cnNcbiAgICovXG4gIGdldCBkZWZhdWx0Vmlld0hvdXJzKCk6IG51bWJlciB7XG4gICAgY29uc3QgaG91cnMgPSB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwoaG91cnMpID8gdGhpcy5jYWxjdWxhdGVWaWV3SG91cihob3VycykgOiBob3VycztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogR2V0IGRlZmF1bHRSZWFsSG91cnMgd2hlbiBkZWZhdWx0T3BlblZhbHVlIGlzIHNldHRlZFxuICAgKiBAc2VlIHJlYWxIb3Vyc1xuICAgKi9cbiAgZ2V0IGRlZmF1bHRSZWFsSG91cnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTYW1lIGFzIGRlZmF1bHRSZWFsSG91cnNcbiAgICovXG4gIGdldCBkZWZhdWx0SG91cnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRNaW51dGVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0TWludXRlcygpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHQxMkhvdXJzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVmlld0hvdXIodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzIHx8IHRoaXMuZGVmYXVsdDEySG91cnM7XG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSA+IDEyKSB7XG4gICAgICByZXR1cm4gdmFsdWUgLSAxMjtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDEyO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiJdfQ==