/**
 * @fileoverview added by tsickle
 * Generated from: nz-form-control.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { helpMotion, toBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
var NzFormControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormControlComponent, _super);
    function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.nzFormItemComponent = nzFormItemComponent;
        _this.cdr = cdr;
        _this._hasFeedback = false;
        _this.validateChanges = Subscription.EMPTY;
        _this.status = null;
        _this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
        return _this;
    }
    Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFeedback;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof FormControl || value instanceof NgModel) {
                this.validateControl = value;
                this.validateString = null;
                this.watchControl();
            }
            else if (value instanceof FormControlName) {
                this.validateControl = value.control;
                this.validateString = null;
                this.watchControl();
            }
            else {
                this.validateString = value;
                this.validateControl = null;
                this.setControlClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.removeSubscribe = /**
     * @return {?}
     */
    function () {
        this.validateChanges.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.watchControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.setControlClassMap();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NzFormControlComponent.prototype.validateControlStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return (/** @type {?} */ ((!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status)));
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.setControlClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.status === 'warning',
            _a["is-validating"] = this.status === 'validating',
            _a["has-error"] = this.status === 'error',
            _a["has-success"] = this.status === 'success',
            _a["has-feedback"] = this.nzHasFeedback && this.status,
            _a);
    };
    Object.defineProperty(NzFormControlComponent.prototype, "hasTips", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showSuccessTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status === 'success' && !!this.nzSuccessTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showWarningTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status === 'warning' && !!this.nzWarningTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showErrorTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status === 'error' && !!this.nzErrorTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showValidatingTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status === 'validating' && !!this.nzValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showInnerTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setControlClassMap();
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeSubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    NzFormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-control',
                    exportAs: 'nzFormControl',
                    preserveWhitespaces: false,
                    animations: [helpMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n    <span class=\"ant-form-item-children-icon\">\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\n    </span>\n  </span>\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\n    <div @helpMotion>\n      <ng-container *ngIf=\"showSuccessTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuccessTip;context:{$implicit:validateControl};\">{{ nzSuccessTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showWarningTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzWarningTip;context:{$implicit:validateControl};\">{{ nzWarningTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showErrorTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzErrorTip;context:{$implicit:validateControl};\">{{ nzErrorTip }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"showValidatingTip\">\n        <ng-container *nzStringTemplateOutlet=\"nzValidatingTip;context:{$implicit:validateControl};\">{{ nzValidatingTip }}</ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content *ngIf=\"!hasTips\" select=\"nz-form-explain\"></ng-content>\n  <ng-content *ngIf=\"!nzExtra\" select=\"nz-form-extra\"></ng-content>\n  <div class=\"ant-form-extra\" *ngIf=\"nzExtra\">\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n  </div>\n</div>",
                    styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzFormControlComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    NzFormControlComponent.propDecorators = {
        defaultValidateControl: [{ type: ContentChild, args: [NgControl, { static: false },] }],
        nzSuccessTip: [{ type: Input }],
        nzWarningTip: [{ type: Input }],
        nzErrorTip: [{ type: Input }],
        nzValidatingTip: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzHasFeedback: [{ type: Input }],
        nzValidateStatus: [{ type: Input }]
    };
    return NzFormControlComponent;
}(NzColDirective));
export { NzFormControlComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype._hasFeedback;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.validateChanges;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.validateString;
    /** @type {?} */
    NzFormControlComponent.prototype.validateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.status;
    /** @type {?} */
    NzFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    NzFormControlComponent.prototype.iconType;
    /** @type {?} */
    NzFormControlComponent.prototype.defaultValidateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.nzSuccessTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzWarningTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzErrorTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzValidatingTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzExtra;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.nzFormItemComponent;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFlLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUkvRDtJQW9CNEMsa0RBQWM7SUF5SHhELGdDQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNNLG1CQUF3QyxFQUNoRCxjQUE4QixFQUMxQyxHQUFzQixFQUM5QixRQUFtQjtRQU5yQixZQVFFLGtCQUFNLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsSUFBSSxjQUFjLEVBQUUsUUFBUSxDQUFDLFNBRTdGO1FBUDZCLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFFNUQsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUE1SHhCLGtCQUFZLEdBQUcsS0FBSyxD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aURBQThDOztJQUM5Qyx3Q0FBdUM7O0lBQ3ZDLGlEQUFrQzs7SUFDbEMsMENBQWlCOztJQUNqQix3REFBMkc7O0lBQzNHLDhDQUFrRjs7SUFDbEYsOENBQWtGOztJQUNsRiw0Q0FBZ0Y7O0lBQ2hGLGlEQUFxRjs7SUFDckYseUNBQTZDOzs7OztJQThHM0MscURBQW9FOzs7OztJQUVwRSxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgTmdDb250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGhlbHBNb3Rpb24sIHRvQm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJ3dhcm5pbmcnIHwgJ3ZhbGlkYXRpbmcnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyB8IG51bGw7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWZvcm0tY29udHJvbCcsXG4gIGV4cG9ydEFzOiAnbnpGb3JtQ29udHJvbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotZm9ybS1jb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBmb3JtIC5oYXMtZmVlZGJhY2sgLmFudC1pbnB1dC1zdWZmaXggaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIE56Q29sRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2hhc0ZlZWRiYWNrID0gZmFsc2U7XG4gIHByaXZhdGUgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgdmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbDtcbiAgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9IG51bGw7XG4gIGNvbnRyb2xDbGFzc01hcDogTmdDbGFzc1R5cGUgPSB7fTtcbiAgaWNvblR5cGU6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZChOZ0NvbnRyb2wsIHsgc3RhdGljOiBmYWxzZSB9KSBkZWZhdWx0VmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbE5hbWUgfCBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgbnpTdWNjZXNzVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBueldhcm5pbmdUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XG4gIEBJbnB1dCgpIG56RXJyb3JUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XG4gIEBJbnB1dCgpIG56VmFsaWRhdGluZ1RpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcbiAgQElucHV0KCkgbnpFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56SGFzRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekhhc0ZlZWRiYWNrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelZhbGlkYXRlU3RhdHVzKHZhbHVlOiBzdHJpbmcgfCBGb3JtQ29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE5nTW9kZWwpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sTmFtZSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZS5jb250cm9sO1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IG51bGw7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVDb250cm9sU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghIXRoaXMudmFsaWRhdGVDb250cm9sICYmXG4gICAgICAodGhpcy52YWxpZGF0ZUNvbnRyb2wuZGlydHkgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2wudG91Y2hlZCkgJiZcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1cyA9PT0gc3RhdHVzKSBhcyBib29sZWFuO1xuICB9XG5cbiAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnd2FybmluZycpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3dhcm5pbmcnO1xuICAgICAgdGhpcy5pY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCc7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd2YWxpZGF0aW5nJyB8fFxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpXG4gICAgKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9ICd2YWxpZGF0aW5nJztcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnbG9hZGluZyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJykpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IG51bGw7XG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc1RpcHMpIHtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRXaXRoSGVscFZpYVRpcHModGhpcy5zaG93RXJyb3JUaXApO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2xDbGFzc01hcCA9IHtcbiAgICAgIFtgaGFzLXdhcm5pbmdgXTogdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJyxcbiAgICAgIFtgaXMtdmFsaWRhdGluZ2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnLFxuICAgICAgW2BoYXMtZXJyb3JgXTogdGhpcy5zdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICBbYGhhcy1zdWNjZXNzYF06IHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycsXG4gICAgICBbYGhhcy1mZWVkYmFja2BdOiB0aGlzLm56SGFzRmVlZGJhY2sgJiYgdGhpcy5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGhhc1RpcHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMubnpTdWNjZXNzVGlwIHx8IHRoaXMubnpXYXJuaW5nVGlwIHx8IHRoaXMubnpFcnJvclRpcCB8fCB0aGlzLm56VmFsaWRhdGluZ1RpcCk7XG4gIH1cblxuICBnZXQgc2hvd1N1Y2Nlc3NUaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgISF0aGlzLm56U3VjY2Vzc1RpcDtcbiAgfVxuXG4gIGdldCBzaG93V2FybmluZ1RpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJyAmJiAhIXRoaXMubnpXYXJuaW5nVGlwO1xuICB9XG5cbiAgZ2V0IHNob3dFcnJvclRpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdlcnJvcicgJiYgISF0aGlzLm56RXJyb3JUaXA7XG4gIH1cblxuICBnZXQgc2hvd1ZhbGlkYXRpbmdUaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAndmFsaWRhdGluZycgJiYgISF0aGlzLm56VmFsaWRhdGluZ1RpcDtcbiAgfVxuXG4gIGdldCBzaG93SW5uZXJUaXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1N1Y2Nlc3NUaXAgfHwgdGhpcy5zaG93V2FybmluZ1RpcCB8fCB0aGlzLnNob3dFcnJvclRpcCB8fCB0aGlzLnNob3dWYWxpZGF0aW5nVGlwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpGb3JtSXRlbUNvbXBvbmVudDogTnpGb3JtSXRlbUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbERpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLm56VmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wuY29udHJvbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cbn1cbiJdfQ==