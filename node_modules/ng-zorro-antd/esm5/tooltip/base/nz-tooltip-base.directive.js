/**
 * @fileoverview added by tsickle
 * Generated from: base/nz-tooltip-base.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var NzTooltipBaseDirective = /** @class */ (function () {
    function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this._tooltip = _tooltip;
        this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         */
        this.nzPlacement = 'top';
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'noAnimation'
        ];
        this.nzVisibleChange = new EventEmitter();
        this.isTooltipComponentVisible = false;
        /**
         * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
         */
        this.isDynamicTooltip = false;
        this.triggerUnlisteners = [];
        this.$destroy = new Subject();
    }
    Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
        /**
         * This true title that would be used in other parts on this component.
         */
        get: /**
         * This true title that would be used in other parts on this component.
         * @protected
         * @return {?}
         */
        function () {
            return this.specificTitle || this.directiveNameTitle || this.nzTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificContent || this.directiveNameContent || this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificPlacement || this.nzPlacement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificTrigger || this.nzTrigger;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
        /** @type {?} */
        var trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.tooltip && this.isDynamicTooltip) {
            this.updateChangedProperties(changes);
        }
        // TODO: enable these warning in 9.0.0.
        // if (changes.nzTitle) {
        //   warnDeprecation(
        //     `'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzContent) {
        //   warnDeprecation(
        //     `'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0. Please use 'nzPopoverContent' instead.`
        //   );
        // }
        // if (changes.nzPlacement) {
        //   warnDeprecation(
        //     `'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzTrigger) {
        //   warnDeprecation(
        //     `'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._tooltip) {
            this.createDynamicTooltipComponent();
        }
        else {
            warnDeprecation("'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .");
            this.tooltip = this._tooltip;
            this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        }
        this.tooltip.nzVisibleChange
            .pipe(distinctUntilChanged(), takeUntil(this.$destroy))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            _this.isTooltipComponentVisible = visible;
            _this.nzVisibleChange.emit(visible);
        }));
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerTriggers();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.tooltip.show();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.tooltip.hide();
    };
    /**
     * Force the component to update its position.
     */
    /**
     * Force the component to update its position.
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updatePosition = /**
     * Force the component to update its position.
     * @return {?}
     */
    function () {
        if (this.tooltip && this.isDynamicTooltip) {
            this.tooltip.updatePosition();
        }
    };
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.createDynamicTooltipComponent = /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    function () {
        this.isDynamicTooltip = true;
        this.tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = this.tooltipRef.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
        // If the tooltip component is dynamically created, we should set its origin before updating properties to
        // the component.
        this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        // Update all properties to the component.
        this.updateChangedProperties(this.needProxyProperties);
    };
    /**
     * @protected
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.registerTriggers = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            /** @type {?} */
            var overlayElement_1;
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', (/**
             * @return {?}
             */
            function () {
                _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay);
            })));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', (/**
             * @return {?}
             */
            function () {
                _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseenter', (/**
                     * @return {?}
                     */
                    function () {
                        _this.delayEnterLeave(false, true);
                    })));
                    _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseleave', (/**
                     * @return {?}
                     */
                    function () {
                        _this.delayEnterLeave(false, false);
                    })));
                }
            })));
        }
        else if (trigger === 'focus') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', (/**
             * @return {?}
             */
            function () { return _this.show(); })));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', (/**
             * @return {?}
             */
            function () { return _this.hide(); })));
        }
        else if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                _this.show();
            })));
        } // Else do nothing because user wants to control the visibility programmatically.
    };
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updateChangedProperties = /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    function (propertiesOrChanges) {
        var _this = this;
        /** @type {?} */
        var isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        var keys_ = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys_.forEach((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            if (_this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                _this.updateComponentValue(property, _this[property]);
            }
        }));
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
        }
        else {
            /** @type {?} */
            var c = (/** @type {?} */ (propertiesOrChanges));
            if (c.specificTitle || c.directiveNameTitle || c.nzTitle) {
                this.updateComponentValue('nzTitle', this.title);
            }
            if (c.specificContent || c.directiveNameContent || c.nzContent) {
                this.updateComponentValue('nzContent', this.content);
            }
            if (c.specificTrigger || c.nzTrigger) {
                this.updateComponentValue('nzTrigger', this.trigger);
            }
            if (c.specificPlacement || c.nzPlacement) {
                this.updateComponentValue('nzPlacement', this.placement);
            }
        }
        this.tooltip.updateByDirective();
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updateComponentValue = 
    // tslint:disable-next-line no-any
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    };
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.delayEnterLeave = /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayTimer = undefined;
                isEnter ? _this.show() : _this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.removeTriggerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        this.triggerUnlisteners.forEach((/**
         * @param {?} cancel
         * @return {?}
         */
        function (cancel) { return cancel(); }));
        this.triggerUnlisteners.length = 0;
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.clearTogglingTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    };
    NzTooltipBaseDirective.propDecorators = {
        nzTitle: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    return NzTooltipBaseDirective;
}());
export { NzTooltipBaseDirective };
if (false) {
    /** @type {?} */
    NzTooltipBaseDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificTitle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.directiveNameContent;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificContent;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.tooltipRef;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTitle`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzTitle;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzPopoverContent`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzContent;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzTrigger;
    /**
     * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
     * Please use a more specific API. Like `nzTooltipPlacement`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzPlacement;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzVisible;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.tooltip;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.isTooltipComponentVisible;
    /**
     * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.isDynamicTooltip;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.triggerUnlisteners;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.$destroy;
    /**
     * @type {?}
     * @private
     */
    NzTooltipBaseDirective.prototype.delayTimer;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.hostView;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.resolver;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.renderer;
    /**
     * @deprecated 9.0.0. This will always be `null`.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype._tooltip;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBTUwsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBc0QsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU1qRTtJQXlGRSxnQ0FDUyxVQUFzQixFQUNuQixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUluQixRQUF1QyxFQUN2QyxXQUFvQztRQVJ2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJbkIsYUFBUSxHQUFSLFFBQVEsQ0FBK0I7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCOzs7OztRQXpFdkMsY0FBUyxHQUFxQixPQUFPLENBQUM7Ozs7O1FBTXRDLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBZ0MzQix3QkFBbUIsR0FBRztZQUM5QixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGFBQWE7U0FDZCxDQUFDO1FBRWlCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUlqRSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7Ozs7UUFLeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWhCLHVCQUFrQixH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QUVyQyxtREFBbUM7O0lBQ25DLG1EQUFtQzs7SUFDbkMsb0RBQW9DOztJQUNwQyxnREFBMEM7O0lBQzFDLDJDQUE0Qjs7Ozs7O0lBSzVCLGtEQUFxRTs7Ozs7SUFxQnJFLHFEQU9FOztJQUVGLGlEQUFpRTs7SUFFakUseUNBQWdDOztJQUVoQywyREFBa0M7Ozs7OztJQUtsQyxrREFBbUM7Ozs7O0lBRW5DLG9EQUE4RDs7Ozs7SUFFOUQsMENBQXlDOzs7OztJQUV6Qyw0Q0FBNEI7O0lBRzFCLDRDQUE2Qjs7Ozs7SUFDN0IsMENBQW9DOzs7OztJQUNwQywwQ0FBNEM7Ozs7O0lBQzVDLDBDQUE2Qjs7Ozs7O0lBSTdCLDBDQUFpRDs7Ozs7SUFDakQsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIE5nU3R5bGVJbnRlcmZhY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuLi9uei10b29sdGlwLmRlZmluaXRpb25zJztcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAtYmFzZS5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBkaXJlY3RpdmVOYW1lVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG4gIHNwZWNpZmljVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG4gIGRpcmVjdGl2ZU5hbWVDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xuICBzcGVjaWZpY0NvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XG4gIHNwZWNpZmljVHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XG4gIHNwZWNpZmljUGxhY2VtZW50Pzogc3RyaW5nO1xuICB0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVGl0bGVgLlxuICAgKi9cbiAgQElucHV0KCkgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56UG9wb3ZlckNvbnRlbnRgLlxuICAgKi9cbiAgQElucHV0KCkgbnpDb250ZW50OiBOelRTVHlwZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXG4gICAqL1xuICBASW5wdXQoKSBuelRyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFBsYWNlbWVudGAuXG4gICAqL1xuICBASW5wdXQoKSBuelBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBuelZpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB0aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVGl0bGUgfHwgdGhpcy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgdGhpcy5uelRpdGxlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBjb250ZW50KCk6IE56VFNUeXBlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlTmFtZUNvbnRlbnQgfHwgdGhpcy5uekNvbnRlbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHBsYWNlbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljUGxhY2VtZW50IHx8IHRoaXMubnpQbGFjZW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUcmlnZ2VyIHx8IHRoaXMubnpUcmlnZ2VyO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXG4gICAgJ256T3ZlcmxheUNsYXNzTmFtZScsXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxuICAgICduek1vdXNlTGVhdmVEZWxheScsXG4gICAgJ256VmlzaWJsZScsXG4gICAgJ25vQW5pbWF0aW9uJ1xuICBdO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgdG9vbHRpcDogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcblxuICBpc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUb29sdGlwcyB3b3VsZCBhbHdheXMgYmUgZHluYW1pYyBpbiA5LjAuMC5cbiAgICovXG4gIHByb3RlY3RlZCBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyaWdnZXJVbmxpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICBwcm90ZWN0ZWQgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgZGVsYXlUaW1lcj86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgd2lsbCBhbHdheXMgYmUgYG51bGxgLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpUcmlnZ2VyLCBzcGVjaWZpY1RyaWdnZXIgfSA9IGNoYW5nZXM7XG4gICAgY29uc3QgdHJpZ2dlciA9IHNwZWNpZmljVHJpZ2dlciB8fCBuelRyaWdnZXI7XG5cbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5pc0R5bmFtaWNUb29sdGlwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKGNoYW5nZXMpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGVuYWJsZSB0aGVzZSB3YXJuaW5nIGluIDkuMC4wLlxuICAgIC8vIGlmIChjaGFuZ2VzLm56VGl0bGUpIHtcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAvLyAgICAgYCduelRpdGxlJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwVGl0bGUnIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxuICAgIC8vICAgKTtcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoY2hhbmdlcy5uekNvbnRlbnQpIHtcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAvLyAgICAgYCduekNvbnRlbnQnIG9mICduei1wb3BvdmVyJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelBvcG92ZXJDb250ZW50JyBpbnN0ZWFkLmBcbiAgICAvLyAgICk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKGNoYW5nZXMubnpQbGFjZW1lbnQpIHtcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAvLyAgICAgYCduelBsYWNlbWVudCcgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcENvbnRlbnQnIGluc3RlYWQuIFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYFxuICAgIC8vICAgKTtcbiAgICAvLyB9XG5cbiAgICAvLyBpZiAoY2hhbmdlcy5uelRyaWdnZXIpIHtcbiAgICAvLyAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAvLyAgICAgYCduelRyaWdnZXInIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBUcmlnZ2VyJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcbiAgICAvLyAgICk7XG4gICAgLy8gfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90b29sdGlwKSB7XG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCc8bnotdG9vbHRpcD48L256LXRvb2x0aXA+JywgJzxuei1wb3BvdmVyPjwvbnotcG9wb3Zlcj4nIGFuZCAnPG56LXBvcGNvbmZpcm0+PC9uei1wb3Bjb25maXJtPicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBSZWZlcjogaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvdG9vbHRpcC96aCAuYFxuICAgICAgKTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXA7XG4gICAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xuICAgIH1cblxuICAgIHRoaXMudG9vbHRpcC5uelZpc2libGVDaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy4kZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5pc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuICAgIGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgdGhpcy5pc0R5bmFtaWNUb29sdGlwKSB7XG4gICAgICB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZHluYW1pYyB0b29sdGlwIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XG5cbiAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgdGhpcy50b29sdGlwID0gdGhpcy50b29sdGlwUmVmLmluc3RhbmNlO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXG4gICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxuICAgICAgdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICApOyAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG5cbiAgICAvLyBJZiB0aGUgdG9vbHRpcCBjb21wb25lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCwgd2Ugc2hvdWxkIHNldCBpdHMgb3JpZ2luIGJlZm9yZSB1cGRhdGluZyBwcm9wZXJ0aWVzIHRvXG4gICAgLy8gdGhlIGNvbXBvbmVudC5cbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xuICAgIC8vIFVwZGF0ZSBhbGwgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50LlxuICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXModGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5pc0R5bmFtaWNUb29sdGlwID8gdGhpcy50cmlnZ2VyIDogdGhpcy50b29sdGlwLm56VHJpZ2dlcjtcblxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xuXG4gICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgZmFsc2UsIHRoaXMudG9vbHRpcC5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpKTtcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpKTtcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnY2xpY2snLCBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXG4gIH1cblxuICAvKipcbiAgICogU3luYyBjaGFuZ2VkIHByb3BlcnRpZXMgdG8gdGhlIGNvbXBvbmVudCBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoYXQgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHByb3BlcnRpZXNPckNoYW5nZXM6IHN0cmluZ1tdIHwgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXNPckNoYW5nZXMpO1xuICAgIGNvbnN0IGtleXNfID0gaXNBcnJheSA/IChwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIHN0cmluZ1tdKSA6IE9iamVjdC5rZXlzKHByb3BlcnRpZXNPckNoYW5nZXMpO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAgIGtleXNfLmZvckVhY2goKHByb3BlcnR5OiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VGl0bGUnLCB0aGlzLnRpdGxlKTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256Q29udGVudCcsIHRoaXMuY29udGVudCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMgPSBwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIFNpbXBsZUNoYW5nZXM7XG4gICAgICBpZiAoYy5zcGVjaWZpY1RpdGxlIHx8IGMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IGMubnpUaXRsZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XG4gICAgICB9XG4gICAgICBpZiAoYy5zcGVjaWZpY0NvbnRlbnQgfHwgYy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCBjLm56Q29udGVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGMuc3BlY2lmaWNUcmlnZ2VyIHx8IGMubnpUcmlnZ2VyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcik7XG4gICAgICB9XG4gICAgICBpZiAoYy5zcGVjaWZpY1BsYWNlbWVudCB8fCBjLm56UGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudG9vbHRpcC51cGRhdGVCeURpcmVjdGl2ZSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMudG9vbHRpcFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYGlzT3JpZ2luYCBpcyB1c2VkIGR1ZSB0byB0aGUgdG9vbHRpcCB3aWxsIG5vdCBoaWRlIGltbWVkaWF0ZWx5XG4gICAgICAvLyAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKS5cbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5mb3JFYWNoKGNhbmNlbCA9PiBjYW5jZWwoKSk7XG4gICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJUb2dnbGluZ1RpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19