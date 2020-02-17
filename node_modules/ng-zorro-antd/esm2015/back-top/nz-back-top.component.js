/**
 * @fileoverview added by tsickle
 * Generated from: nz-back-top.component.ts
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
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fadeMotion, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
export class NzBackTopComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} platform
     * @param {?} cd
     */
    constructor(nzConfigService, scrollSrv, doc, platform, cd) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.platform = platform;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this.nzClick = new EventEmitter();
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    }
    /**
     * @return {?}
     */
    clickBackTop() {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @private
     * @return {?}
     */
    handleScroll() {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        () => this.handleScroll()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListen();
    }
}
NzBackTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-back-top',
                exportAs: 'nzBackTop',
                animations: [fadeMotion],
                template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" @fadeMotion *ngIf=\"visible\">\n  <ng-template #defaultContent>\n    <div class=\"ant-back-top-content\">\n      <div class=\"ant-back-top-icon\"></div>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzBackTopComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform },
    { type: ChangeDetectorRef }
];
NzBackTopComponent.propDecorators = {
    nzTemplate: [{ type: Input }],
    nzVisibilityHeight: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 400), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /** @type {?} */
    NzBackTopComponent.prototype.nzVisibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /** @type {?} */
    NzBackTopComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWNrLXRvcC8iLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRTlELHdCQUF3QixHQUFHLFNBQVM7QUFXMUMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFpQjdCLFlBQ1MsZUFBZ0MsRUFDL0IsU0FBMEIsRUFFUixHQUFRLEVBQzFCLFFBQWtCLEVBQ2xCLEVBQXFCO1FBTHRCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUVSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQXRCdkIsWUFBTyxHQUF3QixJQUFJLENBQUM7UUFDcEMsV0FBTSxHQUF1QixJQUFJLENBQUM7UUFFMUMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVdOLFlB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Qyx1Q0FBa0M7Ozs7O0lBRWxDLGlDQUFrQzs7Ozs7SUFDbEMsc0NBQTBCOzs7OztJQUMxQixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmYWRlTW90aW9uLCBJbnB1dE51bWJlciwgTnpDb25maWdTZXJ2aWNlLCBOelNjcm9sbFNlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdiYWNrVG9wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYmFjay10b3AnLFxuICBleHBvcnRBczogJ256QmFja1RvcCcsXG4gIGFuaW1hdGlvbnM6IFtmYWRlTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJhY2stdG9wLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE56QmFja1RvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDQwMCkgQElucHV0TnVtYmVyKCkgbnpWaXNpYmlsaXR5SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGFyZ2V0KGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsJCkge1xuICAgICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tCYWNrVG9wKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIDApO1xuICAgIHRoaXMubnpDbGljay5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogSFRNTEVsZW1lbnQgfCBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlID09PSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSkgPiB0aGlzLm56VmlzaWJpbGl0eUhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHRoaXMuZ2V0VGFyZ2V0KCksICdzY3JvbGwnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSg1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICB9XG59XG4iXX0=