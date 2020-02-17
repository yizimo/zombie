/**
 * @fileoverview added by tsickle
 * Generated from: nz-popover.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
var NzPopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
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
                    styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopoverComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        nzTitleTemplate: [{ type: ContentChild, args: ['neverUsedTemplate', { static: true },] }],
        nzContent: [{ type: Input }],
        nzContentTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: true },] }]
    };
    return NzPopoverComponent;
}(NzToolTipComponent));
export { NzPopoverComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RjtJQXNCd0MsOENBQWtCO0lBWXhELDRCQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQW5HLFlBQ0Usa0JBQU0sR0FBRyxFQUFFLFdBQVcsQ0FBQyxTQUN4QjtRQUY4RCxpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFYbkcsYUFBTyxHQUFHLHVCQUF1QixDQUFDOztJQWFsQyxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzNCLDByQ0FBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSw0QkFBNEI7NEJBQ3JDLFdBQVcsRUFBRSxrQkFBa0I7eUJBQ2hDO3FCQUNGO29CQUNELG1CQUFtQixFQUFFLEtBQUs7NkJBRXhCLG9FQUlDO2lCQUVKOzs7O2dCQWxDQyxpQkFBaUI7Z0JBVUssc0JBQXNCLHVCQXFDUCxJQUFJLFlBQUksUUFBUTs7OzBCQU5wRCxLQUFLO2tDQUNMLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBRWxELEtBQUs7b0NBQ0wsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBSzlDLHlCQUFDO0NBQUEsQUFyQ0QsQ0FzQndDLGtCQUFrQixHQWV6RDtTQWZZLGtCQUFrQjs7O0lBQzdCLHFDQUFrQzs7Ozs7SUFLbEMscUNBQTJCOztJQUMzQiw2Q0FBd0Y7O0lBRXhGLHVDQUE2Qjs7SUFDN0IsK0NBQW1GOztJQUUvQyx5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHpvb21CaWdNb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksIE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBvcG92ZXInLFxuICBleHBvcnRBczogJ256UG9wb3ZlckNvbXBvbmVudCcsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcbiAgICAgIHVzZUV4aXN0aW5nOiBOelBvcG92ZXJDb21wb25lbnRcbiAgICB9XG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYW50LXBvcG92ZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIE56VG9vbFRpcENvbXBvbmVudCB7XG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcblxuICAvKipcbiAgICogVXNlIGBuZXZlclVzZWRUZW1wbGF0ZWAgdG8gZm9yY2UgYG56VGVtcGxhdGVgIHRvIGJlIGNhdGNoZWQgYnkgYG56UG9wb3ZlckNvbnRlbnRgLlxuICAgKi9cbiAgQElucHV0KCkgbnpUaXRsZTogTnpUU1R5cGU7XG4gIEBDb250ZW50Q2hpbGQoJ25ldmVyVXNlZFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuekNvbnRlbnQ6IE56VFNUeXBlO1xuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xuICB9XG59XG4iXX0=