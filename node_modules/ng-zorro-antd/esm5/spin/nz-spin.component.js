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
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
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
    NzSpinComponent.prototype.subscribeLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.loading = data;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.unsubscribeLoading = /**
     * @return {?}
     */
    function () {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    };
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
                    styles: ["\n      nz-spin {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzSpinComponent;
}());
export { NzSpinComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJuei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFLTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBaUIsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBRXJHLHdCQUF3QixHQUFHLE1BQU07QUFFdkM7SUE4Q0UseUJBQW1CLGVBQWdDLEVBQVUsR0FBc0I7UUFBaEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUExQjFFLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0MsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNQLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsYUFBUSxHQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFrQkYsQ0FBQzs7OztJQWZ2RiwwQ0FBZ0I7OztJQUFoQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUlELGtDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGVBQWU7YUFDakIsZ0NBQWdDLENBQUMsd0JBQXdCLENBQUM7YUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxRQUFRO29CQUNsQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLDgwQkFBdUM7b0JBQ3ZDLElBQUksRUFBRTt3QkFDSixpQ0FBaUMsRUFBRSxXQUFXO3FCQUMvQzs2QkFFQywyREFJQztpQkFFSjs7OztnQkFyQm1DLGVBQWU7Z0JBYmpELGlCQUFpQjs7OzhCQW9DaEIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7O0lBTHlDO1FBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzswQ0FBYyxXQUFXO3dEQUFPO0lBR3REO1FBQWQsV0FBVyxFQUFFOztvREFBYTtJQUNYO1FBQWYsWUFBWSxFQUFFOztxREFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7O3VEQUFtQjtJQW1EN0Msc0JBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXpEWSxlQUFlOzs7SUFDMUIsc0NBQThFOztJQUM5RSxpQ0FBMkM7O0lBQzNDLGdDQUF1Qjs7SUFDdkIsa0NBQW9DOztJQUNwQyxtQ0FBMEM7O0lBQzFDLHFDQUEyQzs7SUFDM0Msa0NBQWU7Ozs7O0lBQ2YsbUNBQXVDOzs7OztJQUN2QyxvQ0FBeUQ7Ozs7O0lBQ3pELG1DQUF3Rjs7Ozs7SUFDeEYsbUNBQXNDOztJQWlCMUIsMENBQXVDOzs7OztJQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnpDb25maWdTZXJ2aWNlLCBOelNpemVMRFNUeXBlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3NwaW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zcGluJyxcbiAgZXhwb3J0QXM6ICduelNwaW4nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zcGluLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNwaW4tbmVzdGVkLWxvYWRpbmddJzogJyFuelNpbXBsZSdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotc3BpbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelNwaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekluZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUaXA6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpEZWxheSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNpbXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTcGlubmluZyA9IHRydWU7XG4gIGxvYWRpbmcgPSB0cnVlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBzcGlubmluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubnpTcGlubmluZyk7XG4gIHByaXZhdGUgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnNwaW5uaW5nJC5waXBlKGRlYm91bmNlVGltZSh0aGlzLm56RGVsYXkpKTtcbiAgcHJpdmF0ZSBsb2FkaW5nXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBzdWJzY3JpYmVMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVMb2FkaW5nKCk7XG4gICAgdGhpcy5sb2FkaW5nXyA9IHRoaXMubG9hZGluZyQuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZGF0YTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5zdWJzY3JpYmVMb2FkaW5nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRpbmdfKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmxvYWRpbmdfID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmliZUxvYWRpbmcoKTtcblxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpTcGlubmluZykge1xuICAgICAgaWYgKGNoYW5nZXMubnpTcGlubmluZy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdGhpcy5uelNwaW5uaW5nO1xuICAgICAgfVxuICAgICAgdGhpcy5zcGlubmluZyQubmV4dCh0aGlzLm56U3Bpbm5pbmcpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekRlbGF5KSB7XG4gICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zcGlubmluZyQucGlwZShkZWJvdW5jZVRpbWUodGhpcy5uekRlbGF5KSk7XG4gICAgICB0aGlzLnN1YnNjcmliZUxvYWRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZUxvYWRpbmcoKTtcbiAgfVxufVxuIl19