/**
 * @fileoverview added by tsickle
 * Generated from: abstract-picker.component.ts
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
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CandyDate, InputBoolean } from 'ng-zorro-antd/core';
import { NzPickerComponent } from './picker.component';
/** @type {?} */
var POPUP_STYLE_PATCH = { position: 'relative' };
// Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/**
 * The base picker for all common APIs
 * @abstract
 */
var AbstractPickerComponent = /** @class */ (function () {
    function AbstractPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzOnOpenChange = new EventEmitter();
        this.isRange = false; // Indicate whether the value is a range value
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { return void 0; });
        this.onTouchedFn = (/**
         * @return {?}
         */
        function () { return void 0; });
    }
    Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
        get: 
        // Indicate whether the value is a range value
        /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    // Use picker's real open state to let re-render the picker's content when shown up
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.initValue = 
    // Use picker's real open state to let re-render the picker's content when shown up
    /**
     * @return {?}
     */
    function () {
        this.nzValue = this.isRange ? [] : null;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.setLocale(); }));
        }
        // Default value
        this.initValue();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? tslib_1.__assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.closeOverlay = /**
     * @return {?}
     */
    function () {
        this.picker.hideOverlay();
    };
    /**
     * Common handle for value changes
     * @param value changed value
     */
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    AbstractPickerComponent.prototype.onValueChange = /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    function (value) {
        this.nzValue = value;
        if (this.isRange) {
            /** @type {?} */
            var vAsRange = (/** @type {?} */ (this.nzValue));
            if (vAsRange.length) {
                this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.nzValue) {
                this.onChangeFn(((/** @type {?} */ (this.nzValue))).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    AbstractPickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.cdr.markForCheck();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnChange = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnTouched = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    };
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    AbstractPickerComponent.prototype.setLocale = 
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    function () {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
        }
    };
    // Safe way of setting value with default
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.setValue = 
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.nzValue = value ? ((/** @type {?} */ (value))).map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return new CandyDate(val); })) : [];
        }
        else {
            this.nzValue = value ? new CandyDate((/** @type {?} */ (value))) : null;
        }
    };
    AbstractPickerComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzLocale: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzPopupStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzOnOpenChange: [{ type: Output }],
        picker: [{ type: ViewChild, args: [NzPickerComponent, { static: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzOpen", void 0);
    return AbstractPickerComponent;
}());
export { AbstractPickerComponent };
if (false) {
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabled;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOpen;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzLocale;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzSize;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzFormat;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzValue;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOnOpenChange;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.picker;
    /** @type {?} */
    AbstractPickerComponent.prototype.isRange;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.destroyed$;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.isCustomPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.onChangeFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.onTouchedFn;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.dateHelper;
    /** @type {?} */
    AbstractPickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJhYnN0cmFjdC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUEwQixNQUFNLG9CQUFvQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUdqRCxpQkFBaUIsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7OztBQUtsRDtJQWtDRSxpQ0FDWSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUNoQyxXQUFvQztRQUhqQyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7UUFwQ3BCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNNUMsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQU8vQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJaEUsWUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFDLDhDQUE4QztRQVU5RCxlQUFVLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsd0JBQW1CLEdBQVksS0FBSyxDQUFDOzs7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K0RBQTZCO0lBQzVCO1FBQWYsWUFBWSxFQUFFOzsyREFBaUI7SUE0SjNDLDhCQUFDO0NBQUEsQUFqS0QsSUFpS0M7U0FqS3FCLHVCQUF1Qjs7O0lBRTNDLCtDQUFzRDs7SUFDdEQsOENBQXNEOztJQUN0RCw2Q0FBcUQ7O0lBQ3JELHlDQUF5Qzs7SUFDekMsOENBQTZCOztJQUM3QixpREFBOEM7O0lBQzlDLDJDQUE2Qzs7SUFDN0MsZ0RBQTBDOztJQUMxQywrQ0FBa0Q7O0lBQ2xELHNEQUFxQzs7SUFDckMseUNBQW1DOztJQUNuQywwQ0FBeUI7O0lBQ3pCLDJDQUEwQjs7SUFDMUIsMENBQXlDOztJQUV6QyxpREFBZ0U7Ozs7O0lBRWhFLHlDQUFvRjs7SUFFcEYsMENBQXlCOzs7OztJQVV6Qiw2Q0FBb0Q7Ozs7O0lBQ3BELHNEQUErQzs7SUFpRi9DLDZDQUFnRTs7SUFDaEUsOENBQXVDOzs7OztJQS9FckMsdUNBQTZCOzs7OztJQUM3QixzQ0FBZ0M7Ozs7O0lBQ2hDLDZDQUF1Qzs7SUFDdkMsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUsIElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpEYXRlUGlja2VySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IE56UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhdGlibGVEYXRlLCBDb21wYXRpYmxlVmFsdWUgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuY29uc3QgUE9QVVBfU1RZTEVfUEFUQ0ggPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07IC8vIEFpbSB0byBvdmVycmlkZSBhbnRkJ3Mgc3R5bGUgdG8gc3VwcG9ydCBvdmVybGF5J3MgcG9zaXRpb24gc3RyYXRlZ3kgKHBvc2l0aW9uOmFic29sdXRlIHdpbGwgY2F1c2UgaXQgbm90IHdvcmtpbmcgYmVhY3VzZSB0aGUgb3ZlcmxheSBjYW4ndCBnZXQgdGhlIGhlaWdodC93aWR0aCBvZiBpdCdzIGNvbnRlbnQpXG5cbi8qKlxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvLyAtLS0gQ29tbW9uIEFQSVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpMb2NhbGU6IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBuelBvcHVwU3R5bGU6IG9iamVjdCA9IFBPUFVQX1NUWUxFX1BBVENIO1xuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpWYWx1ZTogQ29tcGF0aWJsZVZhbHVlIHwgbnVsbDtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZChOelBpY2tlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIHBpY2tlcjogTnpQaWNrZXJDb21wb25lbnQ7XG5cbiAgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHJhbmdlIHZhbHVlXG5cbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyLmFuaW1hdGlvbk9wZW5TdGF0ZTtcbiAgfSAvLyBVc2UgcGlja2VyJ3MgcmVhbCBvcGVuIHN0YXRlIHRvIGxldCByZS1yZW5kZXIgdGhlIHBpY2tlcidzIGNvbnRlbnQgd2hlbiBzaG93biB1cFxuXG4gIGluaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56VmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBpc0N1c3RvbVBsYWNlSG9sZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbnpMb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxuICAgIGlmICghdGhpcy5uekxvY2FsZSkge1xuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpQb3B1cFN0eWxlKSB7XG4gICAgICAvLyBBbHdheXMgYXNzaWduIHRoZSBwb3B1cCBzdHlsZSBwYXRjaFxuICAgICAgdGhpcy5uelBvcHVwU3R5bGUgPSB0aGlzLm56UG9wdXBTdHlsZSA/IHsgLi4udGhpcy5uelBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcbiAgICB9XG5cbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIG56UGxhY2VIb2xkZXIgYXNzaWduZWQgYXQgdGhlIGZpcnN0IHRpbWVcbiAgICBpZiAoY2hhbmdlcy5uelBsYWNlSG9sZGVyICYmIGNoYW5nZXMubnpQbGFjZUhvbGRlci5maXJzdENoYW5nZSAmJiB0eXBlb2YgdGhpcy5uelBsYWNlSG9sZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uekxvY2FsZSkge1xuICAgICAgLy8gVGhlIG56TG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNsb3NlT3ZlcmxheSgpOiB2b2lkIHtcbiAgICB0aGlzLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbW1vbiBoYW5kbGUgZm9yIHZhbHVlIGNoYW5nZXNcbiAgICogQHBhcmFtIHZhbHVlIGNoYW5nZWQgdmFsdWVcbiAgICovXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMubnpWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHZBc1JhbmdlID0gdGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZVtdO1xuICAgICAgaWYgKHZBc1JhbmdlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW3ZBc1JhbmdlWzBdLm5hdGl2ZURhdGUsIHZBc1JhbmdlWzFdLm5hdGl2ZURhdGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihbXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56VmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKCh0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWRGbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIG92ZXJsYXlPcGVuIGNoYW5nZXMgKGRpZmZlcmVudCB3aXRoIHJlYWxPcGVuU3RhdGUpXG4gICAqIEBwYXJhbSBvcGVuIFRoZSBvdmVybGF5T3BlbiBpbiBwaWNrZXIgY29tcG9uZW50XG4gICAqL1xuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgaW1wbGVtZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBOT1RFOiBvbkNoYW5nZUZuL29uVG91Y2hlZEZuIHdpbGwgbm90IGJlIGFzc2lnbmVkIGlmIHVzZXIgbm90IHVzZSBhcyBuZ01vZGVsXG4gIG9uQ2hhbmdlRm46ICh2YWw6IENvbXBhdGlibGVEYXRlIHwgbnVsbCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBJbnRlcm5hbCBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJlbG9hZCBsb2NhbGUgZnJvbSBpMThuIHdpdGggc2lkZSBlZmZlY3RzXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xuICAgIHRoaXMubnpMb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlcicsIHt9KTtcbiAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgJiYgdGhpcy5uekxvY2FsZSkge1xuICAgICAgdGhpcy5uelBsYWNlSG9sZGVyID0gdGhpcy5pc1JhbmdlID8gdGhpcy5uekxvY2FsZS5sYW5nLnJhbmdlUGxhY2Vob2xkZXIgOiB0aGlzLm56TG9jYWxlLmxhbmcucGxhY2Vob2xkZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gU2FmZSB3YXkgb2Ygc2V0dGluZyB2YWx1ZSB3aXRoIGRlZmF1bHRcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSA/ICh2YWx1ZSBhcyBEYXRlW10pLm1hcCh2YWwgPT4gbmV3IENhbmR5RGF0ZSh2YWwpKSA6IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSA/IG5ldyBDYW5keURhdGUodmFsdWUgYXMgRGF0ZSkgOiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19