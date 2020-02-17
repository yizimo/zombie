/**
 * @fileoverview added by tsickle
 * Generated from: nz-list.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { BehaviorSubject } from 'rxjs';
export class NzListComponent {
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     */
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.nzBordered = false;
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    }
    /**
     * @private
     * @return {?}
     */
    _setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: this.nzItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small',
            [`${this.prefixCls}-split`]: this.nzSplit,
            [`${this.prefixCls}-bordered`]: this.nzBordered,
            [`${this.prefixCls}-loading`]: this.nzLoading,
            [`${this.prefixCls}-grid`]: this.nzGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.nzLoadMore || this.nzPagination || this.nzFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
}
NzListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list, [nz-list]',
                exportAs: 'nzList',
                template: "<ng-template #itemsTpl>\n  <div class=\"ant-list-items\" *ngIf=\"nzDataSource.length > 0\">\n    <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\n      <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\n</div>\n<nz-spin [nzSpinning]=\"nzLoading\">\n  <ng-container *ngIf=\"nzDataSource\">\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n      </div>\n    </div>\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\n    </div>\n  </ng-container>\n  <ng-content></ng-content>\n</nz-spin>\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n</div>\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\n</div>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      nz-list,
      nz-list nz-spin {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzListComponent.propDecorators = {
    nzDataSource: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzGrid: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzItemLayout: [{ type: Input }],
    nzRenderItem: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzLoadMore: [{ type: Input }],
    nzPagination: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSplit: [{ type: Input }],
    nzNoResult: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzSplit", void 0);
if (false) {
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzHeader;
    /** @type {?} */
    NzListComponent.prototype.nzFooter;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.nzNoResult;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.itemLayoutNotifySource;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJuei1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFLTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQW9DLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUcsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQW9CbkQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBMEQxQixZQUFvQixFQUFjLEVBQVUsc0JBQWdEO1FBQXhFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBckRuRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBUW5DLGlCQUFZLEdBQXNCLFlBQVksQ0FBQztRQUkvQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBTWxDLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBRWxCLFlBQU8sR0FBRyxJQUFJLENBQUM7OztRQVFoQyxjQUFTLEdBQUcsVUFBVSxDQUFDOztRQW1CdkIsMkJBQXNCLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQU1JLENBQUM7Ozs7O0lBdkJ4RixZQUFZOztjQUNaLFFBQVEsR0FBRztZQUNmLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVTtZQUNoRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1lBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3pDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMvQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDN0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3ZDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzNHO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBTUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVDLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHd1REFBdUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBRTdDOzs7OztLQUtDO2FBRUo7Ozs7WUEvQkMsVUFBVTtZQVU2Qyx3QkFBd0I7OzsyQkF5QjlFLEtBQUs7eUJBRUwsS0FBSztxQkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUVMLEtBQUs7cUJBRUwsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7O0FBdEJtQjtJQUFmLFlBQVksRUFBRTs7bURBQW9CO0FBWW5CO0lBQWYsWUFBWSxFQUFFOztrREFBbUI7QUFRbEI7SUFBZixZQUFZLEVBQUU7O2dEQUFnQjs7O0lBdEJ4Qyx1Q0FBNkI7O0lBRTdCLHFDQUE0Qzs7SUFFNUMsaUNBQTRCOztJQUU1QixtQ0FBOEM7O0lBRTlDLG1DQUE4Qzs7SUFFOUMsdUNBQXdEOztJQUV4RCx1Q0FBeUM7O0lBRXpDLG9DQUEyQzs7SUFFM0MscUNBQXVDOztJQUV2Qyx1Q0FBeUM7O0lBRXpDLGlDQUEyQzs7SUFFM0Msa0NBQXdDOztJQUV4QyxxQ0FBZ0Q7Ozs7O0lBTWhELG9DQUErQjs7Ozs7SUFtQi9CLGlEQUEyRjs7Ozs7SUFNL0UsNkJBQXNCOzs7OztJQUFFLGlEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RGlyZWN0aW9uVkhUeXBlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56TGlzdEdyaWQgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QsIFtuei1saXN0XScsXG4gIGV4cG9ydEFzOiAnbnpMaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWxpc3QsXG4gICAgICBuei1saXN0IG56LXNwaW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8vICNyZWdpb24gZmllbGRzXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbnpEYXRhU291cmNlOiBhbnlbXTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56R3JpZDogTnpMaXN0R3JpZDtcblxuICBASW5wdXQoKSBuekhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIG56SXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGUgPSAnaG9yaXpvbnRhbCc7XG5cbiAgQElucHV0KCkgbnpSZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpMb2FkTW9yZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U3BsaXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG56Tm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0eWxlc1xuXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1saXN0JztcblxuICBwcml2YXRlIF9zZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYF06IHRoaXMubnpJdGVtTGF5b3V0ID09PSAndmVydGljYWwnLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sZ2BdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc21gXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCcsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwbGl0YF06IHRoaXMubnpTcGxpdCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYm9yZGVyZWRgXTogdGhpcy5uekJvcmRlcmVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMubnpMb2FkaW5nLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ncmlkYF06IHRoaXMubnpHcmlkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtYF06ICEhKHRoaXMubnpMb2FkTW9yZSB8fCB0aGlzLm56UGFnaW5hdGlvbiB8fCB0aGlzLm56Rm9vdGVyKVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBwcml2YXRlIGl0ZW1MYXlvdXROb3RpZnlTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RGlyZWN0aW9uVkhUeXBlPih0aGlzLm56SXRlbUxheW91dCk7XG5cbiAgZ2V0IGl0ZW1MYXlvdXROb3RpZnkkKCk6IE9ic2VydmFibGU8TnpEaXJlY3Rpb25WSFR5cGU+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xuICAgIGlmIChjaGFuZ2VzLm56SXRlbUxheW91dCkge1xuICAgICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLm5leHQodGhpcy5uekl0ZW1MYXlvdXQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=