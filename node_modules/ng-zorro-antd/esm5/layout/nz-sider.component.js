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
var NzSiderComponent = /** @class */ (function () {
    function NzSiderComponent(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
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
    Object.defineProperty(NzSiderComponent.prototype, "trigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "flexSetting", {
        get: /**
         * @return {?}
         */
        function () {
            return "0 0 " + this.widthSetting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "widthSetting", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzCollapsed) {
                return this.nzCollapsedWidth + "px";
            }
            else {
                return toCssPixel(this.nzWidth);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.watchMatchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzBreakpoint) {
            /** @type {?} */
            var matchBelow = this.mediaMatcher.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    };
    Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzCollapsible &&
                this.trigger &&
                this.nzCollapsedWidth === 0 &&
                ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.watchMatchMedia(); }));
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.watchMatchMedia(); }));
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    };
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
                        '[class.ant-layout-sider-light]': "nzTheme === 'light'",
                        '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                        '[style.flex]': 'flexSetting',
                        '[style.max-width]': 'widthSetting',
                        '[style.min-width]': 'widthSetting',
                        '[style.width]': 'widthSetting'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSiderComponent.ctorParameters = function () { return [
        { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: ChangeDetectorRef },
        { type: NzDomEventService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return NzSiderComponent;
}());
export { NzSiderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBdUZFLDBCQUM4QixpQkFBb0MsRUFDeEQsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLEdBQXNCLEVBQ3RCLGlCQUFvQyxFQUM1QyxRQUFtQixFQUNuQixVQUFzQjtRQVBNLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDeEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixD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QUMxQiwrQkFBOEI7Ozs7O0lBQzlCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsLCBJbnB1dEJvb2xlYW4sIE56QnJlYWtQb2ludCwgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbnotbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNpZGVyJyxcbiAgZXhwb3J0QXM6ICduelNpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2lkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGhdJzogJ256Q29sbGFwc2VkICYmIG56Q29sbGFwc2VkV2lkdGggPT09IDAnLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1saWdodF0nOiBgbnpUaGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZF0nOiAnbnpDb2xsYXBzZWQnLFxuICAgICdbc3R5bGUuZmxleF0nOiAnZmxleFNldHRpbmcnLFxuICAgICdbc3R5bGUubWF4LXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxuICAgICdbc3R5bGUubWluLXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxuICAgICdbc3R5bGUud2lkdGhdJzogJ3dpZHRoU2V0dGluZydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGJlbG93ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGRpbWVuc2lvbk1hcCA9IHtcbiAgICB4czogJzQ4MHB4JyxcbiAgICBzbTogJzU3NnB4JyxcbiAgICBtZDogJzc2OHB4JyxcbiAgICBsZzogJzk5MnB4JyxcbiAgICB4bDogJzEyMDBweCcsXG4gICAgeHhsOiAnMTYwMHB4J1xuICB9O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMDA7XG4gIEBJbnB1dCgpIG56VGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkV2lkdGggPSA4MDtcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrUG9pbnQ7XG4gIEBJbnB1dCgpIG56WmVyb1RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXZlcnNlQXJyb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJywgeyBzdGF0aWM6IHRydWUgfSkgZGVmYXVsdFRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBnZXQgdHJpZ2dlcigpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmlnZ2VyICE9PSB1bmRlZmluZWQgPyB0aGlzLm56VHJpZ2dlciA6IHRoaXMuZGVmYXVsdFRyaWdnZXI7XG4gIH1cblxuICBnZXQgZmxleFNldHRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDAgMCAke3RoaXMud2lkdGhTZXR0aW5nfWA7XG4gIH1cblxuICBnZXQgd2lkdGhTZXR0aW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubnpDb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm56Q29sbGFwc2VkV2lkdGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoTWF0Y2hNZWRpYSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekJyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuZGltZW5zaW9uTWFwW3RoaXMubnpCcmVha3BvaW50XX0pYCkubWF0Y2hlcztcbiAgICAgIHRoaXMuYmVsb3cgPSBtYXRjaEJlbG93O1xuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XG4gICAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQobWF0Y2hCZWxvdyk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb2xsYXBzZWQgPSAhdGhpcy5uekNvbGxhcHNlZDtcbiAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5uekNvbGxhcHNlZCk7XG4gIH1cblxuICBnZXQgaXNaZXJvVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5uekNvbGxhcHNpYmxlICYmXG4gICAgICB0aGlzLnRyaWdnZXIgJiZcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCAmJlxuICAgICAgKCh0aGlzLm56QnJlYWtwb2ludCAmJiB0aGlzLmJlbG93KSB8fCAhdGhpcy5uekJyZWFrcG9pbnQpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBpc1NpZGVyVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNpYmxlICYmIHRoaXMudHJpZ2dlciAmJiB0aGlzLm56Q29sbGFwc2VkV2lkdGggIT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpMYXlvdXRDb21wb25lbnQ6IE56TGF5b3V0Q29tcG9uZW50LFxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1sYXlvdXQtc2lkZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmluaXRTaWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMubnpMYXlvdXRDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuZGVzdHJveVNpZGVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=