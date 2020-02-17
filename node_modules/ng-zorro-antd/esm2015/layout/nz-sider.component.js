/**
 * @fileoverview added by tsickle
 * Generated from: nz-sider.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { toCssPixel, InputBoolean, NzDomEventService } from 'ng-zorro-antd/core';
import { NzLayoutComponent } from './nz-layout.component';
export class NzSiderComponent {
    /**
     * @param {?} nzLayoutComponent
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     * @param {?} nzDomEventService
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.nzDomEventService = nzDomEventService;
        this.below = false;
        this.destroy$ = new Subject();
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
    }
    /**
     * @return {?}
     */
    get trigger() {
        return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
    }
    /**
     * @return {?}
     */
    get flexSetting() {
        return `0 0 ${this.widthSetting}`;
    }
    /**
     * @return {?}
     */
    get widthSetting() {
        if (this.nzCollapsed) {
            return `${this.nzCollapsedWidth}px`;
        }
        else {
            return toCssPixel(this.nzWidth);
        }
    }
    /**
     * @return {?}
     */
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    /**
     * @return {?}
     */
    get isZeroTrigger() {
        return (this.nzCollapsible &&
            this.trigger &&
            this.nzCollapsedWidth === 0 &&
            ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
    }
    /**
     * @return {?}
     */
    get isSiderTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.watchMatchMedia()));
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.watchMatchMedia()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    }
}
NzSiderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<div class=\"ant-layout-sider-children\">\n  <ng-content></ng-content>\n</div>\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\n  <ng-template [ngTemplateOutlet]=\"nzZeroTrigger || zeroTrigger\"></ng-template>\n</span>\n<div class=\"ant-layout-sider-trigger\"\n  *ngIf=\"isSiderTrigger\"\n  (click)=\"toggleCollapse()\"\n  [style.width]=\"widthSetting\">\n  <ng-template [ngTemplateOutlet]=\"trigger\"></ng-template>\n</div>\n<ng-template #defaultTrigger>\n  <i nz-icon [nzType]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\n  <i nz-icon [nzType]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\n</ng-template>\n<ng-template #zeroTrigger>\n  <i nz-icon nzType=\"bars\"></i>\n</ng-template>",
                host: {
                    '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                    '[style.flex]': 'flexSetting',
                    '[style.max-width]': 'widthSetting',
                    '[style.min-width]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }] }
];
/** @nocollapse */
NzSiderComponent.ctorParameters = () => [
    { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef },
    { type: NzDomEventService },
    { type: Renderer2 },
    { type: ElementRef }
];
NzSiderComponent.propDecorators = {
    nzCollapsedChange: [{ type: Output }],
    nzWidth: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzCollapsible: [{ type: Input }],
    nzCollapsed: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    defaultTrigger: [{ type: ViewChild, args: ['defaultTrigger', { static: true },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.below;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.dimensionMap;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzTheme;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzZeroTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsible;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.defaultTrigger;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.nzLayoutComponent;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBbUIxRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7OztJQXNFM0IsWUFDOEIsaUJBQW9DLEVBQ3hELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixHQUFzQixFQUN0QixpQkFBb0MsRUFDNUMsUUFBbUIsRUFDbkIsVUFBc0I7UUFQTSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3hELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1C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YTtvQkFDN0IsbUJBQW1CLEVBQUUsY0FBYztvQkFDbkMsbUJBQW1CLEVBQUUsY0FBYztvQkFDbkMsZUFBZSxFQUFFLGNBQWM7aUJBQ2hDO2FBQ0Y7Ozs7WUFsQlEsaUJBQWlCLHVCQTBGckIsUUFBUSxZQUFJLElBQUk7WUFqR1osWUFBWTtZQVhuQixNQUFNO1lBWUMsUUFBUTtZQWxCZixpQkFBaUI7WUFzQjhCLGlCQUFpQjtZQVhoRSxTQUFTO1lBVFQsVUFBVTs7O2dDQXFEVCxNQUFNO3NCQUVOLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0FBSnBCO0lBQWYsWUFBWSxFQUFFOzt3REFBd0I7QUFDdkI7SUFBZixZQUFZLEVBQUU7O3VEQUF1QjtBQUN0QjtJQUFmLFlBQVksRUFBRTs7cURBQXFCOzs7Ozs7SUFwQjdDLGlDQUFzQjs7Ozs7SUFDdEIsb0NBQWlDOzs7OztJQUNqQyx3Q0FPRTs7SUFFRiw2Q0FBMEQ7O0lBRTFELG1DQUF3Qzs7SUFDeEMsbUNBQTRDOztJQUM1Qyw0Q0FBK0I7O0lBQy9CLHdDQUFvQzs7SUFDcEMseUNBQTBDOztJQUMxQywwQ0FBZ0Q7O0lBQ2hELHlDQUErQzs7SUFDL0MsdUNBQTZDOztJQUM3QyxxQ0FBc0M7O0lBQ3RDLDBDQUFpRjs7Ozs7SUFnRC9FLDZDQUFnRTs7Ozs7SUFDaEUsd0NBQWtDOzs7OztJQUNsQyxrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUEwQjs7Ozs7SUFDMUIsK0JBQThCOzs7OztJQUM5Qiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgSW5wdXRCb29sZWFuLCBOekJyZWFrUG9pbnQsIE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL256LWxheW91dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zaWRlcicsXG4gIGV4cG9ydEFzOiAnbnpTaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoXSc6ICduekNvbGxhcHNlZCAmJiBuekNvbGxhcHNlZFdpZHRoID09PSAwJyxcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItbGlnaHRdJzogYG56VGhlbWUgPT09ICdsaWdodCdgLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWRdJzogJ256Q29sbGFwc2VkJyxcbiAgICAnW3N0eWxlLmZsZXhdJzogJ2ZsZXhTZXR0aW5nJyxcbiAgICAnW3N0eWxlLm1heC13aWR0aF0nOiAnd2lkdGhTZXR0aW5nJyxcbiAgICAnW3N0eWxlLm1pbi13aWR0aF0nOiAnd2lkdGhTZXR0aW5nJyxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICd3aWR0aFNldHRpbmcnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBiZWxvdyA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBkaW1lbnNpb25NYXAgPSB7XG4gICAgeHM6ICc0ODBweCcsXG4gICAgc206ICc1NzZweCcsXG4gICAgbWQ6ICc3NjhweCcsXG4gICAgbGc6ICc5OTJweCcsXG4gICAgeGw6ICcxMjAwcHgnLFxuICAgIHh4bDogJzE2MDBweCdcbiAgfTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMjAwO1xuICBASW5wdXQoKSBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2RhcmsnO1xuICBASW5wdXQoKSBuekNvbGxhcHNlZFdpZHRoID0gODA7XG4gIEBJbnB1dCgpIG56QnJlYWtwb2ludDogTnpCcmVha1BvaW50O1xuICBASW5wdXQoKSBuelplcm9UcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmV2ZXJzZUFycm93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbGxhcHNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbGxhcHNlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuelRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKCdkZWZhdWx0VHJpZ2dlcicsIHsgc3RhdGljOiB0cnVlIH0pIGRlZmF1bHRUcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgZ2V0IHRyaWdnZXIoKTogVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm56VHJpZ2dlciAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRyaWdnZXIgOiB0aGlzLmRlZmF1bHRUcmlnZ2VyO1xuICB9XG5cbiAgZ2V0IGZsZXhTZXR0aW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAwIDAgJHt0aGlzLndpZHRoU2V0dGluZ31gO1xuICB9XG5cbiAgZ2V0IHdpZHRoU2V0dGluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm56Q29sbGFwc2VkKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5uekNvbGxhcHNlZFdpZHRofXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRvQ3NzUGl4ZWwodGhpcy5ueldpZHRoKTtcbiAgICB9XG4gIH1cblxuICB3YXRjaE1hdGNoTWVkaWEoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpCcmVha3BvaW50KSB7XG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmRpbWVuc2lvbk1hcFt0aGlzLm56QnJlYWtwb2ludF19KWApLm1hdGNoZXM7XG4gICAgICB0aGlzLmJlbG93ID0gbWF0Y2hCZWxvdztcbiAgICAgIHRoaXMubnpDb2xsYXBzZWQgPSBtYXRjaEJlbG93O1xuICAgICAgdGhpcy5uekNvbGxhcHNlZENoYW5nZS5lbWl0KG1hdGNoQmVsb3cpO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VkID0gIXRoaXMubnpDb2xsYXBzZWQ7XG4gICAgdGhpcy5uekNvbGxhcHNlZENoYW5nZS5lbWl0KHRoaXMubnpDb2xsYXBzZWQpO1xuICB9XG5cbiAgZ2V0IGlzWmVyb1RyaWdnZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubnpDb2xsYXBzaWJsZSAmJlxuICAgICAgdGhpcy50cmlnZ2VyICYmXG4gICAgICB0aGlzLm56Q29sbGFwc2VkV2lkdGggPT09IDAgJiZcbiAgICAgICgodGhpcy5uekJyZWFrcG9pbnQgJiYgdGhpcy5iZWxvdykgfHwgIXRoaXMubnpCcmVha3BvaW50KVxuICAgICk7XG4gIH1cblxuICBnZXQgaXNTaWRlclRyaWdnZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzaWJsZSAmJiB0aGlzLnRyaWdnZXIgJiYgdGhpcy5uekNvbGxhcHNlZFdpZHRoICE9PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56TGF5b3V0Q29tcG9uZW50OiBOekxheW91dENvbXBvbmVudCxcbiAgICBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGF5b3V0LXNpZGVyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekxheW91dENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekxheW91dENvbXBvbmVudC5pbml0U2lkZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMud2F0Y2hNYXRjaE1lZGlhKCkpO1xuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmRlc3Ryb3lTaWRlcigpO1xuICAgIH1cbiAgfVxufVxuIl19