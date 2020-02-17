/**
 * @fileoverview added by tsickle
 * Generated from: nz-transfer.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTransferListComponent } from './nz-transfer-list.component';
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n, nzUpdateHostClassService, elementRef, renderer) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzShowSelectAll = true;
        this.nzCanMove = (/**
         * @param {?} arg
         * @return {?}
         */
        function (arg) { return of(arg.list); });
        this.nzRenderList = [null, null];
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('left', checked); });
        this.handleRightSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('right', checked); });
        this.handleLeftSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('left', !!item.checked, item); });
        this.handleRightSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('right', !!item.checked, item); });
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = (/**
         * @return {?}
         */
        function () { return _this.moveTo('left'); });
        this.moveToRight = (/**
         * @return {?}
         */
        function () { return _this.moveTo('right'); });
        renderer.addClass(elementRef.nativeElement, 'ant-transfer');
    }
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (record.direction === 'right') {
                record.direction = 'right';
                _this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                _this.leftDataSource.push(record);
            }
        }));
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; }));
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked === true && !item.disabled; }));
        this.nzCanMove({ direction: direction, list: moveList }).subscribe((/**
         * @param {?} newMoveList
         * @return {?}
         */
        function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return !!i; }))); }), (/**
         * @return {?}
         */
        function () { return moveList.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); })); }));
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                item.hide = false;
                item.direction = direction;
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        targetDatasource.splice.apply(targetDatasource, tslib_1.__spread([0, 0], list));
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-transfer';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a[prefixCls + "-disabled"] = this.nzDisabled,
            _a[prefixCls + "-customize-list"] = this.nzRenderList.some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !!i; })),
            _a));
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        }));
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
        if (changes.nzDataSource || changes.nzTargetKeys) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer',
                    exportAs: 'nzTransfer',
                    preserveWhitespaces: false,
                    template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\n  [titleText]=\"nzTitles[0]\"\n  [showSelectAll]=\"nzShowSelectAll\"\n  [dataSource]=\"leftDataSource\"\n  [filter]=\"leftFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [renderList]=\"nzRenderList[0]\"\n  [render]=\"nzRender\"\n  [disabled]=\"nzDisabled\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleLeftSelect($event)\"\n  (handleSelectAll)=\"handleLeftSelectAll($event)\">\n</nz-transfer-list>\n<div class=\"ant-transfer-operation\">\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon nzType=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n  </button>\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon nzType=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n  </button>\n</div>\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\n  [titleText]=\"nzTitles[1]\"\n  [showSelectAll]=\"nzShowSelectAll\"\n  [dataSource]=\"rightDataSource\"\n  [filter]=\"rightFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [renderList]=\"nzRenderList[1]\"\n  [render]=\"nzRender\"\n  [disabled]=\"nzDisabled\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleRightSelect($event)\"\n  (handleSelectAll)=\"handleRightSelectAll($event)\">\n</nz-transfer-list>\n",
                    host: {
                        '[class.ant-transfer-disabled]': 'nzDisabled'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService]
                }] }
    ];
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTransferComponent.propDecorators = {
        lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
        nzDisabled: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        nzTitles: [{ type: Input }],
        nzOperations: [{ type: Input }],
        nzListStyle: [{ type: Input }],
        nzShowSelectAll: [{ type: Input }],
        nzItemUnit: [{ type: Input }],
        nzItemsUnit: [{ type: Input }],
        nzCanMove: [{ type: Input }],
        nzRenderList: [{ type: Input }],
        nzRender: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzSearchPlaceholder: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzSearchChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSearch", void 0);
    return NzTransferComponent;
}());
export { NzTransferComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRenderList;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbIm56LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxFQUFFLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBd0lFLGFBQWE7SUFFYiw2QkFDVSxHQUFzQixFQUN0QixJQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsVUFBc0IsRUFDOUIsUUFBbUI7UUFMckIsaUJBUUM7UUFQUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpJeEIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOztRQUkzQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7O1FBSVEsZUFBVSxHQUFH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QUN0RSx1Q0FBcUM7O0lBQ3JDLHVDQUFxQzs7SUFDckMsMkNBQThDOztJQUM5Qyw2Q0FBNkU7O0lBQzdFLGtEQUFxQzs7SUFDckMsZ0RBQW1DOztJQUduQyx1Q0FBaUU7O0lBQ2pFLDZDQUE2RTs7SUFDN0UsNkNBQTZFOztJQU83RSw2Q0FBb0M7O0lBR3BDLDhDQUFxQzs7SUFvQnJDLGtEQUErRTs7SUFDL0UsbURBQWlGOztJQUVqRiwrQ0FBMkY7O0lBQzNGLGdEQUE2Rjs7SUFnQjdGLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQU9wQix5Q0FBdUM7O0lBQ3ZDLDBDQUF5Qzs7Ozs7SUFvQ3ZDLGtDQUE4Qjs7Ozs7SUFDOUIsbUNBQTJCOzs7OztJQUMzQix1REFBMEQ7Ozs7O0lBQzFELHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQge1xuICBUcmFuc2ZlckNhbk1vdmUsXG4gIFRyYW5zZmVyQ2hhbmdlLFxuICBUcmFuc2ZlckRpcmVjdGlvbixcbiAgVHJhbnNmZXJJdGVtLFxuICBUcmFuc2ZlclNlYXJjaENoYW5nZSxcbiAgVHJhbnNmZXJTZWxlY3RDaGFuZ2Vcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL256LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJhbnNmZXInLFxuICBleHBvcnRBczogJ256VHJhbnNmZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyYW5zZmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZHJlbihOelRyYW5zZmVyTGlzdENvbXBvbmVudClcbiAgcHJpdmF0ZSBsaXN0cyE6IFF1ZXJ5TGlzdDxOelRyYW5zZmVyTGlzdENvbXBvbmVudD47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcblxuICBsZWZ0RmlsdGVyID0gJyc7XG4gIHJpZ2h0RmlsdGVyID0gJyc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG4gIEBJbnB1dCgpIG56VGl0bGVzOiBzdHJpbmdbXSA9IFsnJywgJyddO1xuICBASW5wdXQoKSBuek9wZXJhdGlvbnM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIG56TGlzdFN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWxlY3RBbGwgPSB0cnVlO1xuICBASW5wdXQoKSBuekl0ZW1Vbml0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SXRlbXNVbml0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2FuTW92ZTogKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gb2YoYXJnLmxpc3QpO1xuICBASW5wdXQoKSBuelJlbmRlckxpc3Q6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbD4gPSBbbnVsbCwgbnVsbF07XG4gIEBJbnB1dCgpIG56UmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcblxuICAvLyBldmVudHNcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2ZlckNoYW5nZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VhcmNoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlYXJjaENoYW5nZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlbGVjdENoYW5nZT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGRhdGFcblxuICAvLyBsZWZ0XG4gIGxlZnREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIC8vIHJpZ2h0XG4gIHJpZ2h0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICBwcml2YXRlIHNwbGl0RGF0YVNvdXJjZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxlZnREYXRhU291cmNlID0gW107XG4gICAgdGhpcy5yaWdodERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLm56RGF0YVNvdXJjZS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICBpZiAocmVjb3JkLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICByZWNvcmQuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgdGhpcy5yaWdodERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjb3JkLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgdGhpcy5sZWZ0RGF0YVNvdXJjZS5wdXNoKHJlY29yZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENoZWNrZWREYXRhKGRpcmVjdGlvbjogc3RyaW5nKTogVHJhbnNmZXJJdGVtW10ge1xuICAgIHJldHVybiB0aGlzW2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICB9XG5cbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcblxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCAhIWl0ZW0uY2hlY2tlZCwgaXRlbSk7XG4gIGhhbmRsZVJpZ2h0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uLCBjaGVja2VkOiBib29sZWFuLCBpdGVtPzogVHJhbnNmZXJJdGVtKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb24sIGxpc3QubGVuZ3RoKTtcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoeyBkaXJlY3Rpb24sIGNoZWNrZWQsIGxpc3QsIGl0ZW0gfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UocmV0OiB7IGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb247IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMubnpTZWFyY2hDaGFuZ2UuZW1pdChyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gb3BlcmF0aW9uXG5cbiAgbGVmdEFjdGl2ZSA9IGZhbHNlO1xuICByaWdodEFjdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbjogc3RyaW5nLCBjb3VudD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXNbZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnRBY3RpdmUnIDogJ3JpZ2h0QWN0aXZlJ10gPVxuICAgICAgKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbikuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aCA6IGNvdW50KSA+IDA7XG4gIH1cblxuICBtb3ZlVG9MZWZ0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ2xlZnQnKTtcbiAgbW92ZVRvUmlnaHQgPSAoKSA9PiB0aGlzLm1vdmVUbygncmlnaHQnKTtcblxuICBtb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBkYXRhc291cmNlLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSAmJiAhaXRlbS5kaXNhYmxlZCk7XG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pLnN1YnNjcmliZShcbiAgICAgIG5ld01vdmVMaXN0ID0+IHRoaXMudHJ1dGhNb3ZlVG8oZGlyZWN0aW9uLCBuZXdNb3ZlTGlzdC5maWx0ZXIoaSA9PiAhIWkpKSxcbiAgICAgICgpID0+IG1vdmVMaXN0LmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHRydXRoTW92ZVRvKGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGxpc3Q6IFRyYW5zZmVySXRlbVtdKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgZGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5yaWdodERhdGFTb3VyY2UgOiB0aGlzLmxlZnREYXRhU291cmNlO1xuICAgIGNvbnN0IHRhcmdldERhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubGVmdERhdGFTb3VyY2UgOiB0aGlzLnJpZ2h0RGF0YVNvdXJjZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICBpdGVtLmhpZGUgPSBmYWxzZTtcbiAgICAgIGl0ZW0uZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgZGF0YXNvdXJjZS5zcGxpY2UoZGF0YXNvdXJjZS5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG4gICAgdGFyZ2V0RGF0YXNvdXJjZS5zcGxpY2UoMCwgMCwgLi4ubGlzdCk7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24pO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBmcm9tOiBvcHBvc2l0ZURpcmVjdGlvbixcbiAgICAgIHRvOiBkaXJlY3Rpb24sXG4gICAgICBsaXN0XG4gICAgfSk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10cmFuc2ZlcicpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LXRyYW5zZmVyJztcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWRpc2FibGVkYF06IHRoaXMubnpEaXNhYmxlZCxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWN1c3RvbWl6ZS1saXN0YF06IHRoaXMubnpSZW5kZXJMaXN0LnNvbWUoaSA9PiAhIWkpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG1hcmtGb3JDaGVja0FsbExpc3QoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubGlzdHMuZm9yRWFjaChpID0+IGkubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUcmFuc2ZlcicpO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICBpZiAoY2hhbmdlcy5uekRhdGFTb3VyY2UgfHwgY2hhbmdlcy5uelRhcmdldEtleXMpIHtcbiAgICAgIHRoaXMuc3BsaXREYXRhU291cmNlKCk7XG4gICAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cygnbGVmdCcpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19