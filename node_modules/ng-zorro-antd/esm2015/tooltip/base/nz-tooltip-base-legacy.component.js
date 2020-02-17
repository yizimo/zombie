/**
 * @fileoverview added by tsickle
 * Generated from: base/nz-tooltip-base-legacy.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { toBoolean, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponent } from './nz-tooltip-base.component';
/**
 * This component overrides some properties of `NzTooltipBaseComponent` and make them
 * input properties.
 *
 * @deprecated 9.0.0 tooltip and other components deprecate the old API. This
 * would be removed in 9.0.0.
 *
 * \@example This example is what going to be removed
 *
 * ```html
 * <nz-tooltip>
 *   <a nz-tooltip></a>
 * </nz-tooltip>
 * ```
 */
export class NzTooltipBaseComponentLegacy extends NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // second
        // second
        this.nzMouseLeaveDelay = 0.1; // second
        this.nzVisibleChange = new EventEmitter();
    }
    // second
    // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions = [POSITION_MAP[this.nzPlacement], ...this._positions];
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.nzVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
        }));
    }
}
/** @nocollapse */
NzTooltipBaseComponentLegacy.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipBaseComponentLegacy.propDecorators = {
    overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.overlay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseComponentLegacy.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsU0FBUyxFQUFvQixzQkFBc0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUFzQjs7Ozs7SUE4Q3RFLFlBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFDakcsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQURxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUEzQzFGLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBUzs7UUFDbkMsc0JBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUMsU0FBUztRQXNDeEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBSWpFLENBQUM7Ozs7Ozs7SUF2Q0QsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQWM7O2NBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBdUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFRRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBM0VNLGlCQUFpQjtZQUNZLHNCQUFzQix1QkFrRXJCLElBQUksWUFBSSxRQUFROzs7c0JBN0NwRCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtpQ0FFdEMsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFHTCxLQUFLO3dCQVlMLEtBQUs7d0JBYUwsS0FBSzs4QkFVTCxNQUFNOzs7O0lBM0NQLCtDQUFzRTs7SUFFdEUsMERBQWlDOztJQUNqQyxzREFBK0M7O0lBQy9DLHlEQUFrQzs7SUFDbEMseURBQWlDOztJQXNDakMsdURBQWlFOztJQUU3QixtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBvdmVycmlkZXMgc29tZSBwcm9wZXJ0aWVzIG9mIGBOelRvb2x0aXBCYXNlQ29tcG9uZW50YCBhbmQgbWFrZSB0aGVtXG4gKiBpbnB1dCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBkZXByZWNhdGVkIDkuMC4wIHRvb2x0aXAgYW5kIG90aGVyIGNvbXBvbmVudHMgZGVwcmVjYXRlIHRoZSBvbGQgQVBJLiBUaGlzXG4gKiB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLlxuICpcbiAqIEBleGFtcGxlIFRoaXMgZXhhbXBsZSBpcyB3aGF0IGdvaW5nIHRvIGJlIHJlbW92ZWRcbiAqXG4gKiBgYGBodG1sXG4gKiA8bnotdG9vbHRpcD5cbiAqICAgPGEgbnotdG9vbHRpcD48L2E+XG4gKiA8L256LXRvb2x0aXA+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheSA9IDAuMTU7IC8vIHNlY29uZFxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheSA9IDAuMTsgLy8gc2Vjb25kXG5cbiAgLy8gVE9ETzogcGxhY2VtZW50IGxvZ2ljIHNob3VsZCBiZSByZW1vdmVkIGludG8gYE56VG9vbHRpcEJhc2VEaXJlY3RpdmVgIG9uY2UgdGhpcyBjb21wb25lbnQgaXMgcmVtb3ZlZC5cbiAgQElucHV0KClcbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLl9wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMubnpQbGFjZW1lbnRdLCAuLi50aGlzLl9wb3NpdGlvbnNdO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBsYWNlbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHJpZ2dlcih2YWx1ZTogTnpUb29sdGlwVHJpZ2dlcikge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRoaXMuX3RyaWdnZXIgPT09ICdjbGljayc7XG4gIH1cblxuICBnZXQgbnpUcmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcbiAgICBzdXBlcihjZHIsIG5vQW5pbWF0aW9uKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=