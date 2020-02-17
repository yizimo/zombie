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
const NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
export class NzTreeSelectComponent extends NzTreeBase {
    /**
     * @param {?} nzTreeService
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzCheckStrictly = false;
        this.nzNodes = [];
        this.nzOpen = false;
        this.nzPlaceHolder = '';
        this.nzDisplayWith = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.title);
        this.nzOpenChange = new EventEmitter();
        this.nzCleared = new EventEmitter();
        this.nzRemoved = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzTreeClick = new EventEmitter();
        this.nzTreeCheckBoxChange = new EventEmitter();
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.expandedKeys = [];
        this.value = [];
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    }
    /**
     * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandedKeys(value) {
        warnDeprecation(`'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.`);
        this.expandedKeys = value;
    }
    /**
     * @return {?}
     */
    get nzDefaultExpandedKeys() {
        return this.expandedKeys;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandedKeys(value) {
        this.expandedKeys = value;
    }
    /**
     * @return {?}
     */
    get nzExpandedKeys() {
        return this.expandedKeys;
    }
    /**
     * @return {?}
     */
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get searchDisplay() {
        return this.nzOpen ? 'block' : 'none';
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
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
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
            node => {
                this.removeSelected(node, false);
            }));
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
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
    /**
     * @return {?}
     */
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = (/** @type {?} */ (e.target));
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                /** @type {?} */
                const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onExpandedKeysChange(value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = [...(/** @type {?} */ (value.keys))];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    removeSelected(node, emit = true, event) {
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
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        }));
    }
    /**
     * @return {?}
     */
    subscribeSelectionChange() {
        return merge(this.nzTreeClick.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const node = (/** @type {?} */ (event.node));
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        })), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const node = (/** @type {?} */ (event.node));
            return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        }))), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateSelectedNodes();
            /** @type {?} */
            const value = this.selectedNodes.map((/**
             * @param {?} node
             * @return {?}
             */
            node => (/** @type {?} */ (node.key))));
            this.value = [...value];
            if (this.nzShowSearch || this.isMultiple) {
                this.inputValue = '';
                this.isNotFound = false;
            }
            if (this.isMultiple) {
                this.onChange(value);
                this.focusOnInput();
                this.updatePosition();
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        }));
    }
    /**
     * @param {?=} init
     * @return {?}
     */
    updateSelectedNodes(init = false) {
        if (init) {
            /** @type {?} */
            const nodes = this.coerceTreeNodes(this.nzNodes);
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
        this.selectedNodes = [...(this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList())];
    }
    /**
     * @return {?}
     */
    updatePosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClearSelection($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            this.removeSelected(node, false);
        }));
        this.nzCleared.emit();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    setSearchValues($event) {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
        }));
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return (/** @type {?} */ (option.key));
    }
}
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
                        () => NzTreeSelectComponent)),
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
                styles: [`
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: auto;
      }
    `]
            }] }
];
/** @nocollapse */
NzTreeSelectComponent.ctorParameters = () => [
    { type: NzTreeSelectService },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm56LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxFQUVKLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBRWYsc0JBQXNCLEVBRXRCLFVBQVUsRUFFViw2QkFBNkIsRUFHN0IsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUUvRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsUUFBa0I7SUFDMUQsT0FBTyxRQUFR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OztJQUM5RCwrQ0FBMEU7O0lBQzFFLDRDQUF1RTs7SUFDdkUscURBQWdGOztJQUVoRiw2Q0FBeUY7O0lBQ3pGLHdDQUFrRTs7SUFDbEUsaURBQWtGOztJQUNsRixvREFBNEY7O0lBRTVGLCtDQUFnRTs7SUFDaEUsb0RBQThHOztJQUs5Ryw2Q0FBcUI7O0lBQ3JCLDRDQUFvQjs7SUFDcEIsMENBQWlCOztJQUNqQiwyQ0FBbUI7O0lBQ25CLDJDQUFnQjs7SUFDaEIsaURBQXlEOztJQUN6RCw0REFBMEM7O0lBQzFDLDhDQUFpQzs7SUFDakMsNkNBQTRCOztJQUM1QixzQ0FBcUI7O0lBRXJCLHlDQUFvRDs7SUFDcEQsMENBQW1DOztJQXFDakMsZ0RBQXVDOzs7OztJQUN2Qyx5Q0FBMkI7Ozs7O0lBQzNCLG9DQUE4Qjs7Ozs7SUFDOUIsMkNBQThCOztJQUM5Qiw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgaXNOb3ROaWwsXG4gIHNsaWRlTW90aW9uLFxuICB3YXJuRGVwcmVjYXRpb24sXG4gIHpvb21Nb3Rpb24sXG4gIElucHV0Qm9vbGVhbixcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOekZvcm1hdEVtaXRFdmVudCxcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcbiAgTnpTaXplTERTVHlwZSxcbiAgTnpUcmVlQmFzZSxcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICBOelRyZWVOb2RlLFxuICBOelRyZWVOb2RlT3B0aW9ucyxcbiAgV2l0aENvbmZpZ1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcblxuaW1wb3J0IHsgTnpUcmVlU2VsZWN0U2VydmljZSB9IGZyb20gJy4vbnotdHJlZS1zZWxlY3Quc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcbiAgcmV0dXJuIGluamVjdG9yLmdldChOelRyZWVTZWxlY3RTZXJ2aWNlKTtcbn1cblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RyZWVTZWxlY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAnbnpUcmVlU2VsZWN0JyxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uLCB6b29tTW90aW9uXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTnpUcmVlU2VsZWN0U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgICAgIHVzZUZhY3Rvcnk6IGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnksXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICduelNpemU9PT1cImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnbnpTaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIW56RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICduekFsbG93Q2xlYXInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICduek9wZW4nLFxuICAgICcoY2xpY2spJzogJ3RyaWdnZXIoKSdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBuelNob3dJY29uOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBuek5vZGVzOiBBcnJheTxOelRyZWVOb2RlIHwgTnpUcmVlTm9kZU9wdGlvbnM+ID0gW107XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOelNpemVMRFNUeXBlO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBuekV4cGFuZGVkS2V5c2AgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpEZWZhdWx0RXhwYW5kZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekV4cGFuZGVkS2V5cycgaW5zdGVhZC5gKTtcbiAgICB0aGlzLmV4cGFuZGVkS2V5cyA9IHZhbHVlO1xuICB9XG4gIGdldCBuekRlZmF1bHRFeHBhbmRlZEtleXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkS2V5cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLmV4cGFuZGVkS2V5cyA9IHZhbHVlO1xuICB9XG4gIGdldCBuekV4cGFuZGVkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRLZXlzO1xuICB9XG5cbiAgQElucHV0KCkgbnpEaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSB0cmVlUmVmOiBOelRyZWVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbiwgeyBzdGF0aWM6IHRydWUgfSkgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIEBDb250ZW50Q2hpbGQoJ256VHJlZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbnpUcmVlVGVtcGxhdGVDaGlsZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XG4gIGdldCB0cmVlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT4ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVRlbXBsYXRlIHx8IHRoaXMubnpUcmVlVGVtcGxhdGVDaGlsZDtcbiAgfVxuXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBpc0Rlc3Ryb3kgPSB0cnVlO1xuICBpc05vdEZvdW5kID0gZmFsc2U7XG4gIGlucHV0VmFsdWUgPSAnJztcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICB2YWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgfVxuXG4gIGdldCBzZWFyY2hEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubnpPcGVuID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TXVsdGlwbGUgfHwgdGhpcy5uekNoZWNrYWJsZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG56VHJlZVNlcnZpY2U6IE56VHJlZVNlbGVjdFNlcnZpY2UsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256Tm9kZXMnKSkge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gW3ZhbHVlIGFzIHN0cmluZ107XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHRyaWdnZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAoIXRoaXMubnpEaXNhYmxlZCAmJiB0aGlzLm56T3BlbikpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgICAgaWYgKHRoaXMubnpTaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmICFldmVudFRhcmdldC52YWx1ZSAmJiBrZXlDb2RlID09PSBCQUNLU1BBQ0UpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZU5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHJlbW92ZU5vZGUpO1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoe1xuICAgICAgICAgIGV2ZW50TmFtZTogJ3JlbW92ZVNlbGVjdCcsXG4gICAgICAgICAgbm9kZTogcmVtb3ZlTm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZGVkS2V5c0NoYW5nZSh2YWx1ZTogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gWy4uLnZhbHVlLmtleXMhXTtcbiAgfVxuXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkKG5vZGU6IE56VHJlZU5vZGUsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5uek11bHRpcGxlKTtcbiAgICB9XG5cbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5uelJlbW92ZWQuZW1pdChub2RlKTtcbiAgICB9XG5cbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5uelRyZWVDbGljay5waXBlKFxuICAgICAgICB0YXAoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcbiAgICAgICAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcbiAgICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xuICAgICAgICAgIHJldHVybiB0aGlzLm56Q2hlY2thYmxlID8gIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCA6ICFub2RlLmlzRGlzYWJsZWQgJiYgbm9kZS5pc1NlbGVjdGFibGU7XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdGhpcy5uekNoZWNrYWJsZSA/IHRoaXMubnpUcmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcbiAgICAgIHRoaXMubnpDbGVhcmVkLFxuICAgICAgdGhpcy5uelJlbW92ZWRcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZE5vZGVzLm1hcChub2RlID0+IG5vZGUua2V5ISk7XG4gICAgICB0aGlzLnZhbHVlID0gWy4uLnZhbHVlXTtcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaXNOb3RGb3VuZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbMF0gOiBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkTm9kZXMoaW5pdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGluaXQpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModGhpcy5uek5vZGVzKTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5pc011bHRpcGxlO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKG5vZGVzKTtcbiAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0aGlzLmlzTXVsdGlwbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi4odGhpcy5uekNoZWNrYWJsZSA/IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSldO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLm56Q2xlYXJlZC5lbWl0KCk7XG4gIH1cblxuICBzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5pc05vdEZvdW5kID0gKHRoaXMubnpTaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkgJiYgISF0aGlzLmlucHV0VmFsdWUgJiYgJGV2ZW50Lm1hdGNoZWRLZXlzIS5sZW5ndGggPT09IDA7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgfVxuXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpUcmVlTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdGlvbi5rZXkhO1xuICB9XG59XG4iXX0=