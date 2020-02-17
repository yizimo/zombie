/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader.service.ts
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
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { arraysEqual, isNotNil } from 'ng-zorro-antd/core';
import { isShowSearchObject } from './nz-cascader-definitions';
import { isChildOption, isParentOption } from './nz-cascader-utils';
/**
 * All data is stored and parsed in NzCascaderService.
 */
var NzCascaderService = /** @class */ (function () {
    function NzCascaderService() {
        /**
         * Activated options in each column.
         */
        this.activatedOptions = [];
        /**
         * An array to store cascader items arranged in different layers.
         */
        this.columns = [[]];
        /**
         * If user has entered searching mode.
         */
        this.inSearchingMode = false;
        /**
         * Selected options would be output to user.
         */
        this.selectedOptions = [];
        this.values = []; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.$loading = new BehaviorSubject(false);
        /**
         * Emit an event to notify cascader it needs to redraw because activated or
         * selected options are changed.
         */
        this.$redraw = new Subject();
        /**
         * Emit an event when an option gets selected.
         * Emit true if a leaf options is selected.
         */
        this.$optionSelected = new Subject();
        /**
         * Emit an event to notify cascader it needs to quit searching mode.
         * Only emit when user do select a searching option.
         */
        this.$quitSearching = new Subject();
        /**
         * To hold columns before entering searching mode.
         */
        this.columnsSnapshot = [[]];
        /**
         * To hold activated options before entering searching mode.
         */
        this.activatedOptionsSnapshot = [];
    }
    Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
        /** Return cascader options in the first layer. */
        get: /**
         * Return cascader options in the first layer.
         * @return {?}
         */
        function () {
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    };
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    NzCascaderService.prototype.syncOptions = /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        /** @type {?} */
        var values = this.values;
        /** @type {?} */
        var hasValue = values && values.length;
        /** @type {?} */
        var lastColumnIndex = values.length - 1;
        /** @type {?} */
        var initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        function (columnIndex) {
            /** @type {?} */
            var activatedOptionSetter = (/**
             * @return {?}
             */
            function () {
                var _a;
                /** @type {?} */
                var currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    _this.$redraw.next();
                    return;
                }
                /** @type {?} */
                var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : (_a = {},
                            _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                            _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                            _a));
                _this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    _this.dropBehindColumns(columnIndex);
                    _this.selectedOptions = tslib_1.__spread(_this.activatedOptions);
                    _this.$redraw.next();
                }
            });
            if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                var option = _this.activatedOptions[columnIndex - 1] || {};
                _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        });
        this.activatedOptions = [];
        this.selectedOptions = [];
        if (first && this.cascaderComponent.nzLoadData && !hasValue) {
            // Should also notify the component that value changes. Fix #3480.
            this.$redraw.next();
            return;
        }
        else {
            initColumnWithIndex(0);
        }
    };
    /**
     * Bind cascader component so this service could use inputs.
     */
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    NzCascaderService.prototype.withComponent = /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    function (cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    };
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    NzCascaderService.prototype.withOptions = /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    };
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param performSelect Select
     * @param loadingChildren Try to load children asynchronously.
     */
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    NzCascaderService.prototype.setOptionActivated = /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    function (option, columnIndex, performSelect, loadingChildren) {
        if (performSelect === void 0) { performSelect = false; }
        if (loadingChildren === void 0) { loadingChildren = true; }
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        var isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData((/** @type {?} */ (option.children)), columnIndex + 1, option);
        }
        else if (!option.isLeaf && loadingChildren) {
            // Parent option that should try to load children asynchronously.
            this.loadChildren(option, columnIndex);
        }
        else if (option.isLeaf) {
            // Leaf option.
            this.dropBehindColumns(columnIndex);
        }
        // Actually perform selection to make an options not only activated but also selected.
        if (performSelect) {
            this.setOptionSelected(option, columnIndex);
        }
        this.$redraw.next();
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        var shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        function (o, i) {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: index });
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    NzCascaderService.prototype.setOptionDeactivatedSinceColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    };
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    NzCascaderService.prototype.setSearchOptionSelected = /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        this.activatedOptions = [option];
        this.selectedOptions = tslib_1.__spread(option.path);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option: option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            _this.$quitSearching.next();
            _this.$redraw.next();
            _this.inSearchingMode = false;
            _this.columns = tslib_1.__spread(_this.columnsSnapshot);
            _this.activatedOptions = tslib_1.__spread(_this.selectedOptions);
        }), 200);
    };
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    NzCascaderService.prototype.prepareSearchOptions = /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    function (searchValue) {
        var _this = this;
        /** @type {?} */
        var results = [];
        // Search results only have one layer.
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        function (i, p) {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                /** @type {?} */
                var label = _this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        var showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        var loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            var _a;
            if (forceDisabled === void 0) { forceDisabled = false; }
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.cascaderComponent.nzLabelProperty] = cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return _this.getOptionLabel(p); })).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        var loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); }));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return sorter(a.path, b.path, searchValue); }));
        }
        this.columns = [results];
    };
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    NzCascaderService.prototype.toggleSearchingMode = /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    function (toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = tslib_1.__spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = tslib_1.__spread(this.activatedOptionsSnapshot);
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.columns = tslib_1.__spread(this.columnsSnapshot);
            this.syncOptions();
            this.$redraw.next();
        }
    };
    /**
     * Clear selected options.
     */
    /**
     * Clear selected options.
     * @return {?}
     */
    NzCascaderService.prototype.clear = /**
     * Clear selected options.
     * @return {?}
     */
    function () {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    };
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionLabel = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    };
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    NzCascaderService.prototype.setColumnData = /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    function (options, columnIndex, parent) {
        /** @type {?} */
        var existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return (o.parent = parent); }));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    };
    /**
     * Set all ancestor options as activated.
     */
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    NzCascaderService.prototype.trackAncestorActivatedOptions = /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    function (startIndex) {
        for (var i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindActivatedOptions = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindColumns = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    };
    /**
     * Load children of an option asynchronously.
     */
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderService.prototype.loadChildren = /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        var _this = this;
        /** @type {?} */
        var loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            function () {
                option.loading = false;
                if (option.children) {
                    _this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                _this.$loading.next(false);
                _this.$redraw.next();
            }), (/**
             * @return {?}
             */
            function () {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                _this.$redraw.next();
            }));
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.isLoaded = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * Find a option that has a given value in a given column.
     */
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    NzCascaderService.prototype.findOptionWithValue = /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    function (columnIndex, value // tslint:disable-line:no-any
    ) {
        var _this = this;
        /** @type {?} */
        var targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return v_1 === _this.getOptionValue(o); }))));
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderService.prototype.prepareEmitValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.getOptionValue(o); }));
    };
    NzCascaderService.decorators = [
        { type: Injectable }
    ];
    return NzCascaderService;
}());
export { NzCascaderService };
if (false) {
    /**
     * Activated options in each column.
     * @type {?}
     */
    NzCascaderService.prototype.activatedOptions;
    /**
     * An array to store cascader items arranged in different layers.
     * @type {?}
     */
    NzCascaderService.prototype.columns;
    /**
     * If user has entered searching mode.
     * @type {?}
     */
    NzCascaderService.prototype.inSearchingMode;
    /**
     * Selected options would be output to user.
     * @type {?}
     */
    NzCascaderService.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderService.prototype.values;
    /** @type {?} */
    NzCascaderService.prototype.$loading;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     * @type {?}
     */
    NzCascaderService.prototype.$redraw;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     * @type {?}
     */
    NzCascaderService.prototype.$optionSelected;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     * @type {?}
     */
    NzCascaderService.prototype.$quitSearching;
    /**
     * To hold columns before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.columnsSnapshot;
    /**
     * To hold activated options before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.activatedOptionsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.cascaderComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUNMLGtCQUFrQixFQUtuQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFLcEU7SUFBQTs7OztRQUdFLHFCQUFnQixHQUF1QixFQUFFLENBQUM7Ozs7UUFHMUMsWUFBTyxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBR3JDLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7O1FBR3hCLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQztRQUV6QyxXQUFNLEdBQVUsRUFBRSxDQUFDLENBQUMsNkJBQTZCOztRQUV4QyxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7Ozs7O1FBTS9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7OztRQU05QixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUczQixDQUFDOzs7OztRQU1ILG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQUd0QyxvQkFBZSxHQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBRzdDLDZCQUF3QixHQUF1QixFQUFFLENBQUM7SUE2WDVELENBQUM7SUF4WEMsc0JBQUksd0NBQVM7UUFEYixrREFBa0Q7Ozs7O1FBQ2xEO1lBQ0UsT0FBTyxJQUFJLENB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Q0FBOEM7Ozs7OztJQUc5Qyw0Q0FBcUQ7Ozs7OztJQUdyRCxxREFBMEQ7Ozs7O0lBRTFELDhDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBhcnJheXNFcXVhbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQge1xuICBpc1Nob3dTZWFyY2hPYmplY3QsXG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcbiAgTnpDYXNjYWRlckZpbHRlcixcbiAgTnpDYXNjYWRlck9wdGlvbixcbiAgTnpDYXNjYWRlclNlYXJjaE9wdGlvblxufSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcbmltcG9ydCB7IGlzQ2hpbGRPcHRpb24sIGlzUGFyZW50T3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci11dGlscyc7XG5cbi8qKlxuICogQWxsIGRhdGEgaXMgc3RvcmVkIGFuZCBwYXJzZWQgaW4gTnpDYXNjYWRlclNlcnZpY2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBBY3RpdmF0ZWQgb3B0aW9ucyBpbiBlYWNoIGNvbHVtbi4gKi9cbiAgYWN0aXZhdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgLyoqIEFuIGFycmF5IHRvIHN0b3JlIGNhc2NhZGVyIGl0ZW1zIGFycmFuZ2VkIGluIGRpZmZlcmVudCBsYXllcnMuICovXG4gIGNvbHVtbnM6IE56Q2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcblxuICAvKiogSWYgdXNlciBoYXMgZW50ZXJlZCBzZWFyY2hpbmcgbW9kZS4gKi9cbiAgaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XG5cbiAgLyoqIFNlbGVjdGVkIG9wdGlvbnMgd291bGQgYmUgb3V0cHV0IHRvIHVzZXIuICovXG4gIHNlbGVjdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgdmFsdWVzOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuXG4gIHJlYWRvbmx5ICRsb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHJlZHJhdyBiZWNhdXNlIGFjdGl2YXRlZCBvclxuICAgKiBzZWxlY3RlZCBvcHRpb25zIGFyZSBjaGFuZ2VkLlxuICAgKi9cbiAgcmVhZG9ubHkgJHJlZHJhdyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgd2hlbiBhbiBvcHRpb24gZ2V0cyBzZWxlY3RlZC5cbiAgICogRW1pdCB0cnVlIGlmIGEgbGVhZiBvcHRpb25zIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgcmVhZG9ubHkgJG9wdGlvblNlbGVjdGVkID0gbmV3IFN1YmplY3Q8e1xuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjtcbiAgICBpbmRleDogbnVtYmVyO1xuICB9IHwgbnVsbD4oKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcXVpdCBzZWFyY2hpbmcgbW9kZS5cbiAgICogT25seSBlbWl0IHdoZW4gdXNlciBkbyBzZWxlY3QgYSBzZWFyY2hpbmcgb3B0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgJHF1aXRTZWFyY2hpbmcgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBUbyBob2xkIGNvbHVtbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xuICBwcml2YXRlIGNvbHVtbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdW10gPSBbW11dO1xuXG4gIC8qKiBUbyBob2xkIGFjdGl2YXRlZCBvcHRpb25zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cbiAgcHJpdmF0ZSBhY3RpdmF0ZWRPcHRpb25zU25hcHNob3Q6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgY2FzY2FkZXJDb21wb25lbnQ6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZTtcblxuICAvKiogUmV0dXJuIGNhc2NhZGVyIG9wdGlvbnMgaW4gdGhlIGZpcnN0IGxheWVyLiAqL1xuICBnZXQgbnpPcHRpb25zKCk6IE56Q2FzY2FkZXJPcHRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1swXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuJHJlZHJhdy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcuY29tcGxldGUoKTtcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuJGxvYWRpbmcuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhhdCB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93bi5cbiAgICovXG4gIHN5bmNPcHRpb25zKGZpcnN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICBjb25zdCBoYXNWYWx1ZSA9IHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoO1xuICAgIGNvbnN0IGxhc3RDb2x1bW5JbmRleCA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGluaXRDb2x1bW5XaXRoSW5kZXggPSAoY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uU2V0dGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB2YWx1ZXNbY29sdW1uSW5kZXhdO1xuXG4gICAgICAgIGlmICghaXNOb3ROaWwoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uID1cbiAgICAgICAgICB0aGlzLmZpbmRPcHRpb25XaXRoVmFsdWUoY29sdW1uSW5kZXgsIHZhbHVlc1tjb2x1bW5JbmRleF0pIHx8XG4gICAgICAgICAgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAgICAgICA/IGN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWUsXG4gICAgICAgICAgICAgICAgW2Ake3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5fWBdOiBjdXJyZW50VmFsdWVcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY29sdW1uSW5kZXggPCBsYXN0Q29sdW1uSW5kZXgpIHtcbiAgICAgICAgICBpbml0Q29sdW1uV2l0aEluZGV4KGNvbHVtbkluZGV4ICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4udGhpcy5hY3RpdmF0ZWRPcHRpb25zXTtcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5pc0xvYWRlZChjb2x1bW5JbmRleCkgfHwgIXRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSkge1xuICAgICAgICBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleCAtIDFdIHx8IHt9O1xuICAgICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGNvbHVtbkluZGV4IC0gMSwgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcblxuICAgIGlmIChmaXJzdCAmJiB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEgJiYgIWhhc1ZhbHVlKSB7XG4gICAgICAvLyBTaG91bGQgYWxzbyBub3RpZnkgdGhlIGNvbXBvbmVudCB0aGF0IHZhbHVlIGNoYW5nZXMuIEZpeCAjMzQ4MC5cbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgY2FzY2FkZXIgY29tcG9uZW50IHNvIHRoaXMgc2VydmljZSBjb3VsZCB1c2UgaW5wdXRzLlxuICAgKi9cbiAgd2l0aENvbXBvbmVudChjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5jYXNjYWRlckNvbXBvbmVudCA9IGNhc2NhZGVyQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFsbCBvcHRpb25zLiBSZWJ1aWxkIHNlYXJjaGluZyBvcHRpb25zIGlmIGluIHNlYXJjaGluZyBtb2RlLlxuICAgKi9cbiAgd2l0aE9wdGlvbnMob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90ID0gdGhpcy5jb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFtvcHRpb25zXSA6IFtdO1xuXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hPcHRpb25zKHRoaXMuY2FzY2FkZXJDb21wb25lbnQuaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgYSBvcHRpb24gYXMgYWN0aXZhdGVkLlxuICAgKiBAcGFyYW0gb3B0aW9uIENhc2NhZGVyIG9wdGlvblxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggT2Ygd2hpY2ggY29sdW1uIHRoaXMgb3B0aW9uIGlzIGluXG4gICAqIEBwYXJhbSBwZXJmb3JtU2VsZWN0IFNlbGVjdFxuICAgKiBAcGFyYW0gbG9hZGluZ0NoaWxkcmVuIFRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgc2V0T3B0aW9uQWN0aXZhdGVkKFxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbixcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgIHBlcmZvcm1TZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBsb2FkaW5nQ2hpbGRyZW46IGJvb2xlYW4gPSB0cnVlXG4gICk6IHZvaWQge1xuICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdID0gb3B0aW9uO1xuICAgIHRoaXMudHJhY2tBbmNlc3RvckFjdGl2YXRlZE9wdGlvbnMoY29sdW1uSW5kZXgpO1xuICAgIHRoaXMuZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMoY29sdW1uSW5kZXgpO1xuXG4gICAgY29uc3QgaXNQYXJlbnQgPSBpc1BhcmVudE9wdGlvbihvcHRpb24pO1xuXG4gICAgaWYgKGlzUGFyZW50KSB7XG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgaGFzIGNoaWxkcmVuLlxuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiEsIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRpbmdDaGlsZHJlbikge1xuICAgICAgLy8gUGFyZW50IG9wdGlvbiB0aGF0IHNob3VsZCB0cnkgdG8gbG9hZCBjaGlsZHJlbiBhc3luY2hyb25vdXNseS5cbiAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uLmlzTGVhZikge1xuICAgICAgLy8gTGVhZiBvcHRpb24uXG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBBY3R1YWxseSBwZXJmb3JtIHNlbGVjdGlvbiB0byBtYWtlIGFuIG9wdGlvbnMgbm90IG9ubHkgYWN0aXZhdGVkIGJ1dCBhbHNvIHNlbGVjdGVkLlxuICAgIGlmIChwZXJmb3JtU2VsZWN0KSB7XG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gIH1cblxuICBzZXRPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VPbiA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpDaGFuZ2VPbjtcbiAgICBjb25zdCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uID0gKG86IE56Q2FzY2FkZXJPcHRpb24sIGk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjaGFuZ2VPbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZU9uKG8sIGkpIDogZmFsc2U7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb24uaXNMZWFmIHx8IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpDaGFuZ2VPblNlbGVjdCB8fCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uKG9wdGlvbiwgaW5kZXgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xuICAgICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXggfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW46IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMoY29sdW1uIC0gMSk7XG4gICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW4pO1xuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2VhcmNoaW5nIG9wdGlvbiBhcyBzZWxlY3RlZCwgZmluaXNoaW5nIHVwIHRoaW5ncy5cbiAgICogQHBhcmFtIG9wdGlvblxuICAgKi9cbiAgc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW29wdGlvbl07XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbLi4ub3B0aW9uLnBhdGhdO1xuICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXg6IDAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGRhdGEgYW5kIHRlbGwgVUkgb25seSB0byByZW1vdmUgaW5wdXQgYW5kIHJlc2V0IGRyb3Bkb3duIHdpZHRoIHN0eWxlLlxuICAgICAgdGhpcy4kcXVpdFNlYXJjaGluZy5uZXh0KCk7XG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgdGhpcy5pblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNTbmFwc2hvdF07XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbLi4udGhpcy5zZWxlY3RlZE9wdGlvbnNdO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGNhc2NhZGVyIG9wdGlvbnMgdG8gcmVzZXQgYGNvbHVtbnNgLlxuICAgKiBAcGFyYW0gc2VhcmNoVmFsdWUgVGhlIHN0cmluZyB1c2VyIHdhbnRzIHRvIHNlYXJjaC5cbiAgICovXG4gIHByZXBhcmVTZWFyY2hPcHRpb25zKHNlYXJjaFZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHRzOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTsgLy8gU2VhcmNoIHJlc3VsdHMgb25seSBoYXZlIG9uZSBsYXllci5cbiAgICBjb25zdCBwYXRoOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyOiBOekNhc2NhZGVyRmlsdGVyID0gKGksIHApID0+IHtcbiAgICAgIHJldHVybiBwLnNvbWUobyA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRPcHRpb25MYWJlbChvKTtcbiAgICAgICAgcmV0dXJuICEhbGFiZWwgJiYgbGFiZWwuaW5kZXhPZihpKSAhPT0gLTE7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dTZWFyY2ggPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56U2hvd1NlYXJjaDtcbiAgICBjb25zdCBmaWx0ZXIgPSBpc1Nob3dTZWFyY2hPYmplY3Qoc2hvd1NlYXJjaCkgJiYgc2hvd1NlYXJjaC5maWx0ZXIgPyBzaG93U2VhcmNoLmZpbHRlciA6IGRlZmF1bHRGaWx0ZXI7XG4gICAgY29uc3Qgc29ydGVyID0gaXNTaG93U2VhcmNoT2JqZWN0KHNob3dTZWFyY2gpICYmIHNob3dTZWFyY2guc29ydGVyID8gc2hvd1NlYXJjaC5zb3J0ZXIgOiBudWxsO1xuICAgIGNvbnN0IGxvb3BDaGlsZCA9IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcbiAgICAgIGlmIChmaWx0ZXIoc2VhcmNoVmFsdWUsIGNQYXRoKSkge1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcbiAgICAgICAgY29uc3Qgb3B0aW9uOiBOekNhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGlzTGVhZjogdHJ1ZSxcbiAgICAgICAgICBwYXRoOiBjUGF0aCxcbiAgICAgICAgICBbdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHldOiBjUGF0aC5tYXAocCA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKHApKS5qb2luKCcgLyAnKVxuICAgICAgICB9O1xuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcbiAgICBjb25zdCBsb29wUGFyZW50ID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICBwYXRoLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuIS5mb3JFYWNoKHNOb2RlID0+IHtcbiAgICAgICAgaWYgKCFzTm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICBzTm9kZS5wYXJlbnQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc05vZGUuaXNMZWFmKSB7XG4gICAgICAgICAgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMuY29sdW1uc1NuYXBzaG90Lmxlbmd0aCkge1xuICAgICAgdGhpcy5jb2x1bW5zID0gW1tdXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdFswXS5mb3JFYWNoKG8gPT4gKGlzQ2hpbGRPcHRpb24obykgPyBsb29wQ2hpbGQobykgOiBsb29wUGFyZW50KG8pKSk7XG5cbiAgICBpZiAoc29ydGVyKSB7XG4gICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHNvcnRlcihhLnBhdGgsIGIucGF0aCwgc2VhcmNoVmFsdWUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbHVtbnMgPSBbcmVzdWx0c107XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHNlYXJjaGluZyBtb2RlIGJ5IFVJLiBJdCBkZWFscyB3aXRoIHRoaW5ncyBub3QgZGlyZWN0bHkgcmVsYXRlZCB0byBVSS5cbiAgICogQHBhcmFtIHRvU2VhcmNoaW5nIElmIHRoaXMgY2FzY2FkZXIgaXMgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGVcbiAgICovXG4gIHRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IHRvU2VhcmNoaW5nO1xuXG4gICAgaWYgKHRvU2VhcmNoaW5nKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdCA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlciBxdWl0IHNlYXJjaGluZyBtb2RlIHdpdGhvdXQgc2VsZWN0aW5nIGFuIG9wdGlvbi5cbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdF07XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucygwKTtcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcbiAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLm5leHQobnVsbCk7XG4gIH1cblxuICBnZXRPcHRpb25MYWJlbChvOiBOekNhc2NhZGVyT3B0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb1t0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnXSBhcyBzdHJpbmc7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldE9wdGlvblZhbHVlKG86IE56Q2FzY2FkZXJPcHRpb24pOiBhbnkge1xuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSddO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBpbnNlcnQgb3B0aW9ucyBpbnRvIGEgY29sdW1uLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGluc2VydFxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggUG9zaXRpb25cbiAgICovXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIsIHBhcmVudDogTnpDYXNjYWRlck9wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGV4aXN0aW5nT3B0aW9ucyA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgaWYgKCFhcnJheXNFcXVhbChleGlzdGluZ09wdGlvbnMsIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2gobyA9PiAoby5wYXJlbnQgPSBwYXJlbnQpKTtcbiAgICAgIHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF0gPSBvcHRpb25zO1xuICAgICAgdGhpcy5kcm9wQmVoaW5kQ29sdW1ucyhjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2ldKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpICsgMV0ucGFyZW50ITtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zKGxhc3RSZXNlcnZlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zcGxpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAobGFzdFJlc2VydmVJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuc2xpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNoaWxkcmVuIG9mIGFuIG9wdGlvbiBhc3luY2hyb25vdXNseS5cbiAgICovXG4gIGxvYWRDaGlsZHJlbihcbiAgICBvcHRpb246IE56Q2FzY2FkZXJPcHRpb24gfCBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcbiAgICBzdWNjZXNzPzogVm9pZEZ1bmN0aW9uLFxuICAgIGZhaWx1cmU/OiBWb2lkRnVuY3Rpb25cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZEZuID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhO1xuXG4gICAgaWYgKGxvYWRGbikge1xuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYW55IG9wdGlvbiBpbiBjb2x1bW5zLlxuICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGNvbHVtbkluZGV4IDwgMCk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGxvYWRGbihvcHRpb24sIGNvbHVtbkluZGV4KS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBjb2x1bW5JbmRleCArIDEsIG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGxvYWRpbmcubmV4dChmYWxzZSk7XG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG9wdGlvbi5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgb3B0aW9uLmlzTGVhZiA9IHRydWU7XG4gICAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzTG9hZGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zW2luZGV4XSAmJiB0aGlzLmNvbHVtbnNbaW5kZXhdLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhIG9wdGlvbiB0aGF0IGhhcyBhIGdpdmVuIHZhbHVlIGluIGEgZ2l2ZW4gY29sdW1uLlxuICAgKi9cbiAgcHJpdmF0ZSBmaW5kT3B0aW9uV2l0aFZhbHVlKFxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXG4gICAgdmFsdWU6IE56Q2FzY2FkZXJPcHRpb24gfCBhbnkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgKTogTnpDYXNjYWRlck9wdGlvbiB8IG51bGwge1xuICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgaWYgKHRhcmdldENvbHVtbikge1xuICAgICAgY29uc3QgdiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgcmV0dXJuIHRhcmdldENvbHVtbi5maW5kKG8gPT4gdiA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSkhO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUVtaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xuICB9XG59XG4iXX0=