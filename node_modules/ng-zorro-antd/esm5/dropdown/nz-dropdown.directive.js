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
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.stopPropagation(); })), mapTo(true));
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
    NzDropDownDirective.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
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
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.createOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            /** @type {?} */
            var config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            return this.overlayRef;
        }
        else {
            /** @type {?} */
            var overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    };
    /**
     * @param {?} overlayConfig
     * @return {?}
     */
    NzDropDownDirective.prototype.updateOverlayConfig = /**
     * @param {?} overlayConfig
     * @return {?}
     */
    function (overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzDropDownDirective.prototype.subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        }));
    };
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    NzDropDownDirective.prototype.subscribeOverlayEvent = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); }))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzDropdownMenu.setVisibleStateWhen(false);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.getPortal = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.openMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.dropdownOpen) {
            /** @type {?} */
            var overlayRef = this.createOverlay();
            /** @type {?} */
            var overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.closeMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    };
    /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    NzDropDownDirective.prototype.setPosition = /**
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions(tslib_1.__spread(this.positions));
    };
    /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    NzDropDownDirective.prototype.updatePositionStrategy = /**
     * @private
     * @param {?} positions
     * @return {?}
     */
    function (positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDropDownDirective.prototype.setTriggerWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            /** @type {?} */
            var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.initActionSubscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        /** @type {?} */
        var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        /** @type {?} */
        var menuClickVisible$ = this.nzClickHide
            ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false))
            : EMPTY;
        /** @type {?} */
        var supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        /** @type {?} */
        var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), supVisible = _b[0], subVisible = _b[1];
            return supVisible || subVisible;
        })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.updateOverlayByVisible();
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.setTriggerWidth();
                _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
            }
        }));
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.updateOverlayByVisible = /**
     * @return {?}
     */
    function () {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        this.setDisabled(this.nzDisabled);
    };
    /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    NzDropDownDirective.prototype.regeneratePosition = /**
     * @param {?} placement
     * @param {?} positions
     * @return {?}
     */
    function (placement, positions) {
        return tslib_1.__spread([POSITION_MAP[placement]], positions);
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzVisible = changes.nzVisible, nzTrigger = changes.nzTrigger, nzPlacement = changes.nzPlacement, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTableFilter = changes.nzTableFilter;
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
    };
    NzDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-dropdown]',
                    exportAs: 'nzDropdown'
                },] }
    ];
    /** @nocollapse */
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Overlay },
        { type: Platform },
        { type: NzButtonComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzButtonGroupComponent, decorators: [{ type: Optional }] },
        { type: ViewContainerRef }
    ]; };
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
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBSUwsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RjtJQXFNRSw2QkFDUyxVQUFzQixFQUNyQixRQUFtQixFQUNuQixPQUFnQixFQUNoQixR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QUFxRDs7SUFDckQsOENBQStFOztJQW9LN0UseUNBQTZCOzs7OztJQUM3Qix1Q0FBMkI7Ozs7O0lBQzNCLHNDQUF3Qjs7Ozs7SUFDeEIsdUNBQTBCOzs7OztJQUMxQixnREFBZ0U7Ozs7O0lBQ2hFLHFEQUFrRTs7Ozs7SUFDbEUsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGhhc01vZGlmaWVyS2V5LCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGVkUG9zaXRpb24sXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZlxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpCdXR0b25Db21wb25lbnQsIE56QnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUywgSW5wdXRCb29sZWFuLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWRyb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnbnpEcm9wZG93bidcbn0pXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgdHJpZ2dlcldpZHRoID0gMDtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBkcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNdO1xuICBwcml2YXRlIHBvc2l0aW9uU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIG92ZXJsYXlTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHJlYWRvbmx5IGhvdmVyJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IG1lcmdlKFxuICAgIGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8odHJ1ZSkpLFxuICAgIGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oZmFsc2UpKVxuICApO1xuICByZWFkb25seSAkY2xpY2s6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBmcm9tRXZlbnQodGhpcy5lbCwgJ2NsaWNrJykucGlwZShcbiAgICB0YXAoZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKSxcbiAgICBtYXBUbyh0cnVlKVxuICApO1xuICBASW5wdXQoKSBuekRyb3Bkb3duTWVudTogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xuICBASW5wdXQoKSBuek1hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCYWNrZHJvcCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsaWNrSGlkZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VGFibGVGaWx0ZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2Rpc2FibGVkJywgJycpO1xuICAgICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXlcbiAgICAgICAgLnBvc2l0aW9uKClcbiAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbClcbiAgICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbigpLFxuICAgICAgbWluV2lkdGg6IHRoaXMudHJpZ2dlcldpZHRoLFxuICAgICAgaGFzQmFja2Ryb3A6IHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snLFxuICAgICAgYmFja2Ryb3BDbGFzczogdGhpcy5uekJhY2tkcm9wID8gdW5kZWZpbmVkIDogJ256LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlT3ZlcmxheUV2ZW50KHRoaXMub3ZlcmxheVJlZik7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvUG9zaXRpb25zKGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpO1xuICAgICAgdGhpcy51cGRhdGVPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWcpO1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWc6IE92ZXJsYXlDb25maWcpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBvdmVybGF5Q29uZmlnLm1pbldpZHRoID0gdGhpcy50cmlnZ2VyV2lkdGg7XG4gICAgb3ZlcmxheUNvbmZpZy5oYXNCYWNrZHJvcCA9IHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snO1xuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub3ZlcmxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uID0gcG9zaXRpb24ucG9zaXRpb25DaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoY2hhbmdlID0+IHtcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ2Ryb3BEb3duUG9zaXRpb24nLCBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3JpZ2luWSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlFdmVudChvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdmVybGF5U3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKSxcbiAgICAgIG92ZXJsYXlSZWYuZGV0YWNobWVudHMoKSxcbiAgICAgIG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3J0YWwoKTogVGVtcGxhdGVQb3J0YWwge1xuICAgIGlmICghdGhpcy5wb3J0YWwgfHwgdGhpcy5wb3J0YWwudGVtcGxhdGVSZWYgIT09IHRoaXMubnpEcm9wZG93bk1lbnUudGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubnpEcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvcnRhbDtcbiAgfVxuXG4gIHByaXZhdGUgb3Blbk1lbnUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duT3Blbikge1xuICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgpO1xuICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG4gICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCdvcGVuJywgdHJ1ZSk7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uKG92ZXJsYXlDb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xuICAgICAgb3ZlcmxheVJlZi5hdHRhY2godGhpcy5nZXRQb3J0YWwoKSk7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ29wZW4nLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbihwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5O1xuICAgIHBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4udGhpcy5wb3NpdGlvbnNdKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb25TdHJhdGVneShwb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubnpNYXRjaFdpZHRoRWxlbWVudCA/IHRoaXMubnpNYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbDtcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG4gIH1cblxuICBpbml0QWN0aW9uU3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGNvbnN0IGhvc3RWaXNpYmxlJCA9IHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInID8gdGhpcy5ob3ZlciQgOiB0aGlzLiRjbGljaztcbiAgICBjb25zdCBkcm9wZG93bk1lbnVWaXNpYmxlJCA9IHRoaXMubnpEcm9wZG93bk1lbnUudmlzaWJsZSQ7XG4gICAgY29uc3QgbWVudUNsaWNrVmlzaWJsZSQgPSB0aGlzLm56Q2xpY2tIaWRlXG4gICAgICA/IHRoaXMubnpEcm9wZG93bk1lbnUubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUobWFwVG8oZmFsc2UpKVxuICAgICAgOiBFTVBUWTtcbiAgICBjb25zdCBzdXBWaXNpYmxlJCA9IG1lcmdlKGRyb3Bkb3duTWVudVZpc2libGUkLCBob3N0VmlzaWJsZSQsIG1lbnVDbGlja1Zpc2libGUkKTtcbiAgICBjb25zdCBzdWJWaXNpYmxlJCA9IHRoaXMubnpEcm9wZG93bk1lbnUubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVPcGVuJDtcbiAgICBjb21iaW5lTGF0ZXN0KFtzdXBWaXNpYmxlJCwgc3ViVmlzaWJsZSRdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW3N1cFZpc2libGUsIHN1YlZpc2libGVdKSA9PiBzdXBWaXNpYmxlIHx8IHN1YlZpc2libGUpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUJ5VmlzaWJsZSgpO1xuICAgICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xuICAgICAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XG4gICAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgndHJpZ2dlcldpZHRoJywgdGhpcy50cmlnZ2VyV2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XG4gICAgICB0aGlzLm9wZW5NZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldERpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XG4gIH1cblxuICByZWdlbmVyYXRlUG9zaXRpb24ocGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUsIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcbiAgICByZXR1cm4gW1BPU0lUSU9OX01BUFtwbGFjZW1lbnRdLCAuLi5wb3NpdGlvbnNdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpCdXR0b25Db21wb25lbnQ6IE56QnV0dG9uQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogTnpCdXR0b25Hcm91cENvbXBvbmVudCxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWRyb3Bkb3duLXRyaWdnZXInKTtcbiAgICBpZiAodGhpcy5uekJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekJ1dHRvbkNvbXBvbmVudC5pc0luRHJvcGRvd24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekJ1dHRvbkdyb3VwQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQuaXNJbkRyb3Bkb3duID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1lbnUpIHtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XG4gICAgICB0aGlzLmluaXRBY3Rpb25TdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBuelZpc2libGUsXG4gICAgICBuelRyaWdnZXIsXG4gICAgICBuelBsYWNlbWVudCxcbiAgICAgIG56RGlzYWJsZWQsXG4gICAgICBuek92ZXJsYXlDbGFzc05hbWUsXG4gICAgICBuek92ZXJsYXlTdHlsZSxcbiAgICAgIG56VGFibGVGaWx0ZXJcbiAgICB9ID0gY2hhbmdlcztcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWVudSkge1xuICAgICAgaWYgKG56VmlzaWJsZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlCeVZpc2libGUoKTtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS52aXNpYmxlJC5uZXh0KHRoaXMubnpWaXNpYmxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuelRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy5uelRyaWdnZXIpO1xuICAgICAgfVxuICAgICAgaWYgKG56VGFibGVGaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5uekRyb3Bkb3duTWVudS5zZXRWYWx1ZSgnbnpUYWJsZUZpbHRlcicsIHRoaXMubnpUYWJsZUZpbHRlcik7XG4gICAgICB9XG4gICAgICBpZiAobnpPdmVybGF5Q2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256T3ZlcmxheUNsYXNzTmFtZScsIHRoaXMubnpPdmVybGF5Q2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChuek92ZXJsYXlTdHlsZSkge1xuICAgICAgICB0aGlzLm56RHJvcGRvd25NZW51LnNldFZhbHVlKCduek92ZXJsYXlTdHlsZScsIHRoaXMubnpPdmVybGF5U3R5bGUpO1xuICAgICAgfVxuICAgICAgaWYgKG56UGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5uelBsYWNlbWVudCk7XG4gICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoXG4gICAgICAgICAgJ2Ryb3BEb3duUG9zaXRpb24nLFxuICAgICAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUubnpQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IHRoaXMucmVnZW5lcmF0ZVBvc2l0aW9uKHRoaXMubnpQbGFjZW1lbnQsIHRoaXMucG9zaXRpb25zKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMucG9zaXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19