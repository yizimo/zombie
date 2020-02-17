/**
 * @fileoverview added by tsickle
 * Generated from: nz-menu-item.directive.ts
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
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { isNotNil, InputBoolean, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { merge, EMPTY, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzSubmenuService } from './nz-submenu.service';
var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router) {
        var _this = this;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzMenuService = nzMenuService;
        this.nzSubmenuService = nzSubmenuService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.originalPadding = null;
        this.selected$ = new Subject();
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            (/** @type {?} */ (this.router)).events.pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateRouterActive();
            }));
        }
    }
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    NzMenuItemDirective.prototype.clickMenuItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.nzSelected,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuItemDirective.prototype.setSelectedState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    /**
     * @private
     * @return {?}
     */
    NzMenuItemDirective.prototype.updateRouterActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.listOfRouterLink ||
            !this.listOfRouterLinkWithHref ||
            !this.router ||
            !this.router.navigated ||
            !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.nzSelected !== hasActiveLinks) {
                _this.nzSelected = hasActiveLinks;
                _this.setSelectedState(_this.nzSelected);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzMenuItemDirective.prototype.hasActiveLinks = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    };
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    NzMenuItemDirective.prototype.isLinkActive = /**
     * @private
     * @param {?} router
     * @return {?}
     */
    function (router) {
        var _this = this;
        return (/**
         * @param {?} link
         * @return {?}
         */
        function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); });
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * store origin padding in padding
         * @type {?}
         */
        var paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var padding = null;
            if (_this.nzMenuService.mode === 'inline') {
                if (isNotNil(_this.nzPaddingLeft)) {
                    padding = _this.nzPaddingLeft;
                }
                else {
                    /** @type {?} */
                    var level = _this.nzSubmenuService ? _this.nzSubmenuService.level + 1 : 1;
                    padding = level * _this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = _this.originalPadding;
            }
            if (padding) {
                _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
            }
            else {
                _this.renderer.removeStyle(_this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateRouterActive(); }));
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateRouterActive(); }));
        this.updateRouterActive();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu-item]',
                    exportAs: 'nzMenuItem',
                    providers: [NzUpdateHostClassService],
                    host: {
                        '(click)': 'clickMenuItem($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzMenuItemDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: NzMenuBaseService },
        { type: NzSubmenuService, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: RouterLink, decorators: [{ type: Optional }] },
        { type: RouterLinkWithHref, decorators: [{ type: Optional }] },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    NzMenuItemDirective.propDecorators = {
        nzDisabled: [{ type: Input }],
        nzSelected: [{ type: Input }],
        nzPaddingLeft: [{ type: Input }],
        nzMatchRouterExact: [{ type: Input }],
        nzMatchRouter: [{ type: Input }],
        listOfRouterLink: [{ type: ContentChildren, args: [RouterLink, { descendants: true },] }],
        listOfRouterLinkWithHref: [{ type: ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzSelected", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.originalPadding;
    /** @type {?} */
    NzMenuItemDirective.prototype.selected$;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSelected;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzPaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouterExact;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouter;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLink;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzSubmenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLink;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQWtGRSw2QkFDVSx3QkFBa0QsRUFDbEQsYUFBZ0MsRUFDcEIsZ0JBQWtDLEVBQzlDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFSckMsaUJBa0JDO1FBakJTLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FB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RUFBRSxJQUFJLEVBQUU7O0lBTmpDO1FBQWYsWUFBWSxFQUFFOzsyREFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzJEQUFvQjtJQUVuQjtRQUFmLFlBQVksRUFBRTs7bUVBQTRCO0lBQzNCO1FBQWYsWUFBWSxFQUFFOzs4REFBdUI7SUF5SWpELDBCQUFDO0NBQUEsQUExSkQsSUEwSkM7U0FsSlksbUJBQW1COzs7Ozs7SUFDOUIsaUNBQXdEOzs7OztJQUN4RCx1Q0FBaUM7Ozs7O0lBQ2pDLDhDQUE4Qzs7SUFDOUMsd0NBQW1DOztJQUNuQyx5Q0FBNEM7O0lBQzVDLHlDQUE0Qzs7SUFDNUMsNENBQStCOztJQUMvQixpREFBb0Q7O0lBQ3BELDRDQUErQzs7SUFDL0MsK0NBQTRGOztJQUM1Rix1REFBb0g7Ozs7O0lBZ0VsSCx1REFBMEQ7Ozs7O0lBQzFELDRDQUF3Qzs7Ozs7SUFDeEMsK0NBQXNEOzs7OztJQUN0RCx1Q0FBMkI7Ozs7O0lBQzNCLHlDQUE4Qjs7Ozs7SUFDOUIseUNBQTJDOzs7OztJQUMzQyxpREFBMkQ7Ozs7O0lBQzNELHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56TWVudUJhc2VTZXJ2aWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIEVNUFRZLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL256LXN1Ym1lbnUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1tZW51LWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICduek1lbnVJdGVtJyxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ2NsaWNrTWVudUl0ZW0oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIG9yaWdpbmFsUGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UGFkZGluZ0xlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWF0Y2hSb3V0ZXJFeGFjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlciA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGluazogUXVlcnlMaXN0PFJvdXRlckxpbms+O1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWY6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rV2l0aEhyZWY+O1xuXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cbiAgY2xpY2tNZW51SXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLm9uTWVudUl0ZW1DbGljayh0aGlzKTtcbiAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbScgOiAnYW50LW1lbnUtaXRlbSc7XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMubnpTZWxlY3RlZCxcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1kaXNhYmxlZGBdOiB0aGlzLm56RGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56U2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rIHx8XG4gICAgICAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYgfHxcbiAgICAgICF0aGlzLnJvdXRlciB8fFxuICAgICAgIXRoaXMucm91dGVyLm5hdmlnYXRlZCB8fFxuICAgICAgIXRoaXMubnpNYXRjaFJvdXRlclxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhc0FjdGl2ZUxpbmtzID0gdGhpcy5oYXNBY3RpdmVMaW5rcygpO1xuICAgICAgaWYgKHRoaXMubnpTZWxlY3RlZCAhPT0gaGFzQWN0aXZlTGlua3MpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkID0gaGFzQWN0aXZlTGlua3M7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNBY3RpdmVMaW5rcygpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0FjdGl2ZUNoZWNrRm4gPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlciEpO1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5yb3V0ZXJMaW5rICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmspKSB8fFxuICAgICAgKHRoaXMucm91dGVyTGlua1dpdGhIcmVmICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmtXaXRoSHJlZikpIHx8XG4gICAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuc29tZShpc0FjdGl2ZUNoZWNrRm4pIHx8XG4gICAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZi5zb21lKGlzQWN0aXZlQ2hlY2tGbilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLm56TWF0Y2hSb3V0ZXJFeGFjdCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcj86IFJvdXRlclxuICApIHtcbiAgICBpZiAocm91dGVyKSB7XG4gICAgICB0aGlzLnJvdXRlciEuZXZlbnRzLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xuICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gdGhpcy5lbC5zdHlsZS5wYWRkaW5nTGVmdDtcbiAgICBpZiAocGFkZGluZ0xlZnQpIHtcbiAgICAgIHRoaXMub3JpZ2luYWxQYWRkaW5nID0gcGFyc2VJbnQocGFkZGluZ0xlZnQsIDEwKTtcbiAgICB9XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCQgOiBFTVBUWVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBsZXQgcGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm56TWVudVNlcnZpY2UubW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5uelBhZGRpbmdMZWZ0KSkge1xuICAgICAgICAgICAgcGFkZGluZyA9IHRoaXMubnpQYWRkaW5nTGVmdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLm56U3VibWVudVNlcnZpY2UgPyB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxIDogMTtcbiAgICAgICAgICAgIHBhZGRpbmcgPSBsZXZlbCAqIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLm9yaWdpbmFsUGFkZGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFkZGluZykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIGAke3BhZGRpbmd9cHhgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKSk7XG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xuICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMubnpTZWxlY3RlZCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==