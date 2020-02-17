/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar.component.ts
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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean, warnDeprecation, CandyDate, InputBoolean } from 'ng-zorro-antd/core';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
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
        nzDateCellChild: [{ type: ContentChild, args: [DateCell, { static: false, read: TemplateRef },] }],
        nzDateFullCell: [{ type: Input }],
        nzDateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { static: false, read: TemplateRef },] }],
        nzMonthCell: [{ type: Input }],
        nzMonthCellChild: [{ type: ContentChild, args: [MonthCell, { static: false, read: TemplateRef },] }],
        nzMonthFullCell: [{ type: Input }],
        nzMonthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { static: false, read: TemplateRef },] }],
        nzFullscreen: [{ type: Input }, { type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }],
        nzCard: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQ0wsbUJBQW1CLElBQUksUUFBUSxFQUMvQix1QkFBdUIsSUFBSSxZQUFZLEVBQ3ZDLG9CQUFvQixJQUFJLFNBQVMsRUFDakMsd0JBQXdCLElBQUksYUFBYSxFQUMxQyxNQUFNLHFCQUFxQixDQUFDO0FBSzdCO0lBdUVFLDZCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTlEMUMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFXLGtCQUFrQixDQUFDO1FBRS9CLGVBQVU7OztRQUF5QixjQUFPLENBQUMsRUFBQztRQUM1QyxjQUFTOzs7UUFBZSxjQUFPLENBQUMsRUFBQztRQUVoQyxXQUFNLEdBQWEsT0FBTyxDQUFDO1FBRWpCLGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsa0JBQWEsR0FBaUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRixtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3hELGtCQUFhLEdBQXVC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QVksU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBS2hFLEtBQUssWUFFTCxXQUFXLFNBQUMsb0NBQW9DO3lCQU1oRCxLQUFLOztJQUxOO1FBRkMsWUFBWSxFQUFFOzs2REFFYztJQTREL0IsMEJBQUM7Q0FBQSxBQXJIRCxJQXFIQztTQTdHWSxtQkFBbUI7OztJQUM5Qix5Q0FBd0M7O0lBQ3hDLHdDQUF1Qzs7Ozs7SUFFdkMseUNBQW9EOzs7OztJQUNwRCx3Q0FBeUM7O0lBRXpDLHFDQUFvQzs7SUFFcEMsMkNBQTZFOztJQUM3RSw0Q0FBb0c7O0lBQ3BHLDZDQUEyRTs7SUFLM0UsNENBQTBFOzs7Ozs7O0lBTTFFLHlDQUFrQzs7SUFDbEMsOENBQTRGOztJQUs1Riw2Q0FBc0M7O0lBQ3RDLGtEQUFvRzs7SUFLcEcsMENBQW1DOztJQUNuQywrQ0FBOEY7O0lBSzlGLDhDQUF1Qzs7SUFDdkMsbURBQXNHOztJQUt0RywyQ0FHNkI7Ozs7O0lBY2pCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiwgd2FybkRlcHJlY2F0aW9uLCBDYW5keURhdGUsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQge1xuICBOekRhdGVDZWxsRGlyZWN0aXZlIGFzIERhdGVDZWxsLFxuICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSBhcyBEYXRlRnVsbENlbGwsXG4gIE56TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCxcbiAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIGFzIE1vbnRoRnVsbENlbGxcbn0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XG5cbmV4cG9ydCB0eXBlIE1vZGVUeXBlID0gJ21vbnRoJyB8ICd5ZWFyJztcbmV4cG9ydCB0eXBlIERhdGVUZW1wbGF0ZSA9IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbnotY2FsZW5kYXInLFxuICBleHBvcnRBczogJ256Q2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcblxuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgQElucHV0KCkgbnpNb2RlOiBNb2RlVHlwZSA9ICdtb250aCc7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vZGVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGU7IG1vZGU6IE1vZGVUeXBlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBzZXQgbnpWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHZhbHVlKSwgZmFsc2UpO1xuICB9XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENhbm5vdCB1c2UgQElucHV0IGFuZCBAQ29udGVudENoaWxkIG9uIG9uZSB2YXJpYWJsZVxuICAgKiBiZWNhdXNlIHsgc3RhdGljOiBmYWxzZSB9IHdpbGwgbWFrZSBASW5wdXQgcHJvcGVydHkgZ2V0IGRlbGF5ZWRcbiAgICoqL1xuICBASW5wdXQoKSBuekRhdGVDZWxsOiBEYXRlVGVtcGxhdGU7XG4gIEBDb250ZW50Q2hpbGQoRGF0ZUNlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XG4gIGdldCBkYXRlQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xuICAgIHJldHVybiB0aGlzLm56RGF0ZUNlbGwgfHwgdGhpcy5uekRhdGVDZWxsQ2hpbGQ7XG4gIH1cblxuICBASW5wdXQoKSBuekRhdGVGdWxsQ2VsbDogRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKERhdGVGdWxsQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuekRhdGVGdWxsQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XG4gIGdldCBkYXRlRnVsbENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gdGhpcy5uekRhdGVGdWxsQ2VsbCB8fCB0aGlzLm56RGF0ZUZ1bGxDZWxsQ2hpbGQ7XG4gIH1cblxuICBASW5wdXQoKSBuek1vbnRoQ2VsbDogRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuek1vbnRoQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XG4gIGdldCBtb250aENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gdGhpcy5uek1vbnRoQ2VsbCB8fCB0aGlzLm56TW9udGhDZWxsQ2hpbGQ7XG4gIH1cblxuICBASW5wdXQoKSBuek1vbnRoRnVsbENlbGw6IERhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56TW9udGhGdWxsQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XG4gIGdldCBtb250aEZ1bGxDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMubnpNb250aEZ1bGxDZWxsIHx8IHRoaXMubnpNb250aEZ1bGxDZWxsQ2hpbGQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcbiAgbnpGdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBbbnpGdWxsc2NyZWVuXWAgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekNhcmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekNhcmQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RnVsbHNjcmVlbicgaW5zdGVhZC5gKTtcbiAgICB0aGlzLm56RnVsbHNjcmVlbiA9ICF0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBuekNhcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56RnVsbHNjcmVlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvbk1vZGVDaGFuZ2UobW9kZTogTW9kZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICAgIHRoaXMubnpQYW5lbENoYW5nZS5lbWl0KHsgZGF0ZTogdGhpcy5hY3RpdmVEYXRlLm5hdGl2ZURhdGUsIG1vZGUgfSk7XG4gIH1cblxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFjdGl2ZURhdGUgaXMgZW5vdWdoIGluIGNhbGVuZGFyXG4gICAgLy8gdGhpcy52YWx1ZSA9IGRhdGU7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh2YWx1ZSBhcyBEYXRlKSwgZmFsc2UpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGF0ZShkYXRlOiBDYW5keURhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcblxuICAgIGlmICh0b3VjaGVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XG4gICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=