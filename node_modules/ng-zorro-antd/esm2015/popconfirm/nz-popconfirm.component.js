/**
 * @fileoverview added by tsickle
 * Generated from: nz-popconfirm.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
export class NzPopconfirmComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzOkType = 'primary';
        this.nzCondition = false;
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this._prefix = 'ant-popover-placement';
        this._trigger = 'click';
        this._hasBackdrop = true;
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.nzOnCancel.emit();
        super.hide();
    }
    /**
     * @return {?}
     */
    onConfirm() {
        this.nzOnConfirm.emit();
        super.hide();
    }
}
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
                styles: [`
      .ant-popover {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzPopconfirmComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopconfirmComponent.propDecorators = {
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzCondition: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzPopconfirmComponent.prototype, "nzCondition", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFvQixrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBd0IzRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsa0JBQWtCOzs7OztJQWMzRCxZQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQ2pHLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEcUMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBWjFGLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFFYixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUcxQixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RSxZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsYUFBUSxHQUFxQixPQUFPLENBQUM7UUFDckMsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFJcEIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDM0Isby9EQUE2QztnQkFDN0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7d0JBQ3JDLFdBQVcsRUFBRSxxQkFBcUI7cUJBQ25DO2lCQUNGO3lCQUVDOzs7O0tBSUM7YUFFSjs7OztZQW5DQyxpQkFBaUI7WUFXbUIsc0JBQXNCLHVCQXVDckIsSUFBSSxZQUFJLFFBQVE7Ozt1QkFicEQsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUVMLE1BQU07MEJBQ04sTUFBTTs7QUFKa0I7SUFBZixZQUFZLEVBQUU7OzBEQUFxQjs7O0lBSDdDLHlDQUEwQjs7SUFDMUIseUNBQXNDOztJQUN0Qyw2Q0FBOEI7O0lBQzlCLDRDQUE2Qzs7SUFDN0MsdUNBQTRDOztJQUU1QywyQ0FBdUU7O0lBQ3ZFLDRDQUF3RTs7SUFFeEUsd0NBQWtDOztJQUNsQyx5Q0FBcUM7O0lBQ3JDLDZDQUFvQjs7SUFFZ0IsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LCBOelRvb2x0aXBUcmlnZ2VyLCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcG9wY29uZmlybScsXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtQ29tcG9uZW50JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxuICAgICAgdXNlRXhpc3Rpbmc6IE56UG9wY29uZmlybUNvbXBvbmVudFxuICAgIH1cbiAgXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmFudC1wb3BvdmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xuICBASW5wdXQoKSBuek9rVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuek9rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29uZGl0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xuICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljayc7XG4gIF9oYXNCYWNrZHJvcCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekNvbmRpdGlvbikge1xuICAgICAgc3VwZXIuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ29uZmlybSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XG4gICAgc3VwZXIuaGlkZSgpO1xuICB9XG5cbiAgb25Db25maXJtKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNvbmZpcm0uZW1pdCgpO1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgfVxufVxuIl19