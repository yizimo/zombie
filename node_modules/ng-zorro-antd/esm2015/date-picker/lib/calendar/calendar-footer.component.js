/**
 * @fileoverview added by tsickle
 * Generated from: lib/calendar/calendar-footer.component.ts
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
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
export class CalendarFooterComponent {
    constructor() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
}
CalendarFooterComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n  </div>\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n        <span [innerHTML]=\"extraFooter\"></span>\n      </ng-container>\n    </ng-container>\n  </div>\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\n    <today-button\n      *ngIf=\"showToday\"\n      [locale]=\"locale\"\n      [disabledDate]=\"disabledDate\"\n      [hasTimePicker]=\"hasTimePicker\"\n      (clickToday)=\"clickToday.emit($event)\"\n    ></today-button>\n    <time-picker-button\n      *ngIf=\"hasTimePicker\"\n      [locale]=\"locale\"\n      [timePickerDisabled]=\"timePickerDisabled\"\n      [showTimePicker]=\"showTimePicker\"\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\n    ></time-picker-button>\n    <ok-button\n      *ngIf=\"hasTimePicker\"\n      [okDisabled]=\"okDisabled\"\n      [locale]=\"locale\"\n      (clickOk)=\"clickOk.emit()\"\n    ></ok-button>\n  </span>\n</div>"
            }] }
];
CalendarFooterComponent.propDecorators = {
    locale: [{ type: Input }],
    showToday: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    isRange: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    showTimePickerChange: [{ type: Output }],
    timePickerDisabled: [{ type: Input }],
    okDisabled: [{ type: Input }],
    disabledDate: [{ type: Input }],
    extraFooter: [{ type: Input }],
    rangeQuickSelector: [{ type: Input }],
    clickOk: [{ type: Output }],
    clickToday: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePickerChange;
    /** @type {?} */
    CalendarFooterComponent.prototype.timePickerDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQWEsTUFBTSxvQkFBb0IsQ0FBQztBQVdoRixNQUFNLE9BQU8sdUJBQXVCO0lBUnBDO1FBVVcsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFN0QsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFLbEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFOUQsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7WUE3QkEsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHdsREFBNkM7YUFDOUM7OztxQkFFRSxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUVMLEtBQUs7bUNBQ0wsTUFBTTtpQ0FFTixLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7c0JBRUwsTUFBTTt5QkFDTixNQUFNOzs7O0lBZlAseUNBQXlDOztJQUN6Qyw0Q0FBb0M7O0lBQ3BDLGdEQUF3Qzs7SUFDeEMsMENBQWtDOztJQUVsQyxpREFBeUM7O0lBQ3pDLHVEQUFzRTs7SUFFdEUscURBQTZDOztJQUM3Qyw2Q0FBcUM7O0lBQ3JDLCtDQUE0Qzs7SUFDNUMsOENBQWlEOztJQUNqRCxxREFBK0M7O0lBRS9DLDBDQUFzRDs7SUFDdEQsNkNBQThEOztJQUU5RCw0Q0FBbUM7O0lBQ25DLGdEQUE4Qjs7SUFDOUIsbURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmLCBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1mb290ZXInLFxuICBleHBvcnRBczogJ2NhbGVuZGFyRm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1mb290ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1RvZGF5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzaG93VGltZVBpY2tlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSB0aW1lUGlja2VyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhbmdlUXVpY2tTZWxlY3RvcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrT2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja1RvZGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xufVxuIl19