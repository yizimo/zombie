/**
 * @fileoverview added by tsickle
 * Generated from: nz-autosize.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { NzDomEventService } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function AutoSizeType() { }
if (false) {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isAutoSizeType(value) {
    return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
}
var NzAutosizeDirective = /** @class */ (function () {
    function NzAutosizeDirective(elementRef, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    Object.defineProperty(NzAutosizeDirective.prototype, "nzAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this.autosize = true;
            }
            else if (isAutoSizeType(value)) {
                this.autosize = value;
                this.minRows = value.minRows;
                this.maxRows = value.maxRows;
                this.setMaxHeight();
                this.setMinHeight();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzAutosizeDirective.prototype.resizeToFitContent = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = (/** @type {?} */ (this.el));
        /** @type {?} */
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                }));
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutosizeDirective.prototype.cacheTextareaLineHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        var textareaClone = (/** @type {?} */ (this.el.cloneNode(false)));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        (/** @type {?} */ (this.el.parentNode)).appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        (/** @type {?} */ (this.el.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMinHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMaxHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.noopInputHandler = /**
     * @return {?}
     */
    function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.resizeToFitContent(true); }));
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    NzAutosizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[nzAutosize]',
                    exportAs: 'nzAutosize',
                    host: {
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        rows: '1',
                        '(input)': 'noopInputHandler()'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutosizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService }
    ]; };
    NzAutosizeDirective.propDecorators = {
        nzAutosize: [{ type: Input }]
    };
    return NzAutosizeDirective;
}());
export { NzAutosizeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.cachedLineHeight;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousMinRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.minRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.maxRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.inputGap;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWF1dG9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFpQixTQUFTLEVBQVcsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXZELGtDQUdDOzs7SUFGQywrQkFBaUI7O0lBQ2pCLCtCQUFpQjs7Ozs7O0FBR25CLE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBc0M7SUFDbkUsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RyxDQUFDO0FBRUQ7SUEwSkUsNkJBQ1UsVUFBc0IsRUFDdEIsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLGlCQUFvQztRQUhwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFuSnRDLGFBQVEsR0FBMkIsS0FBSyxDQUFDO1FBQ3pDLE9BQUUsR0FBMkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFNM0UsYUFBUSxHQUFHLElBQUks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Ozs7SUFDOUIscUNBQXNCOzs7OztJQUN0Qix1Q0FBMEI7Ozs7O0lBQzFCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9TaXplVHlwZSB7XG4gIG1pblJvd3M/OiBudW1iZXI7XG4gIG1heFJvd3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0F1dG9TaXplVHlwZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSk6IHZhbHVlIGlzIEF1dG9TaXplVHlwZSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nICYmICghIXZhbHVlLm1heFJvd3MgfHwgISF2YWx1ZS5taW5Sb3dzKTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbbnpBdXRvc2l6ZV0nLFxuICBleHBvcnRBczogJ256QXV0b3NpemUnLFxuICBob3N0OiB7XG4gICAgLy8gVGV4dGFyZWEgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBkaXJlY3RpdmUgYXBwbGllZCBzaG91bGQgaGF2ZSBhIHNpbmdsZSByb3cgYnkgZGVmYXVsdC5cbiAgICAvLyBCcm93c2VycyBub3JtYWxseSBzaG93IHR3byByb3dzIGJ5IGRlZmF1bHQgYW5kIHRoZXJlZm9yZSB0aGlzIGxpbWl0cyB0aGUgbWluUm93cyBiaW5kaW5nLlxuICAgIHJvd3M6ICcxJyxcbiAgICAnKGlucHV0KSc6ICdub29wSW5wdXRIYW5kbGVyKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvc2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gIHByaXZhdGUgYXV0b3NpemU6IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbDogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBjYWNoZWRMaW5lSGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHByZXZpb3VzTWluUm93czogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIG1pblJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBtYXhSb3dzOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGlucHV0R2FwID0gMTA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b3NpemUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpc0F1dG9TaXplVHlwZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubWluUm93cyA9IHZhbHVlLm1pblJvd3M7XG4gICAgICB0aGlzLm1heFJvd3MgPSB2YWx1ZS5tYXhSb3dzO1xuICAgICAgdGhpcy5zZXRNYXhIZWlnaHQoKTtcbiAgICAgIHRoaXMuc2V0TWluSGVpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56QXV0b3NpemUoKTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b3NpemU7XG4gIH1cblxuICByZXNpemVUb0ZpdENvbnRlbnQoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVUZXh0YXJlYUxpbmVIZWlnaHQoKTtcblxuICAgIC8vIElmIHdlIGhhdmVuJ3QgZGV0ZXJtaW5lZCB0aGUgbGluZS1oZWlnaHQgeWV0LCB3ZSBrbm93IHdlJ3JlIHN0aWxsIGhpZGRlbiBhbmQgdGhlcmUncyBubyBwb2ludFxuICAgIC8vIGluIGNoZWNraW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRleHRhcmVhLlxuICAgIGlmICghdGhpcy5jYWNoZWRMaW5lSGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZTtcblxuICAgIC8vIE9ubHkgcmVzaXplIGlmIHRoZSB2YWx1ZSBvciBtaW5Sb3dzIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGVzZSBjYWxjdWxhdGlvbnMgY2FuIGJlIGV4cGVuc2l2ZS5cbiAgICBpZiAoIWZvcmNlICYmIHRoaXMubWluUm93cyA9PT0gdGhpcy5wcmV2aW91c01pblJvd3MgJiYgdmFsdWUgPT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSB0ZXh0YXJlYS5wbGFjZWhvbGRlcjtcblxuICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBoZWlnaHQgdG8gYXV0byBpbiBvcmRlciB0byBzaHJpbmsgYmFjayB0byBpdHMgZGVmYXVsdCBzaXplLlxuICAgIC8vIEFsc28gdGVtcG9yYXJpbHkgZm9yY2Ugb3ZlcmZsb3c6aGlkZGVuLCBzbyBzY3JvbGwgYmFycyBkbyBub3QgaW50ZXJmZXJlIHdpdGggY2FsY3VsYXRpb25zLlxuICAgIC8vIExvbmcgcGxhY2Vob2xkZXJzIHRoYXQgYXJlIHdpZGVyIHRoYW4gdGhlIHRleHRhcmVhIHdpZHRoIG1heSBsZWFkIHRvIGEgYmlnZ2VyIHNjcm9sbEhlaWdodFxuICAgIC8vIHZhbHVlLiBUbyBlbnN1cmUgdGhhdCB0aGUgc2Nyb2xsSGVpZ2h0IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgY29udGVudCwgdGhlIHBsYWNlaG9sZGVyc1xuICAgIC8vIG5lZWQgdG8gYmUgcmVtb3ZlZCB0ZW1wb3JhcmlseS5cbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nJyk7XG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnJztcbiAgICBjb25zdCBoZWlnaHQgPVxuICAgICAgTWF0aC5yb3VuZCgodGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5pbnB1dEdhcCkgLyB0aGlzLmNhY2hlZExpbmVIZWlnaHQpICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICtcbiAgICAgIHRoaXMuaW5wdXRHYXA7XG5cbiAgICAvLyBVc2UgdGhlIHNjcm9sbEhlaWdodCB0byBrbm93IGhvdyBsYXJnZSB0aGUgdGV4dGFyZWEgKndvdWxkKiBiZSBpZiBmaXQgaXRzIGVudGlyZSB2YWx1ZS5cbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcnKTtcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyVGV4dDtcblxuICAgIC8vIE9uIEZpcmVmb3ggcmVzaXppbmcgdGhlIHRleHRhcmVhIHdpbGwgcHJldmVudCBpdCBmcm9tIHNjcm9sbGluZyB0byB0aGUgY2FyZXQgcG9zaXRpb24uXG4gICAgLy8gV2UgbmVlZCB0byByZS1zZXQgdGhlIHNlbGVjdGlvbiBpbiBvcmRlciBmb3IgaXQgdG8gc2Nyb2xsIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24uXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gdGV4dGFyZWE7XG5cbiAgICAgICAgICAvLyBJRSB3aWxsIHRocm93IGFuIFwiVW5zcGVjaWZpZWQgZXJyb3JcIiBpZiB3ZSB0cnkgdG8gc2V0IHRoZSBzZWxlY3Rpb24gcmFuZ2UgYWZ0ZXIgdGhlXG4gICAgICAgICAgLy8gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS4gQXNzZXJ0IHRoYXQgdGhlIGRpcmVjdGl2ZSBoYXNuJ3QgYmVlbiBkZXN0cm95ZWRcbiAgICAgICAgICAvLyBiZXR3ZWVuIHRoZSB0aW1lIHdlIHJlcXVlc3RlZCB0aGUgYW5pbWF0aW9uIGZyYW1lIGFuZCB3aGVuIGl0IHdhcyBleGVjdXRlZC5cbiAgICAgICAgICAvLyBBbHNvIG5vdGUgdGhhdCB3ZSBoYXZlIHRvIGFzc2VydCB0aGF0IHRoZSB0ZXh0YXJlYSBpcyBmb2N1c2VkIGJlZm9yZSB3ZSBzZXQgdGhlXG4gICAgICAgICAgLy8gc2VsZWN0aW9uIHJhbmdlLiBTZXR0aW5nIHRoZSBzZWxlY3Rpb24gcmFuZ2Ugb24gYSBub24tZm9jdXNlZCB0ZXh0YXJlYSB3aWxsIGNhdXNlXG4gICAgICAgICAgLy8gaXQgdG8gcmVjZWl2ZSBmb2N1cyBvbiBJRSBhbmQgRWRnZS5cbiAgICAgICAgICBpZiAoIXRoaXMuZGVzdHJveSQuaXNTdG9wcGVkICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRleHRhcmVhKSB7XG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucHJldmlvdXNNaW5Sb3dzID0gdGhpcy5taW5Sb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWNoZVRleHRhcmVhTGluZUhlaWdodCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID49IDAgfHwgIXRoaXMuZWwucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZSBhIGNsb25lIGVsZW1lbnQgYmVjYXVzZSB3ZSBoYXZlIHRvIG92ZXJyaWRlIHNvbWUgc3R5bGVzLlxuICAgIGNvbnN0IHRleHRhcmVhQ2xvbmUgPSB0aGlzLmVsLmNsb25lTm9kZShmYWxzZSkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICB0ZXh0YXJlYUNsb25lLnJvd3MgPSAxO1xuXG4gICAgLy8gVXNlIGBwb3NpdGlvbjogYWJzb2x1dGVgIHNvIHRoYXQgdGhpcyBkb2Vzbid0IGNhdXNlIGEgYnJvd3NlciBsYXlvdXQgYW5kIHVzZVxuICAgIC8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIHNvIHRoYXQgbm90aGluZyBpcyByZW5kZXJlZC4gQ2xlYXIgYW55IG90aGVyIHN0eWxlcyB0aGF0XG4gICAgLy8gd291bGQgYWZmZWN0IHRoZSBoZWlnaHQuXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5taW5IZWlnaHQgPSAnJztcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuXG4gICAgLy8gSW4gRmlyZWZveCBpdCBoYXBwZW5zIHRoYXQgdGV4dGFyZWEgZWxlbWVudHMgYXJlIGFsd2F5cyBiaWdnZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGFtb3VudFxuICAgIC8vIG9mIHJvd3MuIFRoaXMgaXMgYmVjYXVzZSBGaXJlZm94IHRyaWVzIHRvIGFkZCBleHRyYSBzcGFjZSBmb3IgdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyLlxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0aGF0IHJlbW92ZXMgdGhlIGV4dHJhIHNwYWNlIGZvciB0aGUgc2Nyb2xsYmFyLCB3ZSBjYW4ganVzdCBzZXQgb3ZlcmZsb3dcbiAgICAvLyB0byBoaWRkZW4uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlIGlzIG5vIGludmFsaWQgY2FsY3VsYXRpb24gb2YgdGhlIGxpbmUgaGVpZ2h0LlxuICAgIC8vIFNlZSBGaXJlZm94IGJ1ZyByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTMzNjU0XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgdGhpcy5lbC5wYXJlbnROb2RlIS5hcHBlbmRDaGlsZCh0ZXh0YXJlYUNsb25lKTtcbiAgICB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPSB0ZXh0YXJlYUNsb25lLmNsaWVudEhlaWdodCAtIHRoaXMuaW5wdXRHYXAgLSAxO1xuICAgIHRoaXMuZWwucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodGV4dGFyZWFDbG9uZSk7XG5cbiAgICAvLyBNaW4gYW5kIG1heCBoZWlnaHRzIGhhdmUgdG8gYmUgcmUtY2FsY3VsYXRlZCBpZiB0aGUgY2FjaGVkIGxpbmUgaGVpZ2h0IGNoYW5nZXNcbiAgICB0aGlzLnNldE1pbkhlaWdodCgpO1xuICAgIHRoaXMuc2V0TWF4SGVpZ2h0KCk7XG4gIH1cblxuICBzZXRNaW5IZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID1cbiAgICAgIHRoaXMubWluUm93cyAmJiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPyBgJHt0aGlzLm1pblJvd3MgKiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgKyB0aGlzLmlucHV0R2FwfXB4YCA6IG51bGw7XG5cbiAgICBpZiAobWluSGVpZ2h0KSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLm1pbkhlaWdodCA9IG1pbkhlaWdodDtcbiAgICB9XG4gIH1cblxuICBzZXRNYXhIZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID1cbiAgICAgIHRoaXMubWF4Um93cyAmJiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPyBgJHt0aGlzLm1heFJvd3MgKiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgKyB0aGlzLmlucHV0R2FwfXB4YCA6IG51bGw7XG5cbiAgICBpZiAobWF4SGVpZ2h0KSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBub29wSW5wdXRIYW5kbGVyKCk6IHZvaWQge1xuICAgIC8vIG5vLW9wIGhhbmRsZXIgdGhhdCBlbnN1cmVzIHdlJ3JlIHJ1bm5pbmcgY2hhbmdlIGRldGVjdGlvbiBvbiBpbnB1dCBldmVudHMuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XG4gICAgfVxuICB9XG59XG4iXX0=