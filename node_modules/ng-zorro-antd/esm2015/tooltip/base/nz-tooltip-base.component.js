/**
 * @fileoverview added by tsickle
 * Generated from: base/nz-tooltip-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, Output, TemplateRef } from '@angular/core';
import { getPlacementName, isNotNil, DEFAULT_TOOLTIP_POSITIONS } from 'ng-zorro-antd/core';
/**
 * Tooltip component. Also the base component for legacy components.
 * @abstract
 */
export class NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzVisibleChange = new EventEmitter();
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._visible = false;
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
        this._placement = 'top';
        this._trigger = 'hover';
    }
    /**
     * @return {?}
     */
    get content() {
        return this.nzContent !== undefined ? this.nzContent : this.nzContentTemplate;
    }
    /**
     * @return {?}
     */
    get title() {
        return this.nzTitle !== undefined ? this.nzTitle : this.nzTitleTemplate;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.nzVisible) {
            return;
        }
        if (!this.isTitleEmpty() || !this.isContentEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.emit(false);
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    updateByDirective() {
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
        }));
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this._placement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    isTitleEmpty() {
        return this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
    }
    /**
     * @private
     * @return {?}
     */
    isContentEmpty() {
        return this.content instanceof TemplateRef ? false : this.content === '' || !isNotNil(this.content);
    }
}
NzTooltipBaseComponent.propDecorators = {
    nzVisibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTitle;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzContent;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzVisible;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzPlacement;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTrigger;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTitleTemplate;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzContentTemplate;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.overlay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.origin;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._classMap;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._prefix;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._visible;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._positions;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._placement;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._trigger;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.cdr;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLHlCQUF5QixFQUsxQixNQUFNLG9CQUFvQixDQUFDOzs7OztBQU81QixNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7SUFrQzFDLFlBQW1CLEdBQXNCLEVBQVMsV0FBb0M7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFyQm5FLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtqRSxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQTZCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFxQixPQUFPLENBQUM7SUFVb0QsQ0FBQzs7OztJQVIxRixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FB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QiwyQ0FBNEI7O0lBQzVCLGlEQUFtQzs7SUFDbkMsbURBQXFDOztJQUVyQyxpREFBaUU7O0lBRWpFLHlDQUE2Qjs7SUFDN0Isd0NBQXlCOztJQUV6QiwyQ0FBaUM7O0lBQ2pDLDhDQUFxQjs7SUFDckIseUNBQWtDOztJQUNsQywwQ0FBaUI7O0lBQ2pCLDRDQUFzRTs7SUFDdEUsNENBQW1COztJQUNuQiwwQ0FBcUM7O0lBVXpCLHFDQUE2Qjs7SUFBRSw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcbiAgQ2RrT3ZlcmxheU9yaWdpbixcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldFBsYWNlbWVudE5hbWUsXG4gIGlzTm90TmlsLFxuICBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLFxuICBOZ0NsYXNzSW50ZXJmYWNlLFxuICBOZ1N0eWxlSW50ZXJmYWNlLFxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICBOelRTVHlwZVxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XG5cbi8qKlxuICogVG9vbHRpcCBjb21wb25lbnQuIEFsc28gdGhlIGJhc2UgY29tcG9uZW50IGZvciBsZWdhY3kgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnQge1xuICBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XG4gIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xuICBuelZpc2libGU6IGJvb2xlYW47XG4gIG56UGxhY2VtZW50OiBzdHJpbmc7XG4gIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xuICBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcbiAgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcbiAgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcbiAgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xuICBuelRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBuekNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XG5cbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICBfcHJlZml4ID0gJ2FudC10b29sdGlwLXBsYWNlbWVudCc7XG4gIF92aXNpYmxlID0gZmFsc2U7XG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TXTtcbiAgX3BsYWNlbWVudCA9ICd0b3AnO1xuICBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XG5cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpDb250ZW50IDogdGhpcy5uekNvbnRlbnRUZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm56VGl0bGUgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpUaXRsZSA6IHRoaXMubnpUaXRsZVRlbXBsYXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHt9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUaXRsZUVtcHR5KCkgfHwgIXRoaXMuaXNDb250ZW50RW1wdHkoKSkge1xuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuX3BsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5uek92ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLl9wbGFjZW1lbnR9YF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IENka092ZXJsYXlPcmlnaW4pOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNUaXRsZUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRpdGxlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHRoaXMudGl0bGUgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLnRpdGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb250ZW50RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB0aGlzLmNvbnRlbnQgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLmNvbnRlbnQpO1xuICB9XG59XG4iXX0=