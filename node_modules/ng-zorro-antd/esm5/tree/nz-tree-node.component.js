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
var NzTreeNodeComponent = /** @class */ (function () {
    function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
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
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzDraggable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzDraggable = value;
            this.handDragEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDefaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzExpandAll;
        },
        /**
         * @deprecated use `nzExpandAll` instead.
         */
        set: /**
         * @deprecated use `nzExpandAll` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnDeprecation("'nzDefaultExpandAll' is going to be removed in 9.0.0. Please use 'nzExpandAll' instead.");
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzExpandAll;
        },
        // default set
        set: 
        // default set
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTreeNode.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowLineIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isLeaf && this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowSwitchIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isLeaf && !this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // to hide unmatched nodes
            return this.nzSearchValue &&
                this.nzHideUnMatched &&
                !this.nzTreeNode.isMatched &&
                !this.nzTreeNode.isExpanded &&
                this.nzTreeNode.canHide
                ? 'none'
                : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    /**
     * reset node class
     * @return {?}
     */
    NzTreeNodeComponent.prototype.setClassMap = /**
     * reset node class
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e, _f;
        this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.nzTreeNode.isDisabled,
            _a[this.prefixCls + "-treenode-switcher-open"] = this.isSwitcherOpen,
            _a[this.prefixCls + "-treenode-switcher-close"] = this.isSwitcherClose,
            _a[this.prefixCls + "-treenode-checkbox-checked"] = this.nzTreeNode.isChecked,
            _a[this.prefixCls + "-treenode-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
            _a[this.prefixCls + "-treenode-selected"] = this.nzTreeNode.isSelected,
            _a[this.prefixCls + "-treenode-loading"] = this.nzTreeNode.isLoading,
            _a);
        this.nzNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.nzTreeNode.isLeaf,
            _b[this.prefixCls + "-switcher_open"] = this.isSwitcherOpen,
            _b[this.prefixCls + "-switcher_close"] = this.isSwitcherClose,
            _b);
        this.nzNodeCheckboxClass = (_c = {},
            _c[this.prefixCls + "-checkbox"] = true,
            _c[this.prefixCls + "-checkbox-checked"] = this.nzTreeNode.isChecked,
            _c[this.prefixCls + "-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
            _c[this.prefixCls + "-checkbox-disabled"] = this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox,
            _c);
        this.nzNodeContentClass = (_d = {},
            _d[this.prefixCls + "-node-content-wrapper"] = true,
            _d[this.prefixCls + "-node-content-wrapper-open"] = this.isSwitcherOpen,
            _d[this.prefixCls + "-node-content-wrapper-close"] = this.isSwitcherClose,
            _d[this.prefixCls + "-node-selected"] = this.nzTreeNode.isSelected,
            _d);
        this.nzNodeContentIconClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e[this.prefixCls + "-icon__customize"] = true,
            _e);
        this.nzNodeContentLoadingClass = (_f = {},
            _f[this.prefixCls + "-iconEle"] = true,
            _f);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    };
    /**
     * click node to select, 200ms to dbl click
     */
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzClick = /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param event
     */
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype._clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
            var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    };
    /**
     * @private
     * @param {?} parentNode
     * @return {?}
     */
    NzTreeNodeComponent.prototype.setDisplayForChildNodes = /**
     * @private
     * @param {?} parentNode
     * @return {?}
     */
    function (parentNode) {
        var _this = this;
        var children = parentNode.children;
        if (children.length > 0) {
            children.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                /** @type {?} */
                var canHide = !node.isMatched;
                node.canHide = canHide;
                _this.setDisplayForChildNodes(node);
            }));
        }
    };
    /**
     * @private
     * @param {?} targetNode
     * @return {?}
     */
    NzTreeNodeComponent.prototype.setDisplayForParentNodes = /**
     * @private
     * @param {?} targetNode
     * @return {?}
     */
    function (targetNode) {
        /** @type {?} */
        var parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype._clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
        var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clearDragClass = /**
     * drag event
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
        var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (node && node.key !== _this.nzTreeNode.key && !_this.nzTreeNode.isExpanded && !_this.nzTreeNode.isLeaf) {
                _this.nzTreeNode.isExpanded = true;
            }
            /** @type {?} */
            var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.nzTreeNode, e);
            (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
        }));
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === _this.nzTreeNode.key) || (_this.dragPos === 0 && _this.nzTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            var dropEvent = _this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e);
            /** @type {?} */
            var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
            if (_this.nzBeforeDrop) {
                _this.nzBeforeDrop({
                    dragNode: (/** @type {?} */ (_this.nzTreeService.getSelectedNode())),
                    node: _this.nzTreeNode,
                    pos: _this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    }
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (_this.nzTreeNode) {
                _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            // if user do not custom beforeDrop
            if (!_this.nzBeforeDrop) {
                /** @type {?} */
                var eventNext = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    };
    /**
     * Listening to dragging events.
     */
    /**
     * Listening to dragging events.
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handDragEvent = /**
     * Listening to dragging events.
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (_this.nzDraggable) {
                _this.destroy$ = new Subject();
                fromEvent(_this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragStart(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnter(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragOver(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragLeave(e); }));
                fromEvent(_this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragDrop(e); }));
                fromEvent(_this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnd(e); }));
            }
            else {
                _this.destroy$.next();
                _this.destroy$.complete();
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeNodeComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (data) { return (/** @type {?} */ (data.node)).key === _this.nzTreeNode.key; })), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setClassMap();
            _this.markForCheck();
        }));
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    NzTreeNodeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return NzTreeNodeComponent;
}());
export { NzTreeNodeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJlZS8iLCJzb3VyY2VzIjpbIm56LXRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLFlBQVksRUFFWixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDO0FBRTVCO0lBb2FFLDZCQUNTLGFBQWdDLEVBQy9CLE1BQWMsRUFDZCxRQUFtQixFQUNuQixLQUFpQixFQUNqQixHQUFzQixFQUNILFdBQW9DO1FBTHhELGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0gsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBdlp4QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5DLGtCQUFhLEdBQUcsRUFBRSxDQUFD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OzsyREFBb0I7SUF5YjlDLDBCQUFDO0NBQUEsQUEvY0QsSUErY0M7U0F2Y1ksbUJBQW1COzs7SUFDOUIsMENBQXFFOzs7OztJQUtyRSx5Q0FBZ0M7O0lBQ2hDLHlDQUE2Qzs7SUFDN0MsMkNBQStDOztJQUMvQywwQ0FBOEM7O0lBQzlDLDBDQUE4Qzs7SUFDOUMsOENBQWlEOztJQUNqRCw0Q0FBK0M7O0lBQy9DLDJDQUE4Qzs7SUFDOUMseUNBQTRDOztJQUM1Qyw2Q0FBZ0U7O0lBQ2hFLDZDQUFnRTs7SUFDaEUsMkNBQWlGOztJQUNqRiw0Q0FBNEI7O0lBMEM1Qix3Q0FBdUI7O0lBQ3ZCLDBDQUFpQjs7SUFDakIsa0RBQXlCOztJQUN6QixpREFBd0I7O0lBQ3hCLGtEQUF5Qjs7SUFDekIscURBQTRCOztJQUM1Qix3REFBK0I7Ozs7O0lBSy9CLHVDQUF5Qjs7SUFDekIsc0NBQVk7O0lBQ1osMkNBSUU7Ozs7O0lBS0YsMkNBQXFCOztJQUNyQiwyQ0FBcUI7O0lBMFVuQiw0Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUFzQjs7Ozs7SUFDdEIsdUNBQTJCOzs7OztJQUMzQixvQ0FBeUI7Ozs7O0lBQ3pCLGtDQUE4Qjs7SUFDOUIsMENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICB0cmVlQ29sbGFwc2VNb3Rpb24sXG4gIHdhcm5EZXByZWNhdGlvbixcbiAgSW5wdXRCb29sZWFuLFxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXG4gIE56VHJlZU5vZGVcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1ub2RlJyxcbiAgZXhwb3J0QXM6ICduelRyZWVOb2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW3RyZWVDb2xsYXBzZU1vdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdkcmFnRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogZm9yIGdsb2JhbCBwcm9wZXJ0eVxuICAgKi9cbiAgQElucHV0KCkgbnpUcmVlTm9kZTogTnpUcmVlTm9kZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlVW5NYXRjaGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek5vQW5pbWF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb24gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBASW5wdXQoKSBuelNlYXJjaFZhbHVlID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbnpEcmFnZ2FibGUgPSB2YWx1ZTtcbiAgICB0aGlzLmhhbmREcmFnRXZlbnQoKTtcbiAgfVxuXG4gIGdldCBuekRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbnpEcmFnZ2FibGU7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuekV4cGFuZEFsbGAgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRBbGwnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kQWxsJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMuX256RXhwYW5kQWxsID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHRoaXMubnpUcmVlTm9kZSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZikge1xuICAgICAgdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX256RXhwYW5kQWxsO1xuICB9XG5cbiAgLy8gZGVmYXVsdCBzZXRcbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbnpFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5uelRyZWVOb2RlICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSB7XG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uekV4cGFuZEFsbDtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgdmFyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XG4gIG56Tm9kZUNsYXNzID0ge307XG4gIG56Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7fTtcbiAgbnpOb2RlQ29udGVudENsYXNzID0ge307XG4gIG56Tm9kZUNoZWNrYm94Q2xhc3MgPSB7fTtcbiAgbnpOb2RlQ29udGVudEljb25DbGFzcyA9IHt9O1xuICBuek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge307XG5cbiAgLyoqXG4gICAqIGRyYWcgdmFyXG4gICAqL1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGRyYWdQb3MgPSAyO1xuICBkcmFnUG9zQ2xhc3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgJzAnOiAnZHJhZy1vdmVyJyxcbiAgICAnMSc6ICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsXG4gICAgJy0xJzogJ2RyYWctb3Zlci1nYXAtdG9wJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBkZWZhdWx0IHNldFxuICAgKi9cbiAgX256RHJhZ2dhYmxlID0gZmFsc2U7XG4gIF9uekV4cGFuZEFsbCA9IGZhbHNlO1xuXG4gIGdldCBuekljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVOb2RlLmljb247XG4gIH1cblxuICBnZXQgY2FuRHJhZ2dhYmxlKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uekRyYWdnYWJsZSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZWQgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc1Nob3dMaW5lSWNvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYgJiYgdGhpcy5uelNob3dMaW5lO1xuICB9XG5cbiAgZ2V0IGlzU2hvd1N3aXRjaEljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmICYmICF0aGlzLm56U2hvd0xpbmU7XG4gIH1cblxuICBnZXQgaXNTd2l0Y2hlck9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xuICAgIC8vIHRvIGhpZGUgdW5tYXRjaGVkIG5vZGVzXG4gICAgcmV0dXJuIHRoaXMubnpTZWFyY2hWYWx1ZSAmJlxuICAgICAgdGhpcy5uekhpZGVVbk1hdGNoZWQgJiZcbiAgICAgICF0aGlzLm56VHJlZU5vZGUuaXNNYXRjaGVkICYmXG4gICAgICAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgJiZcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5jYW5IaWRlXG4gICAgICA/ICdub25lJ1xuICAgICAgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldCBub2RlIGNsYXNzXG4gICAqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLnByZWZpeENscyA9IHRoaXMubnpTZWxlY3RNb2RlID8gJ2FudC1zZWxlY3QtdHJlZScgOiAnYW50LXRyZWUnO1xuICAgIHRoaXMubnpOb2RlQ2xhc3MgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWRpc2FibGVkYF06IHRoaXMubnpUcmVlTm9kZS5pc0Rpc2FibGVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMubnpUcmVlTm9kZS5pc0NoZWNrZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy5uelRyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXNlbGVjdGVkYF06IHRoaXMubnpUcmVlTm9kZS5pc1NlbGVjdGVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1sb2FkaW5nYF06IHRoaXMubnpUcmVlTm9kZS5pc0xvYWRpbmdcbiAgICB9O1xuICAgIHRoaXMubnpOb2RlU3dpdGNoZXJDbGFzcyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGBdOiB0aGlzLm56VHJlZU5vZGUuaXNMZWFmLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyX2Nsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlXG4gICAgfTtcblxuICAgIHRoaXMubnpOb2RlQ2hlY2tib3hDbGFzcyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3hgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMubnpUcmVlTm9kZS5pc0hhbGZDaGVja2VkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1kaXNhYmxlZGBdOiB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3hcbiAgICB9O1xuXG4gICAgdGhpcy5uek5vZGVDb250ZW50Q2xhc3MgPSB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXItY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2UsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtc2VsZWN0ZWRgXTogdGhpcy5uelRyZWVOb2RlLmlzU2VsZWN0ZWRcbiAgICB9O1xuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uX19jdXN0b21pemVgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5uek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdE1vZGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIG5vZGUgdG8gc2VsZWN0LCAyMDBtcyB0byBkYmwgY2xpY2tcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgbnpDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMubnpUcmVlTm9kZS5pc1NlbGVjdGFibGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZDtcbiAgICB9XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjbGljaycsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxuICBuekRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIG56Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY29udGV4dG1lbnUnLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb2xsYXBzZSBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgX2NsaWNrRXhwYW5kKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubnpUcmVlTm9kZS5pc0xvYWRpbmcgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgIC8vIHNldCBhc3luYyBzdGF0ZVxuICAgICAgaWYgKHRoaXMubnpBc3luY0RhdGEgJiYgdGhpcy5uelRyZWVOb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgdGhpcy5uelRyZWVOb2RlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZDtcbiAgICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNNYXRjaGVkKSB7XG4gICAgICAgIHRoaXMuc2V0RGlzcGxheUZvclBhcmVudE5vZGVzKHRoaXMubnpUcmVlTm9kZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldERpc3BsYXlGb3JDaGlsZE5vZGVzKHRoaXMubnpUcmVlTm9kZSk7XG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2V4cGFuZCcsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNwbGF5Rm9yQ2hpbGROb2RlcyhwYXJlbnROb2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcGFyZW50Tm9kZTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRyZW4ubWFwKG5vZGUgPT4ge1xuICAgICAgICBjb25zdCBjYW5IaWRlID0gIW5vZGUuaXNNYXRjaGVkO1xuICAgICAgICBub2RlLmNhbkhpZGUgPSBjYW5IaWRlO1xuICAgICAgICB0aGlzLnNldERpc3BsYXlGb3JDaGlsZE5vZGVzKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNwbGF5Rm9yUGFyZW50Tm9kZXModGFyZ2V0Tm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0YXJnZXROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50Tm9kZS5jYW5IaWRlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldERpc3BsYXlGb3JQYXJlbnROb2RlcyhwYXJlbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgbm9kZVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIF9jbGlja0NoZWNrQm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyByZXR1cm4gaWYgbm9kZSBpcyBkaXNhYmxlZFxuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVOb2RlLmlzQ2hlY2tlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkO1xuICAgIHRoaXMubnpUcmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdCh0aGlzLm56VHJlZU5vZGUpO1xuICAgIH1cbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NoZWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gIH1cblxuICAvKipcbiAgICogZHJhZyBldmVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZHJhZ0NsYXNzID0gWydkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInXTtcbiAgICBkcmFnQ2xhc3MuZm9yRWFjaChlID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICAvLyBpZSB0aHJvdyBlcnJvclxuICAgICAgLy8gZmlyZWZveC1uZWVkLWl0XG4gICAgICBlLmRhdGFUcmFuc2ZlciEuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRoaXMubnpUcmVlTm9kZS5rZXkhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZSh0aGlzLm56VHJlZU5vZGUpO1xuICAgIHRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnc3RhcnQnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0VudGVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJlc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgIGlmIChub2RlICYmIG5vZGUua2V5ICE9PSB0aGlzLm56VHJlZU5vZGUua2V5ICYmICF0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZikge1xuICAgICAgICB0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbnRlcicsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRyb3BQb3NpdGlvbiA9IHRoaXMubnpUcmVlU2VydmljZS5jYWxjRHJvcFBvc2l0aW9uKGUpO1xuICAgIGlmICh0aGlzLmRyYWdQb3MgIT09IGRyb3BQb3NpdGlvbikge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgdGhpcy5kcmFnUG9zID0gZHJvcFBvc2l0aW9uO1xuICAgICAgLy8gbGVhZiBub2RlIHdpbGwgcGFzc1xuICAgICAgaWYgKCEodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMubnpUcmVlTm9kZS5pc0xlYWYpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmRyYWdQb3NDbGFzc1t0aGlzLmRyYWdQb3NdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnb3ZlcicsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XG4gIH1cblxuICBoYW5kbGVEcmFnTGVhdmUoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgIH0pO1xuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy5uelRyZWVOb2RlLCBlKTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgaWYgKCFub2RlIHx8IChub2RlICYmIG5vZGUua2V5ID09PSB0aGlzLm56VHJlZU5vZGUua2V5KSB8fCAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMubnpUcmVlTm9kZS5pc0xlYWYpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHBhc3MgaWYgbm9kZSBpcyBsZWFmTm9cbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgICBjb25zdCBkcmFnRW5kRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgaWYgKHRoaXMubnpCZWZvcmVEcm9wKSB7XG4gICAgICAgIHRoaXMubnpCZWZvcmVEcm9wKHtcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpISxcbiAgICAgICAgICBub2RlOiB0aGlzLm56VHJlZU5vZGUsXG4gICAgICAgICAgcG9zOiB0aGlzLmRyYWdQb3NcbiAgICAgICAgfSkuc3Vic2NyaWJlKChjYW5Ecm9wOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKGNhbkRyb3ApIHtcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy5uelRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJvcEV2ZW50KTtcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJhZ0VuZEV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpUcmVlTm9kZSkge1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMubnpUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXG4gICAgICBpZiAoIXRoaXMubnpCZWZvcmVEcm9wKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmluZyB0byBkcmFnZ2luZyBldmVudHMuXG4gICAqL1xuICBoYW5kRHJhZ0V2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm56RHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VudGVyJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbnRlcihlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdPdmVyKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdMZWF2ZShlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Ryb3AnKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0Ryb3AoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpbml0IGV4cGFuZGVkIC8gc2VsZWN0ZWQgLyBjaGVja2VkIGxpc3RcbiAgICBpZiAodGhpcy5uelRyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMubnpUcmVlTm9kZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpUcmVlTm9kZS5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICB9XG4gICAgLy8gVE9ET1xuICAgIHRoaXMubnpUcmVlTm9kZS5jb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMubnpUcmVlU2VydmljZVxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEubm9kZSEua2V5ID09PSB0aGlzLm56VHJlZU5vZGUua2V5KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=