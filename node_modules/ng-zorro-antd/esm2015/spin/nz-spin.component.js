/**
 * @fileoverview added by tsickle
 * Generated from: nz-spin.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'spin';
export class NzSpinComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     */
    constructor(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    /**
     * @return {?}
     */
    subscribeLoading() {
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.loading = data;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    unsubscribeLoading() {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    }
}
NzSpinComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-spin',
                exportAs: 'nzSpin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #defaultIndicatorTemplate>\n  <span class=\"ant-spin-dot\" [class.ant-spin-dot-spin]=\"loading\">\n    <i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i>\n  </span>\n</ng-template>\n<div *ngIf=\"loading\">\n  <div class=\"ant-spin\"\n    [class.ant-spin-spinning]=\"loading\"\n    [class.ant-spin-lg]=\"nzSize === 'large'\"\n    [class.ant-spin-sm]=\"nzSize === 'small'\"\n    [class.ant-spin-show-text]=\"nzTip\">\n    <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\n    <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n  </div>\n</div>\n<div *ngIf=\"!nzSimple\"\n  class=\"ant-spin-container\"\n  [class.ant-spin-blur]=\"loading\">\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    '[class.ant-spin-nested-loading]': '!nzSimple'
                },
                styles: [`
      nz-spin {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzSpinComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef }
];
NzSpinComponent.propDecorators = {
    nzIndicator: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTip: [{ type: Input }],
    nzDelay: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzSpinning: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", TemplateRef)
], NzSpinComponent.prototype, "nzIndicator", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzSpinComponent.prototype, "nzDelay", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSpinComponent.prototype, "nzSimple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSpinComponent.prototype, "nzSpinning", void 0);
if (false) {
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading_;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJuei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFLTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBaUIsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O01BRXJHLHdCQUF3QixHQUFHLE1BQU07QUFvQnZDLE1BQU0sT0FBTyxlQUFlOzs7OztJQTRCMUIsWUFBbUIsZUFBZ0MsRUFBVSxHQUFzQjtRQUFoRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCMUUsV0FBTSxHQUFrQixTQUFTLENBQUM7UUFFbkIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ1AsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxhQUFRLEdBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQWtCRixDQUFDOzs7O0lBZnZGLGdCQUFn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dCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56Q29uZmlnU2VydmljZSwgTnpTaXplTERTVHlwZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdzcGluJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc3BpbicsXG4gIGV4cG9ydEFzOiAnbnpTcGluJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3Bpbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nXSc6ICchbnpTaW1wbGUnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LXNwaW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpTcGluQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56RGVsYXkgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaW1wbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U3Bpbm5pbmcgPSB0cnVlO1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgc3Bpbm5pbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLm56U3Bpbm5pbmcpO1xuICBwcml2YXRlIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5zcGlubmluZyQucGlwZShkZWJvdW5jZVRpbWUodGhpcy5uekRlbGF5KSk7XG4gIHByaXZhdGUgbG9hZGluZ186IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgc3Vic2NyaWJlTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlTG9hZGluZygpO1xuICAgIHRoaXMubG9hZGluZ18gPSB0aGlzLmxvYWRpbmckLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGRhdGE7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlTG9hZGluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nXykge1xuICAgICAgdGhpcy5sb2FkaW5nXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5sb2FkaW5nXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVMb2FkaW5nKCk7XG5cbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56U3Bpbm5pbmcpIHtcbiAgICAgIGlmIChjaGFuZ2VzLm56U3Bpbm5pbmcuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRoaXMubnpTcGlubmluZztcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Bpbm5pbmckLm5leHQodGhpcy5uelNwaW5uaW5nKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpEZWxheSkge1xuICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3Bpbm5pbmckLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVMb2FkaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVMb2FkaW5nKCk7XG4gIH1cbn1cbiJdfQ==