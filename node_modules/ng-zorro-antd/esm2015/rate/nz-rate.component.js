/**
 * @fileoverview added by tsickle
 * Generated from: nz-rate.component.ts
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
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'rate';
export class NzRateComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(nzConfigService, renderer, cdr) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzTooltips = [];
        this.nzOnBlur = new EventEmitter();
        this.nzOnFocus = new EventEmitter();
        this.nzOnHoverChange = new EventEmitter();
        this.nzOnKeyDown = new EventEmitter();
        this.hasHalf = false;
        this.hoverValue = 0;
        this.prefixCls = 'ant-rate';
        this.innerPrefixCls = `${this.prefixCls}-star`;
        this.isFocused = false;
        this.isInit = false;
        this.starArray = [];
        this.destroy$ = new Subject();
        this._count = 5;
        this._value = 0;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCount(value) {
        if (this._count === value) {
            return;
        }
        this._count = value;
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    get nzCount() {
        return this._count;
    }
    /**
     * @return {?}
     */
    get nzValue() {
        return this._value;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set nzValue(input) {
        if (this._value === input) {
            return;
        }
        this._value = input;
        this.hasHalf = !Number.isInteger(input);
        this.hoverValue = Math.ceil(input);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzAutoFocus && !changes.nzAutoFocus.isFirstChange()) {
            if (this.nzAutoFocus && !this.nzDisabled) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateStarArray();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
    }
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    onItemClick(index, isHalf) {
        if (this.nzDisabled) {
            return;
        }
        this.hoverValue = index + 1;
        /** @type {?} */
        const actualValue = isHalf ? index + 0.5 : index + 1;
        if (this.nzValue === actualValue) {
            if (this.nzAllowClear) {
                this.nzValue = 0;
                this.onChange(this.nzValue);
            }
        }
        else {
            this.nzValue = actualValue;
            this.onChange(this.nzValue);
        }
    }
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    onItemHover(index, isHalf) {
        if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.nzOnHoverChange.emit(this.hoverValue);
    }
    /**
     * @return {?}
     */
    onRateLeave() {
        this.hasHalf = !Number.isInteger(this.nzValue);
        this.hoverValue = Math.ceil(this.nzValue);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onBlur(e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        this.ulElement.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.ulElement.nativeElement.blur();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const oldVal = this.nzValue;
        if (e.keyCode === RIGHT_ARROW && this.nzValue < this.nzCount) {
            this.nzValue += this.nzAllowHalf ? 0.5 : 1;
        }
        else if (e.keyCode === LEFT_ARROW && this.nzValue > 0) {
            this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
        }
        if (oldVal !== this.nzValue) {
            this.onChange(this.nzValue);
            this.nzOnKeyDown.emit(e);
            this.cdr.markForCheck();
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setClasses(i) {
        return {
            [`${this.innerPrefixCls}-full`]: i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-half`]: this.hasHalf && i + 1 === this.hoverValue,
            [`${this.innerPrefixCls}-active`]: this.hasHalf && i + 1 === this.hoverValue,
            [`${this.innerPrefixCls}-zero`]: i + 1 > this.hoverValue,
            [`${this.innerPrefixCls}-focused`]: this.hasHalf && i + 1 === this.hoverValue && this.isFocused
        };
    }
    /**
     * @private
     * @return {?}
     */
    updateStarArray() {
        this.starArray = Array(this.nzCount)
            .fill(0)
            .map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => i));
    }
    // #region Implement `ControlValueAccessor`
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.nzValue = value || 0;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
NzRateComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-rate',
                exportAs: 'nzRate',
                preserveWhitespaces: false,
                template: "<ul #ulElement\n  class=\"ant-rate\"\n  [class.ant-rate-disabled]=\"nzDisabled\"\n  [ngClass]=\"classMap\"\n  (blur)=\"onBlur($event)\"\n  (focus)=\"onFocus($event)\"\n  (keydown)=\"onKeyDown($event); $event.preventDefault();\"\n  (mouseleave)=\"onRateLeave(); $event.stopPropagation();\"\n  [tabindex]=\"nzDisabled ? -1 : 1\">\n  <li *ngFor=\"let star of starArray; let i = index\"\n    class=\"ant-rate-star\"\n    [ngClass]=\"setClasses(star)\"\n    nz-tooltip\n    [nzTitle]=\"nzTooltips[ i ]\">\n    <div nz-rate-item\n      [allowHalf]=\"nzAllowHalf\"\n      [character]=\"nzCharacter\"\n      (itemHover)=\"onItemHover(i, $event)\"\n      (itemClick)=\"onItemClick(i, $event)\">\n    </div>\n  </li>\n</ul>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzRateComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzRateComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzRateComponent.propDecorators = {
    ulElement: [{ type: ViewChild, args: ['ulElement', { static: false },] }],
    nzAllowClear: [{ type: Input }],
    nzAllowHalf: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzCharacter: [{ type: Input }],
    nzTooltips: [{ type: Input }],
    nzOnBlur: [{ type: Output }],
    nzOnFocus: [{ type: Output }],
    nzOnHoverChange: [{ type: Output }],
    nzOnKeyDown: [{ type: Output }],
    nzCount: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzAllowHalf", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzRateComponent.prototype, "nzAutoFocus", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.ulElement;
    /** @type {?} */
    NzRateComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzRateComponent.prototype.nzAllowHalf;
    /** @type {?} */
    NzRateComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRateComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzCharacter;
    /** @type {?} */
    NzRateComponent.prototype.nzTooltips;
    /** @type {?} */
    NzRateComponent.prototype.nzOnBlur;
    /** @type {?} */
    NzRateComponent.prototype.nzOnFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzOnHoverChange;
    /** @type {?} */
    NzRateComponent.prototype.nzOnKeyDown;
    /** @type {?} */
    NzRateComponent.prototype.classMap;
    /** @type {?} */
    NzRateComponent.prototype.hasHalf;
    /** @type {?} */
    NzRateComponent.prototype.hoverValue;
    /** @type {?} */
    NzRateComponent.prototype.prefixCls;
    /** @type {?} */
    NzRateComponent.prototype.innerPrefixCls;
    /** @type {?} */
    NzRateComponent.prototype.isFocused;
    /** @type {?} */
    NzRateComponent.prototype.isInit;
    /** @type {?} */
    NzRateComponent.prototype.starArray;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype._count;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype._value;
    /** @type {?} */
    NzRateComponent.prototype.onChange;
    /** @type {?} */
    NzRateComponent.prototype.onTouched;
    /** @type {?} */
    NzRateComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3JhdGUvIiwic291cmNlcyI6WyJuei1yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUV0Rix3QkFBd0IsR0FBRyxNQUFNO0FBaUJ2QyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBc0QxQixZQUFtQixlQUFnQyxFQUFVLFFBQW1CLEVBQVUsR0FBc0I7UUFBN0Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakR2RixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdDLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJ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QUFFLFlBQVksRUFBRTs7cURBQXVCO0FBQ3JCO0lBQTVELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBRSxZQUFZLEVBQUU7O29EQUFzQjtBQUNsRTtJQUFmLFlBQVksRUFBRTs7bURBQTZCO0FBQzVCO0lBQWYsWUFBWSxFQUFFOztvREFBOEI7Ozs7OztJQUx0RCxvQ0FBeUU7O0lBRXpFLHVDQUEyRjs7SUFDM0Ysc0NBQTJGOztJQUMzRixxQ0FBcUQ7O0lBQ3JELHNDQUFzRDs7SUFDdEQsc0NBQXdDOztJQUN4QyxxQ0FBbUM7O0lBQ25DLG1DQUE2RDs7SUFDN0Qsb0NBQThEOztJQUM5RCwwQ0FBZ0U7O0lBQ2hFLHNDQUFtRTs7SUFFbkUsbUNBQXNCOztJQUN0QixrQ0FBZ0I7O0lBQ2hCLHFDQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIseUNBQTBDOztJQUMxQyxvQ0FBa0I7O0lBQ2xCLGlDQUFlOztJQUNmLG9DQUF5Qjs7Ozs7SUFFekIsbUNBQXVDOzs7OztJQUN2QyxpQ0FBbUI7Ozs7O0lBQ25CLGlDQUFtQjs7SUFtS25CLG1DQUErQzs7SUFDL0Msb0NBQW1DOztJQXZJdkIsMENBQXVDOzs7OztJQUFFLG1DQUEyQjs7Ozs7SUFBRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3JhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcmF0ZScsXG4gIGV4cG9ydEFzOiAnbnpSYXRlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSB1bEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0hhbGY6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNoYXJhY3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VG9vbHRpcHM6IHN0cmluZ1tdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlO1xuICBoYXNIYWxmID0gZmFsc2U7XG4gIGhvdmVyVmFsdWUgPSAwO1xuICBwcmVmaXhDbHMgPSAnYW50LXJhdGUnO1xuICBpbm5lclByZWZpeENscyA9IGAke3RoaXMucHJlZml4Q2xzfS1zdGFyYDtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2NvdW50ID0gNTtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fY291bnQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcbiAgfVxuXG4gIGdldCBuekNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG5cbiAgZ2V0IG56VmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgbnpWYWx1ZShpbnB1dDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSBpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbHVlID0gaW5wdXQ7XG4gICAgdGhpcy5oYXNIYWxmID0gIU51bWJlci5pc0ludGVnZXIoaW5wdXQpO1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IE1hdGguY2VpbChpbnB1dCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cyAmJiAhY2hhbmdlcy5uekF1dG9Gb2N1cy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xuXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gIH1cblxuICBvbkl0ZW1DbGljayhpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xuXG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBpc0hhbGYgPyBpbmRleCArIDAuNSA6IGluZGV4ICsgMTtcblxuICAgIGlmICh0aGlzLm56VmFsdWUgPT09IGFjdHVhbFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5uekFsbG93Q2xlYXIpIHtcbiAgICAgICAgdGhpcy5uelZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56VmFsdWUgPSBhY3R1YWxWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkl0ZW1Ib3ZlcihpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICh0aGlzLmhvdmVyVmFsdWUgPT09IGluZGV4ICsgMSAmJiBpc0hhbGYgPT09IHRoaXMuaGFzSGFsZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBpbmRleCArIDE7XG4gICAgdGhpcy5oYXNIYWxmID0gaXNIYWxmO1xuICAgIHRoaXMubnpPbkhvdmVyQ2hhbmdlLmVtaXQodGhpcy5ob3ZlclZhbHVlKTtcbiAgfVxuXG4gIG9uUmF0ZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzSGFsZiA9ICFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMubnpWYWx1ZSk7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gTWF0aC5jZWlsKHRoaXMubnpWYWx1ZSk7XG4gIH1cblxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5uek9uRm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIG9uQmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm56T25CbHVyLmVtaXQoZSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLm56VmFsdWU7XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVyAmJiB0aGlzLm56VmFsdWUgPCB0aGlzLm56Q291bnQpIHtcbiAgICAgIHRoaXMubnpWYWx1ZSArPSB0aGlzLm56QWxsb3dIYWxmID8gMC41IDogMTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVyAmJiB0aGlzLm56VmFsdWUgPiAwKSB7XG4gICAgICB0aGlzLm56VmFsdWUgLT0gdGhpcy5uekFsbG93SGFsZiA/IDAuNSA6IDE7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCAhPT0gdGhpcy5uelZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XG4gICAgICB0aGlzLm56T25LZXlEb3duLmVtaXQoZSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc2VzKGk6IG51bWJlcik6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mdWxsYF06IGkgKyAxIDwgdGhpcy5ob3ZlclZhbHVlIHx8ICghdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LWhhbGZgXTogdGhpcy5oYXNIYWxmICYmIGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUsXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tYWN0aXZlYF06IHRoaXMuaGFzSGFsZiAmJiBpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlLFxuICAgICAgW2Ake3RoaXMuaW5uZXJQcmVmaXhDbHN9LXplcm9gXTogaSArIDEgPiB0aGlzLmhvdmVyVmFsdWUsXG4gICAgICBbYCR7dGhpcy5pbm5lclByZWZpeENsc30tZm9jdXNlZGBdOiB0aGlzLmhhc0hhbGYgJiYgaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmlzRm9jdXNlZFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXJBcnJheSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJBcnJheSA9IEFycmF5KHRoaXMubnpDb3VudClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKChfLCBpKSA9PiBpKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gSW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmBcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5uelZhbHVlID0gdmFsdWUgfHwgMDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=