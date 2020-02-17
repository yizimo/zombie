/**
 * @fileoverview added by tsickle
 * Generated from: nz-radio-group.component.ts
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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateChildrenStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                function (radio) {
                    radio.checked = radio.nzValue === _this.value;
                    if (isNotNil(_this.nzDisabled)) {
                        radio.nzDisabled = _this.nzDisabled;
                    }
                    if (_this.nzName) {
                        radio.name = _this.nzName;
                    }
                    radio.markForCheck();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.select$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                if (_this.value !== radio.nzValue) {
                    _this.value = radio.nzValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            }));
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.touched$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }));
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioGroupComponent.prototype.writeValue = /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-radio-group',
                    exportAs: 'nzRadioGroup',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioGroupComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group-large]': "nzSize === 'large'",
                        '[class.ant-radio-group-small]': "nzSize === 'small'",
                        '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzRadioGroupComponent.propDecorators = {
        radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return NzRadioComponent; })), { descendants: true },] }],
        nzDisabled: [{ type: Input }],
        nzButtonStyle: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzName: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
}());
export { NzRadioGroupComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.selectSubscription;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.touchedSubscription;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.radios;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzName;
    /**
     * @type {?}
     * @private
     */
    NzRadioGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJeEQ7SUFtREUsK0JBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTVCbEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHakMsYUFBUTs7O1FBQXdCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBQzNDLGNBQVM7OztRQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBRzFCLGtCQUFhLEdBQXVCLFNBQVMsQ0FBQztRQUM5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQXFCekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJ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QStCLEVBQUUsMkJBQTJCO3FCQUM3RDtpQkFDRjs7OztnQkF6Q0MsaUJBQWlCO2dCQVFqQixTQUFTO2dCQUxULFVBQVU7Ozt5QkErQ1QsZUFBZSxTQUFDLFVBQVU7OztvQkFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7NkJBQ3pFLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBSG1CO1FBQWYsWUFBWSxFQUFFOzs2REFBcUI7SUF1Ri9DLDRCQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FoR1kscUJBQXFCOzs7Ozs7SUFFaEMsc0NBQW1COzs7OztJQUNuQix5Q0FBaUM7Ozs7O0lBQ2pDLG1EQUF5Qzs7Ozs7SUFDekMsb0RBQTBDOztJQUMxQyx5Q0FBMkM7O0lBQzNDLDBDQUFtQzs7SUFDbkMsdUNBQWdIOztJQUNoSCwyQ0FBNkM7O0lBQzdDLDhDQUF1RDs7SUFDdkQsdUNBQTJDOztJQUMzQyx1Q0FBd0I7Ozs7O0lBbUJaLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnIHwgJ3NvbGlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcmFkaW8tZ3JvdXAnLFxuICBleHBvcnRBczogJ256UmFkaW9Hcm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmFkaW8tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvR3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1sYXJnZV0nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zbWFsbF0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZF0nOiBgbnpCdXR0b25TdHlsZSA9PT0gJ3NvbGlkJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgc2VsZWN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG91Y2hlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSByYWRpb3M6IFF1ZXJ5TGlzdDxOelJhZGlvQ29tcG9uZW50PjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56QnV0dG9uU3R5bGU6IE56UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJztcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuek5hbWU6IHN0cmluZztcblxuICB1cGRhdGVDaGlsZHJlblN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcbiAgICAgICAgICByYWRpby5jaGVja2VkID0gcmFkaW8ubnpWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5uekRpc2FibGVkKSkge1xuICAgICAgICAgICAgcmFkaW8ubnpEaXNhYmxlZCA9IHRoaXMubnpEaXNhYmxlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMubnpOYW1lKSB7XG4gICAgICAgICAgICByYWRpby5uYW1lID0gdGhpcy5uek5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJhZGlvLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby1ncm91cCcpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmFkaW9zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9zLm1hcChyYWRpbyA9PiByYWRpby5zZWxlY3QkKSlcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZShyYWRpbyA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gcmFkaW8ubnpWYWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gcmFkaW8ubnpWYWx1ZTtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xuICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy50b3VjaGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgdGhpcy50b3VjaGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaGVkU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5yYWRpb3MubWFwKHJhZGlvID0+IHJhZGlvLnRvdWNoZWQkKSlcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCB8fCBjaGFuZ2VzLm56TmFtZSkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=