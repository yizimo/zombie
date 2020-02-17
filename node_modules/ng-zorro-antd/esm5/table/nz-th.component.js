/**
 * @fileoverview added by tsickle
 * Generated from: nz-th.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzI18nService } from 'ng-zorro-antd/i18n';
/**
 * @record
 */
export function NzThItemInterface() { }
if (false) {
    /** @type {?} */
    NzThItemInterface.prototype.text;
    /** @type {?} */
    NzThItemInterface.prototype.value;
    /** @type {?} */
    NzThItemInterface.prototype.checked;
}
var NzThComponent = /** @class */ (function () {
    function NzThComponent(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.hasFilterValue = false;
        this.filterVisible = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.locale = (/** @type {?} */ ({}));
        this.nzWidthChange$ = new Subject();
        this.destroy$ = new Subject();
        this.hasDefaultFilter = false;
        /* tslint:disable-next-line:no-any */
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzFilterMultiple = true;
        this.nzSort = null;
        this.nzFilters = [];
        this.nzExpand = false;
        this.nzShowCheckbox = false;
        this.nzCustomFilter = false;
        this.nzShowSort = false;
        this.nzShowFilter = false;
        this.nzShowRowSelection = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzFilterChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateSortValue = /**
     * @return {?}
     */
    function () {
        if (this.nzShowSort) {
            if (this.nzSort === 'ascend') {
                this.setSortValue('descend');
            }
            else if (this.nzSort === 'descend') {
                this.setSortValue(null);
            }
            else {
                this.setSortValue('ascend');
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.setSortValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    };
    Object.defineProperty(NzThComponent.prototype, "filterList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multipleFilterList.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "filterValue", {
        /* tslint:disable-next-line:no-any */
        get: /* tslint:disable-next-line:no-any */
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkedFilter = this.singleFilterList.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked; }));
            return checkedFilter ? checkedFilter.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateFilterStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.hasFilterValue = false;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkMultiple = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        filter.checked = !filter.checked;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkSingle = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.singleFilterList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.checked = item === filter); }));
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.hideDropDown = /**
     * @return {?}
     */
    function () {
        this.nzDropdownMenuComponent.setVisibleStateWhen(false);
        this.filterVisible = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.dropDownVisibleChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initMultipleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.multipleFilterList = this.nzFilters.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        }));
        this.checkDefaultFilters();
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initSingleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.singleFilterList = this.nzFilters.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        }));
        this.checkDefaultFilters();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.checkDefaultFilters = /**
     * @return {?}
     */
    function () {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.marForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzThComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzFilters) {
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        if (changes.nzWidth) {
            this.nzWidthChange$.next(this.nzWidth);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzThComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th:not(.nz-disable-th):not([mat-sort-header]):not([mat-header-cell])',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #checkboxTemplate>\n  <label nz-checkbox\n         [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\n         [(ngModel)]=\"nzChecked\"\n         [nzDisabled]=\"nzDisabled\"\n         [nzIndeterminate]=\"nzIndeterminate\"\n         (ngModelChange)=\"nzCheckedChange.emit($event)\">\n  </label>\n</ng-template>\n<span class=\"ant-table-header-column\">\n  <div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\n    <span class=\"ant-table-column-title\">\n      <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\n        <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n      </ng-container>\n      <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\n        <ng-container *ngIf=\"nzShowCheckbox\">\n          <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n        </ng-container>\n        <div nz-dropdown class=\"ant-table-selection-down\" nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\">\n          <i nz-icon nzType=\"down\"></i>\n        </div>\n        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n          <ul nz-menu class=\"ant-table-selection-menu\">\n            <li nz-menu-item\n                *ngFor=\"let selection of nzSelections\"\n                (click)=\"selection.onSelect()\">{{selection.text}}</li>\n          </ul>\n        </nz-dropdown-menu>\n      </div>\n      <ng-content></ng-content>\n    </span>\n    <ng-content select=\"nz-dropdown\"></ng-content>\n    <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\n      <div class=\"ant-table-column-sorter-inner ant-table-column-sorter-inner-full\">\n        <i nz-icon\n           nzType=\"caret-up\"\n           class=\"ant-table-column-sorter-up\"\n           [class.on]=\"nzSort == 'ascend'\"\n           [class.off]=\"nzSort != 'ascend'\"></i>\n        <i nz-icon\n           nzType=\"caret-down\"\n           class=\"ant-table-column-sorter-down\"\n           [class.on]=\"nzSort == 'descend'\"\n           [class.off]=\"nzSort != 'descend'\"></i>\n      </div>\n    </div>\n  </div>\n</span>\n<ng-content select=\"[nz-dropdown]\"></ng-content>\n<ng-content select=\"[nz-th-extra]\"></ng-content>\n\n<ng-container *ngIf=\"nzShowFilter\">\n  <i nz-icon\n     nz-dropdown\n     nzType=\"filter\"\n     nzTheme=\"fill\"\n     nzTrigger=\"click\"\n     nzTableFilter\n     [nzClickHide]=\"false\"\n     [nzDropdownMenu]=\"filterMenu\"\n     [class.ant-table-filter-selected]=\"hasFilterValue\"\n     [class.ant-table-filter-open]=\"filterVisible\"\n     (nzVisibleChange)=\"dropDownVisibleChange($event)\"></i>\n  <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n    <ul nz-menu>\n      <ng-container *ngIf=\"nzFilterMultiple\">\n        <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\n          <label nz-checkbox [ngModel]=\"filter.checked\" (ngModelChange)=\"checkMultiple(filter)\"></label>\n          <span>{{filter.text}}</span>\n        </li>\n      </ng-container>\n      <ng-container *ngIf=\"!nzFilterMultiple\">\n        <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\n          <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"checkSingle(filter)\">{{filter.text}}</label>\n        </li>\n      </ng-container>\n    </ul>\n    <div class=\"ant-table-filter-dropdown-btns\">\n      <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\n        <span>{{ locale.filterConfirm }}</span>\n      </a>\n      <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"reset();hideDropDown()\">\n        <span>{{ locale.filterReset }}</span>\n      </a>\n    </div>\n  </nz-dropdown-menu>\n</ng-container>\n",
                    host: {
                        '[class.ant-table-column-has-actions]': 'nzShowFilter || nzShowSort || nzCustomFilter',
                        '[class.ant-table-column-has-filters]': 'nzShowFilter || nzCustomFilter',
                        '[class.ant-table-column-has-sorters]': 'nzShowSort',
                        '[class.ant-table-selection-column-custom]': 'nzShowRowSelection',
                        '[class.ant-table-selection-column]': 'nzShowCheckbox',
                        '[class.ant-table-expand-icon-th]': 'nzExpand',
                        '[class.ant-table-th-left-sticky]': 'nzLeft',
                        '[class.ant-table-th-right-sticky]': 'nzRight',
                        '[class.ant-table-column-sort]': "nzSort === 'descend' || nzSort === 'ascend'",
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign'
                    }
                }] }
    ];
    /** @nocollapse */
    NzThComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzThComponent.propDecorators = {
        nzDropdownMenuComponent: [{ type: ViewChild, args: [NzDropdownMenuComponent, { static: false },] }],
        nzSelections: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzSortKey: [{ type: Input }],
        nzFilterMultiple: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzLeft: [{ type: Input }],
        nzRight: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzSort: [{ type: Input }],
        nzFilters: [{ type: Input }],
        nzExpand: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzCustomFilter: [{ type: Input }],
        nzShowSort: [{ type: Input }],
        nzShowFilter: [{ type: Input }],
        nzShowRowSelection: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzSortChange: [{ type: Output }],
        nzSortChangeWithKey: [{ type: Output }],
        nzFilterChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowCheckbox", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzCustomFilter", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowSort", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowFilter", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowRowSelection", void 0);
    return NzThComponent;
}());
export { NzThComponent };
if (false) {
    /** @type {?} */
    NzThComponent.prototype.hasFilterValue;
    /** @type {?} */
    NzThComponent.prototype.filterVisible;
    /** @type {?} */
    NzThComponent.prototype.multipleFilterList;
    /** @type {?} */
    NzThComponent.prototype.singleFilterList;
    /** @type {?} */
    NzThComponent.prototype.locale;
    /** @type {?} */
    NzThComponent.prototype.nzWidthChange$;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.hasDefaultFilter;
    /** @type {?} */
    NzThComponent.prototype.nzDropdownMenuComponent;
    /** @type {?} */
    NzThComponent.prototype.nzSelections;
    /** @type {?} */
    NzThComponent.prototype.nzChecked;
    /** @type {?} */
    NzThComponent.prototype.nzDisabled;
    /** @type {?} */
    NzThComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzThComponent.prototype.nzSortKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterMultiple;
    /** @type {?} */
    NzThComponent.prototype.nzWidth;
    /** @type {?} */
    NzThComponent.prototype.nzLeft;
    /** @type {?} */
    NzThComponent.prototype.nzRight;
    /** @type {?} */
    NzThComponent.prototype.nzAlign;
    /** @type {?} */
    NzThComponent.prototype.nzSort;
    /** @type {?} */
    NzThComponent.prototype.nzFilters;
    /** @type {?} */
    NzThComponent.prototype.nzExpand;
    /** @type {?} */
    NzThComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzThComponent.prototype.nzCustomFilter;
    /** @type {?} */
    NzThComponent.prototype.nzShowSort;
    /** @type {?} */
    NzThComponent.prototype.nzShowFilter;
    /** @type {?} */
    NzThComponent.prototype.nzShowRowSelection;
    /** @type {?} */
    NzThComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChangeWithKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterChange;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQW1CLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS3BFLHVDQUtDOzs7SUFKQyxpQ0FBYTs7SUFFYixrQ0FBVzs7SUFDWCxvQ0FBaUI7O0FBR25CO0lBa0tFLHVCQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQTNJdkUsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBd0IsRUFBRSxDQUFDOztRQUUzQyxXQUFNLEdBQTZCLG1CQUFBLEVBQUUsRUFBNEIsQ0FBQztRQUNsRSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQUcsS0FBSyxDQUFDOztRQUd4Qixp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TEM7U0FwS1ksYUFBYTs7O0lBQ3hCLHVDQUF1Qjs7SUFDdkIsc0NBQXNCOztJQUN0QiwyQ0FBNkM7O0lBQzdDLHlDQUEyQzs7SUFFM0MsK0JBQWtFOztJQUNsRSx1Q0FBK0I7Ozs7O0lBQy9CLGlDQUFpQzs7Ozs7SUFDakMseUNBQWlDOztJQUNqQyxnREFBd0c7O0lBRXhHLHFDQUFtRjs7SUFDbkYsa0NBQTJCOztJQUMzQixtQ0FBNEI7O0lBQzVCLHdDQUFpQzs7SUFDakMsa0NBQTJCOztJQUMzQix5Q0FBaUM7O0lBQ2pDLGdDQUF5Qjs7SUFDekIsK0JBQXdCOztJQUN4QixnQ0FBeUI7O0lBQ3pCLGdDQUE4Qzs7SUFDOUMsK0JBQW9EOztJQUNwRCxrQ0FBd0M7O0lBQ3hDLGlDQUEwQzs7SUFDMUMsdUNBQWdEOztJQUNoRCx1Q0FBZ0Q7O0lBQ2hELG1DQUE0Qzs7SUFDNUMscUNBQThDOztJQUM5QywyQ0FBb0Q7O0lBQ3BELHdDQUFpRTs7SUFDakUscUNBQW9FOztJQUNwRSw0Q0FBbUc7O0lBRW5HLHVDQUFvRTs7Ozs7SUEwR3hELDRCQUE4Qjs7Ozs7SUFBRSw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuZXhwb3J0IHR5cGUgTnpUaEZpbHRlclR5cGUgPSBBcnJheTx7IHRleHQ6IHN0cmluZzsgdmFsdWU6IGFueTsgYnlEZWZhdWx0PzogYm9vbGVhbiB9PjtcblxuZXhwb3J0IGludGVyZmFjZSBOelRoSXRlbUludGVyZmFjZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB2YWx1ZTogYW55O1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RoOm5vdCgubnotZGlzYWJsZS10aCk6bm90KFttYXQtc29ydC1oZWFkZXJdKTpub3QoW21hdC1oZWFkZXItY2VsbF0pJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGguY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1hY3Rpb25zXSc6ICduelNob3dGaWx0ZXIgfHwgbnpTaG93U29ydCB8fCBuekN1c3RvbUZpbHRlcicsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1maWx0ZXJzXSc6ICduelNob3dGaWx0ZXIgfHwgbnpDdXN0b21GaWx0ZXInLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVyc10nOiAnbnpTaG93U29ydCcsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbi1jdXN0b21dJzogJ256U2hvd1Jvd1NlbGVjdGlvbicsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbl0nOiAnbnpTaG93Q2hlY2tib3gnLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLWV4cGFuZC1pY29uLXRoXSc6ICduekV4cGFuZCcsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtdGgtbGVmdC1zdGlja3ldJzogJ256TGVmdCcsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5XSc6ICduelJpZ2h0JyxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4tc29ydF0nOiBgbnpTb3J0ID09PSAnZGVzY2VuZCcgfHwgbnpTb3J0ID09PSAnYXNjZW5kJ2AsXG4gICAgJ1tzdHlsZS5sZWZ0XSc6ICduekxlZnQnLFxuICAgICdbc3R5bGUucmlnaHRdJzogJ256UmlnaHQnLFxuICAgICdbc3R5bGUudGV4dC1hbGlnbl0nOiAnbnpBbGlnbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XG4gIGZpbHRlclZpc2libGUgPSBmYWxzZTtcbiAgbXVsdGlwbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdID0gW107XG4gIHNpbmdsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBsb2NhbGU6IE56STE4bkludGVyZmFjZVsnVGFibGUnXSA9IHt9IGFzIE56STE4bkludGVyZmFjZVsnVGFibGUnXTtcbiAgbnpXaWR0aENoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBoYXNEZWZhdWx0RmlsdGVyID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoTnpEcm9wZG93bk1lbnVDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBuekRyb3Bkb3duTWVudUNvbXBvbmVudDogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQElucHV0KCkgbnpTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgb25TZWxlY3QoLi4uYXJnczogYW55W10pOiBhbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgbnpDaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U29ydEtleTogc3RyaW5nO1xuICBASW5wdXQoKSBuekZpbHRlck11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nO1xuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBuekFsaWduOiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XG4gIEBJbnB1dCgpIG56U29ydDogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpGaWx0ZXJzOiBOelRoRmlsdGVyVHlwZSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUZpbHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U29ydCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RmlsdGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dSb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZVdpdGhLZXkgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfCBudWxsIH0+KCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXSB8IGFueT4oKTtcblxuICB1cGRhdGVTb3J0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xuICAgICAgaWYgKHRoaXMubnpTb3J0ID09PSAnYXNjZW5kJykge1xuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnZGVzY2VuZCcpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm56U29ydCA9PT0gJ2Rlc2NlbmQnKSB7XG4gICAgICAgIHRoaXMuc2V0U29ydFZhbHVlKG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUoJ2FzY2VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFNvcnRWYWx1ZSh2YWx1ZTogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5uelNvcnQgPSB2YWx1ZTtcbiAgICB0aGlzLm56U29ydENoYW5nZVdpdGhLZXkuZW1pdCh7IGtleTogdGhpcy5uelNvcnRLZXksIHZhbHVlOiB0aGlzLm56U29ydCB9KTtcbiAgICB0aGlzLm56U29ydENoYW5nZS5lbWl0KHRoaXMubnpTb3J0KTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJMaXN0KCk6IE56VGhJdGVtSW50ZXJmYWNlW10ge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBnZXQgZmlsdGVyVmFsdWUoKTogYW55IHtcbiAgICBjb25zdCBjaGVja2VkRmlsdGVyID0gdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xuICAgIHJldHVybiBjaGVja2VkRmlsdGVyID8gY2hlY2tlZEZpbHRlci52YWx1ZSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpGaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IHRoaXMuZmlsdGVyTGlzdC5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gaXNOb3ROaWwodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMubnpGaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QodHJ1ZSk7XG4gICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCh0cnVlKTtcbiAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBjaGVja011bHRpcGxlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcbiAgfVxuXG4gIGNoZWNrU2luZ2xlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBpdGVtID09PSBmaWx0ZXIpKTtcbiAgfVxuXG4gIGhpZGVEcm9wRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm56RHJvcGRvd25NZW51Q29tcG9uZW50LnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgZHJvcERvd25WaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gdmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBpbml0TXVsdGlwbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xuICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcbiAgICB9KTtcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcbiAgfVxuXG4gIGluaXRTaW5nbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdCA9IHRoaXMubnpGaWx0ZXJzLm1hcChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBmb3JjZSA/IGZhbHNlIDogISFpdGVtLmJ5RGVmYXVsdDtcbiAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIHRoaXMuaGFzRGVmYXVsdEZpbHRlciA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XG4gICAgfSk7XG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XG4gIH1cblxuICBjaGVja0RlZmF1bHRGaWx0ZXJzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekZpbHRlcnMgfHwgdGhpcy5uekZpbHRlcnMubGVuZ3RoID09PSAwIHx8ICF0aGlzLmhhc0RlZmF1bHRGaWx0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcbiAgfVxuXG4gIG1hckZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekZpbHRlcnMpIHtcbiAgICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCgpO1xuICAgICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCgpO1xuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpXaWR0aCkge1xuICAgICAgdGhpcy5ueldpZHRoQ2hhbmdlJC5uZXh0KHRoaXMubnpXaWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=