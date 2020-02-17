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
export class NzMenuItemDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} nzMenuService
     * @param {?} nzSubmenuService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     * @param {?=} router
     */
    constructor(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router) {
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
            e => e instanceof NavigationEnd))).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
            }));
        }
    }
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    clickMenuItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixName}`]: true,
            [`${prefixName}-selected`]: this.nzSelected,
            [`${prefixName}-disabled`]: this.nzDisabled
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
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
        () => {
            /** @type {?} */
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hasActiveLinks() {
        /** @type {?} */
        const isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?} link
         * @return {?}
         */
        (link) => router.isActive(link.urlTree, this.nzMatchRouterExact));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**
         * store origin padding in padding
         * @type {?}
         */
        const paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let padding = null;
            if (this.nzMenuService.mode === 'inline') {
                if (isNotNil(this.nzPaddingLeft)) {
                    padding = this.nzPaddingLeft;
                }
                else {
                    /** @type {?} */
                    const level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
                    padding = level * this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = this.originalPadding;
            }
            if (padding) {
                this.renderer.setStyle(this.el, 'padding-left', `${padding}px`);
            }
            else {
                this.renderer.removeStyle(this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.updateRouterActive()));
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.updateRouterActive()));
        this.updateRouterActive();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
NzMenuItemDirective.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: NzMenuBaseService },
    { type: NzSubmenuService, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: RouterLink, decorators: [{ type: Optional }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }] },
    { type: Router, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVV4RCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7OztJQTBFOUIsWUFDVSx3QkFBa0QsRUFDbEQsYUFBZ0MsRUFDcEIsZ0JBQWtDLEVBQzlDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFQM0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixr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QzNCO0lBQWYsWUFBWSxFQUFFOzswREFBdUI7Ozs7OztJQVIvQyxpQ0FBd0Q7Ozs7O0lBQ3hELHVDQUFpQzs7Ozs7SUFDakMsOENBQThDOztJQUM5Qyx3Q0FBbUM7O0lBQ25DLHlDQUE0Qzs7SUFDNUMseUNBQTRDOztJQUM1Qyw0Q0FBK0I7O0lBQy9CLGlEQUFvRDs7SUFDcEQsNENBQStDOztJQUMvQywrQ0FBNEY7O0lBQzVGLHVEQUFvSDs7Ozs7SUFnRWxILHVEQUEwRDs7Ozs7SUFDMUQsNENBQXdDOzs7OztJQUN4QywrQ0FBc0Q7Ozs7O0lBQ3RELHVDQUEyQjs7Ozs7SUFDM0IseUNBQThCOzs7OztJQUM5Qix5Q0FBMkM7Ozs7O0lBQzNDLGlEQUEyRDs7Ozs7SUFDM0QscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpNZW51QmFzZVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vbnotc3VibWVudS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnUtaXRlbV0nLFxuICBleHBvcnRBczogJ256TWVudUl0ZW0nLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnY2xpY2tNZW51SXRlbSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgb3JpZ2luYWxQYWRkaW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgc2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlckV4YWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hdGNoUm91dGVyID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGluaywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZSb3V0ZXJMaW5rOiBRdWVyeUxpc3Q8Um91dGVyTGluaz47XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZjogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xuICBjbGlja01lbnVJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm56TWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKHRoaXMpO1xuICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UpIHtcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtJyA6ICdhbnQtbWVudS1pdGVtJztcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xuICAgICAgW2Ake3ByZWZpeE5hbWV9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4TmFtZX0tc2VsZWN0ZWRgXTogdGhpcy5uelNlbGVjdGVkLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMubnpEaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpTZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQodmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmxpc3RPZlJvdXRlckxpbmsgfHxcbiAgICAgICF0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZiB8fFxuICAgICAgIXRoaXMucm91dGVyIHx8XG4gICAgICAhdGhpcy5yb3V0ZXIubmF2aWdhdGVkIHx8XG4gICAgICAhdGhpcy5uek1hdGNoUm91dGVyXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFzQWN0aXZlTGlua3MgPSB0aGlzLmhhc0FjdGl2ZUxpbmtzKCk7XG4gICAgICBpZiAodGhpcy5uelNlbGVjdGVkICE9PSBoYXNBY3RpdmVMaW5rcykge1xuICAgICAgICB0aGlzLm56U2VsZWN0ZWQgPSBoYXNBY3RpdmVMaW5rcztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMubnpTZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhc0FjdGl2ZUxpbmtzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQWN0aXZlQ2hlY2tGbiA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyISk7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnJvdXRlckxpbmsgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMucm91dGVyTGluaykpIHx8XG4gICAgICAodGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMucm91dGVyTGlua1dpdGhIcmVmKSkgfHxcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5zb21lKGlzQWN0aXZlQ2hlY2tGbikgfHxcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLnNvbWUoaXNBY3RpdmVDaGVja0ZuKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiBib29sZWFuIHtcbiAgICByZXR1cm4gKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubnpNYXRjaFJvdXRlckV4YWN0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbms/OiBSb3V0ZXJMaW5rLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyPzogUm91dGVyXG4gICkge1xuICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgIHRoaXMucm91dGVyIS5ldmVudHMucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSB0aGlzLmVsLnN0eWxlLnBhZGRpbmdMZWZ0O1xuICAgIGlmIChwYWRkaW5nTGVmdCkge1xuICAgICAgdGhpcy5vcmlnaW5hbFBhZGRpbmcgPSBwYXJzZUludChwYWRkaW5nTGVmdCwgMTApO1xuICAgIH1cbiAgICBtZXJnZShcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5tb2RlJCxcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQkLFxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsJCA6IEVNUFRZXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGxldCBwYWRkaW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubnpNZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJykge1xuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLm56UGFkZGluZ0xlZnQpKSB7XG4gICAgICAgICAgICBwYWRkaW5nID0gdGhpcy5uelBhZGRpbmdMZWZ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCArIDEgOiAxO1xuICAgICAgICAgICAgcGFkZGluZyA9IGxldmVsICogdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFkZGluZyA9IHRoaXMub3JpZ2luYWxQYWRkaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWRkaW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgYCR7cGFkZGluZ31weGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZi5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKSk7XG4gICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkU3RhdGUodGhpcy5uelNlbGVjdGVkKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19