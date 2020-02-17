/**
 * @fileoverview added by tsickle
 * Generated from: nz-popover.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
export class NzPopoverComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover-placement';
    }
}
NzPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"_visible\">\n  <div class=\"ant-popover\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\n        <div>\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </div>\n          <div class=\"ant-popover-inner-content\">\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NzTooltipBaseComponentLegacy,
                        useExisting: NzPopoverComponent
                    }
                ],
                preserveWhitespaces: false,
                styles: [`
      .ant-popover {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopoverComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    nzTitleTemplate: [{ type: ContentChild, args: ['neverUsedTemplate', { static: true },] }],
    nzContent: [{ type: Input }],
    nzContentTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /**
     * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
     * @type {?}
     */
    NzPopoverComponent.prototype.nzTitle;
    /** @type {?} */
    NzPopoverComponent.prototype.nzTitleTemplate;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContent;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContentTemplate;
    /** @type {?} */
    NzPopoverComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBd0J6RixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsa0JBQWtCOzs7OztJQVl4RCxZQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQ2pHLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEcUMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBWG5HLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztJQWFsQyxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLDByQ0FBMEM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7d0JBQ3JDLFdBQVcsRUFBRSxrQkFBa0I7cUJBQ2hDO2lCQUNGO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7eUJBRXhCOzs7O0tBSUM7YUFFSjs7OztZQWxDQyxpQkFBaUI7WUFVSyxzQkFBc0IsdUJBcUNQLElBQUksWUFBSSxRQUFROzs7c0JBTnBELEtBQUs7OEJBQ0wsWUFBWSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFFbEQsS0FBSztnQ0FDTCxZQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVQ1QyxxQ0FBa0M7Ozs7O0lBS2xDLHFDQUEyQjs7SUFDM0IsNkNBQXdGOztJQUV4Rix1Q0FBNkI7O0lBQzdCLCtDQUFtRjs7SUFFL0MseUNBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1wb3BvdmVyJyxcbiAgZXhwb3J0QXM6ICduelBvcG92ZXJDb21wb25lbnQnLFxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXG4gICAgICB1c2VFeGlzdGluZzogTnpQb3BvdmVyQ29tcG9uZW50XG4gICAgfVxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmFudC1wb3BvdmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XG5cbiAgLyoqXG4gICAqIFVzZSBgbmV2ZXJVc2VkVGVtcGxhdGVgIHRvIGZvcmNlIGBuelRlbXBsYXRlYCB0byBiZSBjYXRjaGVkIGJ5IGBuelBvcG92ZXJDb250ZW50YC5cbiAgICovXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56VFNUeXBlO1xuICBAQ29udGVudENoaWxkKCduZXZlclVzZWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpDb250ZW50OiBOelRTVHlwZTtcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56Q29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcbiAgICBzdXBlcihjZHIsIG5vQW5pbWF0aW9uKTtcbiAgfVxufVxuIl19