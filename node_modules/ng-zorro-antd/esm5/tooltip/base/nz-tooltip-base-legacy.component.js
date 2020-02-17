/**
 * @fileoverview added by tsickle
 * Generated from: base/nz-tooltip-base-legacy.component.ts
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
var NzTooltipBaseComponentLegacy = /** @class */ (function (_super) {
    tslib_1.__extends(NzTooltipBaseComponentLegacy, _super);
    function NzTooltipBaseComponentLegacy(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzOverlayClassName = '';
        _this.nzOverlayStyle = {};
        _this.nzMouseEnterDelay = 0.15; // second
        // second
        _this.nzMouseLeaveDelay = 0.1; // second
        _this.nzVisibleChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
        set: 
        // second
        // TODO: placement logic should be removed into `NzTooltipBaseDirective` once this component is removed.
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions = tslib_1.__spread([POSITION_MAP[this.nzPlacement]], this._positions);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this._visible !== visible) {
                this._visible = visible;
                this.nzVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponentLegacy.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTooltipBaseComponentLegacy.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.updatePosition();
        }));
    };
    /** @nocollapse */
    NzTooltipBaseComponentLegacy.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return NzTooltipBaseComponentLegacy;
}(NzTooltipBaseComponent));
export { NzTooltipBaseComponentLegacy };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLWxlZ2FjeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJiYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFNBQVMsRUFBb0Isc0JBQXNCLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJFO0lBQWtELHdEQUFzQjtJQThDdEUsc0NBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFBbkcsWUFDRSxrQkFBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBQ3hCO1FBRjhELGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTNDMUYsd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0Qyx1QkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxTQUFTOztRQUNuQyx1QkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBc0N4QixxQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7O0lBSWpFLENBQUM7SUF2Q0Qsc0JBQ0kscURBQVc7Ozs7UUFPZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBWEQsd0dBQXdHOzs7Ozs7OztRQUN4RyxVQUNnQixLQUFhO1lBQzNCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxxQkFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4RTtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksbURBQVM7Ozs7UUFRYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQVhELFVBQ2MsS0FBYzs7Z0JBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksbURBQVM7Ozs7UUFLYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQVJELFVBQ2MsS0FBdUI7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTs7OztJQVlELGtEQUFXOzs7SUFBWDtRQUFBLGlCQUlDO1FBSEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztRQUFDO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztnQkEzRU0saUJBQWlCO2dCQUNZLHNCQUFzQix1QkFrRXJCLElBQUksWUFBSSxRQUFROzs7MEJBN0NwRCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtxQ0FFdEMsS0FBSztpQ0FDTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSzs4QkFHTCxLQUFLOzRCQVlMLEtBQUs7NEJBYUwsS0FBSztrQ0FVTCxNQUFNOztJQVdULG1DQUFDO0NBQUEsQUF2REQsQ0FBa0Qsc0JBQXNCLEdBdUR2RTtTQXZEWSw0QkFBNEI7OztJQUN2QywrQ0FBc0U7O0lBRXRFLDBEQUFpQzs7SUFDakMsc0RBQStDOztJQUMvQyx5REFBa0M7O0lBQ2xDLHlEQUFpQzs7SUFzQ2pDLHVEQUFpRTs7SUFFN0IsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPcHRpb25hbCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgTmdTdHlsZUludGVyZmFjZSwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4uL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgb3ZlcnJpZGVzIHNvbWUgcHJvcGVydGllcyBvZiBgTnpUb29sdGlwQmFzZUNvbXBvbmVudGAgYW5kIG1ha2UgdGhlbVxuICogaW5wdXQgcHJvcGVydGllcy5cbiAqXG4gKiBAZGVwcmVjYXRlZCA5LjAuMCB0b29sdGlwIGFuZCBvdGhlciBjb21wb25lbnRzIGRlcHJlY2F0ZSB0aGUgb2xkIEFQSS4gVGhpc1xuICogd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAqXG4gKiBAZXhhbXBsZSBUaGlzIGV4YW1wbGUgaXMgd2hhdCBnb2luZyB0byBiZSByZW1vdmVkXG4gKlxuICogYGBgaHRtbFxuICogPG56LXRvb2x0aXA+XG4gKiAgIDxhIG56LXRvb2x0aXA+PC9hPlxuICogPC9uei10b29sdGlwPlxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IGV4dGVuZHMgTnpUb29sdGlwQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXkgPSAwLjE7IC8vIHNlY29uZFxuXG4gIC8vIFRPRE86IHBsYWNlbWVudCBsb2dpYyBzaG91bGQgYmUgcmVtb3ZlZCBpbnRvIGBOelRvb2x0aXBCYXNlRGlyZWN0aXZlYCBvbmNlIHRoaXMgY29tcG9uZW50IGlzIHJlbW92ZWQuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHZhbHVlO1xuICAgICAgdGhpcy5fcG9zaXRpb25zID0gW1BPU0lUSU9OX01BUFt0aGlzLm56UGxhY2VtZW50XSwgLi4udGhpcy5fcG9zaXRpb25zXTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IE56VG9vbHRpcFRyaWdnZXIpIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfVxufVxuIl19