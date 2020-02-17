import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { slideAlertMotion, NzConfigService, WithConfig, InputBoolean, NzAddOnModule } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'alert';
class NzAlertComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzType = 'info';
        this.nzBanner = false;
        this.nzOnClose = new EventEmitter();
        this.destroy = false;
        this.iconTheme = 'fill';
        this.isIconTypeObject = false;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.inferredIconType = 'info-circle';
    }
    /**
     * @return {?}
     */
    get iconType() {
        return this.nzIconType || this.inferredIconType;
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.destroy = true;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (this.destroy) {
            this.nzOnClose.emit(true);
        }
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
        switch (this.nzType) {
            case 'error':
                this.inferredIconType = 'close-circle';
                break;
            case 'success':
                this.inferredIconType = 'check-circle';
                break;
            case 'info':
                this.inferredIconType = 'info-circle';
                break;
            case 'warning':
                this.inferredIconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.nzDescription ? 'outline' : 'fill';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzShowIcon, nzDescription, nzType, nzBanner, nzIconType } = changes;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzDescription || nzType) {
            this.updateIconClassMap();
        }
        if (nzType) {
            this.isTypeSet = true;
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
        if (nzIconType) {
            this.isIconTypeObject = typeof nzIconType.currentValue === 'object';
        }
    }
}
NzAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-alert',
                exportAs: 'nzAlert',
                animations: [slideAlertMotion],
                template: "<div *ngIf=\"!destroy\"\n  class=\"ant-alert\"\n  [class.ant-alert-success]=\"nzType === 'success'\"\n  [class.ant-alert-info]=\"nzType === 'info'\"\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\n  [class.ant-alert-error]=\"nzType === 'error'\"\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\n  [class.ant-alert-banner]=\"nzBanner\"\n  [class.ant-alert-closable]=\"nzCloseable\"\n  [class.ant-alert-with-description]=\"!!nzDescription\"\n  [@slideAlertMotion]\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"nzShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"isIconTypeObject; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i nz-icon class=\"ant-alert-icon\" [nzType]=\"iconType\" [nzTheme]=\"iconTheme\"></i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n  </span>\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </span>\n  <a *ngIf=\"nzCloseable || nzCloseText\"\n    class=\"ant-alert-close-icon\"\n    (click)=\"closeAlert()\">\n    <ng-template #closeDefaultTemplate>\n      <i nz-icon nzType=\"close\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\n    </ng-container>\n  </a>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [`
      nz-alert {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzAlertComponent.ctorParameters = () => [
    { type: NzConfigService }
];
NzAlertComponent.propDecorators = {
    nzCloseText: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzMessage: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCloseable: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzBanner: [{ type: Input }],
    nzOnClose: [{ type: Output }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzCloseable", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAlertComponent.prototype, "nzBanner", void 0);
if (false) {
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.destroy;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.isIconTypeObject;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isTypeSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isShowIconSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.inferredIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAlertModule {
}
NzAlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzAlertComponent],
                exports: [NzAlertComponent],
                imports: [CommonModule, NzIconModule, NzAddOnModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAlertComponent, NzAlertModule };
//# sourceMappingURL=ng-zorro-antd-alert.js.map
