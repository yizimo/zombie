/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion, warnDeprecation, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { menuServiceFactory, NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
const ɵ0 = menuServiceFactory;
/**
 * @deprecated Use `NzDropdownDirective` instead, will remove in 9.0.0.
 */
export class NzDropDownButtonComponent extends NzDropDownComponent {
    /**
     * @param {?} cdr
     * @param {?} nzMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, nzMenuDropdownService, noAnimation) {
        super(cdr, nzMenuDropdownService, noAnimation);
        this.noAnimation = noAnimation;
        this.nzSize = 'default';
        this.nzType = 'default';
        this.nzIcon = 'ellipsis';
        this.nzClick = new EventEmitter();
        warnDeprecation(`'nz-dropdown-button' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en`);
    }
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(this.visible$);
    }
}
NzDropDownButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-button',
                exportAs: 'nzDropdownButton',
                preserveWhitespaces: false,
                animations: [slideMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: ɵ0,
                        deps: [[new Self(), Injector]]
                    }
                ],
                template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\n  <button nz-button\n    type=\"button\"\n    [disabled]=\"nzDisabled\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    (click)=\"nzClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button nz-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    [disabled]=\"nzDisabled\"\n    (click)=\"setVisibleStateWhen(true,'click')\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <ng-container *nzStringTemplateOutlet=\"nzIcon\"><i nz-icon [nzType]=\"nzIcon\"></i></ng-container>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\n  (backdropClick)=\"setVisibleStateWhen(false)\"\n  (detach)=\"setVisibleStateWhen(false)\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[nz-menu]\"></ng-content>\n  </div>\n</ng-template>",
                styles: [`
      nz-dropdown-button {
        position: relative;
        display: inline-block;
      }

      :root .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropDownButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropDownButtonComponent.propDecorators = {
    nzSize: [{ type: Input }],
    nzType: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzDropDownDirective: [{ type: ViewChild, args: [NzDropDownDirective, { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzIcon;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJvcGRvd24vIiwic291cmNlcyI6WyJuei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGVBQWUsRUFDZixpQ0FBaUMsRUFDakMsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7V0FhakQsa0JBQWtCO0FBdUJwQzs7R0FFRztBQUNILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7Ozs7OztJQU9oRSxZQUNFLEdBQXNCLEVBQ3RCLHFCQUE0QyxFQUNqQixXQUFvQztRQUUvRCxLQUFLLENBQUMsR0FBRyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRnBCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQVR4RCxXQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsV0FBTSxHQUErQixVQUFVLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFTMUQsZUFBZSxDQUNiLDBKQUEwSixDQUMzSixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFO29CQUNULHFCQUFxQjtvQkFDckI7d0JBQ0UsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsVUFBVSxJQUFvQjt3QkFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUMvQjtpQkFDRjtnQkFDRCxtbkRBQWtEO3lCQUVoRDs7Ozs7Ozs7Ozs7Ozs7S0FjQzthQUVKOzs7O1lBNURDLGlCQUFpQjtZQXlCVixxQkFBcUI7WUFMNUIsc0JBQXNCLHVCQXNEbkIsSUFBSSxZQUFJLFFBQVE7OztxQkFUbEIsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsTUFBTTtrQ0FDTixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBSmhELDJDQUE0Qjs7SUFDNUIsMkNBQTRCOztJQUM1QiwyQ0FBeUQ7O0lBQ3pELDRDQUE0RDs7SUFDNUQsd0RBQTJGOztJQUt6RixnREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIHNsaWRlTW90aW9uLFxuICB3YXJuRGVwcmVjYXRpb24sXG4gIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBtZW51U2VydmljZUZhY3RvcnksIE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1kcm9wZG93bi1idXR0b24nLFxuICBleHBvcnRBczogJ256RHJvcGRvd25CdXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIE56TWVudURyb3Bkb3duU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gICAgICB1c2VGYWN0b3J5OiBtZW51U2VydmljZUZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cbiAgICB9XG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1kcm9wZG93bi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOnJvb3QgLmFudC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE56RHJvcGRvd25EaXJlY3RpdmVgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxuICovXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIE56RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ2VsbGlwc2lzJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpEcm9wRG93bkRpcmVjdGl2ZTogTnpEcm9wRG93bkRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIG56TWVudURyb3Bkb3duU2VydmljZTogTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihjZHIsIG56TWVudURyb3Bkb3duU2VydmljZSwgbm9BbmltYXRpb24pO1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIGAnbnotZHJvcGRvd24tYnV0dG9uJyBDb21wb25lbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnotZHJvcGRvd24tbWVudScgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcm9wZG93bi9lbmBcbiAgICApO1xuICB9XG5cbiAgLyoqIHJld3JpdGUgYWZ0ZXJWaWV3SW5pdCBob29rICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKHRoaXMudmlzaWJsZSQpO1xuICB9XG59XG4iXX0=