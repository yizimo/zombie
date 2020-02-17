/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.directive.ts
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
import { hasModifierKey, ESCAPE } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent } from 'ng-zorro-antd/button';
import { DEFAULT_DROPDOWN_POSITIONS, InputBoolean, POSITION_MAP } from 'ng-zorro-antd/core';
import { combineLatest, fromEvent, merge, EMPTY, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
export class NzDropDownDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} overlay
     * @param {?} platform
     * @param {?} nzButtonComponent
     * @param {?} nzButtonGroupComponent
     * @param {?} viewContainerRef
     */
    constructor(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.overlay = overlay;
        this.platform = platform;
        this.nzButtonComponent = nzButtonComponent;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.viewContainerRef = viewContainerRef;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.triggerWidth = 0;
        this.el = this.elementRef.nativeElement;
        this.dropdownOpen = false;
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        e => e.stopPropagation())), mapTo(true));
        this.nzTrigger = 'hover';
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
        if (this.nzButtonComponent) {
            this.nzButtonComponent.isInDropdown = true;
        }
        if (this.nzButtonGroupComponent) {
            this.nzButtonGroupComponent.isInDropdown = true;
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabled(disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
            if (this.nzVisible) {
                this.nzVisible = false;
                this.nzVisibleChange.emit(this.nzVisible);
                this.updateOverlayByVisible();
            }
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.el)
                .withLockedPosition(),
            minWidth: this.triggerWidth,
            hasBackdrop: this.nzTrigger === 'click',
            backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    /**
     * @private
     * @return {?}
     */
    createOverlay() {
        if (!this.overlayRef) {
            /** @type {?} */
            const config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            return this.overlayRef;
        }
        else {
            /** @type {?} */
            const overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    }
    /**
     * @param {?} overlayConfig
     * @return {?}
     */
    updateOverlayConfig(overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        }));
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    subscribeOverlayEvent(overlayRef) {
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e.keyCode === ESCAPE && !hasModifierKey(e)))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.nzDropdownMenu.setVisibleStateWhen(false);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getPortal() {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    }
    /**
     * @private
     * @return {?}
     */
    openMenu() {
        if (!this.dropdownOpen) {
            /** @type {?} */
            const overlayRef = this.createOverlay();
            /** @type {?} */
            const overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    closeMenu() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    }
    /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    setPosition(positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions([...this.positions]);
    }
    /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    updatePositionStrategy(positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setTriggerWidth() {
        if (this.platform.isBrowser) {
            /** @type {?} */
            const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    }
    /**
     * @return {?}
     */
    initActionSubscribe() {
        /** @type {?} */
        const hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        /** @type {?} */
        const dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        /** @type {?} */
        const menuClickVisible$ = this.nzClickHide
            ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        /** @type {?} */
        const supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        /** @type {?} */
        const subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([supVisible, subVisible]) => supVisible || subVisible)), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => {
            if (!this.nzDisabled && this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.updateOverlayByVisible();
                this.nzVisibleChange.emit(this.nzVisible);
                this.setTriggerWidth();
                this.nzDropdownMenu.setValue('triggerWidth', this.triggerWidth);
            }
        }));
    }
    /**
     * @return {?}
     */
    updateOverlayByVisible() {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        this.setDisabled(this.nzDisabled);
    }
    /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    regeneratePosition(placement, positions) {
        return [POSITION_MAP[placement], ...positions];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzVisible, nzTrigger, nzPlacement, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTableFilter } = changes;
        if (this.nzDropdownMenu) {
            if (nzVisible) {
                this.updateOverlayByVisible();
                this.nzDropdownMenu.visible$.next(this.nzVisible);
            }
            if (nzTrigger) {
                this.nzDropdownMenu.setValue('nzTrigger', this.nzTrigger);
            }
            if (nzTableFilter) {
                this.nzDropdownMenu.setValue('nzTableFilter', this.nzTableFilter);
            }
            if (nzOverlayClassName) {
                this.nzDropdownMenu.setValue('nzOverlayClassName', this.nzOverlayClassName);
            }
            if (nzOverlayStyle) {
                this.nzDropdownMenu.setValue('nzOverlayStyle', this.nzOverlayStyle);
            }
            if (nzPlacement) {
                this.nzDropdownMenu.setValue('nzPlacement', this.nzPlacement);
                this.nzDropdownMenu.setValue('dropDownPosition', this.nzDropdownMenu.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                this.positions = this.regeneratePosition(this.nzPlacement, this.positions);
                this.updatePositionStrategy(this.positions);
            }
        }
        if (nzDisabled) {
            this.updateDisabledState();
        }
    }
}
NzDropDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown'
            },] }
];
/** @nocollapse */
NzDropDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: Platform },
    { type: NzButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzButtonGroupComponent, decorators: [{ type: Optional }] },
    { type: ViewContainerRef }
];
NzDropDownDirective.propDecorators = {
    nzDropdownMenu: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzMatchWidthElement: [{ type: Input }],
    nzBackdrop: [{ type: Input }],
    nzClickHide: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTableFilter: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzBackdrop", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzClickHide", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzVisible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzDropDownDirective.prototype, "nzTableFilter", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.dropdownOpen;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positions;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionSubscription;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlaySubscription;
    /** @type {?} */
    NzDropDownDirective.prototype.hover$;
    /** @type {?} */
    NzDropDownDirective.prototype.$click;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDropdownMenu;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownDirective.prototype.nzMatchWidthElement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisible;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownDirective.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzButtonComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzButtonGroupComponent;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBSUwsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQU14RixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7O0lBaU05QixZQUNTLFVBQXNCLEVBQ3JC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USxZQUFJLElBQUk7WUFoTk8sc0JBQXNCLHVCQWlON0MsUUFBUTtZQW5OWCxnQkFBZ0I7Ozs2QkErQmYsS0FBSzt3QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLE1BQU07O0FBUmtCO0lBQWYsWUFBWSxFQUFFOzt1REFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7O3dEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7dURBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOztzREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7OzBEQUF1Qjs7Ozs7O0lBekIvQyxxQ0FBK0I7Ozs7O0lBQy9CLHlDQUE2Qzs7Ozs7SUFDN0MsdUNBQWlDOzs7OztJQUNqQywyQ0FBeUI7Ozs7O0lBQ3pCLGlDQUF3RDs7Ozs7SUFDeEQsMkNBQTZCOzs7OztJQUM3QiwrQ0FBNEQ7Ozs7O0lBQzVELHdDQUE4RTs7Ozs7SUFDOUUsbURBQWtEOzs7OztJQUNsRCxrREFBaUQ7O0lBQ2pELHFDQUdFOztJQUNGLHFDQUdFOztJQUNGLDZDQUFpRDs7SUFDakQsd0NBQWdEOztJQUNoRCxrREFBeUM7O0lBQ3pDLHlDQUEyQzs7SUFDM0MsMENBQTRDOztJQUM1Qyx5Q0FBNEM7O0lBQzVDLHdDQUEyQzs7SUFDM0MsNENBQStDOztJQUMvQyxpREFBaUM7O0lBQ2pDLDZDQUF3RDs7SUFDeEQsMENBQXFEOztJQUNyRCw4Q0FBK0U7O0lBb0s3RSx5Q0FBNkI7Ozs7O0lBQzdCLHVDQUEyQjs7Ozs7SUFDM0Isc0NBQXdCOzs7OztJQUN4Qix1Q0FBMEI7Ozs7O0lBQzFCLGdEQUFnRTs7Ozs7SUFDaEUscURBQWtFOzs7OztJQUNsRSwrQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgaGFzTW9kaWZpZXJLZXksIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRQb3NpdGlvbixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBJbnB1dEJvb2xlYW4sIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIG1lcmdlLCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duJ1xufSlcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSB0cmlnZ2VyV2lkdGggPSAwO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIGRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgb3ZlcmxheVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcmVhZG9ubHkgaG92ZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gbWVyZ2UoXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXG4gICk7XG4gIHJlYWRvbmx5ICRjbGljazogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGZyb21FdmVudCh0aGlzLmVsLCAnY2xpY2snKS5waXBlKFxuICAgIHRhcChlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpLFxuICAgIG1hcFRvKHRydWUpXG4gICk7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NZW51OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XG4gIEBJbnB1dCgpIG56TWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tkcm9wID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xpY2tIaWRlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUYWJsZUZpbHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsKVxuICAgICAgICAud2l0aExvY2tlZFBvc2l0aW9uKCksXG4gICAgICBtaW5XaWR0aDogdGhpcy50cmlnZ2VyV2lkdGgsXG4gICAgICBoYXNCYWNrZHJvcDogdGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycsXG4gICAgICBiYWNrZHJvcENsYXNzOiB0aGlzLm56QmFja2Ryb3AgPyB1bmRlZmluZWQgOiAnbnotb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVPdmVybGF5RXZlbnQodGhpcy5vdmVybGF5UmVmKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Qb3NpdGlvbnMoY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZyk7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlDb25maWcge1xuICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0aGlzLnRyaWdnZXJXaWR0aDtcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gdGhpcy5uelRyaWdnZXIgPT09ICdjbGljayc7XG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XG4gIH1cblxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnZHJvcERvd25Qb3NpdGlvbicsIGNoYW5nZS5jb25uZWN0aW9uUGFpci5vcmlnaW5ZKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUV2ZW50KG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm92ZXJsYXlTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxuICAgICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLFxuICAgICAgb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZSA9PiBlLmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhaGFzTW9kaWZpZXJLZXkoZSkpKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBvcnRhbCgpOiBUZW1wbGF0ZVBvcnRhbCB7XG4gICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5uekRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5uekRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9ydGFsO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuTWVudSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25PcGVuKSB7XG4gICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCk7XG4gICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gb3ZlcmxheVJlZi5nZXRDb25maWcoKTtcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ29wZW4nLCB0cnVlKTtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ob3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XG4gICAgICBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLmdldFBvcnRhbCgpKTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnb3BlbicsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBvc2l0aW9uKHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi50aGlzLnBvc2l0aW9uc10pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5uek1hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5uek1hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsO1xuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGluaXRBY3Rpb25TdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdFZpc2libGUkID0gdGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicgPyB0aGlzLmhvdmVyJCA6IHRoaXMuJGNsaWNrO1xuICAgIGNvbnN0IGRyb3Bkb3duTWVudVZpc2libGUkID0gdGhpcy5uekRyb3Bkb3duTWVudS52aXNpYmxlJDtcbiAgICBjb25zdCBtZW51Q2xpY2tWaXNpYmxlJCA9IHRoaXMubnpDbGlja0hpZGVcbiAgICAgID8gdGhpcy5uekRyb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpXG4gICAgICA6IEVNUFRZO1xuICAgIGNvbnN0IHN1cFZpc2libGUkID0gbWVyZ2UoZHJvcGRvd25NZW51VmlzaWJsZSQsIGhvc3RWaXNpYmxlJCwgbWVudUNsaWNrVmlzaWJsZSQpO1xuICAgIGNvbnN0IHN1YlZpc2libGUkID0gdGhpcy5uekRyb3Bkb3duTWVudS5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kO1xuICAgIGNvbWJpbmVMYXRlc3QoW3N1cFZpc2libGUkLCBzdWJWaXNpYmxlJF0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChbc3VwVmlzaWJsZSwgc3ViVmlzaWJsZV0pID0+IHN1cFZpc2libGUgfHwgc3ViVmlzaWJsZSksXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5QnlWaXNpYmxlKCk7XG4gICAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCd0cmlnZ2VyV2lkdGgnLCB0aGlzLnRyaWdnZXJXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcbiAgfVxuXG4gIHJlZ2VuZXJhdGVQb3NpdGlvbihwbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSwgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xuICAgIHJldHVybiBbUE9TSVRJT05fTUFQW3BsYWNlbWVudF0sIC4uLnBvc2l0aW9uc107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekJ1dHRvbkNvbXBvbmVudDogTnpCdXR0b25Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekJ1dHRvbkdyb3VwQ29tcG9uZW50OiBOekJ1dHRvbkdyb3VwQ29tcG9uZW50LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tdHJpZ2dlcicpO1xuICAgIGlmICh0aGlzLm56QnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56QnV0dG9uQ29tcG9uZW50LmlzSW5Ecm9wZG93biA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWVudSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICAgIHRoaXMuaW5pdEFjdGlvblN1YnNjcmliZSgpO1xuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGlzcG9zZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG56VmlzaWJsZSxcbiAgICAgIG56VHJpZ2dlcixcbiAgICAgIG56UGxhY2VtZW50LFxuICAgICAgbnpEaXNhYmxlZCxcbiAgICAgIG56T3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIG56T3ZlcmxheVN0eWxlLFxuICAgICAgbnpUYWJsZUZpbHRlclxuICAgIH0gPSBjaGFuZ2VzO1xuICAgIGlmICh0aGlzLm56RHJvcGRvd25NZW51KSB7XG4gICAgICBpZiAobnpWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnZpc2libGUkLm5leHQodGhpcy5uelZpc2libGUpO1xuICAgICAgfVxuICAgICAgaWYgKG56VHJpZ2dlcikge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduelRyaWdnZXInLCB0aGlzLm56VHJpZ2dlcik7XG4gICAgICB9XG4gICAgICBpZiAobnpUYWJsZUZpbHRlcikge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduelRhYmxlRmlsdGVyJywgdGhpcy5uelRhYmxlRmlsdGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChuek92ZXJsYXlDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5uek92ZXJsYXlDbGFzc05hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG56T3ZlcmxheVN0eWxlKSB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256T3ZlcmxheVN0eWxlJywgdGhpcy5uek92ZXJsYXlTdHlsZSk7XG4gICAgICB9XG4gICAgICBpZiAobnpQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLm56UGxhY2VtZW50KTtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZShcbiAgICAgICAgICAnZHJvcERvd25Qb3NpdGlvbicsXG4gICAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5uelBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gdGhpcy5yZWdlbmVyYXRlUG9zaXRpb24odGhpcy5uelBsYWNlbWVudCwgdGhpcy5wb3NpdGlvbnMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3kodGhpcy5wb3NpdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=