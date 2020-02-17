/**
 * @fileoverview added by tsickle
 * Generated from: wave/nz-wave.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveRenderer } from './nz-wave-renderer';
/**
 * @record
 */
export function NzWaveConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
export var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
export var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    Object.defineProperty(NzWaveDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.isConfigDisabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderWaveIfEnabled();
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.renderWaveIfEnabled = /**
     * @return {?}
     */
    function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.enable = /**
     * @return {?}
     */
    function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    NzWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-wave]',
                    exportAs: 'nzWave'
                },] }
    ];
    /** @nocollapse */
    NzWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzWaveDirective.propDecorators = {
        nzWaveExtraNode: [{ type: Input }]
    };
    return NzWaveDirective;
}());
export { NzWaveDirective };
if (false) {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveRenderer;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveDisabled;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ3YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXBELGtDQUVDOzs7SUFEQyxnQ0FBbUI7OztBQUdyQixNQUFNLEtBQU8sNkJBQTZCLEdBQWlCO0lBQ3pELFFBQVEsRUFBRSxLQUFLO0NBQ2hCOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsRUFBRTtJQUM5RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNkJBQTZCO0NBQ3ZDLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUsNkJBQTZCO0lBQzNDLE9BQU8sNkJBQTZCLENBQUM7QUFDdkMsQ0FBQztBQUVEO0lBa0JFLHlCQUNVLE1BQWMsRUFDZCxVQUFzQixFQUNxQixNQUFvQixFQUNwQixhQUFxQjtRQUhoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNxQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBakJqRSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUd6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQWdCcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBZkQsc0JBQUkscUNBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7Ozs7SUFXRCwwQ0FBZ0I7OztJQUFoQjs7WUFDTSxRQUFRLEdBQUcsS0FBSztRQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDNUQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixFQUFFO1lBQzNDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDZDQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMxRztJQUNILENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDRSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxLQUFLLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjs7OztnQkE1QkMsTUFBTTtnQkFKTixVQUFVO2dEQWtEUCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs2Q0FDeEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7OztrQ0FqQjFDLEtBQUs7O0lBZ0VSLHNCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FqRVksZUFBZTs7O0lBQzFCLDBDQUFpQzs7Ozs7SUFFakMsdUNBQXFDOzs7OztJQUNyQyx1Q0FBc0M7Ozs7O0lBV3BDLGlDQUFzQjs7Ozs7SUFDdEIscUNBQThCOzs7OztJQUM5QixpQ0FBdUU7Ozs7O0lBQ3ZFLHdDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOeldhdmVSZW5kZXJlciB9IGZyb20gJy4vbnotd2F2ZS1yZW5kZXJlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpXYXZlQ29uZmlnIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc6IE56V2F2ZUNvbmZpZyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgTlpfV0FWRV9HTE9CQUxfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE56V2F2ZUNvbmZpZz4oJ256LXdhdmUtZ2xvYmFsLW9wdGlvbnMnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUllcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUlkoKTogTnpXYXZlQ29uZmlnIHtcbiAgcmV0dXJuIE5aX1dBVkVfR0xPQkFMX0RFRkFVTFRfQ09ORklHO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotd2F2ZV0nLFxuICBleHBvcnRBczogJ256V2F2ZSdcbn0pXG5leHBvcnQgY2xhc3MgTnpXYXZlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBueldhdmVFeHRyYU5vZGUgPSBmYWxzZTtcblxuICBwcml2YXRlIHdhdmVSZW5kZXJlcjogTnpXYXZlUmVuZGVyZXI7XG4gIHByaXZhdGUgd2F2ZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndhdmVEaXNhYmxlZDtcbiAgfVxuXG4gIGdldCByZW5kZXJlclJlZigpOiBOeldhdmVSZW5kZXJlciB7XG4gICAgcmV0dXJuIHRoaXMud2F2ZVJlbmRlcmVyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBOeldhdmVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXG4gICkge1xuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdGhpcy5pc0NvbmZpZ0Rpc2FibGVkKCk7XG4gIH1cblxuICBpc0NvbmZpZ0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0eXBlb2YgdGhpcy5jb25maWcuZGlzYWJsZWQgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzYWJsZWQgPSB0aGlzLmNvbmZpZy5kaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJykge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcldhdmVJZkVuYWJsZWQoKTtcbiAgfVxuXG4gIHJlbmRlcldhdmVJZkVuYWJsZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLndhdmVEaXNhYmxlZCAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIgPSBuZXcgTnpXYXZlUmVuZGVyZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmdab25lLCB0aGlzLm56V2F2ZUV4dHJhTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5yZW1vdmVUcmlnZ2VyRXZlbnQoKTtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLnJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlKCk6IHZvaWQge1xuICAgIC8vIGNvbmZpZyBwcmlvcml0eVxuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdGhpcy5pc0NvbmZpZ0Rpc2FibGVkKCkgfHwgZmFsc2U7XG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5iaW5kVHJpZ2dlckV2ZW50KCk7XG4gICAgfVxuICB9XG59XG4iXX0=