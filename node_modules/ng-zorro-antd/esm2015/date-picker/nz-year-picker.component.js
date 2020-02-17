/**
 * @fileoverview added by tsickle
 * Generated from: nz-year-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { HeaderPickerComponent } from './header-picker.component';
export class NzYearPickerComponent extends HeaderPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.noAnimation = noAnimation;
        this.nzFormat = 'yyyy';
        this.endPanelMode = 'year';
        renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
    }
}
NzYearPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker',
                template: "<nz-picker\n  [isRange]=\"false\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"nzStyle\"\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"nzDisabledDate\"\n              [disabledYear]=\"nzDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"nzValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"nzLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-picker>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzYearPickerComponent))
                    }
                ]
            }] }
];
/** @nocollapse */
NzYearPickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzYearPickerComponent.propDecorators = {
    nzFormat: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzYearPickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzYearPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    NzYearPickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnoteWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXllYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFnQnRGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxxQkFBcUI7Ozs7Ozs7OztJQUs5RCxZQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0ssV0FBb0M7UUFFL0QsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRmYsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBVnhELGFBQVEsR0FBVyxNQUFNLENBQUM7UUFFbkMsaUJBQVksR0FBdUIsTUFBTSxDQUFDO1FBV3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsK2lEQUE2QztnQkFDN0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7Ozs7WUFqQjJCLGFBQWE7WUFadkMsaUJBQWlCO1lBWVYsaUJBQWlCO1lBTnhCLFNBQVM7WUFKVCxVQUFVO1lBU0gsc0JBQXNCLHVCQThCMUIsSUFBSSxZQUFJLFFBQVE7Ozt1QkFWbEIsS0FBSzs7OztJQUFOLHlDQUFtQzs7SUFFbkMsNkNBQTBDOztJQVF4Qyw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuaW1wb3J0IHsgSGVhZGVyUGlja2VyQ29tcG9uZW50LCBTdXBwb3J0SGVhZGVyUGFuZWwgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LXllYXItcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduelllYXJQaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelllYXJQaWNrZXJDb21wb25lbnQpXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56WWVhclBpY2tlckNvbXBvbmVudCBleHRlbmRzIEhlYWRlclBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAneXl5eSc7XG5cbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwgPSAneWVhcic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhbGVuZGFyLXBpY2tlcicpO1xuICB9XG59XG4iXX0=