/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar-header.component.ts
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
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
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
        { type: I18n },
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
export { NzCalendarHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJuei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RTtJQWdERSxtQ0FBb0IsSUFBVSxFQUFVLFVBQTZCO1FBQWpELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQXBDNUQsU0FBSSxHQUFxQixPQUFPLENBQUM7UUFDakMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqQixlQUFVLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUUsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFFOUIsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRzFFLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQXdCaUQsQ0FBQztJQXBCekUsc0JBQUksaURBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFD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Q3ZCLDBDQUErQzs7SUFDL0MsMkNBQWdEOzs7OztJQXNCcEMseUNBQWtCOzs7OztJQUFFLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhci1oZWFkZXInLFxuICBleHBvcnRBczogJ256Q2FsZW5kYXJIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLWhlYWRlcl0nOiBgdHJ1ZWBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJyA9ICdtb250aCc7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB5ZWFyT2Zmc2V0OiBudW1iZXIgPSAxMDtcbiAgeWVhclRvdGFsOiBudW1iZXIgPSAyMDtcbiAgeWVhcnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PjtcbiAgbW9udGhzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT47XG5cbiAgZ2V0IGFjdGl2ZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldFllYXIoKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/ICdkZWZhdWx0JyA6ICdzbWFsbCc7XG4gIH1cblxuICBnZXQgeWVhclR5cGVUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci55ZWFyO1xuICB9XG5cbiAgZ2V0IG1vbnRoVHlwZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLm1vbnRoO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VXBZZWFycygpO1xuICAgIHRoaXMuc2V0VXBNb250aHMoKTtcbiAgfVxuXG4gIHVwZGF0ZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy55ZWFyQ2hhbmdlLmVtaXQoeWVhcik7XG4gICAgdGhpcy5zZXRVcFllYXJzKHllYXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFllYXJzKHllYXI/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydCA9ICh5ZWFyIHx8IHRoaXMuYWN0aXZlWWVhcikgLSB0aGlzLnllYXJPZmZzZXQ7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLnllYXJUb3RhbDtcblxuICAgIHRoaXMueWVhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKHsgbGFiZWw6IGAke2l9YCwgdmFsdWU6IGkgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcE1vbnRocygpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRocyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlSW5Nb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChpKTtcbiAgICAgIGNvbnN0IG1vbnRoVGV4dCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZUluTW9udGgubmF0aXZlRGF0ZSwgJ01NTScpO1xuICAgICAgdGhpcy5tb250aHMucHVzaCh7IGxhYmVsOiBtb250aFRleHQsIHZhbHVlOiBpIH0pO1xuICAgIH1cbiAgfVxufVxuIl19