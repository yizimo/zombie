/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree.component.ts
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
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, warnDeprecation, InputBoolean, NzConfigService, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, WithConfig } from 'ng-zorro-antd/core';
import { NzTreeService } from './nz-tree.service';
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'tree';
var NzTreeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzTreeComponent, _super);
    function NzTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzAsyncData = false;
        _this.nzDraggable = false;
        _this.nzSelectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzExpandAll = false;
        _this._nzDefaultExpandAll = false;
        _this.nzMultiple = false;
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        _this.nzOnSearchNode = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        _this.nzDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        return _this;
    }
    Object.defineProperty(NzTreeComponent.prototype, "treeTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzDefaultExpandAll;
        },
        /**
         * @deprecated 9.0.0 use `nzExpandAll` instead.
         */
        set: /**
         * @deprecated 9.0.0 use `nzExpandAll` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.");
            this.nzExpandAll = value;
            this._nzDefaultExpandAll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         */
        set: /**
         * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
         */
        set: /**
         * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
         */
        set: /**
         * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.");
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                /**
                 * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
                 * Hide warning, need remove next version
                 */
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzNodes", {
        /**
         * To render nodes if root is changed.
         */
        get: /**
         * To render nodes if root is changed.
         * @return {?}
         */
        function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.nzShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
            _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
            _a['draggable-tree'] = this.nzDraggable,
            _a['ant-select-tree'] = this.nzSelectMode,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.initNzData(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeComponent.prototype.initNzData = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            switch (data.eventName) {
                case 'expand':
                    _this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    _this.nzClick.emit(data);
                    break;
                case 'check':
                    _this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.nzOnDragEnd.emit(data);
                    break;
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree',
                    exportAs: 'nzTree',
                    template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"classMap\">\n  <ng-container *ngFor=\"let node of nzNodes\">\n    <nz-tree-node\n      [nzTreeNode]=\"node\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzDraggable]=\"nzDraggable\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzSearchValue]=\"nzSearchValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzBeforeDrop]=\"nzBeforeDrop\"\n      [nzExpandAll]=\"nzExpandAll\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzTreeTemplate]=\"treeTemplate\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\">\n    </nz-tree-node>\n  </ng-container>\n</ul>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzTreeComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTreeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTreeComponent.propDecorators = {
        nzShowIcon: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzDraggable: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzSelectMode: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzBlockNode: [{ type: Input }],
        nzExpandAll: [{ type: Input }],
        nzTreeTemplate: [{ type: Input }],
        nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }],
        nzDefaultExpandAll: [{ type: Input }],
        nzBeforeDrop: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzData: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzDefaultSelectedKeys: [{ type: Input }],
        nzDefaultCheckedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzCheckedKeys: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        nzExpandedKeysChange: [{ type: Output }],
        nzSelectedKeysChange: [{ type: Output }],
        nzCheckedKeysChange: [{ type: Output }],
        nzSearchValueChange: [{ type: Output }],
        nzOnSearchNode: [{ type: Output }],
        nzClick: [{ type: Output }],
        nzDblClick: [{ type: Output }],
        nzContextMenu: [{ type: Output }],
        nzCheckBoxChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnDragStart: [{ type: Output }],
        nzOnDragEnter: [{ type: Output }],
        nzOnDragOver: [{ type: Output }],
        nzOnDragLeave: [{ type: Output }],
        nzOnDrop: [{ type: Output }],
        nzOnDragEnd: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzDraggable", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzSelectMode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzBlockNode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NzTreeComponent.prototype, "nzDefaultExpandAll", null);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzMultiple", void 0);
    return NzTreeComponent;
}(NzTreeBase));
export { NzTreeComponent };
if (false) {
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzBlockNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplateChild;
    /**
     * @type {?}
     * @private
     */
    NzTreeComponent.prototype._nzDefaultExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     * @type {?}
     */
    NzTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    NzTreeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeComponent.prototype.classMap;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixRQUFRLEVBQ1IsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLFFBQVEsRUFDUixlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFHZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFN0IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFFbEQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxrQkFBcUMsRUFDckMsV0FBMEI7SUFFMUIsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUMvRCxDQUFDOztJQUVLLHdCQUF3QixHQUFHLE1BQU07QUFFdkM7SUFtQnFDLDJDQUFVO0lBb0w3Qyx5QkFDRSxhQUFnQyxFQUN6QixlQUFnQyxFQUMvQixHQUFzQixFQUNILFdBQW9DO1FBSmpFLFlBTUUsa0JBQU0sYUFBYSxDQUFDLFNBQ3JCO1FBTFEscUJBQWUsR0FBZixl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QWlEOztJQUNqRCxzQ0FBMkY7O0lBQzNGLHNDQUE2Qzs7SUFFN0MseUNBQWdFOztJQUNoRSw4Q0FBOEc7Ozs7O0lBb0I5Ryw4Q0FBb0M7O0lBRXBDLHVDQUFpRjs7SUFFakYscUNBQTRDOztJQTJFNUMsK0NBQStGOztJQUMvRiwrQ0FBK0Y7O0lBQy9GLDhDQUE4Rjs7SUFFOUYsOENBQStFOzs7OztJQUsvRSx5Q0FBMEU7O0lBRTFFLGtDQUFtRTs7SUFDbkUscUNBQXNFOztJQUN0RSx3Q0FBeUU7O0lBQ3pFLDJDQUE0RTs7SUFDNUUseUNBQTBFOztJQUUxRSx3Q0FBeUU7O0lBQ3pFLHdDQUF5RTs7SUFDekUsdUNBQXdFOztJQUN4RSx3Q0FBeUU7O0lBQ3pFLG1DQUFvRTs7SUFDcEUsc0NBQXVFOztJQUV2RSx1Q0FBcUI7O0lBQ3JCLDJDQUEwRTs7SUFDMUUsbUNBQXlCOztJQUN6QixvQ0FBdUI7O0lBQ3ZCLG1DQUFjOztJQUVkLG1DQUFxRDs7SUFDckQsb0NBQW1DOztJQW9DakMsMENBQXVDOzs7OztJQUN2Qyw4QkFBOEI7O0lBQzlCLHNDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNraXBTZWxmLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgaXNOb3ROaWwsXG4gIHdhcm5EZXByZWNhdGlvbixcbiAgSW5wdXRCb29sZWFuLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxuICBOekZvcm1hdEVtaXRFdmVudCxcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcbiAgTnpUcmVlQmFzZSxcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICBOelRyZWVOb2RlLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56VHJlZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcbiAgaGlnaGVyT3JkZXJTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgdHJlZVNlcnZpY2U6IE56VHJlZVNlcnZpY2Vcbik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUnLFxuICBleHBvcnRBczogJ256VHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIE56VHJlZVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpUcmVlQmFzZVNlcnZpY2UsXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIE56VHJlZVNlcnZpY2VdXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpTaG93SWNvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QmxvY2tOb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmRBbGwgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIEBDb250ZW50Q2hpbGQoJ256VHJlZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUcmVlVGVtcGxhdGVDaGlsZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIGdldCB0cmVlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT4ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVRlbXBsYXRlIHx8IHRoaXMubnpUcmVlVGVtcGxhdGVDaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCB1c2UgYG56RXhwYW5kQWxsYCBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRBbGwnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kQWxsJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMubnpFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgICB0aGlzLl9uekRlZmF1bHRFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekRlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX256RGVmYXVsdEV4cGFuZEFsbDtcbiAgfVxuXG4gIHByaXZhdGUgX256RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56RXhwYW5kZWRLZXlzYCBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kZWRLZXlzJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56U2VsZWN0ZWRLZXlzYCBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRTZWxlY3RlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256U2VsZWN0ZWRLZXlzJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56Q2hlY2tlZEtleXNgIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0Q2hlY2tlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256Q2hlY2tlZEtleXMnIGluc3RlYWQuYCk7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xuICAgICAgLyoqXG4gICAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpPblNlYXJjaE5vZGVgIGluc3RlYWQuXG4gICAgICAgKiBIaWRlIHdhcm5pbmcsIG5lZWQgcmVtb3ZlIG5leHQgdmVyc2lvblxuICAgICAgICovXG4gICAgICB0aGlzLm56T25TZWFyY2hOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZC5cbiAgICovXG4gIGdldCBuek5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VhcmNoVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYG56U2VhcmNoVmFsdWVDaGFuZ2VgIGluc3RlYWQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaE5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICBfc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgbnpEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xuICBjbGFzc01hcCA9IHt9O1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbdGhpcy5wcmVmaXhDbHMgKyAnLXNob3ctbGluZSddOiB0aGlzLm56U2hvd0xpbmUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb24taGlkZWBdOiAhdGhpcy5uelNob3dJY29uLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ibG9jay1ub2RlYF06IHRoaXMubnpCbG9ja05vZGUsXG4gICAgICBbJ2RyYWdnYWJsZS10cmVlJ106IHRoaXMubnpEcmFnZ2FibGUsXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLm56U2VsZWN0TW9kZVxuICAgIH07XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaW5pdE56RGF0YSh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5uek11bHRpcGxlO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuY29lcmNlVHJlZU5vZGVzKHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEua2V5cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICBjYXNlICduekV4cGFuZGVkS2V5cyc6XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMpO1xuICAgICAgICAgIHRoaXMubnpFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduelNlbGVjdGVkS2V5cyc6XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XG4gICAgICAgICAgdGhpcy5uelNlbGVjdGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcbiAgICAgICAgICB0aGlzLm56Q2hlY2tlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICBzd2l0Y2ggKGRhdGEuZXZlbnROYW1lKSB7XG4gICAgICAgICAgY2FzZSAnZXhwYW5kJzpcbiAgICAgICAgICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgIHRoaXMubnpDbGljay5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAgICAgdGhpcy5uekNoZWNrQm94Q2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XG4gICAgICAgICAgICB0aGlzLm56RGJsQ2xpY2suZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcbiAgICAgICAgICAgIHRoaXMubnpDb250ZXh0TWVudS5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gZHJhZyBkcm9wXG4gICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdTdGFydC5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbnRlci5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ092ZXIuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICAgICAgICB0aGlzLm56T25EcmFnTGVhdmUuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Ryb3AnOlxuICAgICAgICAgICAgdGhpcy5uek9uRHJvcC5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW5kLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpDaGVja1N0cmljdGx5KSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5uekNoZWNrU3RyaWN0bHk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56TXVsdGlwbGUpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5uek11bHRpcGxlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19