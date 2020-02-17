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
export class NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} _tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
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
    /**
     * This true title that would be used in other parts on this component.
     * @protected
     * @return {?}
     */
    get title() {
        return this.specificTitle || this.directiveNameTitle || this.nzTitle;
    }
    /**
     * @protected
     * @return {?}
     */
    get content() {
        return this.specificContent || this.directiveNameContent || this.nzContent;
    }
    /**
     * @protected
     * @return {?}
     */
    get placement() {
        return this.specificPlacement || this.nzPlacement;
    }
    /**
     * @protected
     * @return {?}
     */
    get trigger() {
        return this.specificTrigger || this.nzTrigger;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTrigger, specificTrigger } = changes;
        /** @type {?} */
        const trigger = specificTrigger || nzTrigger;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._tooltip) {
            this.createDynamicTooltipComponent();
        }
        else {
            warnDeprecation(`'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .`);
            this.tooltip = this._tooltip;
            this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        }
        this.tooltip.nzVisibleChange
            .pipe(distinctUntilChanged(), takeUntil(this.$destroy))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        (visible) => {
            this.isTooltipComponentVisible = visible;
            this.nzVisibleChange.emit(visible);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerTriggers();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
        }
    }
    /**
     * @return {?}
     */
    show() {
        this.tooltip.show();
    }
    /**
     * @return {?}
     */
    hide() {
        this.tooltip.hide();
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.tooltip && this.isDynamicTooltip) {
            this.tooltip.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    createDynamicTooltipComponent() {
        this.isDynamicTooltip = true;
        this.tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = this.tooltipRef.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
        // If the tooltip component is dynamically created, we should set its origin before updating properties to
        // the component.
        this.tooltip.setOverlayOrigin((/** @type {?} */ (this)));
        // Update all properties to the component.
        this.updateChangedProperties(this.needProxyProperties);
    }
    /**
     * @protected
     * @return {?}
     */
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            /** @type {?} */
            let overlayElement;
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', (/**
             * @return {?}
             */
            () => {
                this.delayEnterLeave(true, true, this.tooltip.nzMouseEnterDelay);
            })));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', (/**
             * @return {?}
             */
            () => {
                this.delayEnterLeave(true, false, this.tooltip.nzMouseLeaveDelay);
                if (this.tooltip.overlay.overlayRef && !overlayElement) {
                    overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                    this.triggerUnlisteners.push(this.renderer.listen(overlayElement, 'mouseenter', (/**
                     * @return {?}
                     */
                    () => {
                        this.delayEnterLeave(false, true);
                    })));
                    this.triggerUnlisteners.push(this.renderer.listen(overlayElement, 'mouseleave', (/**
                     * @return {?}
                     */
                    () => {
                        this.delayEnterLeave(false, false);
                    })));
                }
            })));
        }
        else if (trigger === 'focus') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', (/**
             * @return {?}
             */
            () => this.show())));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', (/**
             * @return {?}
             */
            () => this.hide())));
        }
        else if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                this.show();
            })));
        } // Else do nothing because user wants to control the visibility programmatically.
    }
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    updateChangedProperties(propertiesOrChanges) {
        /** @type {?} */
        const isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        const keys_ = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys_.forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            if (this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                this.updateComponentValue(property, this[property]);
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
            const c = (/** @type {?} */ (propertiesOrChanges));
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
    }
    // tslint:disable-next-line no-any
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    }
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeTriggerListeners() {
        this.triggerUnlisteners.forEach((/**
         * @param {?} cancel
         * @return {?}
         */
        cancel => cancel()));
        this.triggerUnlisteners.length = 0;
    }
    /**
     * @private
     * @return {?}
     */
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBTUwsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBc0QsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU1qRSxNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7Ozs7O0lBeUYxQyxZQUNTLFVBQXNCLEVBQ25CLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBSW5CLFFBQXVDLEVBQ3ZDLFdBQW9DO1FBUnZDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUluQixhQUFRLEdBQVIsUUFBUSxDQUErQjtRQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7Ozs7O1FBekV2QyxjQUFTLEdBQXFCLE9BQU8sQ0FBQzs7Ozs7UUFNdEMsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFnQzNCLHdCQUFtQixHQUFHO1lBQzlCLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsYUFBYTtTQUNkLENBQUM7UUFFaUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBSWpFLDhCQUF5QixHQUFHLEtBQUssQ0FBQzs7OztRQUt4QixxQkFBZ0IsR0FB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QUM1QywwQ0FBNkI7Ozs7OztJQUk3QiwwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi4vbnotdG9vbHRpcC5kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UtbGVnYWN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBzcGVjaWZpY1RpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBkaXJlY3RpdmVOYW1lQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcbiAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xuICBzcGVjaWZpY1RyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyO1xuICBzcGVjaWZpY1BsYWNlbWVudD86IHN0cmluZztcbiAgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRpdGxlYC5cbiAgICovXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelBvcG92ZXJDb250ZW50YC5cbiAgICovXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxuICAgKi9cbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBQbGFjZW1lbnRgLlxuICAgKi9cbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcbiAgQElucHV0KCkgbnpWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogVGhpcyB0cnVlIHRpdGxlIHRoYXQgd291bGQgYmUgdXNlZCBpbiBvdGhlciBwYXJ0cyBvbiB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdGl0bGUoKTogTnpUU1R5cGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1RpdGxlIHx8IHRoaXMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IHRoaXMubnpUaXRsZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgY29udGVudCgpOiBOelRTVHlwZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljQ29udGVudCB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IHRoaXMubnpDb250ZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1BsYWNlbWVudCB8fCB0aGlzLm56UGxhY2VtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVHJpZ2dlciB8fCB0aGlzLm56VHJpZ2dlcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxuICAgICduek92ZXJsYXlTdHlsZScsXG4gICAgJ256TW91c2VFbnRlckRlbGF5JyxcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxuICAgICduelZpc2libGUnLFxuICAgICdub0FuaW1hdGlvbidcbiAgXTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHRvb2x0aXA6IE56VG9vbHRpcEJhc2VDb21wb25lbnQ7XG5cbiAgaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVG9vbHRpcHMgd291bGQgYWx3YXlzIGJlIGR5bmFtaWMgaW4gOS4wLjAuXG4gICAqL1xuICBwcm90ZWN0ZWQgaXNEeW5hbWljVG9vbHRpcCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSB0cmlnZ2VyVW5saXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgcHJvdGVjdGVkICRkZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIHdpbGwgYWx3YXlzIGJlIGBudWxsYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Rvb2x0aXA/OiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxuICAgIHByb3RlY3RlZCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VHJpZ2dlciwgc3BlY2lmaWNUcmlnZ2VyIH0gPSBjaGFuZ2VzO1xuICAgIGNvbnN0IHRyaWdnZXIgPSBzcGVjaWZpY1RyaWdnZXIgfHwgbnpUcmlnZ2VyO1xuXG4gICAgaWYgKHRyaWdnZXIgJiYgIXRyaWdnZXIuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuaXNEeW5hbWljVG9vbHRpcCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhjaGFuZ2VzKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBlbmFibGUgdGhlc2Ugd2FybmluZyBpbiA5LjAuMC5cbiAgICAvLyBpZiAoY2hhbmdlcy5uelRpdGxlKSB7XG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXG4gICAgLy8gICAgIGAnbnpUaXRsZScgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcFRpdGxlJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcbiAgICAvLyAgICk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKGNoYW5nZXMubnpDb250ZW50KSB7XG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXG4gICAgLy8gICAgIGAnbnpDb250ZW50JyBvZiAnbnotcG9wb3ZlcicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpQb3BvdmVyQ29udGVudCcgaW5zdGVhZC5gXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIC8vIGlmIChjaGFuZ2VzLm56UGxhY2VtZW50KSB7XG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXG4gICAgLy8gICAgIGAnbnpQbGFjZW1lbnQnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBDb250ZW50JyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcbiAgICAvLyAgICk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKGNoYW5nZXMubnpUcmlnZ2VyKSB7XG4gICAgLy8gICB3YXJuRGVwcmVjYXRpb24oXG4gICAgLy8gICAgIGAnbnpUcmlnZ2VyJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwVHJpZ2dlcicgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdG9vbHRpcCkge1xuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGAnPG56LXRvb2x0aXA+PC9uei10b29sdGlwPicsICc8bnotcG9wb3Zlcj48L256LXBvcG92ZXI+JyBhbmQgJzxuei1wb3Bjb25maXJtPjwvbnotcG9wY29uZmlybT4nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUmVmZXI6IGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3Rvb2x0aXAvemggLmBcbiAgICAgICk7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLl90b29sdGlwO1xuICAgICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyBhcyBDZGtPdmVybGF5T3JpZ2luKTtcbiAgICB9XG5cbiAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcblxuICAgIC8vIENsZWFyIHRvZ2dsaW5nIHRpbWVyLiBJc3N1ZSAjMzg3NSAjNDMxNyAjNDM4NlxuICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwICYmIHRoaXMuaXNEeW5hbWljVG9vbHRpcCkge1xuICAgICAgdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVEeW5hbWljVG9vbHRpcENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xuXG4gICAgdGhpcy50b29sdGlwUmVmID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5KTtcblxuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgKTsgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuXG4gICAgLy8gSWYgdGhlIHRvb2x0aXAgY29tcG9uZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQsIHdlIHNob3VsZCBzZXQgaXRzIG9yaWdpbiBiZWZvcmUgdXBkYXRpbmcgcHJvcGVydGllcyB0b1xuICAgIC8vIHRoZSBjb21wb25lbnQuXG4gICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyBhcyBDZGtPdmVybGF5T3JpZ2luKTtcbiAgICAvLyBVcGRhdGUgYWxsIHByb3BlcnRpZXMgdG8gdGhlIGNvbXBvbmVudC5cbiAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKHRoaXMubmVlZFByb3h5UHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcbiAgICAvLyBXaGVuIHRoZSBtZXRob2QgZ2V0cyBpbnZva2VkLCBhbGwgcHJvcGVydGllcyBoYXMgYmVlbiBzeW5jZWQgdG8gdGhlIGR5bmFtaWMgY29tcG9uZW50LlxuICAgIC8vIEFmdGVyIHJlbW92aW5nIHRoZSBvbGQgQVBJLCB3ZSBjYW4ganVzdCBjaGVjayB0aGUgZGlyZWN0aXZlJ3Mgb3duIGBuelRyaWdnZXJgLlxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuaXNEeW5hbWljVG9vbHRpcCA/IHRoaXMudHJpZ2dlciA6IHRoaXMudG9vbHRpcC5uelRyaWdnZXI7XG5cbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5uek1vdXNlRW50ZXJEZWxheSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xuICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQgPSB0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdmb2N1cycpIHtcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1cycsICgpID0+IHRoaXMuc2hvdygpKSk7XG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnYmx1cicsICgpID0+IHRoaXMuaGlkZSgpKSk7XG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IC8vIEVsc2UgZG8gbm90aGluZyBiZWNhdXNlIHVzZXIgd2FudHMgdG8gY29udHJvbCB0aGUgdmlzaWJpbGl0eSBwcm9ncmFtbWF0aWNhbGx5LlxuICB9XG5cbiAgLyoqXG4gICAqIFN5bmMgY2hhbmdlZCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGF0IGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhwcm9wZXJ0aWVzT3JDaGFuZ2VzOiBzdHJpbmdbXSB8IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcbiAgICBjb25zdCBrZXlzXyA9IGlzQXJyYXkgPyAocHJvcGVydGllc09yQ2hhbmdlcyBhcyBzdHJpbmdbXSkgOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgICBrZXlzXy5mb3JFYWNoKChwcm9wZXJ0eTogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpICE9PSAtMSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjID0gcHJvcGVydGllc09yQ2hhbmdlcyBhcyBTaW1wbGVDaGFuZ2VzO1xuICAgICAgaWYgKGMuc3BlY2lmaWNUaXRsZSB8fCBjLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCBjLm56VGl0bGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUaXRsZScsIHRoaXMudGl0bGUpO1xuICAgICAgfVxuICAgICAgaWYgKGMuc3BlY2lmaWNDb250ZW50IHx8IGMuZGlyZWN0aXZlTmFtZUNvbnRlbnQgfHwgYy5uekNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChjLnNwZWNpZmljVHJpZ2dlciB8fCBjLm56VHJpZ2dlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xuICAgICAgfVxuICAgICAgaWYgKGMuc3BlY2lmaWNQbGFjZW1lbnQgfHwgYy5uelBsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRvb2x0aXAudXBkYXRlQnlEaXJlY3RpdmUoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnRvb2x0aXBba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXG4gICAgICBpc0VudGVyICYmIGlzT3JpZ2luID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMuZm9yRWFjaChjYW5jZWwgPT4gY2FuY2VsKCkpO1xuICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyVG9nZ2xpbmdUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==