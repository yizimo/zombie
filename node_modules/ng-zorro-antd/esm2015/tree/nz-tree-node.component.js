/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-node.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, HostListener, Input, NgZone, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { treeCollapseMotion, warnDeprecation, InputBoolean, NzNoAnimationDirective, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
export class NzTreeNodeComponent {
    /**
     * @param {?} nzTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzSearchValue = '';
        // default var
        this.prefixCls = 'ant-tree';
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        this._nzDraggable = false;
        this._nzExpandAll = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDraggable(value) {
        this._nzDraggable = value;
        this.handDragEvent();
    }
    /**
     * @return {?}
     */
    get nzDraggable() {
        return this._nzDraggable;
    }
    /**
     * @deprecated use `nzExpandAll` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandAll(value) {
        warnDeprecation(`'nzDefaultExpandAll' is going to be removed in 9.0.0. Please use 'nzExpandAll' instead.`);
        this._nzExpandAll = value;
        if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
            this.nzTreeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get nzDefaultExpandAll() {
        return this._nzExpandAll;
    }
    // default set
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandAll(value) {
        this._nzExpandAll = value;
        if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
            this.nzTreeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get nzExpandAll() {
        return this._nzExpandAll;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this.nzTreeNode.icon;
    }
    /**
     * @return {?}
     */
    get canDraggable() {
        return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.nzTreeNode.isLeaf && this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.nzTreeNode.isLeaf && !this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.nzSearchValue &&
            this.nzHideUnMatched &&
            !this.nzTreeNode.isMatched &&
            !this.nzTreeNode.isExpanded &&
            this.nzTreeNode.canHide
            ? 'none'
            : '';
    }
    /**
     * reset node class
     * @return {?}
     */
    setClassMap() {
        this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.nzTreeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.nzTreeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.nzTreeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.nzTreeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.nzTreeNode.isLoading
        };
        this.nzNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.nzTreeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.nzNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.nzTreeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.nzTreeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox
        };
        this.nzNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.nzTreeNode.isSelected
        };
        this.nzNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.nzNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.nzTreeNode.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.isExpanded = !this.nzTreeNode.isExpanded;
            if (this.nzTreeNode.isMatched) {
                this.setDisplayForParentNodes(this.nzTreeNode);
            }
            this.setDisplayForChildNodes(this.nzTreeNode);
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    }
    /**
     * @private
     * @param {?} parentNode
     * @return {?}
     */
    setDisplayForChildNodes(parentNode) {
        const { children } = parentNode;
        if (children.length > 0) {
            children.map((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                /** @type {?} */
                const canHide = !node.isMatched;
                node.canHide = canHide;
                this.setDisplayForChildNodes(node);
            }));
        }
    }
    /**
     * @private
     * @param {?} targetNode
     * @return {?}
     */
    setDisplayForParentNodes(targetNode) {
        /** @type {?} */
        const parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    _clickCheckBox(event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.nzTreeNode);
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * drag event
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.nzTreeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        this.nzTreeNode.isExpanded = false;
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.nzTreeNode.key && !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
        }));
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.nzTreeNode.key) || (this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
            /** @type {?} */
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
            if (this.nzBeforeDrop) {
                this.nzBeforeDrop({
                    dragNode: (/** @type {?} */ (this.nzTreeService.getSelectedNode())),
                    node: this.nzTreeNode,
                    pos: this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                (canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                    }
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (this.nzTreeNode) {
                this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            // if user do not custom beforeDrop
            if (!this.nzBeforeDrop) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    }
    /**
     * Listening to dragging events.
     * @return {?}
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.nzDraggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragStart(e)));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnter(e)));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragOver(e)));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragLeave(e)));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragDrop(e)));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnd(e)));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.nzTreeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.nzTreeNode);
        }
        if (this.nzTreeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        }
        if (this.nzTreeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        }
        // TODO
        this.nzTreeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => (/** @type {?} */ (data.node)).key === this.nzTreeNode.key)), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.setClassMap();
            this.markForCheck();
        }));
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeNodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                template: "<li\n  #dragElement\n  role=\"treeitem\"\n  [style.display]=\"displayStyle\"\n  [ngClass]=\"nzNodeClass\">\n  <ng-container *ngIf=\"nzShowExpand\">\n    <span\n      [ngClass]=\"nzNodeSwitcherClass\"\n      (click)=\"_clickExpand($event)\">\n      <ng-container *ngIf=\"isShowSwitchIcon\">\n        <ng-container *ngIf=\"!nzTreeNode.isLoading\">\n          <ng-template\n            *ngIf=\"isTemplateRef(nzExpandedIcon)\"\n            [ngTemplateOutlet]=\"nzExpandedIcon\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n          </ng-template>\n          <i\n            *ngIf=\"!isTemplateRef(nzExpandedIcon)\"\n            nz-icon\n            nzType=\"caret-down\"\n            [class.ant-select-switcher-icon]=\"nzSelectMode\"\n            [class.ant-tree-switcher-icon]=\"!nzSelectMode\">\n          </i>\n        </ng-container>\n        <i *ngIf=\"nzTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"nzShowLine\">\n        <ng-template\n          *ngIf=\"isTemplateRef(nzExpandedIcon)\"\n          [ngTemplateOutlet]=\"nzExpandedIcon\"\n          [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n        </ng-template>\n        <ng-container *ngIf=\"!isTemplateRef(nzExpandedIcon)\">\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\n        </ng-container>\n      </ng-container>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"nzCheckable\">\n    <span\n      [ngClass]=\"nzNodeCheckboxClass\"\n      (click)=\"_clickCheckBox($event)\">\n      <span [class.ant-tree-checkbox-inner]=\"!nzSelectMode\"\n            [class.ant-select-tree-checkbox-inner]=\"nzSelectMode\"></span>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"!nzTreeTemplate\">\n    <span\n      title=\"{{nzTreeNode.title}}\"\n      [attr.draggable]=\"canDraggable\"\n      [attr.aria-grabbed]=\"canDraggable\"\n      [ngClass]=\"nzNodeContentClass\"\n      [class.draggable]=\"canDraggable\">\n      <span\n        *ngIf=\"nzTreeNode.icon && nzShowIcon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"nzTreeNode.isLoading\"\n        [ngClass]=\"nzNodeContentLoadingClass\">\n        <span\n          [ngClass]=\"nzNodeContentIconClass\">\n          <i nz-icon *ngIf=\"nzIcon\" [nzType]=\"nzIcon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\" [innerHTML]=\"nzTreeNode.title | nzHighlight: nzSearchValue: '' : 'font-highlight'\">\n      </span>\n    </span>\n  </ng-container>\n  <ng-template\n    [ngTemplateOutlet]=\"nzTreeTemplate\"\n    [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n  </ng-template>\n\n  <ul\n    *ngIf=\"nzTreeNode.isExpanded\"\n    role=\"group\"\n    class=\"ant-tree-child-tree\"\n    [class.ant-tree-child-tree-open]=\"!nzSelectMode || nzTreeNode.isExpanded\"\n    data-expanded=\"true\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    @treeCollapseMotion>\n    <nz-tree-node\n      *ngFor=\"let node of nzTreeNode.getChildren()\"\n      [nzTreeNode]=\"node\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzDraggable]=\"nzDraggable\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzExpandAll]=\"nzExpandAll\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzSearchValue]=\"nzSearchValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzBeforeDrop]=\"nzBeforeDrop\"\n      [nzTreeTemplate]=\"nzTreeTemplate\">\n    </nz-tree-node>\n  </ul>\n</li>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [treeCollapseMotion]
            }] }
];
/** @nocollapse */
NzTreeNodeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTreeNodeComponent.propDecorators = {
    dragElement: [{ type: ViewChild, args: ['dragElement', { static: false },] }],
    nzTreeNode: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzTreeTemplate: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
    nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
if (false) {
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragElement;
    /**
     * for global property
     * @type {?}
     */
    NzTreeNodeComponent.prototype.nzTreeNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSearchValue;
    /** @type {?} */
    NzTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeSwitcherClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeCheckboxClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentIconClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentLoadingClass;
    /**
     * drag var
     * @type {?}
     */
    NzTreeNodeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    NzTreeNodeComponent.prototype._nzDraggable;
    /** @type {?} */
    NzTreeNodeComponent.prototype._nzExpandAll;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeService;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeNodeComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJlZS8iLCJzb3VyY2VzIjpbIm56LXRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLFlBQVksRUFFWixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBVTVCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7OztJQTRaOUIsWUFDUyxhQUFnQyxFQUMvQixNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsS0FBaUIsRUFDakIsR0FBc0IsRUFDSCxXQUFvQztRQUx4RCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXZaeEMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztR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OztJQTBDNUIsd0NBQXVCOztJQUN2QiwwQ0FBaUI7O0lBQ2pCLGtEQUF5Qjs7SUFDekIsaURBQXdCOztJQUN4QixrREFBeUI7O0lBQ3pCLHFEQUE0Qjs7SUFDNUIsd0RBQStCOzs7OztJQUsvQix1Q0FBeUI7O0lBQ3pCLHNDQUFZOztJQUNaLDJDQUlFOzs7OztJQUtGLDJDQUFxQjs7SUFDckIsMkNBQXFCOztJQTBVbkIsNENBQXVDOzs7OztJQUN2QyxxQ0FBc0I7Ozs7O0lBQ3RCLHVDQUEyQjs7Ozs7SUFDM0Isb0NBQXlCOzs7OztJQUN6QixrQ0FBOEI7O0lBQzlCLDBDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgdHJlZUNvbGxhcHNlTW90aW9uLFxuICB3YXJuRGVwcmVjYXRpb24sXG4gIElucHV0Qm9vbGVhbixcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxuICBOelRyZWVOb2RlXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtbm9kZScsXG4gIGV4cG9ydEFzOiAnbnpUcmVlTm9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFt0cmVlQ29sbGFwc2VNb3Rpb25dXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJhZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIGZvciBnbG9iYWwgcHJvcGVydHlcbiAgICovXG4gIEBJbnB1dCgpIG56VHJlZU5vZGU6IE56VHJlZU5vZGU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJY29uID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBASW5wdXQoKSBuekJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpTZWFyY2hWYWx1ZSA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX256RHJhZ2dhYmxlID0gdmFsdWU7XG4gICAgdGhpcy5oYW5kRHJhZ0V2ZW50KCk7XG4gIH1cblxuICBnZXQgbnpEcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX256RHJhZ2dhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbnpFeHBhbmRBbGxgIGluc3RlYWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0RXhwYW5kQWxsJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekV4cGFuZEFsbCcgaW5zdGVhZC5gKTtcbiAgICB0aGlzLl9uekV4cGFuZEFsbCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLm56VHJlZU5vZGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uekV4cGFuZEFsbDtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgc2V0XG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX256RXhwYW5kQWxsID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHRoaXMubnpUcmVlTm9kZSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZikge1xuICAgICAgdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekV4cGFuZEFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbnpFeHBhbmRBbGw7XG4gIH1cblxuICAvLyBkZWZhdWx0IHZhclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xuICBuek5vZGVDbGFzcyA9IHt9O1xuICBuek5vZGVTd2l0Y2hlckNsYXNzID0ge307XG4gIG56Tm9kZUNvbnRlbnRDbGFzcyA9IHt9O1xuICBuek5vZGVDaGVja2JveENsYXNzID0ge307XG4gIG56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcbiAgbnpOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBkcmFnIHZhclxuICAgKi9cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBkcmFnUG9zID0gMjtcbiAgZHJhZ1Bvc0NsYXNzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICcwJzogJ2RyYWctb3ZlcicsXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxuICAgICctMSc6ICdkcmFnLW92ZXItZ2FwLXRvcCdcbiAgfTtcblxuICAvKipcbiAgICogZGVmYXVsdCBzZXRcbiAgICovXG4gIF9uekRyYWdnYWJsZSA9IGZhbHNlO1xuICBfbnpFeHBhbmRBbGwgPSBmYWxzZTtcblxuICBnZXQgbnpJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlTm9kZS5pY29uO1xuICB9XG5cbiAgZ2V0IGNhbkRyYWdnYWJsZSgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubnpEcmFnZ2FibGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmICYmIHRoaXMubnpTaG93TGluZTtcbiAgfVxuXG4gIGdldCBpc1Nob3dTd2l0Y2hJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZiAmJiAhdGhpcy5uelNob3dMaW5lO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZjtcbiAgfVxuXG4gIGdldCBpc1N3aXRjaGVyQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZjtcbiAgfVxuXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcbiAgICAvLyB0byBoaWRlIHVubWF0Y2hlZCBub2Rlc1xuICAgIHJldHVybiB0aGlzLm56U2VhcmNoVmFsdWUgJiZcbiAgICAgIHRoaXMubnpIaWRlVW5NYXRjaGVkICYmXG4gICAgICAhdGhpcy5uelRyZWVOb2RlLmlzTWF0Y2hlZCAmJlxuICAgICAgIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmXG4gICAgICB0aGlzLm56VHJlZU5vZGUuY2FuSGlkZVxuICAgICAgPyAnbm9uZSdcbiAgICAgIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xuICAgKi9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5wcmVmaXhDbHMgPSB0aGlzLm56U2VsZWN0TW9kZSA/ICdhbnQtc2VsZWN0LXRyZWUnIDogJ2FudC10cmVlJztcbiAgICB0aGlzLm56Tm9kZUNsYXNzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1kaXNhYmxlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc3dpdGNoZXItb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMubnpUcmVlTm9kZS5pc0hhbGZDaGVja2VkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zZWxlY3RlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtbG9hZGluZ2BdOiB0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nXG4gICAgfTtcbiAgICB0aGlzLm56Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyLW5vb3BgXTogdGhpcy5uelRyZWVOb2RlLmlzTGVhZixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZVxuICAgIH07XG5cbiAgICB0aGlzLm56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94YF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy5uelRyZWVOb2RlLmlzQ2hlY2tlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLm56VHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtZGlzYWJsZWRgXTogdGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94XG4gICAgfTtcblxuICAgIHRoaXMubnpOb2RlQ29udGVudENsYXNzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlcmBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLXNlbGVjdGVkYF06IHRoaXMubnpUcmVlTm9kZS5pc1NlbGVjdGVkXG4gICAgfTtcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbl9fY3VzdG9taXplYF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMubnpOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RNb2RlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG56Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RhYmxlICYmICF0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uelRyZWVOb2RlLmlzU2VsZWN0ZWQgPSAhdGhpcy5uelRyZWVOb2RlLmlzU2VsZWN0ZWQ7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcbiAgbnpEYmxDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkYmxjbGljaycsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBuekNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gIH1cblxuICAvKipcbiAgICogY29sbGFwc2Ugbm9kZVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIF9jbGlja0V4cGFuZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSB7XG4gICAgICAvLyBzZXQgYXN5bmMgc3RhdGVcbiAgICAgIGlmICh0aGlzLm56QXN5bmNEYXRhICYmIHRoaXMubnpUcmVlTm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMubnpUcmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgPSAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQ7XG4gICAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzTWF0Y2hlZCkge1xuICAgICAgICB0aGlzLnNldERpc3BsYXlGb3JQYXJlbnROb2Rlcyh0aGlzLm56VHJlZU5vZGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yQ2hpbGROb2Rlcyh0aGlzLm56VHJlZU5vZGUpO1xuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdleHBhbmQnLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzcGxheUZvckNoaWxkTm9kZXMocGFyZW50Tm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHBhcmVudE5vZGU7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoaWxkcmVuLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3QgY2FuSGlkZSA9ICFub2RlLmlzTWF0Y2hlZDtcbiAgICAgICAgbm9kZS5jYW5IaWRlID0gY2FuSGlkZTtcbiAgICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yQ2hpbGROb2Rlcyhub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzcGxheUZvclBhcmVudE5vZGVzKHRhcmdldE5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIHBhcmVudE5vZGUuY2FuSGlkZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yUGFyZW50Tm9kZXMocGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIG5vZGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBfY2xpY2tDaGVja0JveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gcmV0dXJuIGlmIG5vZGUgaXMgZGlzYWJsZWRcbiAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubnpUcmVlTm9kZS5pc0NoZWNrZWQgPSAhdGhpcy5uelRyZWVOb2RlLmlzQ2hlY2tlZDtcbiAgICB0aGlzLm56VHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRyYWcgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsZWFyRHJhZ0NsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRyYWdDbGFzcyA9IFsnZHJhZy1vdmVyLWdhcC10b3AnLCAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLCAnZHJhZy1vdmVyJ107XG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLm56VHJlZU5vZGUua2V5ISk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGVtcHR5XG4gICAgfVxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy5uelRyZWVOb2RlKTtcbiAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgdGhpcy5uelRyZWVOb2RlLCBlKTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyByZXNldCBwb3NpdGlvblxuICAgIHRoaXMuZHJhZ1BvcyA9IDI7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICBpZiAobm9kZSAmJiBub2RlLmtleSAhPT0gdGhpcy5uelRyZWVOb2RlLmtleSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkcm9wUG9zaXRpb24gPSB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0Ryb3BQb3NpdGlvbihlKTtcbiAgICBpZiAodGhpcy5kcmFnUG9zICE9PSBkcm9wUG9zaXRpb24pIHtcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcbiAgICAgIHRoaXMuZHJhZ1BvcyA9IGRyb3BQb3NpdGlvbjtcbiAgICAgIC8vIGxlYWYgbm9kZSB3aWxsIHBhc3NcbiAgICAgIGlmICghKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5kcmFnUG9zQ2xhc3NbdGhpcy5kcmFnUG9zXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcbiAgICB9KTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdsZWF2ZScsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gIH1cblxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgIGlmICghbm9kZSB8fCAobm9kZSAmJiBub2RlLmtleSA9PT0gdGhpcy5uelRyZWVOb2RlLmtleSkgfHwgKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXG4gICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgY29uc3QgZHJhZ0VuZEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy5uelRyZWVOb2RlLCBlKTtcbiAgICAgIGlmICh0aGlzLm56QmVmb3JlRHJvcCkge1xuICAgICAgICB0aGlzLm56QmVmb3JlRHJvcCh7XG4gICAgICAgICAgZHJhZ05vZGU6IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSEsXG4gICAgICAgICAgbm9kZTogdGhpcy5uelRyZWVOb2RlLFxuICAgICAgICAgIHBvczogdGhpcy5kcmFnUG9zXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChjYW5Ecm9wKSB7XG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMubnpUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyYWdFbmRFdmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VHJlZU5vZGUpIHtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLm56VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAvLyBpZiB1c2VyIGRvIG5vdCBjdXN0b20gYmVmb3JlRHJvcFxuICAgICAgaWYgKCF0aGlzLm56QmVmb3JlRHJvcCkge1xuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gZHJhZ2dpbmcgZXZlbnRzLlxuICAgKi9cbiAgaGFuZERyYWdFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5uekRyYWdnYWJsZSkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydChlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW50ZXIoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnb3ZlcicpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnT3ZlcihlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdsZWF2ZScpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnTGVhdmUoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdEcm9wKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VuZCcpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gaW5pdCBleHBhbmRlZCAvIHNlbGVjdGVkIC8gY2hlY2tlZCBsaXN0XG4gICAgaWYgKHRoaXMubnpUcmVlTm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Tm9kZUFjdGl2ZSh0aGlzLm56VHJlZU5vZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMubnpUcmVlTm9kZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMubnpUcmVlTm9kZSk7XG4gICAgfVxuICAgIC8vIFRPRE9cbiAgICB0aGlzLm56VHJlZU5vZGUuY29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLm5vZGUhLmtleSA9PT0gdGhpcy5uelRyZWVOb2RlLmtleSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19