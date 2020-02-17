import { __extends, __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Host, Optional, Input, Output, Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, NgModule } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective, InputBoolean, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent, NzTooltipBaseDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { takeUntil } from 'rxjs/operators';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-popconfirm.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopconfirmComponent = /** @class */ (function (_super) {
    __extends(NzPopconfirmComponent, _super);
    function NzPopconfirmComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzOkType = 'primary';
        _this.nzCondition = false;
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this._prefix = 'ant-popover-placement';
        _this._trigger = 'click';
        _this._hasBackdrop = true;
        return _this;
    }
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.nzCondition) {
            _super.prototype.show.call(this);
        }
        else {
            this.onConfirm();
        }
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.nzOnCancel.emit();
        _super.prototype.hide.call(this);
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.nzOnConfirm.emit();
        _super.prototype.hide.call(this);
    };
    NzPopconfirmComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-popconfirm',
                    exportAs: 'nzPopconfirmComponent',
                    preserveWhitespaces: false,
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"_visible\">\n  <div class=\"ant-popover\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div>\n          <div class=\"ant-popover-inner-content\">\n            <div class=\"ant-popover-message\">\n              <ng-container *nzStringTemplateOutlet=\"title\">\n                <ng-container *nzStringTemplateOutlet=\"nzIcon\">\n                  <i nz-icon [nzType]=\"nzIcon || 'exclamation-circle'\" nzTheme=\"fill\"></i>\n                </ng-container>\n                <div class=\"ant-popover-message-title\">{{ title }}</div>\n              </ng-container>\n            </div>\n            <div class=\"ant-popover-buttons\">\n              <button nz-button [nzSize]=\"'small'\" (click)=\"onCancel()\">\n                <ng-container *ngIf=\"nzCancelText\">{{ nzCancelText }}</ng-container>\n                <ng-container *ngIf=\"!nzCancelText\">{{ 'Modal.cancelText' | nzI18n }}</ng-container>\n              </button>\n              <button nz-button [nzSize]=\"'small'\" [nzType]=\"nzOkType\" (click)=\"onConfirm()\">\n                <ng-container *ngIf=\"nzOkText\">{{ nzOkText }}</ng-container>\n                <ng-container *ngIf=\"!nzOkText\">{{ 'Modal.okText' | nzI18n }}</ng-container>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    providers: [
                        {
                            provide: NzTooltipBaseComponentLegacy,
                            useExisting: NzPopconfirmComponent
                        }
                    ],
                    styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzPopconfirmComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmComponent.propDecorators = {
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPopconfirmComponent.prototype, "nzCondition", void 0);
    return NzPopconfirmComponent;
}(NzToolTipComponent));
if (false) {
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopconfirmComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-popconfirm.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopconfirmDirective = /** @class */ (function (_super) {
    __extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        _this.nzTrigger = 'click';
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        _this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon'
        ];
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @protected
     * @return {?}
     */
    NzPopconfirmDirective.prototype.createDynamicTooltipComponent = /**
     * @override
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.createDynamicTooltipComponent.call(this);
        ((/** @type {?} */ (this.tooltip))).nzOnCancel.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnCancel.emit();
        }));
        ((/** @type {?} */ (this.tooltip))).nzOnConfirm.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzOnConfirm.emit();
        }));
    };
    NzPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popconfirm]',
                    exportAs: 'nzPopconfirm',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipComponentVisible'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopconfirmComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmDirective.propDecorators = {
        specificTitle: [{ type: Input, args: ['nzPopconfirmTitle',] }],
        directiveNameTitle: [{ type: Input, args: ['nz-popconfirm',] }],
        specificTrigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
        specificPlacement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzPopconfirmDirective.prototype, "nzCondition", void 0);
    return NzPopconfirmDirective;
}(NzTooltipBaseDirective));
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzPopconfirmDirective.prototype.nzTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-popconfirm.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopconfirmModule = /** @class */ (function () {
    function NzPopconfirmModule() {
    }
    NzPopconfirmModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                    exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                    imports: [
                        CommonModule,
                        NzButtonModule,
                        OverlayModule,
                        NzI18nModule,
                        NzIconModule,
                        NzAddOnModule,
                        NzOverlayModule,
                        NzNoAnimationModule,
                        NzToolTipModule
                    ],
                    entryComponents: [NzPopconfirmComponent]
                },] }
    ];
    return NzPopconfirmModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-popconfirm.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzPopconfirmComponent, NzPopconfirmDirective, NzPopconfirmModule };
//# sourceMappingURL=ng-zorro-antd-popconfirm.js.map
