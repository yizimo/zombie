/**
 * @fileoverview added by tsickle
 * Generated from: lib/month/month-panel.component.ts
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
var MonthPanelComponent = /** @class */ (function () {
    function MonthPanelComponent() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    MonthPanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    };
    MonthPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'month-panel',
                    // tslint:disable-line:component-selector
                    exportAs: 'monthPanel',
                    template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-year-btn\"\n        role=\"button\"\n        (click)=\"previousYear()\"\n        title=\"{{ locale.previousYear }}\"\n      ></a>\n\n      <a\n        class=\"{{ prefixCls }}-year-select\"\n        role=\"button\"\n        (click)=\"yearPanelShow.emit()\"\n        title=\"{{ locale.yearSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\n      </a>\n\n      <a\n        class=\"{{ prefixCls }}-next-year-btn\"\n        role=\"button\"\n        (click)=\"nextYear()\"\n        title=\"{{ locale.nextYear }}\"\n      ></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <month-table [prefixCls]=\"'ant-calendar'\" [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    MonthPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        disabledDate: [{ type: Input }],
        valueChange: [{ type: Output }],
        yearPanelShow: [{ type: Output }]
    };
    return MonthPanelComponent;
}());
export { MonthPanelComponent };
if (false) {
    /** @type {?} */
    MonthPanelComponent.prototype.locale;
    /** @type {?} */
    MonthPanelComponent.prototype.value;
    /** @type {?} */
    MonthPanelComponent.prototype.disabledDate;
    /** @type {?} */
    MonthPanelComponent.prototype.valueChange;
    /** @type {?} */
    MonthPanelComponent.prototype.yearPanelShow;
    /** @type {?} */
    MonthPanelComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9tb250aC9tb250aC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHL0M7SUFBQTtRQVlxQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDNUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTVELGNBQVMsR0FBVywwQkFBMEIsQ0FBQztJQWVqRCxDQUFDOzs7O0lBYkMsMENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtR0FBbUc7Ozs7Ozs7SUFDM0Ysc0NBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsTUFBYztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLGlGQUFpRjtJQUNuRixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGFBQWE7O29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsNmdDQUF5QztpQkFDMUM7Ozt5QkFFRSxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFFTCxNQUFNO2dDQUNOLE1BQU07O0lBaUJULDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F2QlksbUJBQW1COzs7SUFDOUIscUNBQXlDOztJQUN6QyxvQ0FBMEI7O0lBQzFCLDJDQUErQzs7SUFFL0MsMENBQStEOztJQUMvRCw0Q0FBNEQ7O0lBRTVELHdDQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdtb250aC1wYW5lbCcsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIGV4cG9ydEFzOiAnbW9udGhQYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9udGgtcGFuZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGFuZWxDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgeWVhclBhbmVsU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItbW9udGgtcGFuZWwnO1xuXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKC0xKTtcbiAgfVxuXG4gIG5leHRZZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoMSk7XG4gIH1cblxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlXG4gIH1cbn1cbiJdfQ==