/**
 * @fileoverview added by tsickle
 * Generated from: nz-alert.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { slideAlertMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'alert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent(nzConfigService) {
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
    Object.defineProperty(NzAlertComponent.prototype, "iconType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzIconType || this.inferredIconType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.destroy) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner, nzIconType = changes.nzIconType;
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
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    exportAs: 'nzAlert',
                    animations: [slideAlertMotion],
                    template: "<div *ngIf=\"!destroy\"\n  class=\"ant-alert\"\n  [class.ant-alert-success]=\"nzType === 'success'\"\n  [class.ant-alert-info]=\"nzType === 'info'\"\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\n  [class.ant-alert-error]=\"nzType === 'error'\"\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\n  [class.ant-alert-banner]=\"nzBanner\"\n  [class.ant-alert-closable]=\"nzCloseable\"\n  [class.ant-alert-with-description]=\"!!nzDescription\"\n  [@slideAlertMotion]\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"nzShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"isIconTypeObject; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i nz-icon class=\"ant-alert-icon\" [nzType]=\"iconType\" [nzTheme]=\"iconTheme\"></i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n  </span>\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </span>\n  <a *ngIf=\"nzCloseable || nzCloseText\"\n    class=\"ant-alert-close-icon\"\n    (click)=\"closeAlert()\">\n    <ng-template #closeDefaultTemplate>\n      <i nz-icon nzType=\"close\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\n    </ng-container>\n  </a>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["\n      nz-alert {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAlertComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
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
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    return NzAlertComponent;
}());
export { NzAlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbIm56LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUV4Ryx3QkFBd0IsR0FBRyxPQUFPO0FBRXhDO0lBdUNFLDBCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFsQjFDLFdBQU0sR0FBNkMsTUFBTSxDQUFDO1FBRzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFNM0QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFXLGFBQWEsQ0FBQztJQUVLLENBQUM7SUFadkQsc0JBQUksc0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7Ozs7SUFZRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsOENBQW1COzs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNB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SUFFckMsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZUFsZXJ0TW90aW9uLCBJbnB1dEJvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYWxlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hbGVydCcsXG4gIGV4cG9ydEFzOiAnbnpBbGVydCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1hbGVydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpDbG9zZVRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekljb25UeXBlOiBOZ0NsYXNzVHlwZTtcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpEZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyA9ICdpbmZvJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2VhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SWNvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFubmVyID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZ2V0IGljb25UeXBlKCk6IE5nQ2xhc3NUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5uekljb25UeXBlIHx8IHRoaXMuaW5mZXJyZWRJY29uVHlwZTtcbiAgfVxuXG4gIGRlc3Ryb3kgPSBmYWxzZTtcbiAgaWNvblRoZW1lID0gJ2ZpbGwnO1xuICBpc0ljb25UeXBlT2JqZWN0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpc1R5cGVTZXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc1Nob3dJY29uU2V0ID0gZmFsc2U7XG4gIHByaXZhdGUgaW5mZXJyZWRJY29uVHlwZTogc3RyaW5nID0gJ2luZm8tY2lyY2xlJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xuICB9XG5cbiAgb25GYWRlQW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XG4gICAgICB0aGlzLm56T25DbG9zZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMubnpUeXBlKSB7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2luZm8tY2lyY2xlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmljb25UaGVtZSA9IHRoaXMubnpEZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U2hvd0ljb24sIG56RGVzY3JpcHRpb24sIG56VHlwZSwgbnpCYW5uZXIsIG56SWNvblR5cGUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpTaG93SWNvbikge1xuICAgICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobnpEZXNjcmlwdGlvbiB8fCBuelR5cGUpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gICAgfVxuXG4gICAgaWYgKG56VHlwZSkge1xuICAgICAgdGhpcy5pc1R5cGVTZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuekJhbm5lcikge1xuICAgICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xuICAgICAgICB0aGlzLm56VHlwZSA9ICd3YXJuaW5nJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pc1Nob3dJY29uU2V0KSB7XG4gICAgICAgIHRoaXMubnpTaG93SWNvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG56SWNvblR5cGUpIHtcbiAgICAgIHRoaXMuaXNJY29uVHlwZU9iamVjdCA9IHR5cGVvZiBuekljb25UeXBlLmN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCc7XG4gICAgfVxuICB9XG59XG4iXX0=