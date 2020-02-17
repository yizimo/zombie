import { __decorate, __metadata } from 'tslib';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input, TemplateRef, NgModule } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig, InputNumber, InputBoolean } from 'ng-zorro-antd/core';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-spin.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.subscribeLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.loading = data;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.unsubscribeLoading = /**
     * @return {?}
     */
    function () {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    };
    NzSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-spin',
                    exportAs: 'nzSpin',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #defaultIndicatorTemplate>\n  <span class=\"ant-spin-dot\" [class.ant-spin-dot-spin]=\"loading\">\n    <i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i>\n  </span>\n</ng-template>\n<div *ngIf=\"loading\">\n  <div class=\"ant-spin\"\n    [class.ant-spin-spinning]=\"loading\"\n    [class.ant-spin-lg]=\"nzSize === 'large'\"\n    [class.ant-spin-sm]=\"nzSize === 'small'\"\n    [class.ant-spin-show-text]=\"nzTip\">\n    <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\n    <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n  </div>\n</div>\n<div *ngIf=\"!nzSimple\"\n  class=\"ant-spin-container\"\n  [class.ant-spin-blur]=\"loading\">\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.ant-spin-nested-loading]': '!nzSimple'
                    },
                    styles: ["\n      nz-spin {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzSpinComponent.propDecorators = {
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", TemplateRef)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
    return NzSpinComponent;
}());
if (false) {
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading_;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-spin.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSpinModule = /** @class */ (function () {
    function NzSpinModule() {
    }
    NzSpinModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzSpinComponent],
                    declarations: [NzSpinComponent],
                    imports: [CommonModule, ObserversModule]
                },] }
    ];
    return NzSpinModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-spin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSpinComponent, NzSpinModule };
//# sourceMappingURL=ng-zorro-antd-spin.js.map
