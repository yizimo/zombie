/**
 * @fileoverview added by tsickle
 * Generated from: nz-submenu.component.ts
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
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, Subject } from 'rxjs';
import { flatMap, map, startWith, takeUntil } from 'rxjs/operators';
import { collapseMotion, getPlacementName, slideMotion, zoomBigMotion, DEFAULT_SUBMENU_POSITIONS, InputBoolean, NzMenuBaseService, NzNoAnimationDirective, NzUpdateHostClassService, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubmenuService } from './nz-submenu.service';
var NzSubMenuComponent = /** @class */ (function () {
    function NzSubMenuComponent(elementRef, nzMenuService, cdr, nzSubmenuService, nzUpdateHostClassService, platform, noAnimation) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new EventEmitter();
        this.placement = 'rightTop';
        this.expandState = 'collapsed';
        this.overlayPositions = tslib_1.__spread(DEFAULT_SUBMENU_POSITIONS);
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    NzSubMenuComponent.prototype.setOpenState = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.nzSubmenuService.setOpenState(open);
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.clickSubMenuTitle = /**
     * @return {?}
     */
    function () {
        if (this.nzSubmenuService.mode === 'inline' && !this.nzMenuService.isInDropDown && !this.nzDisabled) {
            this.setOpenState(!this.nzOpen);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubMenuComponent.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.nzSubmenuService.setMouseEnterState(value);
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        if (this.nzSubmenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSubMenuComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a[prefixName + "-open"] = this.nzOpen,
            _a[prefixName + "-selected"] = this.isChildMenuSelected,
            _a[prefixName + "-" + this.nzSubmenuService.mode] = true,
            _a[prefixName + "-active"] = this.isMouseHover && !this.nzDisabled,
            _a));
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest([this.nzSubmenuService.mode$, this.nzSubmenuService.open$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), mode = _b[0], open = _b[1];
            if (open && mode === 'inline') {
                _this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                _this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                _this.expandState = 'active';
            }
            else {
                _this.isMouseHover = false;
                _this.expandState = 'collapsed';
            }
            _this.overlayPositions =
                mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== _this.nzOpen) {
                _this.setTriggerWidth();
                _this.nzOpen = open;
                _this.nzOpenChange.emit(_this.nzOpen);
            }
            _this.setClassMap();
        }));
        this.nzSubmenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.nzMenuService.menuOpen$.next(data);
        }));
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService.level$, this.nzSubmenuService.open$, this.nzSubmenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setTriggerWidth();
        this.listOfNzMenuItemDirective.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfNzMenuItemDirective.changes], _this.listOfNzMenuItemDirective.map((/**
             * @param {?} menu
             * @return {?}
             */
            function (menu) { return menu.selected$; }))));
        })), startWith(true), map((/**
         * @return {?}
         */
        function () { return _this.listOfNzMenuItemDirective.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.nzSelected; })); })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            _this.isChildMenuSelected = selected;
            _this.setClassMap();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzOpen) {
            this.nzSubmenuService.setOpenState(this.nzOpen);
            this.setTriggerWidth();
        }
        if (changes.nzDisabled) {
            this.nzSubmenuService.disabled = this.nzDisabled;
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSubMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-submenu]',
                    exportAs: 'nzSubmenu',
                    providers: [NzSubmenuService, NzUpdateHostClassService],
                    animations: [collapseMotion, zoomBigMotion, slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<div cdkOverlayOrigin\n     #origin=\"cdkOverlayOrigin\"\n     [class.ant-dropdown-menu-submenu-title]=\"nzMenuService.isInDropDown\"\n     [class.ant-menu-submenu-title]=\"!nzMenuService.isInDropDown\"\n     [style.paddingLeft.px]=\"nzMenuService.mode === 'inline'? (nzPaddingLeft ? nzPaddingLeft : nzSubmenuService.level * nzMenuService.inlineIndent) : null\"\n     (mouseenter)=\"setMouseEnterState(true)\"\n     (mouseleave)=\"setMouseEnterState(false)\"\n     (click)=\"clickSubMenuTitle()\">\n  <i nz-icon [nzType]=\"nzIcon\" *ngIf=\"nzIcon\"></i>\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\"><span>{{ nzTitle }}</span></ng-container>\n  <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\n  <span *ngIf=\"nzMenuService.isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\n    <i nz-icon nzType=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\n  </span>\n  <ng-template #notDropdownTpl>\n    <i class=\"ant-menu-submenu-arrow\"></i>\n  </ng-template>\n</div>\n<ul *ngIf=\"nzMenuService.mode === 'inline'\"\n    [@collapseMotion]=\"expandState\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngClass]=\"nzMenuClassName\"\n    class=\"ant-menu ant-menu-inline ant-menu-sub\">\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n</ul>\n<ng-template cdkConnectedOverlay\n             (positionChange)=\"onPositionChange($event)\"\n             [cdkConnectedOverlayPositions]=\"overlayPositions\"\n             [cdkConnectedOverlayOrigin]=\"origin\"\n             [cdkConnectedOverlayWidth]=\"triggerWidth\"\n             [cdkConnectedOverlayOpen]=\"nzOpen && nzMenuService.mode !== 'inline'\">\n  <div class=\"ant-menu-submenu ant-menu-submenu-popup\"\n       [@slideMotion]=\"expandState\"\n       [@zoomBigMotion]=\"expandState\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       [class.ant-menu-light]=\"nzMenuService.theme === 'light'\"\n       [class.ant-menu-dark]=\"nzMenuService.theme === 'dark'\"\n       [class.ant-menu-submenu-placement-bottomLeft]=\"nzSubmenuService.mode === 'horizontal'\"\n       [class.ant-menu-submenu-placement-rightTop]=\"nzSubmenuService.mode === 'vertical' && placement === 'rightTop'\"\n       [class.ant-menu-submenu-placement-leftTop]=\"nzSubmenuService.mode === 'vertical' && placement === 'leftTop'\"\n       (mouseleave)=\"setMouseEnterState(false)\"\n       (mouseenter)=\"setMouseEnterState(true)\">\n    <ul [class.ant-dropdown-menu]=\"nzMenuService.isInDropDown\"\n        [class.ant-menu]=\"!nzMenuService.isInDropDown\"\n        [class.ant-dropdown-menu-vertical]=\"nzMenuService.isInDropDown\"\n        [class.ant-menu-vertical]=\"!nzMenuService.isInDropDown\"\n        [class.ant-dropdown-menu-sub]=\"nzMenuService.isInDropDown\"\n        [class.ant-menu-sub]=\"!nzMenuService.isInDropDown\"\n        [ngClass]=\"nzMenuClassName\">\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n    </ul>\n  </div>\n</ng-template>\n\n<ng-template #subMenuTemplate>\n  <ng-content></ng-content>\n</ng-template>\n",
                    styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSubMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: ChangeDetectorRef },
        { type: NzSubmenuService },
        { type: NzUpdateHostClassService },
        { type: Platform },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSubMenuComponent.propDecorators = {
        nzMenuClassName: [{ type: Input }],
        nzPaddingLeft: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: true },] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true, read: ElementRef },] }],
        listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
        listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzOpen", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzDisabled", void 0);
    return NzSubMenuComponent;
}());
export { NzSubMenuComponent };
if (false) {
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzPaddingLeft;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzTitle;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzIcon;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSubMenuComponent.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.listOfNzMenuItemDirective;
    /** @type {?} */
    NzSubMenuComponent.prototype.placement;
    /** @type {?} */
    NzSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSubMenuComponent.prototype.expandState;
    /** @type {?} */
    NzSubMenuComponent.prototype.overlayPositions;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.isChildMenuSelected;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.isMouseHover;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.elementRef;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.cdr;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzSubmenuService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.platform;
    /** @type {?} */
    NzSubMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUNMLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBNEZFLDRCQUNVLFVBQXNCLEVBQ3ZCLGFBQWdDLEVBQy9CLEdBQXNCLEVBQ3ZCLGdCQUFrQyxFQUNqQyx3QkFBa0QsRUFDbEQsUUFBa0IsRUFDQyxXQUFvQztR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SUFDdkMsaUNBQThCOztJQUM5Qiw4Q0FBeUM7Ozs7O0lBQ3pDLHNEQUEwRDs7Ozs7SUFDMUQsc0NBQTBCOztJQUMxQix5Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGNvbGxhcHNlTW90aW9uLFxuICBnZXRQbGFjZW1lbnROYW1lLFxuICBzbGlkZU1vdGlvbixcbiAgem9vbUJpZ01vdGlvbixcbiAgREVGQVVMVF9TVUJNRU5VX1BPU0lUSU9OUyxcbiAgSW5wdXRCb29sZWFuLFxuICBOek1lbnVCYXNlU2VydmljZSxcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICBQT1NJVElPTl9NQVBcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1zdWJtZW51LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotc3VibWVudV0nLFxuICBleHBvcnRBczogJ256U3VibWVudScsXG4gIHByb3ZpZGVyczogW056U3VibWVudVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbiwgem9vbUJpZ01vdGlvbiwgc2xpZGVNb3Rpb25dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOnJvb3QgLmFudC1tZW51LXN1Ym1lbnUuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tTGVmdCB7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpyb290IC5hbnQtbWVudS1zdWJtZW51LmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LXJpZ2h0VG9wIHtcbiAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpyb290IC5hbnQtbWVudS1zdWJtZW51LmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56U3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IHRydWUgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBjZGtPdmVybGF5T3JpZ2luOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaXN0T2ZOelN1Yk1lbnVDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelN1Yk1lbnVDb21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKE56TWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PE56TWVudUl0ZW1EaXJlY3RpdmU+O1xuXG4gIHBsYWNlbWVudCA9ICdyaWdodFRvcCc7XG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xuICBleHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBvdmVybGF5UG9zaXRpb25zID0gWy4uLkRFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlNdO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc01vdXNlSG92ZXIgPSBmYWxzZTtcblxuICBzZXRPcGVuU3RhdGUob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGUob3Blbik7XG4gIH1cblxuICBjbGlja1N1Yk1lbnVUaXRsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnICYmICF0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc01vdXNlSG92ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTdWJtZW51U2VydmljZS5tb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51JyA6ICdhbnQtbWVudS1zdWJtZW51JztcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMubnpEaXNhYmxlZCxcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1vcGVuYF06IHRoaXMubnpPcGVuLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCxcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS0ke3RoaXMubnpTdWJtZW51U2VydmljZS5tb2RlfWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWFjdGl2ZWBdOiB0aGlzLmlzTW91c2VIb3ZlciAmJiAhdGhpcy5uekRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE56TWVudUJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLm56U3VibWVudVNlcnZpY2Uub3BlbiRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoW21vZGUsIG9wZW5dKSA9PiB7XG4gICAgICAgIGlmIChvcGVuICYmIG1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2JvdHRvbSc7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9XG4gICAgICAgICAgbW9kZSA9PT0gJ2hvcml6b250YWwnID8gW1BPU0lUSU9OX01BUC5ib3R0b21MZWZ0XSA6IFtQT1NJVElPTl9NQVAucmlnaHRUb3AsIFBPU0lUSU9OX01BUC5sZWZ0VG9wXTtcbiAgICAgICAgaWYgKG9wZW4gIT09IHRoaXMubnpPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICAgICAgICB0aGlzLm56T3BlbiA9IG9wZW47XG4gICAgICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgfSk7XG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1lbnVPcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UubWVudU9wZW4kLm5leHQoZGF0YSk7XG4gICAgfSk7XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCQsXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uub3BlbiQsXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSRcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICBmbGF0TWFwKCgpID0+XG4gICAgICAgICAgbWVyZ2UodGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmNoYW5nZXMsIC4uLnRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5tYXAobWVudSA9PiBtZW51LnNlbGVjdGVkJCkpXG4gICAgICAgICksXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgbWFwKCgpID0+IHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5zb21lKGUgPT4gZS5uelNlbGVjdGVkKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XG4gICAgICAgIHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uek9wZW4pIHtcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmRpc2FibGVkID0gdGhpcy5uekRpc2FibGVkO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19