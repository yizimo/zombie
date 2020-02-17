/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-select.component.ts
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
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Host, Injector, Input, Optional, Output, Renderer2, Self, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { isNotNil, slideMotion, warnDeprecation, zoomMotion, InputBoolean, NzConfigService, NzNoAnimationDirective, NzTreeBase, NzTreeHigherOrderServiceToken, WithConfig } from 'ng-zorro-antd/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { NzTreeSelectService } from './nz-tree-select.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
var NzTreeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzTreeSelectComponent, _super);
    function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.renderer = renderer;
        _this.cdr = cdr;
        _this.elementRef = elementRef;
        _this.noAnimation = noAnimation;
        _this.nzAllowClear = true;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzShowSearch = false;
        _this.nzDisabled = false;
        _this.nzAsyncData = false;
        _this.nzMultiple = false;
        _this.nzDefaultExpandAll = false;
        _this.nzCheckStrictly = false;
        _this.nzNodes = [];
        _this.nzOpen = false;
        _this.nzPlaceHolder = '';
        _this.nzDisplayWith = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.title; });
        _this.nzOpenChange = new EventEmitter();
        _this.nzCleared = new EventEmitter();
        _this.nzRemoved = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzTreeClick = new EventEmitter();
        _this.nzTreeCheckBoxChange = new EventEmitter();
        _this.isComposing = false;
        _this.isDestroy = true;
        _this.isNotFound = false;
        _this.inputValue = '';
        _this.dropDownPosition = 'bottom';
        _this.selectedNodes = [];
        _this.expandedKeys = [];
        _this.value = [];
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
        return _this;
    }
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzDefaultExpandedKeys", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedKeys;
        },
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
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedKeys;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzOpen ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMultiple || this.nzCheckable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.removeSelected(node, false);
            }));
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeSelectComponent.prototype.registerOnChange = /**
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
    NzTreeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                /** @type {?} */
                var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onExpandedKeysChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = tslib_1.__spread((/** @type {?} */ (value.keys)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    };
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.removeSelected = /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    function (node, emit, event) {
        if (emit === void 0) { emit = true; }
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.nzTreeService.conduct(node);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.nzTreeClick.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!_this.nzCheckStrictly) {
                    _this.nzTreeService.conduct(node);
                }
            }
            if (_this.nzCheckable) {
                node.isSelected = false;
            }
        })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        }))), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateSelectedNodes();
            /** @type {?} */
            var value = _this.selectedNodes.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return (/** @type {?} */ (node.key)); }));
            _this.value = tslib_1.__spread(value);
            if (_this.nzShowSearch || _this.isMultiple) {
                _this.inputValue = '';
                _this.isNotFound = false;
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                _this.focusOnInput();
                _this.updatePosition();
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        }));
    };
    /**
     * @param {?=} init
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateSelectedNodes = /**
     * @param {?=} init
     * @return {?}
     */
    function (init) {
        if (init === void 0) { init = false; }
        if (init) {
            /** @type {?} */
            var nodes = this.coerceTreeNodes(this.nzNodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(nodes);
            if (this.nzCheckable) {
                this.nzTreeService.calcCheckedKeys(this.value, nodes, this.nzCheckStrictly);
            }
            else {
                this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
            }
        }
        this.selectedNodes = tslib_1.__spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateInputWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onClearSelection = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.removeSelected(node, false);
        }));
        this.nzCleared.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setSearchValues = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
        }));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trackValue = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return (/** @type {?} */ (option.key));
    };
    NzTreeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-select',
                    exportAs: 'nzTreeSelect',
                    animations: [slideMotion, zoomMotion],
                    template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzDisabled\">\n</ng-template>\n\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown\"\n    [@slideMotion]=\"nzOpen ? dropDownPosition : 'void'\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [class.ant-select-dropdown--single]=\"!nzMultiple\"\n    [class.ant-select-dropdown--multiple]=\"nzMultiple\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [ngStyle]=\"nzDropdownStyle\">\n    <nz-tree\n      #treeRef\n      [hidden]=\"isNotFound\"\n      nzNoAnimation\n      nzSelectMode\n      [nzData]=\"nzNodes\"\n      [nzMultiple]=\"nzMultiple\"\n      [nzSearchValue]=\"inputValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzShowIcon]=\"nzShowIcon\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzExpandAll]=\"nzDefaultExpandAll\"\n      [nzExpandedKeys]=\"expandedKeys\"\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n      [nzTreeTemplate]=\"treeTemplate\"\n      [nzCheckStrictly]=\"nzCheckStrictly\"\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\n      (nzClick)=\"nzTreeClick.emit($event)\"\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\n      (nzSearchValueChange)=\"setSearchValues($event)\">\n    </nz-tree>\n    <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n    </span>\n  </div>\n</ng-template>\n\n<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ nzDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"nzShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : nzMaxTagCount; trackBy:trackValue\">\n        <li\n          [@zoomMotion]\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [attr.title]=\"nzDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\n                 (mousedown)=\"$event.preventDefault()\"\n                 (click)=\"removeSelected(node, true, $event)\">\n                 <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\"></i>\n               </span>\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li [@zoomMotion]\n        *ngIf=\"selectedNodes.length > nzMaxTagCount\"\n        class=\"ant-select-selection__choice\">\n        <div class=\"ant-select-selection__choice__content\">\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\n            <ng-template\n              [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: nzMaxTagCount}\">\n            </ng-template>\n          </ng-container>\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\n            + {{ selectedNodes.length - nzMaxTagCount }} ...\n          </ng-container>\n        </div>\n      </li>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\"\n    (mousedown)=\"$event.preventDefault()\"\n    (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" class=\"ant-select-clear-icon\" nzTheme=\"fill\"></i>\n  </span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\"></i>\n  </span>\n</div>",
                    providers: [
                        NzTreeSelectService,
                        {
                            provide: NzTreeHigherOrderServiceToken,
                            useFactory: higherOrderServiceFactory,
                            deps: [[new Self(), Injector]]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzTreeSelectComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen',
                        '(click)': 'trigger()'
                    },
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzTreeSelectComponent.ctorParameters = function () { return [
        { type: NzTreeSelectService },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTreeSelectComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzDefaultExpandAll: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzNodes: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzDisplayWith: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        nzCleared: [{ type: Output }],
        nzRemoved: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzTreeClick: [{ type: Output }],
        nzTreeCheckBoxChange: [{ type: Output }],
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        treeRef: [{ type: ViewChild, args: ['treeRef', { static: false },] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        nzTreeTemplate: [{ type: Input }],
        nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
    tslib_1.__decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        tslib_1.__metadata("design:type", String)
    ], NzTreeSelectComponent.prototype, "nzSize", void 0);
    return NzTreeSelectComponent;
}(NzTreeBase));
export { NzTreeSelectComponent };
if (false) {
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisplayWith;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCleared;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzRemoved;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeClick;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeTemplateChild;
    /** @type {?} */
    NzTreeSelectComponent.prototype.triggerWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isNotFound;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.expandedKeys;
    /** @type {?} */
    NzTreeSelectComponent.prototype.value;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.elementRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxFQUVKLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBRWYsc0JBQXNCLEVBRXRCLFVBQVUsRUFFViw2QkFBNkIsRUFHN0IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUUvRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsUUFBa0I7SUFDMUQsT0FBTyxRQUFR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cUI7OztJQUNoQyw2Q0FBc0Q7O0lBQ3RELDZDQUFzRDs7SUFDdEQsMkNBQXFEOztJQUNyRCwyREFBeUc7O0lBQ3pHLDRDQUFzRDs7SUFDdEQsZ0RBQStGOztJQUMvRiwyQ0FBMEY7O0lBQzFGLDZDQUF1RDs7SUFDdkQsMkNBQTRDOztJQUM1Qyw0Q0FBNkM7O0lBQzdDLDJDQUE0Qzs7SUFDNUMsbURBQW9EOztJQUNwRCxnREFBaUQ7O0lBQ2pELCtDQUFnRTs7SUFDaEUsa0RBQW1DOztJQUNuQyx3Q0FBNkQ7O0lBQzdELHVDQUF3Qjs7SUFDeEIsdUNBQWdGOztJQUNoRiw4Q0FBNEI7O0lBQzVCLGdEQUFvRDs7SUFxQnBELDhDQUFvRzs7SUFDcEcsOENBQStCOztJQUMvQixvREFBdUU7O0lBQ3ZFLDZDQUE4RDs7SUFDOUQsMENBQXdEOztJQUN4RCwwQ0FBOEQ7O0lBQzlELCtDQUEwRTs7SUFDMUUsNENBQXVFOztJQUN2RSxxREFBZ0Y7O0lBRWhGLDZDQUF5Rjs7SUFDekYsd0NBQWtFOztJQUNsRSxpREFBa0Y7O0lBQ2xGLG9EQUE0Rjs7SUFFNUYsK0NBQWdFOztJQUNoRSxvREFBOEc7O0lBSzlHLDZDQUFxQjs7SUFDckIsNENBQW9COztJQUNwQiwwQ0FBaUI7O0lBQ2pCLDJDQUFtQjs7SUFDbkIsMkNBQWdCOztJQUNoQixpREFBeUQ7O0lBQ3pELDREQUEwQzs7SUFDMUMsOENBQWlDOztJQUNqQyw2Q0FBNEI7O0lBQzVCLHNDQUFxQjs7SUFFckIseUNBQW9EOztJQUNwRCwwQ0FBbUM7O0lBcUNqQyxnREFBdUM7Ozs7O0lBQ3ZDLHlDQUEyQjs7Ozs7SUFDM0Isb0NBQThCOzs7OztJQUM5QiwyQ0FBOEI7O0lBQzlCLDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTZWxmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBpc05vdE5pbCxcbiAgc2xpZGVNb3Rpb24sXG4gIHdhcm5EZXByZWNhdGlvbixcbiAgem9vbU1vdGlvbixcbiAgSW5wdXRCb29sZWFuLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICBOelNpemVMRFNUeXBlLFxuICBOelRyZWVCYXNlLFxuICBOelRyZWVCYXNlU2VydmljZSxcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gIE56VHJlZU5vZGUsXG4gIE56VHJlZU5vZGVPcHRpb25zLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xuXG5pbXBvcnQgeyBOelRyZWVTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLXNlbGVjdC5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xuICByZXR1cm4gaW5qZWN0b3IuZ2V0KE56VHJlZVNlbGVjdFNlcnZpY2UpO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZVNlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUtc2VsZWN0JyxcbiAgZXhwb3J0QXM6ICduelRyZWVTZWxlY3QnLFxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb25dLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBOelRyZWVTZWxlY3RTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelRyZWVTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ256U2l6ZT09PVwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICduelNpemU9PT1cInNtYWxsXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXSc6ICchbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ256QWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbicsXG4gICAgJyhjbGljayknOiAndHJpZ2dlcigpJ1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56SGlkZVVuTWF0Y2hlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIG56U2hvd0ljb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Tm9kZXM6IEFycmF5PE56VHJlZU5vZGUgfCBOelRyZWVOb2RlT3B0aW9ucz4gPSBbXTtcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGU7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgbnpEcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56RXhwYW5kZWRLZXlzYCBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekRlZmF1bHRFeHBhbmRlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RXhwYW5kZWRLZXlzJyBpbnN0ZWFkLmApO1xuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRLZXlzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG56RXhwYW5kZWRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXM7XG4gIH1cblxuICBASW5wdXQoKSBuekRpc3BsYXlXaXRoOiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGU7XG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGVbXSB9PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VHJlZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VHJlZUNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd0cmVlUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRyZWVSZWY6IE56VHJlZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSB9KSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgQENvbnRlbnRDaGlsZCgnbnpUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRyZWVUZW1wbGF0ZUNoaWxkOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcbiAgZ2V0IHRyZWVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlVGVtcGxhdGUgfHwgdGhpcy5uelRyZWVUZW1wbGF0ZUNoaWxkO1xuICB9XG5cbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIGlzRGVzdHJveSA9IHRydWU7XG4gIGlzTm90Rm91bmQgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZSA9ICcnO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBleHBhbmRlZEtleXM6IHN0cmluZ1tdID0gW107XG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uek9wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNdWx0aXBsZSB8fCB0aGlzLm56Q2hlY2thYmxlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGxldCBvcGFjaXR5ID0gMTtcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbnpUcmVlU2VydmljZTogTnpUcmVlU2VsZWN0U2VydmljZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpOb2RlcycpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBbdmFsdWUgYXMgc3RyaW5nXTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdHJpZ2dlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpPcGVuKSkge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56T3BlbiA9IHRydWU7XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEJBQ0tTUEFDRSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlTm9kZSA9IHRoaXMuc2VsZWN0ZWROb2Rlc1t0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocmVtb3ZlTm9kZSk7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dCh7XG4gICAgICAgICAgZXZlbnROYW1lOiAncmVtb3ZlU2VsZWN0JyxcbiAgICAgICAgICBub2RlOiByZW1vdmVOb2RlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kZWRLZXlzQ2hhbmdlKHZhbHVlOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5leHBhbmRlZEtleXMgPSBbLi4udmFsdWUua2V5cyFdO1xuICB9XG5cbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm56TXVsdGlwbGUpO1xuICAgIH1cblxuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm56UmVtb3ZlZC5lbWl0KG5vZGUpO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRoZSBwb3B1cFxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB0aGlzLm56VHJlZUNsaWNrLnBpcGUoXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xuICAgICAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlICYmICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xuICAgICAgICAgICAgbm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXRoaXMubnpDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubnpDaGVja2FibGUgPyAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94IDogIW5vZGUuaXNEaXNhYmxlZCAmJiBub2RlLmlzU2VsZWN0YWJsZTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB0aGlzLm56Q2hlY2thYmxlID8gdGhpcy5uelRyZWVDaGVja0JveENoYW5nZSA6IG9ic2VydmFibGVPZigpLFxuICAgICAgdGhpcy5uekNsZWFyZWQsXG4gICAgICB0aGlzLm56UmVtb3ZlZFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkTm9kZXMubWFwKG5vZGUgPT4gbm9kZS5rZXkhKTtcbiAgICAgIHRoaXMudmFsdWUgPSBbLi4udmFsdWVdO1xuICAgICAgaWYgKHRoaXMubnpTaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5pc05vdEZvdW5kID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZS5sZW5ndGggPyB2YWx1ZVswXSA6IG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWROb2Rlcyhpbml0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaW5pdCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm56Tm9kZXMpO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmlzTXVsdGlwbGU7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5uekNoZWNrU3RyaWN0bHk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUobm9kZXMpO1xuICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyh0aGlzLnZhbHVlLCBub2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRoaXMuaXNNdWx0aXBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLih0aGlzLm56Q2hlY2thYmxlID8gdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSA6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpKV07XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsZWFyU2VsZWN0aW9uKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGVhcmVkLmVtaXQoKTtcbiAgfVxuXG4gIHNldFNlYXJjaFZhbHVlcygkZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmlzTm90Rm91bmQgPSAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSAmJiAhIXRoaXMuaW5wdXRWYWx1ZSAmJiAkZXZlbnQubWF0Y2hlZEtleXMhLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG5cbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelRyZWVOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0aW9uLmtleSE7XG4gIH1cbn1cbiJdfQ==