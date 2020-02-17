/**
 * @fileoverview added by tsickle
 * Generated from: month-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class MonthTableComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
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
     * @param {?} _index
     * @return {?}
     */
    trackYear(_index) {
        return this.value ? this.value.getYear() : _index;
    }
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    trackPanelMonth(_index, monthData) {
        return monthData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    }
    /**
     * @private
     * @return {?}
     */
    makePanelMonths() {
        /** @type {?} */
        const months = [];
        /** @type {?} */
        const currentMonth = this.value.getMonth();
        /** @type {?} */
        const today = new CandyDate();
        /** @type {?} */
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const month = this.value.setMonth(monthValue);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                const cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled,
                    content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.chooseMonth(cell.month)) // don't use monthValue here
                });
                cell.classMap = {
                    [`${this.prefixCls}-month-panel-cell`]: true,
                    [`${this.prefixCls}-month-panel-cell-disabled`]: disabled,
                    [`${this.prefixCls}-month-panel-selected-cell`]: monthValue === currentMonth,
                    [`${this.prefixCls}-month-panel-current-cell`]: today.getYear() === this.value.getYear() && monthValue === today.getMonth()
                };
                monthValue++;
            }
        }
        return months;
    }
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    chooseMonth(month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    }
}
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
MonthTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];
MonthTableComponent.propDecorators = {
    value: [{ type: Input }],
    prefixCls: [{ type: Input }],
    monthCellRender: [{ type: Input }],
    monthFullCellRender: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }]
};
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
export function PanelMonthData() { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFakQsT0FBTyxHQUFHLENBQUM7O01BQ1gsT0FBTyxHQUFHLENBQUM7QUFVakIsTUFBTSxPQUFPLG1CQUFtQjs7OztJQVc5QixZQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVZ4QyxVQUFLLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQVcsa0JBQWtCLENBQUM7UUFHN0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBTVgsQ0FBQzs7Ozs7SUFFckQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBYyxFQUFFLFNBQXlCO1FBQ3ZELE9BQU8sU0FBUyxDQUFDLE9BQU8s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O3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzBCQUNMLE1BQU07MkJBRU4sS0FBSzs7OztJQU5OLG9DQUE0Qzs7SUFDNUMsd0NBQWdEOztJQUNoRCw4Q0FBMkQ7O0lBQzNELGtEQUErRDs7SUFDL0QsMENBQStEOztJQUUvRCwyQ0FBK0M7O0lBRS9DLDBDQUFnQzs7Ozs7SUFFcEIseUNBQXFDOzs7OztBQWtFbkQsb0NBUUM7OztJQVBDLGtDQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQiwrQkFBYzs7SUFDZCwrQkFBYzs7SUFDZCxrQ0FBd0I7O0lBQ3hCLGlDQUE2Qjs7SUFDN0IsK0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxuICBleHBvcnRBczogJ21vbnRoVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb250aFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XG4gIEBJbnB1dCgpIG1vbnRoQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XG4gIEBJbnB1dCgpIG1vbnRoRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIHBhbmVsTW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tZZWFyKF9pbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0WWVhcigpIDogX2luZGV4O1xuICB9XG5cbiAgdHJhY2tQYW5lbE1vbnRoKF9pbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9udGhEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbE1vbnRocyA9IHRoaXMubWFrZVBhbmVsTW9udGhzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFuZWxNb250aHMoKTogUGFuZWxNb250aERhdGFbXVtdIHtcbiAgICBjb25zdCBtb250aHM6IFBhbmVsTW9udGhEYXRhW11bXSA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBDYW5keURhdGUoKTtcblxuICAgIGxldCBtb250aFZhbHVlID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXgrKykge1xuICAgICAgbW9udGhzW3Jvd0luZGV4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpO1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChtb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XG5cbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxNb250aERhdGEgPSAobW9udGhzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgdmFsdWU6IG1vbnRoLm5hdGl2ZURhdGUsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1zZWxlY3RlZC1jZWxsYF06IG1vbnRoVmFsdWUgPT09IGN1cnJlbnRNb250aCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWN1cnJlbnQtY2VsbGBdOlxuICAgICAgICAgICAgdG9kYXkuZ2V0WWVhcigpID09PSB0aGlzLnZhbHVlLmdldFllYXIoKSAmJiBtb250aFZhbHVlID09PSB0b2RheS5nZXRNb250aCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9udGhWYWx1ZSsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgY29udGVudDogc3RyaW5nO1xuICBtb250aDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcbiAgdmFsdWU6IERhdGU7XG59XG4iXX0=