/**
 * @fileoverview added by tsickle
 * Generated from: lib/year/year-panel.component.ts
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
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class YearPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    /**
     * @return {?}
     */
    get currentYear() {
        return this.value.getYear();
    }
    /**
     * @return {?}
     */
    get startYear() {
        return parseInt(`${this.currentYear / 10}`, 10) * 10;
    }
    /**
     * @return {?}
     */
    get endYear() {
        return this.startYear + 9;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousDecade() {
        this.gotoYear(-10);
    }
    /**
     * @return {?}
     */
    nextDecade() {
        this.gotoYear(10);
    }
    /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    trackPanelYear(_index, yearData) {
        return yearData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    }
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    chooseYear(year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
    /**
     * @private
     * @return {?}
     */
    makePanelYears() {
        /** @type {?} */
        const years = [];
        /** @type {?} */
        const currentYear = this.currentYear;
        /** @type {?} */
        const startYear = this.startYear;
        /** @type {?} */
        const endYear = this.endYear;
        /** @type {?} */
        const previousYear = startYear - 1;
        /** @type {?} */
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const year = previousYear + index;
                /** @type {?} */
                const content = String(year);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setYear(year).nativeDate) : false;
                /** @type {?} */
                const cell = (years[rowIndex][colIndex] = {
                    disabled,
                    content,
                    year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-cell-disabled`]: disabled,
                    [`${this.prefixCls}-last-decade-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-decade-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.previousDecade());
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.nextDecade());
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.chooseYear(cell.year));
                }
                index++;
            }
        }
        return years;
    }
}
YearPanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-panel',
                exportAs: 'yearPanel',
                template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-decade-btn\"\n        role=\"button\"\n        (click)=\"previousDecade()\"\n        title=\"{{ locale.previousDecade }}\"\n      ></a>\n      <a\n        class=\"{{ prefixCls }}-decade-select\"\n        role=\"button\"\n        (click)=\"decadePanelShow.emit()\"\n        title=\"{{ locale.decadeSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-decade-select-content\">\n          {{ startYear }}-{{ endYear }}\n        </span>\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\n      </a>\n\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n        <tbody class=\"{{ prefixCls }}-tbody\">\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\n              role=\"gridcell\"\n              title=\"{{ yearCell.title }}\"\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\n              [ngClass]=\"yearCell.classMap\"\n            >\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                styles: [
                    // Support disabledDate
                    `
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
      }
    `]
            }] }
];
/** @nocollapse */
YearPanelComponent.ctorParameters = () => [];
YearPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }],
    decadePanelShow: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.disabledDate;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
if (false) {
    /** @type {?} */
    PanelYearData.prototype.disabled;
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFHekMsT0FBTyxHQUFHLENBQUM7O01BQ1gsT0FBTyxHQUFHLENBQUM7QUFxQmpCLE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCO1FBbkJtQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFJNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBWTlELGNBQVMsR0FBVyx5QkFBeUIsQ0FBQztJQUcvQixDQUFDOzs7O0lBYmhCLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQU9ELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1os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QUF3Qjs7SUFDeEIsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAneWVhci1wYW5lbCcsXG4gIGV4cG9ydEFzOiAneWVhclBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICd5ZWFyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgLy8gU3VwcG9ydCBkaXNhYmxlZERhdGVcbiAgICBgXG4gICAgICAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwtY2VsbC1kaXNhYmxlZCAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwteWVhcixcbiAgICAgIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC1jZWxsLWRpc2FibGVkIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC15ZWFyOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFllYXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVjYWRlUGFuZWxTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGdldCBjdXJyZW50WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLmdldFllYXIoKTtcbiAgfVxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMuY3VycmVudFllYXIgLyAxMH1gLCAxMCkgKiAxMDtcbiAgfVxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk7XG4gIH1cblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXIteWVhci1wYW5lbCc7XG4gIHBhbmVsWWVhcnM6IFBhbmVsWWVhckRhdGFbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXNEZWNhZGUoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigtMTApO1xuICB9XG5cbiAgbmV4dERlY2FkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKDEwKTtcbiAgfVxuXG4gIHRyYWNrUGFuZWxZZWFyKF9pbmRleDogbnVtYmVyLCB5ZWFyRGF0YTogUGFuZWxZZWFyRGF0YSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHllYXJEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbFllYXJzID0gdGhpcy5tYWtlUGFuZWxZZWFycygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNob29zZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcih5ZWFyKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhbmVsWWVhcnMoKTogUGFuZWxZZWFyRGF0YVtdW10ge1xuICAgIGNvbnN0IHllYXJzOiBQYW5lbFllYXJEYXRhW11bXSA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdGhpcy5jdXJyZW50WWVhcjtcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDE7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXgrKykge1xuICAgICAgeWVhcnNbcm93SW5kZXhdID0gW107XG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgICBjb25zdCB5ZWFyID0gcHJldmlvdXNZZWFyICsgaW5kZXg7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBTdHJpbmcoeWVhcik7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgPyB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLnZhbHVlLnNldFllYXIoeWVhcikubmF0aXZlRGF0ZSkgOiBmYWxzZTtcblxuICAgICAgICBjb25zdCBjZWxsOiBQYW5lbFllYXJEYXRhID0gKHllYXJzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB5ZWFyLFxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgICAgIGlzQ3VycmVudDogeWVhciA9PT0gY3VycmVudFllYXIsXG4gICAgICAgICAgaXNMb3dlclRoYW5TdGFydDogeWVhciA8IHN0YXJ0WWVhcixcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHllYXIgPiBlbmRZZWFyLFxuICAgICAgICAgIGNsYXNzTWFwOiBudWxsLFxuICAgICAgICAgIG9uQ2xpY2s6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWNlbGxgXTogY2VsbC5pc0N1cnJlbnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1kZWNhZGUtY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LWRlY2FkZS1jZWxsYF06IGNlbGwuaXNCaWdnZXJUaGFuRW5kXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNlbGwuaXNMb3dlclRoYW5TdGFydCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMucHJldmlvdXNEZWNhZGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMubmV4dERlY2FkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlWWVhcihjZWxsLnllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHllYXJzO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxZZWFyRGF0YSB7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHllYXI6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBpc0xvd2VyVGhhblN0YXJ0OiBib29sZWFuO1xuICBpc0JpZ2dlclRoYW5FbmQ6IGJvb2xlYW47XG4gIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb24gfCBudWxsO1xufVxuIl19