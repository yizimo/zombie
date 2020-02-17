/**
 * @fileoverview added by tsickle
 * Generated from: nz-anchor-link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
var NzAnchorLinkComponent = /** @class */ (function () {
    function NzAnchorLinkComponent(elementRef, anchorComp, cdr, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.platform = platform;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
        renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    Object.defineProperty(NzAnchorLinkComponent.prototype, "nzTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.titleStr = null;
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.anchorComp.registerLink(this);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.goToClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.anchorComp.unregisterLink(this);
    };
    NzAnchorLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-link',
                    exportAs: 'nzLink',
                    preserveWhitespaces: false,
                    template: "<a (click)=\"goToClick($event)\" href=\"{{nzHref}}\" class=\"ant-anchor-link-title\" title=\"{{titleStr}}\">\n  <span *ngIf=\"titleStr; else (titleTpl || nzTemplate)\">{{ titleStr }}</span>\n</a>\n<ng-content></ng-content>",
                    host: {
                        '[class.ant-anchor-link-active]': 'active'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      nz-link {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAnchorLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzAnchorComponent },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: Renderer2 }
    ]; };
    NzAnchorLinkComponent.propDecorators = {
        nzHref: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzTemplate: [{ type: ContentChild, args: ['nzTemplate', { static: false },] }]
    };
    return NzAnchorLinkComponent;
}());
export { NzAnchorLinkComponent };
if (false) {
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzHref;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleStr;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleTpl;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.active;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzTemplate;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAnchorLinkComponent.prototype.anchorComp;
    /**
     * @type {?}
     * @private
     */
    NzAnchorLinkComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorLinkComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbmNob3IvIiwic291cmNlcyI6WyJuei1hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQXFDRSwrQkFDUyxVQUFzQixFQUNyQixVQUE2QixFQUM3QixHQUFzQixFQUN0QixRQUFrQixFQUMxQixRQUFtQjtRQUpaLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXRCbkIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUV0QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUU3QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBcUJ0QixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBcEJELHNCQUNJLDBDQUFPOzs7OztRQURYLFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQWNELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLENBQVE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQWpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxRQUFRO29CQUNsQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiwwT0FBOEM7b0JBQzlDLElBQUksRUFBRTt3QkFDSixnQ0FBZ0MsRUFBRSxRQUFRO3FCQUMzQztvQkFRRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBUDdDLDJEQUlDO2lCQUlKOzs7O2dCQTVCQyxVQUFVO2dCQVNILGlCQUFpQjtnQkFaeEIsaUJBQWlCO2dCQUhWLFFBQVE7Z0JBVWYsU0FBUzs7O3lCQTBCUixLQUFLOzBCQU1MLEtBQUs7NkJBVUwsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBK0IvQyw0QkFBQztDQUFBLEFBbEVELElBa0VDO1NBaERZLHFCQUFxQjs7O0lBQ2hDLHVDQUFzQjs7SUFFdEIseUNBQTZCOztJQUM3Qix5Q0FBNEI7O0lBQzVCLHVDQUF3Qjs7SUFZeEIsMkNBQTZFOztJQUczRSwyQ0FBNkI7Ozs7O0lBQzdCLDJDQUFxQzs7Ozs7SUFDckMsb0NBQThCOzs7OztJQUM5Qix5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saW5rJyxcbiAgZXhwb3J0QXM6ICduekxpbmsnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFuY2hvci1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWFuY2hvci1saW5rLWFjdGl2ZV0nOiAnYWN0aXZlJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1saW5rIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekFuY2hvckxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56SHJlZiA9ICcjJztcblxuICB0aXRsZVN0cjogc3RyaW5nIHwgbnVsbCA9ICcnO1xuICB0aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlU3RyID0gbnVsbDtcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhbmNob3JDb21wOiBOekFuY2hvckNvbXBvbmVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYW5jaG9yLWxpbmsnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYW5jaG9yQ29tcC5yZWdpc3RlckxpbmsodGhpcyk7XG4gIH1cblxuICBnb1RvQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuYW5jaG9yQ29tcC5oYW5kbGVTY3JvbGxUbyh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFuY2hvckNvbXAudW5yZWdpc3RlckxpbmsodGhpcyk7XG4gIH1cbn1cbiJdfQ==