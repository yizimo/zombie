/**
 * @fileoverview added by tsickle
 * Generated from: nz-radio-button.component.ts
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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
        var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
        renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
        renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
        return _this;
    }
    NzRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio-button]',
                    exportAs: 'nzRadioButton',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioComponent; })),
                            multi: true
                        },
                        {
                            provide: NzRadioComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioButtonComponent; }))
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"nzDisabled\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                    host: {
                        '[class.ant-radio-button-wrapper-checked]': 'checked',
                        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    return NzRadioButtonComponent;
}(NzRadioComponent));
export { NzRadioButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmFkaW8vIiwic291cmNlcyI6WyJuei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQXVCNEMsa0RBQWdCO0lBQzFELHFDQUFxQztJQUNyQyxnQ0FBWSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsR0FBc0IsRUFBRSxZQUEwQjtRQUEzRyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxTQUcvQztRQUZDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BFLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDOztJQUMxRSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDO3lCQUN0RDtxQkFDRjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDRYQUErQztvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLDBDQUEwQyxFQUFFLFNBQVM7d0JBQ3JELDJDQUEyQyxFQUFFLFlBQVk7cUJBQzFEO2lCQUNGOzs7O2dCQS9CQyxVQUFVO2dCQUNWLFNBQVM7Z0JBSFQsaUJBQWlCO2dCQU9WLFlBQVk7O0lBa0NyQiw2QkFBQztDQUFBLEFBOUJELENBdUI0QyxnQkFBZ0IsR0FPM0Q7U0FQWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXJhZGlvLWJ1dHRvbl0nLFxuICBleHBvcnRBczogJ256UmFkaW9CdXR0b24nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56UmFkaW9Db21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQnV0dG9uQ29tcG9uZW50KVxuICAgIH1cbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWRdJzogJ2NoZWNrZWQnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmFkaW9CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOelJhZGlvQ29tcG9uZW50IHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjZHIsIGZvY3VzTW9uaXRvcik7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXJhZGlvLXdyYXBwZXInKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXInKTtcbiAgfVxufVxuIl19