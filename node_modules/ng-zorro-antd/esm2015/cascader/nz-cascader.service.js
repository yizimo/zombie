/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzCascaderService {
    constructor() {
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
    /**
     * Return cascader options in the first layer.
     * @return {?}
     */
    get nzOptions() {
        return this.columns[0];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    }
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    syncOptions(first = false) {
        /** @type {?} */
        const values = this.values;
        /** @type {?} */
        const hasValue = values && values.length;
        /** @type {?} */
        const lastColumnIndex = values.length - 1;
        /** @type {?} */
        const initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        (columnIndex) => {
            /** @type {?} */
            const activatedOptionSetter = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const currentValue = values[columnIndex];
                if (!isNotNil(currentValue)) {
                    this.$redraw.next();
                    return;
                }
                /** @type {?} */
                const option = this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : {
                            [`${this.cascaderComponent.nzValueProperty}`]: currentValue,
                            [`${this.cascaderComponent.nzLabelProperty}`]: currentValue
                        });
                this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    this.dropBehindColumns(columnIndex);
                    this.selectedOptions = [...this.activatedOptions];
                    this.$redraw.next();
                }
            });
            if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                const option = this.activatedOptions[columnIndex - 1] || {};
                this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
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
    }
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    withComponent(cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    }
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    withOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    }
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    setOptionActivated(option, columnIndex, performSelect = false, loadingChildren = true) {
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        const isParent = isParentOption(option);
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
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    setOptionSelected(option, index) {
        /** @type {?} */
        const changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        const shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        (o, i) => {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = [...this.activatedOptions];
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option, index });
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    setOptionDeactivatedSinceColumn(column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    }
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    setSearchOptionSelected(option) {
        this.activatedOptions = [option];
        this.selectedOptions = [...option.path];
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            this.$quitSearching.next();
            this.$redraw.next();
            this.inSearchingMode = false;
            this.columns = [...this.columnsSnapshot];
            this.activatedOptions = [...this.selectedOptions];
        }), 200);
    }
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    prepareSearchOptions(searchValue) {
        /** @type {?} */
        const results = [];
        // Search results only have one layer.
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        (i, p) => {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                /** @type {?} */
                const label = this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        const showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        const loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.cascaderComponent.nzLabelProperty]: cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    p => this.getOptionLabel(p))).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        const loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            sNode => {
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
        o => (isChildOption(o) ? loopChild(o) : loopParent(o))));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => sorter(a.path, b.path, searchValue)));
        }
        this.columns = [results];
    }
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = [...this.activatedOptions];
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = [...this.activatedOptionsSnapshot];
            this.selectedOptions = [...this.activatedOptions];
            this.columns = [...this.columnsSnapshot];
            this.syncOptions();
            this.$redraw.next();
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clear() {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionLabel(o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionValue(o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    }
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    setColumnData(options, columnIndex, parent) {
        /** @type {?} */
        const existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            o => (o.parent = parent)));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    }
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    trackAncestorActivatedOptions(startIndex) {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindActivatedOptions(lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindColumns(lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    }
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        /** @type {?} */
        const loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            () => {
                option.loading = false;
                if (option.children) {
                    this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                this.$loading.next(false);
                this.$redraw.next();
            }), (/**
             * @return {?}
             */
            () => {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                this.$redraw.next();
            }));
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    findOptionWithValue(columnIndex, value // tslint:disable-line:no-any
    ) {
        /** @type {?} */
        const targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            const v = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            o => v === this.getOptionValue(o)))));
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    prepareEmitValue() {
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.getOptionValue(o)));
    }
}
NzCascaderService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQ0wsa0JBQWtCLEVBS25CLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQU1wRSxNQUFNLE9BQU8saUJBQWlCO0lBRDlCOzs7O1FBR0UscUJBQWdCLEdBQXVCLEVBQUUsQ0FBQzs7OztRQUcxQyxZQUFPLEdBQXlCLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7UUFHckMsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFHeEIsb0JBQWUsR0FBdUIsRUFBRSxDQUFDO1FBRXpDLFdBQU0sR0FBVSxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7O1FBRXhDLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQzs7Ozs7UUFNL0MsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7O1FBTTlCLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBRzNCLENBQUM7Ozs7O1FBTUgsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O1FBR3RDLG9CQUFlLEdBQXlCLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7UUFHN0MsNkJBQXdCLEdBQXVCLEVBQUUsQ0FBQztJQTZYNUQsQ0FBQzs7Ozs7SUF4WEMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMs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LFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBdmFGLFVBQVU7Ozs7Ozs7SUFHVCw2Q0FBMEM7Ozs7O0lBRzFDLG9DQUFxQzs7Ozs7SUFHckMsNENBQXdCOzs7OztJQUd4Qiw0Q0FBeUM7O0lBRXpDLG1DQUFtQjs7SUFFbkIscUNBQXdEOzs7Ozs7SUFNeEQsb0NBQXVDOzs7Ozs7SUFNdkMsNENBR1k7Ozs7OztJQU1aLDJDQUE4Qzs7Ozs7O0lBRzlDLDRDQUFxRDs7Ozs7O0lBR3JELHFEQUEwRDs7Ozs7SUFFMUQsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGFycmF5c0VxdWFsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7XG4gIGlzU2hvd1NlYXJjaE9iamVjdCxcbiAgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLFxuICBOekNhc2NhZGVyRmlsdGVyLFxuICBOekNhc2NhZGVyT3B0aW9uLFxuICBOekNhc2NhZGVyU2VhcmNoT3B0aW9uXG59IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgaXNDaGlsZE9wdGlvbiwgaXNQYXJlbnRPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLXV0aWxzJztcblxuLyoqXG4gKiBBbGwgZGF0YSBpcyBzdG9yZWQgYW5kIHBhcnNlZCBpbiBOekNhc2NhZGVyU2VydmljZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEFjdGl2YXRlZCBvcHRpb25zIGluIGVhY2ggY29sdW1uLiAqL1xuICBhY3RpdmF0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICAvKiogQW4gYXJyYXkgdG8gc3RvcmUgY2FzY2FkZXIgaXRlbXMgYXJyYW5nZWQgaW4gZGlmZmVyZW50IGxheWVycy4gKi9cbiAgY29sdW1uczogTnpDYXNjYWRlck9wdGlvbltdW10gPSBbW11dO1xuXG4gIC8qKiBJZiB1c2VyIGhhcyBlbnRlcmVkIHNlYXJjaGluZyBtb2RlLiAqL1xuICBpblNlYXJjaGluZ01vZGUgPSBmYWxzZTtcblxuICAvKiogU2VsZWN0ZWQgb3B0aW9ucyB3b3VsZCBiZSBvdXRwdXQgdG8gdXNlci4gKi9cbiAgc2VsZWN0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICB2YWx1ZXM6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbiAgcmVhZG9ubHkgJGxvYWRpbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB0byBub3RpZnkgY2FzY2FkZXIgaXQgbmVlZHMgdG8gcmVkcmF3IGJlY2F1c2UgYWN0aXZhdGVkIG9yXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMgYXJlIGNoYW5nZWQuXG4gICAqL1xuICByZWFkb25seSAkcmVkcmF3ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCB3aGVuIGFuIG9wdGlvbiBnZXRzIHNlbGVjdGVkLlxuICAgKiBFbWl0IHRydWUgaWYgYSBsZWFmIG9wdGlvbnMgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICByZWFkb25seSAkb3B0aW9uU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xuICAgIGluZGV4OiBudW1iZXI7XG4gIH0gfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byBxdWl0IHNlYXJjaGluZyBtb2RlLlxuICAgKiBPbmx5IGVtaXQgd2hlbiB1c2VyIGRvIHNlbGVjdCBhIHNlYXJjaGluZyBvcHRpb24uXG4gICAqL1xuICByZWFkb25seSAkcXVpdFNlYXJjaGluZyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFRvIGhvbGQgY29sdW1ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXG4gIHByaXZhdGUgY29sdW1uc1NuYXBzaG90OiBOekNhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XG5cbiAgLyoqIFRvIGhvbGQgYWN0aXZhdGVkIG9wdGlvbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogTnpDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlO1xuXG4gIC8qKiBSZXR1cm4gY2FzY2FkZXIgb3B0aW9ucyBpbiB0aGUgZmlyc3QgbGF5ZXIuICovXG4gIGdldCBuek9wdGlvbnMoKTogTnpDYXNjYWRlck9wdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zWzBdO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kcmVkcmF3LmNvbXBsZXRlKCk7XG4gICAgdGhpcy4kcXVpdFNlYXJjaGluZy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuJG9wdGlvblNlbGVjdGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy4kbG9hZGluZy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgKi9cbiAgc3luY09wdGlvbnMoZmlyc3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWVzICYmIHZhbHVlcy5sZW5ndGg7XG4gICAgY29uc3QgbGFzdENvbHVtbkluZGV4ID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgaW5pdENvbHVtbldpdGhJbmRleCA9IChjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHZhbHVlc1tjb2x1bW5JbmRleF07XG5cbiAgICAgICAgaWYgKCFpc05vdE5pbChjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb24gPVxuICAgICAgICAgIHRoaXMuZmluZE9wdGlvbldpdGhWYWx1ZShjb2x1bW5JbmRleCwgdmFsdWVzW2NvbHVtbkluZGV4XSkgfHxcbiAgICAgICAgICAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gY3VycmVudFZhbHVlXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZSxcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IGxhc3RDb2x1bW5JbmRleCkge1xuICAgICAgICAgIGluaXRDb2x1bW5XaXRoSW5kZXgoY29sdW1uSW5kZXggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xuICAgICAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKGNvbHVtbkluZGV4KSB8fCAhdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhKSB7XG4gICAgICAgIGFjdGl2YXRlZE9wdGlvblNldHRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4IC0gMV0gfHwge307XG4gICAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXggLSAxLCBhY3RpdmF0ZWRPcHRpb25TZXR0ZXIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKGZpcnN0ICYmIHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YSAmJiAhaGFzVmFsdWUpIHtcbiAgICAgIC8vIFNob3VsZCBhbHNvIG5vdGlmeSB0aGUgY29tcG9uZW50IHRoYXQgdmFsdWUgY2hhbmdlcy4gRml4ICMzNDgwLlxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdENvbHVtbldpdGhJbmRleCgwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZCBjYXNjYWRlciBjb21wb25lbnQgc28gdGhpcyBzZXJ2aWNlIGNvdWxkIHVzZSBpbnB1dHMuXG4gICAqL1xuICB3aXRoQ29tcG9uZW50KGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLmNhc2NhZGVyQ29tcG9uZW50ID0gY2FzY2FkZXJDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYWxsIG9wdGlvbnMuIFJlYnVpbGQgc2VhcmNoaW5nIG9wdGlvbnMgaWYgaW4gc2VhcmNoaW5nIG1vZGUuXG4gICAqL1xuICB3aXRoT3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gW29wdGlvbnNdIDogW107XG5cbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUpIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5jYXNjYWRlckNvbXBvbmVudC5pbnB1dFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIHNldCBhIG9wdGlvbiBhcyBhY3RpdmF0ZWQuXG4gICAqIEBwYXJhbSBvcHRpb24gQ2FzY2FkZXIgb3B0aW9uXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBPZiB3aGljaCBjb2x1bW4gdGhpcyBvcHRpb24gaXMgaW5cbiAgICogQHBhcmFtIHBlcmZvcm1TZWxlY3QgU2VsZWN0XG4gICAqIEBwYXJhbSBsb2FkaW5nQ2hpbGRyZW4gVHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXG4gICAqL1xuICBzZXRPcHRpb25BY3RpdmF0ZWQoXG4gICAgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLFxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXG4gICAgcGVyZm9ybVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIGxvYWRpbmdDaGlsZHJlbjogYm9vbGVhbiA9IHRydWVcbiAgKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF0gPSBvcHRpb247XG4gICAgdGhpcy50cmFja0FuY2VzdG9yQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW5JbmRleCk7XG5cbiAgICBjb25zdCBpc1BhcmVudCA9IGlzUGFyZW50T3B0aW9uKG9wdGlvbik7XG5cbiAgICBpZiAoaXNQYXJlbnQpIHtcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBoYXMgY2hpbGRyZW4uXG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuISwgY29sdW1uSW5kZXggKyAxLCBvcHRpb24pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZGluZ0NoaWxkcmVuKSB7XG4gICAgICAvLyBQYXJlbnQgb3B0aW9uIHRoYXQgc2hvdWxkIHRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb24uaXNMZWFmKSB7XG4gICAgICAvLyBMZWFmIG9wdGlvbi5cbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIC8vIEFjdHVhbGx5IHBlcmZvcm0gc2VsZWN0aW9uIHRvIG1ha2UgYW4gb3B0aW9ucyBub3Qgb25seSBhY3RpdmF0ZWQgYnV0IGFsc28gc2VsZWN0ZWQuXG4gICAgaWYgKHBlcmZvcm1TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgfVxuXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZU9uID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uO1xuICAgIGNvbnN0IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24gPSAobzogTnpDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gY2hhbmdlT24obywgaSkgOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBpbmRleCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhjb2x1bW4gLSAxKTtcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbik7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIHNlbGVjdGVkLCBmaW5pc2hpbmcgdXAgdGhpbmdzLlxuICAgKiBAcGFyYW0gb3B0aW9uXG4gICAqL1xuICBzZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbb3B0aW9uXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi5vcHRpb24ucGF0aF07XG4gICAgdGhpcy5wcmVwYXJlRW1pdFZhbHVlKCk7XG4gICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleDogMCB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgdGVsbCBVSSBvbmx5IHRvIHJlbW92ZSBpbnB1dCBhbmQgcmVzZXQgZHJvcGRvd24gd2lkdGggc3R5bGUuXG4gICAgICB0aGlzLiRxdWl0U2VhcmNoaW5nLm5leHQoKTtcbiAgICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2x1bW5zID0gWy4uLnRoaXMuY29sdW1uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLnNlbGVjdGVkT3B0aW9uc107XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgY2FzY2FkZXIgb3B0aW9ucyB0byByZXNldCBgY29sdW1uc2AuXG4gICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBUaGUgc3RyaW5nIHVzZXIgd2FudHMgdG8gc2VhcmNoLlxuICAgKi9cbiAgcHJlcGFyZVNlYXJjaE9wdGlvbnMoc2VhcmNoVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdHM6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdOyAvLyBTZWFyY2ggcmVzdWx0cyBvbmx5IGhhdmUgb25lIGxheWVyLlxuICAgIGNvbnN0IHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXI6IE56Q2FzY2FkZXJGaWx0ZXIgPSAoaSwgcCkgPT4ge1xuICAgICAgcmV0dXJuIHAuc29tZShvID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKG8pO1xuICAgICAgICByZXR1cm4gISFsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGkpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2hvd1NlYXJjaCA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpTaG93U2VhcmNoO1xuICAgIGNvbnN0IGZpbHRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLmZpbHRlciA/IHNob3dTZWFyY2guZmlsdGVyIDogZGVmYXVsdEZpbHRlcjtcbiAgICBjb25zdCBzb3J0ZXIgPSBpc1Nob3dTZWFyY2hPYmplY3Qoc2hvd1NlYXJjaCkgJiYgc2hvd1NlYXJjaC5zb3J0ZXIgPyBzaG93U2VhcmNoLnNvcnRlciA6IG51bGw7XG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcihzZWFyY2hWYWx1ZSwgY1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgICBjb25zdCBvcHRpb246IE56Q2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmOiB0cnVlLFxuICAgICAgICAgIHBhdGg6IGNQYXRoLFxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdHMucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgICAgcGF0aC5wb3AoKTtcbiAgICB9O1xuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4hLmZvckVhY2goc05vZGUgPT4ge1xuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xuICAgICAgICAgIHNOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgICBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcblxuICAgIGlmICghdGhpcy5jb2x1bW5zU25hcHNob3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbW11dO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WzBdLmZvckVhY2gobyA9PiAoaXNDaGlsZE9wdGlvbihvKSA/IGxvb3BDaGlsZChvKSA6IGxvb3BQYXJlbnQobykpKTtcblxuICAgIGlmIChzb3J0ZXIpIHtcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCBzZWFyY2hWYWx1ZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29sdW1ucyA9IFtyZXN1bHRzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgc2VhcmNoaW5nIG1vZGUgYnkgVUkuIEl0IGRlYWxzIHdpdGggdGhpbmdzIG5vdCBkaXJlY3RseSByZWxhdGVkIHRvIFVJLlxuICAgKiBAcGFyYW0gdG9TZWFyY2hpbmcgSWYgdGhpcyBjYXNjYWRlciBpcyBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZVxuICAgKi9cbiAgdG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlID0gdG9TZWFyY2hpbmc7XG5cbiAgICBpZiAodG9TZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2VyIHF1aXQgc2VhcmNoaW5nIG1vZGUgd2l0aG91dCBzZWxlY3RpbmcgYW4gb3B0aW9uLlxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90XTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xuICAgICAgdGhpcy5zeW5jT3B0aW9ucygpO1xuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKDApO1xuICAgIHRoaXMucHJlcGFyZUVtaXRWYWx1ZSgpO1xuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dChudWxsKTtcbiAgfVxuXG4gIGdldE9wdGlvbkxhYmVsKG86IE56Q2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCddIGFzIHN0cmluZztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0T3B0aW9uVmFsdWUobzogTnpDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJ107XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGluc2VydCBvcHRpb25zIGludG8gYSBjb2x1bW4uXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gaW5zZXJ0XG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBQb3NpdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBzZXRDb2x1bW5EYXRhKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSwgY29sdW1uSW5kZXg6IG51bWJlciwgcGFyZW50OiBOekNhc2NhZGVyT3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgZXhpc3RpbmdPcHRpb25zID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBpZiAoIWFycmF5c0VxdWFsKGV4aXN0aW5nT3B0aW9ucywgb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IChvLnBhcmVudCA9IHBhcmVudCkpO1xuICAgICAgdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XSA9IG9wdGlvbnM7XG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2YXRlZC5cbiAgICovXG4gIHByaXZhdGUgdHJhY2tBbmNlc3RvckFjdGl2YXRlZE9wdGlvbnMoc3RhcnRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZE9wdGlvbnNbaV0pIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2ldID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2kgKyAxXS5wYXJlbnQhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMobGFzdFJlc2VydmVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zLnNwbGljZSgwLCBsYXN0UmVzZXJ2ZUluZGV4ICsgMSk7XG4gIH1cblxuICBwcml2YXRlIGRyb3BCZWhpbmRDb2x1bW5zKGxhc3RSZXNlcnZlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChsYXN0UmVzZXJ2ZUluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5zbGljZSgwLCBsYXN0UmVzZXJ2ZUluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2hpbGRyZW4gb2YgYW4gb3B0aW9uIGFzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgbG9hZENoaWxkcmVuKFxuICAgIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiB8IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxuICAgIHN1Y2Nlc3M/OiBWb2lkRnVuY3Rpb24sXG4gICAgZmFpbHVyZT86IFZvaWRGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkRm4gPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGE7XG5cbiAgICBpZiAobG9hZEZuKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhbnkgb3B0aW9uIGluIGNvbHVtbnMuXG4gICAgICB0aGlzLiRsb2FkaW5nLm5leHQoY29sdW1uSW5kZXggPCAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbG9hZEZuKG9wdGlvbiwgY29sdW1uSW5kZXgpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBvcHRpb24ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbaW5kZXhdICYmIHRoaXMuY29sdW1uc1tpbmRleF0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgb3B0aW9uIHRoYXQgaGFzIGEgZ2l2ZW4gdmFsdWUgaW4gYSBnaXZlbiBjb2x1bW4uXG4gICAqL1xuICBwcml2YXRlIGZpbmRPcHRpb25XaXRoVmFsdWUoXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcixcbiAgICB2YWx1ZTogTnpDYXNjYWRlck9wdGlvbiB8IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICApOiBOekNhc2NhZGVyT3B0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgdGFyZ2V0Q29sdW1uID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XG4gICAgICBjb25zdCB2ID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUodmFsdWUpIDogdmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0Q29sdW1uLmZpbmQobyA9PiB2ID09PSB0aGlzLmdldE9wdGlvblZhbHVlKG8pKSE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlRW1pdFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVzID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XG4gIH1cbn1cbiJdfQ==