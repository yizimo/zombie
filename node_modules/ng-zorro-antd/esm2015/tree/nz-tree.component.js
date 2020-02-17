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
const NZ_CONFIG_COMPONENT_NAME = 'tree';
export class NzTreeComponent extends NzTreeBase {
    /**
     * @param {?} nzTreeService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzExpandAll = false;
        this._nzDefaultExpandAll = false;
        this.nzMultiple = false;
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this.nzDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @return {?}
     */
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `nzExpandAll` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this.nzExpandAll = value;
        this._nzDefaultExpandAll = value;
    }
    /**
     * @return {?}
     */
    get nzDefaultExpandAll() {
        return this._nzDefaultExpandAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandedKeys(value) {
        warnDeprecation(`'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultSelectedKeys(value) {
        warnDeprecation(`'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultCheckedKeys(value) {
        warnDeprecation(`'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.`);
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSearchValue(value) {
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
    }
    /**
     * @return {?}
     */
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     * @return {?}
     */
    get nzNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.nzShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.nzShowIcon,
            [`${this.prefixCls}-block-node`]: this.nzBlockNode,
            ['draggable-tree']: this.nzDraggable,
            ['ant-select-tree']: this.nzSelectMode
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.initNzData(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            switch (data.eventName) {
                case 'expand':
                    this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    this.nzClick.emit(data);
                    break;
                case 'check':
                    this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(data);
                    break;
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
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
                        () => NzTreeComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixRQUFRLEVBQ1IsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLFFBQVEsRUFDUixlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFHZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFN0IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFFbEQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxrQkFBcUMsRUFDckMsV0FBMEI7SUFFMUIsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUMvRCxDQUFDOztNQUVLLHdCQUF3QixHQUFHLE1BQU07QUFxQnZDLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7Ozs7Ozs7SUFvTDdDLFlBQ0UsYUFBZ0MsRUFDekIsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDSCxXQUFvQztRQUUvRCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7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RTs7SUFDekUsbUNBQW9FOztJQUNwRSxzQ0FBdUU7O0lBRXZFLHVDQUFxQjs7SUFDckIsMkNBQTBFOztJQUMxRSxtQ0FBeUI7O0lBQ3pCLG9DQUF1Qjs7SUFDdkIsbUNBQWM7O0lBRWQsbUNBQXFEOztJQUNyRCxvQ0FBbUM7O0lBb0NqQywwQ0FBdUM7Ozs7O0lBQ3ZDLDhCQUE4Qjs7SUFDOUIsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2tpcFNlbGYsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBpc05vdE5pbCxcbiAgd2FybkRlcHJlY2F0aW9uLFxuICBJbnB1dEJvb2xlYW4sXG4gIE56Q29uZmlnU2VydmljZSxcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICBOelRyZWVCYXNlLFxuICBOelRyZWVCYXNlU2VydmljZSxcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gIE56VHJlZU5vZGUsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIE56VHJlZVNlcnZpY2VGYWN0b3J5KFxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICB0cmVlU2VydmljZTogTnpUcmVlU2VydmljZVxuKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0cmVlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZScsXG4gIGV4cG9ydEFzOiAnbnpUcmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTnpUcmVlU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgICAgIHVzZUZhY3Rvcnk6IE56VHJlZVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgTnpUcmVlU2VydmljZV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuelNob3dJY29uOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpCbG9ja05vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZEFsbCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgQENvbnRlbnRDaGlsZCgnbnpUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRyZWVUZW1wbGF0ZUNoaWxkOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgZ2V0IHRyZWVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlVGVtcGxhdGUgfHwgdGhpcy5uelRyZWVUZW1wbGF0ZUNoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIHVzZSBgbnpFeHBhbmRBbGxgIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc2V0IG56RGVmYXVsdEV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdEV4cGFuZEFsbCcgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpFeHBhbmRBbGwnIGluc3RlYWQuYCk7XG4gICAgdGhpcy5uekV4cGFuZEFsbCA9IHZhbHVlO1xuICAgIHRoaXMuX256RGVmYXVsdEV4cGFuZEFsbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbnpEZWZhdWx0RXhwYW5kQWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfbnpEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekRhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpFeHBhbmRlZEtleXNgIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdEV4cGFuZGVkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpFeHBhbmRlZEtleXMnIGluc3RlYWQuYCk7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpTZWxlY3RlZEtleXNgIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHdhcm5EZXByZWNhdGlvbihgJ256RGVmYXVsdFNlbGVjdGVkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpTZWxlY3RlZEtleXMnIGluc3RlYWQuYCk7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpDaGVja2VkS2V5c2AgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRDaGVja2VkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpDaGVja2VkS2V5cycgaW5zdGVhZC5gKTtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5uelNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgICAvKipcbiAgICAgICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuek9uU2VhcmNoTm9kZWAgaW5zdGVhZC5cbiAgICAgICAqIEhpZGUgd2FybmluZywgbmVlZCByZW1vdmUgbmV4dCB2ZXJzaW9uXG4gICAgICAgKi9cbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyByZW5kZXIgbm9kZXMgaWYgcm9vdCBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgZ2V0IG56Tm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbnpTZWFyY2hWYWx1ZUNoYW5nZWAgaW5zdGVhZC5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xuICBuekRlZmF1bHRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8eyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0+KDYpO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XG4gIGNsYXNzTWFwID0ge307XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFt0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJ106IHRoaXMubnpTaG93TGluZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYF06ICF0aGlzLm56U2hvd0ljb24sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrLW5vZGVgXTogdGhpcy5uekJsb2NrTm9kZSxcbiAgICAgIFsnZHJhZ2dhYmxlLXRyZWUnXTogdGhpcy5uekRyYWdnYWJsZSxcbiAgICAgIFsnYW50LXNlbGVjdC10cmVlJ106IHRoaXMubnpTZWxlY3RNb2RlXG4gICAgfTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGF0YTogeyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0pID0+IHtcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2Rlcyk7XG4gICAgICAgICAgdGhpcy5uekV4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ256U2VsZWN0ZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xuICAgICAgICAgIHRoaXMubnpDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudE5hbWUpIHtcbiAgICAgICAgICBjYXNlICdleHBhbmQnOlxuICAgICAgICAgICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RibGNsaWNrJzpcbiAgICAgICAgICAgIHRoaXMubnpEYmxDbGljay5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxuICAgICAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBkcmFnIGRyb3BcbiAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ1N0YXJ0LmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VudGVyLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICAgICAgICB0aGlzLm56T25EcmFnT3Zlci5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNdWx0aXBsZSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=