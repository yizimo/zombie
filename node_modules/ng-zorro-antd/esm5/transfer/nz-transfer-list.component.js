/**
 * @fileoverview added by tsickle
 * Generated from: nz-transfer-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzTransferListComponent = /** @class */ (function () {
    // #endregion
    function NzTransferListComponent(el, updateHostClassService, cdr) {
        var _this = this;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.cdr = cdr;
        // #region fields
        this.direction = '';
        this.titleText = '';
        this.showSelectAll = true;
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // #endregion
        // #region styles
        this.prefixCls = 'ant-transfer-list';
        // #endregion
        // #region select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.onItemSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (_this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            _this.updateCheckStatus();
            _this.handleSelect.emit(item);
        });
        this.onItemSelectAll = (/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            _this.dataSource.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            }));
            _this.updateCheckStatus();
            _this.handleSelectAll.emit(status);
        });
    }
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-with-footer"] = !!this.footer,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferListComponent.prototype.updateCheckStatus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled; })).length;
        this.stat.checkCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked && !w.disabled; })).length;
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.hide; })).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    };
    // #endregion
    // #region search
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    NzTransferListComponent.prototype.handleFilter = 
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.filter = value;
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.hide = value.length > 0 && !_this.matchFilter(value, item);
        }));
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.hide; })).length;
        this.filterChange.emit({ direction: this.direction, value: value });
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.handleFilter('');
    };
    /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    NzTransferListComponent.prototype.matchFilter = /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    function (text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    };
    NzTransferListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer-list',
                    exportAs: 'nzTransferList',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-template #defaultRenderList>\n  <ul *ngIf=\"stat.shownCount > 0\" class=\"ant-transfer-list-content\">\n    <div class=\"LazyLoad\" *ngFor=\"let item of dataSource\">\n      <li *ngIf=\"!item.hide\" (click)=\"onItemSelect(item)\"\n        class=\"ant-transfer-list-content-item\" [ngClass]=\"{'ant-transfer-list-content-item-disabled': disabled || item.disabled}\">\n        <label nz-checkbox [nzChecked]=\"item.checked\" (nzCheckedChange)=\"onItemSelect(item)\"\n          (click)=\"$event.stopPropagation()\" [nzDisabled]=\"disabled || item.disabled\">\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n        </label>\n      </li>\n    </div>\n  </ul>\n  <div *ngIf=\"stat.shownCount === 0\" class=\"ant-transfer-list-body-not-found\">\n    <nz-embed-empty [nzComponentName]=\"'transfer'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n  </div>\n</ng-template>\n<div class=\"ant-transfer-list-header\">\n  <label *ngIf=\"showSelectAll\" nz-checkbox [nzChecked]=\"stat.checkAll\" (nzCheckedChange)=\"onItemSelectAll($event)\"\n    [nzIndeterminate]=\"stat.checkHalf\" [nzDisabled]=\"stat.shownCount == 0 || disabled\">\n  </label>\n  <span class=\"ant-transfer-list-header-selected\">\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n  </span>\n</div>\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n    <div nz-transfer-search\n      (valueChanged)=\"handleFilter($event)\"\n      (valueClear)=\"handleClear()\"\n      [placeholder]=\"searchPlaceholder\"\n      [disabled]=\"disabled\"\n      [value]=\"filter\"></div>\n  </div>\n  <ng-container *ngIf=\"renderList else defaultRenderList\">\n    <div class=\"ant-transfer-list-body-customize-wrapper\">\n      <ng-container *ngTemplateOutlet=\"renderList; context: {\n        $implicit: dataSource,\n        direction: direction,\n        disabled: disabled,\n        onItemSelectAll: onItemSelectAll,\n        onItemSelect: onItemSelect,\n        stat: stat\n      }\"></ng-container>\n    </div>\n  </ng-container>\n</div>\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService },
        { type: ChangeDetectorRef }
    ]; };
    NzTransferListComponent.propDecorators = {
        direction: [{ type: Input }],
        titleText: [{ type: Input }],
        showSelectAll: [{ type: Input }],
        dataSource: [{ type: Input }],
        itemUnit: [{ type: Input }],
        itemsUnit: [{ type: Input }],
        filter: [{ type: Input }],
        disabled: [{ type: Input }],
        showSearch: [{ type: Input }],
        searchPlaceholder: [{ type: Input }],
        notFoundContent: [{ type: Input }],
        filterOption: [{ type: Input }],
        renderList: [{ type: Input }],
        render: [{ type: Input }],
        footer: [{ type: Input }],
        handleSelectAll: [{ type: Output }],
        handleSelect: [{ type: Output }],
        filterChange: [{ type: Output }]
    };
    return NzTransferListComponent;
}());
export { NzTransferListComponent };
if (false) {
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.showSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.disabled;
    /** @type {?} */
    NzTransferListComponent.prototype.showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.renderList;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.prefixCls;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelectAll;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyYW5zZmVyLyIsInNvdXJjZXMiOlsibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTlEO0lBaUhFLGFBQWE7SUFFYixpQ0FDVSxFQUFjLEVBQ2Qsc0JBQWdELEVBQ2hELEdBQXNCO1FBSGhDLGlCQUlJO1FBSE0sT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBMUd2QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBRWhDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsV0FBTSxHQUFHLEVBQUUsQ0FBQzs7UUFZRixvQkFBZSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3JFLGlCQUFZLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUQsaUJBQVksR0FBdUQsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7O1FBTXpHLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQzs7O1FBY2hDLFNBQUksR0FBRztZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFF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QUNyQyw2dEZBQWdEO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXZCQyxVQUFVO2dCQVdILHdCQUF3QjtnQkFiL0IsaUJBQWlCOzs7NEJBNkJoQixLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSztvQ0FDTCxLQUFLO2tDQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFFTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztrQ0FHTCxNQUFNOytCQUNOLE1BQU07K0JBQ04sTUFBTTs7SUFxR1QsOEJBQUM7Q0FBQSxBQXZJRCxJQXVJQztTQTlIWSx1QkFBdUI7OztJQUdsQyw0Q0FBd0I7O0lBQ3hCLDRDQUF3Qjs7SUFDeEIsZ0RBQThCOztJQUU5Qiw2Q0FBeUM7O0lBRXpDLDJDQUF1Qjs7SUFDdkIsNENBQXdCOztJQUN4Qix5Q0FBcUI7O0lBQ3JCLDJDQUEyQjs7SUFDM0IsNkNBQTZCOztJQUM3QixvREFBbUM7O0lBQ25DLGtEQUFpQzs7SUFDakMsK0NBQTJFOztJQUUzRSw2Q0FBdUM7O0lBQ3ZDLHlDQUFtQzs7SUFDbkMseUNBQW1DOztJQUduQyxrREFBd0Y7O0lBQ3hGLCtDQUFpRjs7SUFDakYsK0NBQXlHOztJQU16Ryw0Q0FBZ0M7O0lBY2hDLHVDQUtFOztJQUVGLCtDQU9FOztJQUVGLGtEQVNFOzs7OztJQXFDQSxxQ0FBc0I7Ozs7O0lBQ3RCLHlEQUF3RDs7Ozs7SUFDeEQsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zZmVySXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJhbnNmZXItbGlzdCcsXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2Zlckxpc3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBkaXJlY3Rpb24gPSAnJztcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgQElucHV0KCkgaXRlbVVuaXQgPSAnJztcbiAgQElucHV0KCkgaXRlbXNVbml0ID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlciA9ICcnO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1NlYXJjaDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlck9wdGlvbjogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHJlbmRlckxpc3Q6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSByZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBmb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBoYW5kbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxUcmFuc2Zlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzdHlsZXNcblxuICBwcmVmaXhDbHMgPSAnYW50LXRyYW5zZmVyLWxpc3QnO1xuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30td2l0aC1mb290ZXJgXTogISF0aGlzLmZvb3RlclxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNlbGVjdCBhbGxcblxuICBzdGF0ID0ge1xuICAgIGNoZWNrQWxsOiBmYWxzZSxcbiAgICBjaGVja0hhbGY6IGZhbHNlLFxuICAgIGNoZWNrQ291bnQ6IDAsXG4gICAgc2hvd25Db3VudDogMFxuICB9O1xuXG4gIG9uSXRlbVNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0LmVtaXQoaXRlbSk7XG4gIH07XG5cbiAgb25JdGVtU2VsZWN0QWxsID0gKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtLmRpc2FibGVkICYmICFpdGVtLmhpZGUpIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gc3RhdHVzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsLmVtaXQoc3RhdHVzKTtcbiAgfTtcblxuICBwcml2YXRlIHVwZGF0ZUNoZWNrU3RhdHVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbGlkQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICB0aGlzLnN0YXQuY2hlY2tDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgJiYgIXcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICB0aGlzLnN0YXQuc2hvd25Db3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5oaWRlKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LmNoZWNrQWxsID0gdmFsaWRDb3VudCA+IDAgJiYgdmFsaWRDb3VudCA9PT0gdGhpcy5zdGF0LmNoZWNrQ291bnQ7XG4gICAgdGhpcy5zdGF0LmNoZWNrSGFsZiA9IHRoaXMuc3RhdC5jaGVja0NvdW50ID4gMCAmJiAhdGhpcy5zdGF0LmNoZWNrQWxsO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc2VhcmNoXG5cbiAgaGFuZGxlRmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5oaWRlID0gdmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5tYXRjaEZpbHRlcih2YWx1ZSwgaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0LnNob3duQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuaGlkZSkubGVuZ3RoO1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hGaWx0ZXIodGV4dDogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5maWx0ZXJPcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlck9wdGlvbih0ZXh0LCBpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0udGl0bGUuaW5jbHVkZXModGV4dCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoJ2Zvb3RlcicgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==