/**
 * @fileoverview added by tsickle
 * Generated from: nz-badge.component.ts
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
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { isEmpty, zoomBadgeMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
export class NzBadgeComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} contentObserver
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.colorArray = [
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime'
        ];
        this.presetColor = null;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        renderer.addClass(elementRef.nativeElement, 'ant-badge');
    }
    /**
     * @return {?}
     */
    checkContent() {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
    }
    /**
     * @return {?}
     */
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this.viewInit = true;
            this.cdr.markForCheck();
        }));
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.checkContent();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount, nzColor } = changes;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => +item));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
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
NzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: "<span #contentElement><ng-content></ng-content></span>\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus || presetColor}}\"\n      [style.background]=\"!presetColor && nzColor\"\n      *ngIf=\"nzStatus || nzColor\"\n      [ngStyle]=\"nzStyle\"></span>\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\n<ng-container *nzStringTemplateOutlet=\"nzCount\">\n  <sup class=\"ant-scroll-number\"\n       *ngIf=\"showSup && viewInit\"\n       [@.disabled]=\"notWrapper\"\n       [@zoomBadgeMotion]\n       [ngStyle]=\"nzStyle\"\n       [attr.title]=\"nzTitle || nzCount\"\n       [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\n       [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\n       [class.ant-badge-count]=\"!nzDot\"\n       [class.ant-badge-dot]=\"nzDot\"\n       [class.ant-badge-multiple-words]=\"countArray.length>=2\">\n    <ng-container *ngFor=\"let n of maxNumberArray;let i = index;\">\n      <span class=\"ant-scroll-number-only\"\n            *ngIf=\"count <= nzOverflowCount\"\n            [style.transform]=\"'translateY(' + (-countArray[i] * 100) + '%)'\">\n          <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p === countArray[i]\">{{ p }}</p>\n          </ng-container>\n      </span>\n    </ng-container>\n    <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\n  </sup>\n</ng-container>",
                host: {
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }] }
];
/** @nocollapse */
NzBadgeComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ContentObserver },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NzBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzText: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzOffset: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzBadgeComponent.prototype, "nzShowZero", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowDot", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzDot", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 99),
    tslib_1.__metadata("design:type", Number)
], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", String)
], NzBadgeComponent.prototype, "nzColor", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.colorArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbIm56LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUl0RCx3QkFBd0IsR0FBRyxTQUFTO0FBYzFDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7OztJQXNEM0IsWUFDUyxlQUFnQyxFQUMvQixRQUFtQixFQUNuQixVQUFzQixFQUN0QixlQUFnQyxFQUNoQyxHQUFzQixFQUN0QixNQUFjO1FBTGYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTNEaEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FB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QkFDN0MsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOztBQVZtQjtJQUFmLFlBQVksRUFBRTs7b0RBQTZCO0FBQzVCO0lBQWYsWUFBWSxFQUFFOzttREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7OytDQUFlO0FBQ1k7SUFBekMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQzs7eURBQXlCO0FBRTVCO0lBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7aURBQWlCOzs7Ozs7SUE3Qi9ELG9DQUFpQzs7SUFDakMsc0NBQWtCOztJQUNsQixvQ0FBaUI7O0lBQ2pCLDBDQUE4Qjs7SUFDOUIsc0NBQTBCOztJQUMxQiw0Q0FBa0Q7O0lBQ2xELHNDQWNFOztJQUNGLHVDQUFrQzs7SUFDbEMsaUNBQWM7O0lBQ2QsMENBQTJFOztJQUMzRSxzQ0FBcUQ7O0lBQ3JELHFDQUEwQzs7SUFDMUMsaUNBQXVDOztJQUN2QywyQ0FBMkU7O0lBQzNFLGtDQUF3Qjs7SUFDeEIsbUNBQStEOztJQUMvRCxtQ0FBeUI7O0lBQ3pCLG1DQUE0Qzs7SUFDNUMsb0NBQXFDOztJQUNyQyxtQ0FBNkM7O0lBQzdDLG9DQUFvQzs7SUFvQmxDLDJDQUF1Qzs7Ozs7SUFDdkMsb0NBQTJCOzs7OztJQUMzQixzQ0FBOEI7Ozs7O0lBQzlCLDJDQUF3Qzs7Ozs7SUFDeEMsK0JBQThCOzs7OztJQUM5QixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29udGVudE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzRW1wdHksIHpvb21CYWRnZU1vdGlvbiwgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIE56QmFkZ2VTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2JhY2tUb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1iYWRnZScsXG4gIGV4cG9ydEFzOiAnbnpCYWRnZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW3pvb21CYWRnZU1vdGlvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1iYWRnZS1zdGF0dXNdJzogJ256U3RhdHVzJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIG5vdFdyYXBwZXIgPSB0cnVlO1xuICB2aWV3SW5pdCA9IGZhbHNlO1xuICBtYXhOdW1iZXJBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgY291bnRBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgY291bnRTaW5nbGVBcnJheSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgY29sb3JBcnJheSA9IFtcbiAgICAncGluaycsXG4gICAgJ3JlZCcsXG4gICAgJ3llbGxvdycsXG4gICAgJ29yYW5nZScsXG4gICAgJ2N5YW4nLFxuICAgICdncmVlbicsXG4gICAgJ2JsdWUnLFxuICAgICdwdXJwbGUnLFxuICAgICdnZWVrYmx1ZScsXG4gICAgJ21hZ2VudGEnLFxuICAgICd2b2xjYW5vJyxcbiAgICAnZ29sZCcsXG4gICAgJ2xpbWUnXG4gIF07XG4gIHByZXNldENvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgY291bnQ6IG51bWJlcjtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3daZXJvOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dEb3QgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3QgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA5OSkgbnpPdmVyZmxvd0NvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBASW5wdXQoKSBuelN0YXR1czogTnpCYWRnZVN0YXR1c1R5cGU7XG4gIEBJbnB1dCgpIG56Q291bnQ6IG51bWJlciB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuek9mZnNldDogW251bWJlciwgbnVtYmVyXTtcblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RXcmFwcGVyID0gaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGlmICh0aGlzLm5vdFdyYXBwZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd1N1cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubnpTaG93RG90ICYmIHRoaXMubnpEb3QpIHx8IHRoaXMuY291bnQgPiAwIHx8ICh0aGlzLmNvdW50ID09PSAwICYmIHRoaXMubnpTaG93WmVybyk7XG4gIH1cblxuICBnZW5lcmF0ZU1heE51bWJlckFycmF5KCk6IHZvaWQge1xuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLm56T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuY29udGVudEVsZW1lbnQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek92ZXJmbG93Q291bnQsIG56Q291bnQsIG56Q29sb3IgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q291bnQgJiYgIShuekNvdW50LmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xuICAgICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KDAsIG56Q291bnQuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuY291bnRBcnJheSA9IHRoaXMuY291bnRcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGl0ZW0gPT4gK2l0ZW0pO1xuICAgIH1cbiAgICBpZiAobnpPdmVyZmxvd0NvdW50KSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTtcbiAgICB9XG4gICAgaWYgKG56Q29sb3IpIHtcbiAgICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLmNvbG9yQXJyYXkuaW5kZXhPZih0aGlzLm56Q29sb3IpICE9PSAtMSA/IHRoaXMubnpDb2xvciA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=