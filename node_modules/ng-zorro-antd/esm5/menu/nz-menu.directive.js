/**
 * @fileoverview added by tsickle
 * Generated from: nz-menu.directive.ts
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
import { ContentChildren, Directive, ElementRef, EventEmitter, Input, Optional, Output, QueryList, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDropdownHigherOrderServiceToken, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzMenuServiceFactory } from './nz-menu.resolver';
import { NzMenuService } from './nz-menu.service';
import { NzSubMenuComponent } from './nz-submenu.component';
var ɵ0 = NzMenuServiceFactory;
var NzMenuDirective = /** @class */ (function () {
    function NzMenuDirective(elementRef, nzMenuService, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInDropDown = false;
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.nzMenuService.isInDropDown;
        this.nzClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.nzOpen; }));
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
                this.nzMode = 'vertical';
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(true); }));
                this.listOfOpenedNzSubMenuComponent = [];
                this.nzMode = this.cacheMode;
            }
            this.nzMenuService.setMode(this.nzMode);
        }
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-root"] = true,
            _a[prefixName + "-" + this.nzTheme] = true,
            _a[prefixName + "-" + this.nzMode] = true,
            _a[prefixName + "-inline-collapsed"] = this.nzInlineCollapsed,
            _a));
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            _this.nzClick.emit(menu);
            if (_this.nzSelectable) {
                _this.listOfNzMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.setSelectedState(item === menu); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMenuDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzInlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (changes.nzInDropDown) {
            this.nzMenuService.isInDropDown = this.nzInDropDown;
        }
        if (changes.nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (changes.nzMode) {
            this.nzMenuService.setMode(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu]',
                    exportAs: 'nzMenu',
                    providers: [
                        NzUpdateHostClassService,
                        NzMenuService,
                        {
                            provide: NzMenuBaseService,
                            useFactory: ɵ0,
                            deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], NzMenuService]
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    NzMenuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: NzUpdateHostClassService }
    ]; };
    NzMenuDirective.propDecorators = {
        listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
        listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
        nzInlineIndent: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzInDropDown: [{ type: Input }],
        nzInlineCollapsed: [{ type: Input }],
        nzSelectable: [{ type: Input }],
        nzClick: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuDirective.prototype, "nzInDropDown", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuDirective.prototype, "nzSelectable", void 0);
    return NzMenuDirective;
}());
export { NzMenuDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.cacheMode;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.listOfOpenedNzSubMenuComponent;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzMenuItemDirective;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzInDropDown;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype.nzSelectable;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.nzUpdateHostClassService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBRVosaUNBQWlDLEVBQ2pDLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7U0FVMUMsb0JBQW9CO0FBUnRDO0lBdURFLHlCQUNTLFVBQXNCLEVBQ3JCLGFBQWdDLEVBQ2hDLHdCQUFrRDtRQUZuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBNUNwRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QixtQ0FBOEIsR0FBeUIsRUFBRSxDQUFDO1FBS3pELG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBcUIsT0FBTyxDQUFDO1FBQ3BDLFdBQU0sR0FB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LFFBQVEsRUFBRSxRQUFRO29CQUNsQixTQUFTLEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4QixhQUFhO3dCQUNiOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsSUFBc0I7NEJBQ2hDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGlDQUFpQyxDQUFDLEVBQUUsYUFBYSxDQUFDO3lCQUMzRjtxQkFDRjtpQkFDRjs7OztnQkF6Q0MsVUFBVTtnQkFvQlYsaUJBQWlCO2dCQUNqQix3QkFBd0I7Ozs0Q0F5QnZCLGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7MkNBRzFELGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7aUNBQ3pELEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7b0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBSGtCO1FBQWYsWUFBWSxFQUFFOzt5REFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7OzhEQUEyQjtJQUMxQjtRQUFmLFlBQVksRUFBRTs7eURBQWlEO0lBOEUzRSxzQkFBQztDQUFBLEFBeEdELElBd0dDO1NBM0ZZLGVBQWU7Ozs7OztJQUMxQixtQ0FBaUM7Ozs7O0lBQ2pDLG9DQUFzQzs7Ozs7SUFDdEMseURBQWtFOztJQUNsRSxvREFFRTs7SUFDRixtREFBb0g7O0lBQ3BILHlDQUE2Qjs7SUFDN0Isa0NBQTZDOztJQUM3QyxpQ0FBaUQ7O0lBQ2pELHVDQUE4Qzs7SUFDOUMsNENBQW1EOztJQUNuRCx1Q0FBeUU7O0lBQ3pFLGtDQUFxRTs7SUE2Qm5FLHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQXdDOzs7OztJQUN4QyxtREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgSW5wdXRCb29sZWFuLFxuICBOekRpcmVjdGlvblZISVR5cGUsXG4gIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgTnpNZW51QmFzZVNlcnZpY2UsXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TWVudVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9uei1tZW51LnJlc29sdmVyJztcbmltcG9ydCB7IE56TWVudVNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJyxcbiAgZXhwb3J0QXM6ICduek1lbnUnLFxuICBwcm92aWRlcnM6IFtcbiAgICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgTnpNZW51U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOek1lbnVCYXNlU2VydmljZSxcbiAgICAgIHVzZUZhY3Rvcnk6IE56TWVudVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIE56TWVudVNlcnZpY2VdXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjYWNoZU1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZTtcbiAgcHJpdmF0ZSBsaXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQ6IE56U3ViTWVudUNvbXBvbmVudFtdID0gW107XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8XG4gICAgTnpNZW51SXRlbURpcmVjdGl2ZVxuICA+O1xuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelN1Yk1lbnVDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelN1Yk1lbnVDb21wb25lbnQ+O1xuICBASW5wdXQoKSBueklubGluZUluZGVudCA9IDI0O1xuICBASW5wdXQoKSBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgbnpNb2RlOiBOekRpcmVjdGlvblZISVR5cGUgPSAndmVydGljYWwnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbkRyb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueklubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RhYmxlID0gIXRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd247XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOek1lbnVJdGVtRGlyZWN0aXZlPigpO1xuXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLm56SW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50ID0gdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZmlsdGVyKHN1Ym1lbnUgPT4gc3VibWVudS5uek9wZW4pO1xuICAgICAgICB0aGlzLmxpc3RPZk56U3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGUoZmFsc2UpKTtcbiAgICAgICAgdGhpcy5uek1vZGUgPSAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKHRydWUpKTtcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQgPSBbXTtcbiAgICAgICAgdGhpcy5uek1vZGUgPSB0aGlzLmNhY2hlTW9kZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMubnpNb2RlKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudScgOiAnYW50LW1lbnUnO1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgW2Ake3ByZWZpeE5hbWV9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4TmFtZX0tcm9vdGBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uelRoZW1lfWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uek1vZGV9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4TmFtZX0taW5saW5lLWNvbGxhcHNlZGBdOiB0aGlzLm56SW5saW5lQ29sbGFwc2VkXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG56TWVudVNlcnZpY2U6IE56TWVudUJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLm56TWVudVNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtZW51ID0+IHtcbiAgICAgIHRoaXMubnpDbGljay5lbWl0KG1lbnUpO1xuICAgICAgaWYgKHRoaXMubnpTZWxlY3RhYmxlKSB7XG4gICAgICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zZXRTZWxlY3RlZFN0YXRlKGl0ZW0gPT09IG1lbnUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlTW9kZSA9IHRoaXMubnpNb2RlO1xuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5ueklubGluZUNvbGxhcHNlZCkge1xuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5ueklubGluZUluZGVudCkge1xuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldElubGluZUluZGVudCh0aGlzLm56SW5saW5lSW5kZW50KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpJbkRyb3BEb3duKSB7XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID0gdGhpcy5uekluRHJvcERvd247XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56VGhlbWUpIHtcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRUaGVtZSh0aGlzLm56VGhlbWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek1vZGUpIHtcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMubnpNb2RlKTtcbiAgICAgIGlmICghY2hhbmdlcy5uek1vZGUuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZShmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelRoZW1lIHx8IGNoYW5nZXMubnpNb2RlIHx8IGNoYW5nZXMubnpJbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==