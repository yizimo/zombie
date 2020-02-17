/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader.component.ts
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
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, HostListener, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { slideMotion, toArray, warnDeprecation, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzConfigService, NzNoAnimationDirective, WithConfig } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderService } from './nz-cascader.service';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'cascader';
/** @type {?} */
const defaultDisplayRender = (/**
 * @param {?} labels
 * @return {?}
 */
(labels) => labels.join(' / '));
const ɵ0 = defaultDisplayRender;
export class NzCascaderComponent {
    /**
     * @param {?} cascaderService
     * @param {?} i18nService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(cascaderService, i18nService, nzConfigService, cdr, elementRef, renderer, noAnimation) {
        this.cascaderService = cascaderService;
        this.i18nService = i18nService;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzOptionRender = null;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzMouseEnterDelay = 150; // ms
        // ms
        this.nzMouseLeaveDelay = 150; // ms
        // ms
        this.nzTriggerAction = (/** @type {?} */ (['click']));
        this.nzVisibleChange = new EventEmitter();
        this.nzSelectionChange = new EventEmitter();
        /**
         * @deprecated 9.0.0. This api is a duplication of `ngModelChange`.
         */
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.isFocused = false;
        this.$destroy = new Subject();
        this.inputString = '';
        this.isOpening = false;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    get nzOptions() {
        return this.cascaderService.nzOptions;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set nzOptions(options) {
        this.cascaderService.withOptions(options);
    }
    /**
     * @return {?}
     */
    get inSearchingMode() {
        return this.cascaderService.inSearchingMode;
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this.inputString = inputValue;
        this.toggleSearchingMode(!!inputValue);
    }
    /**
     * @return {?}
     */
    get inputValue() {
        return this.inputString;
    }
    /**
     * @return {?}
     */
    get menuCls() {
        return { [`${this.nzMenuClassName}`]: !!this.nzMenuClassName };
    }
    /**
     * @return {?}
     */
    get menuColumnCls() {
        return { [`${this.nzColumnClassName}`]: !!this.nzColumnClassName };
    }
    /**
     * @private
     * @return {?}
     */
    get hasInput() {
        return !!this.inputValue;
    }
    /**
     * @private
     * @return {?}
     */
    get hasValue() {
        return this.cascaderService.values && this.cascaderService.values.length > 0;
    }
    /**
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    /**
     * @return {?}
     */
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    /**
     * @return {?}
     */
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            // These operations would not mutate data.
            this.checkChildren();
            this.buildDisplayLabel();
            this.reposition();
            this.cdr.markForCheck();
        }));
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        loading => {
            this.isLoading = loading;
        }));
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (!data) {
                this.onChange([]);
                this.nzSelect.emit(null);
                this.nzSelectionChange.emit([]);
            }
            else {
                const { option, index } = data;
                /** @type {?} */
                const shouldClose = option.isLeaf;
                if (shouldClose) {
                    this.delaySetMenuVisible(false);
                }
                this.onChange(this.cascaderService.values);
                this.nzSelectionChange.emit(this.cascaderService.selectedOptions);
                this.nzSelect.emit({ option, index });
                this.cdr.markForCheck();
            }
        }));
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this.inputString = '';
            this.dropdownWidthStyle = '';
        }));
        this.i18nService.localeChange
            .pipe(startWith(), takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.setLocale();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
        if (this.nzSelect.observers.length > 0) {
            warnDeprecation(`nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.`);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
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
    writeValue(value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    }
    /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay = 100, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setMenuVisible(visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    clearSelection(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    }
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    getSubmitValue() {
        return this.cascaderService.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.cascaderService.getOptionValue(o)));
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    /**
     * @return {?}
     */
    handleInputBlur() {
        this.menuVisible ? this.focus() : this.blur();
    }
    /**
     * @return {?}
     */
    handleInputFocus() {
        this.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    }
    /**
     * @return {?}
     */
    onTriggerClick() {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    }
    /**
     * @return {?}
     */
    onTriggerMouseEnter() {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        /** @type {?} */
        const mouseTarget = (/** @type {?} */ (event.relatedTarget));
        /** @type {?} */
        const hostEl = this.el;
        /** @type {?} */
        const menuEl = this.menu && ((/** @type {?} */ (this.menu.nativeElement)));
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseEnter(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover') {
            if (!option.isLeaf) {
                this.delaySetOptionActivated(option, columnIndex, false);
            }
            else {
                this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseLeave(option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionClick(option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.inSearchingMode
            ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
            : this.cascaderService.setOptionActivated(option, columnIndex, true);
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    }
    /**
     * @private
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        const option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    }
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.cascaderService.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.cascaderService.columns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
        let nextIndex = -1;
        if (!activeOption) {
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.cascaderService.activatedOptions.length;
        /** @type {?} */
        const options = this.cascaderService.columns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            o => !o.disabled));
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    delaySetOptionActivated(option, columnIndex, performSelect) {
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            this.delaySelectTimer = null;
        }), 150);
    }
    /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? `${this.input.nativeElement.offsetWidth}px` : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isOptionActivated(option, index) {
        /** @type {?} */
        const activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    reposition() {
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.overlay.overlayRef.updatePosition();
            }));
        }
    }
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    checkChildren() {
        if (this.cascaderItems) {
            this.cascaderItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.markForCheck()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    buildDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.cascaderService.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.cascaderService.getOptionLabel(o)));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setLocale() {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    }
}
NzCascaderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-cascader, [nz-cascader]',
                exportAs: 'nzCascader',
                preserveWhitespaces: false,
                template: "<div\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  #trigger>\n  <div *ngIf=\"nzShowInput\">\n    <input\n      #input\n      nz-input\n      class=\"ant-cascader-input\"\n      [class.ant-cascader-input-disabled]=\"nzDisabled\"\n      [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\n      [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\n      [attr.autoComplete]=\"'off'\"\n      [attr.placeholder]=\"showPlaceholder ? (nzPlaceHolder || locale?.placeholder ) : null\"\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n      [readonly]=\"!nzShowSearch\"\n      [disabled]=\"nzDisabled\"\n      [nzSize]=\"nzSize\"\n      [(ngModel)]=\"inputValue\"\n      (blur)=\"handleInputBlur()\"\n      (focus)=\"handleInputFocus()\"\n      (change)=\"$event.stopPropagation()\">\n    <i *ngIf=\"clearIconVisible\"\n      nz-icon\n      nzType=\"close-circle\"\n      nzTheme=\"fill\"\n      class=\"ant-cascader-picker-clear\"\n      (click)=\"clearSelection($event)\"></i>\n    <i *ngIf=\"nzShowArrow && !isLoading\"\n      nz-icon\n      nzType=\"down\"\n      class=\"ant-cascader-picker-arrow\"\n      [class.ant-cascader-picker-arrow-expand]=\"menuVisible\">\n    </i>\n    <i *ngIf=\"isLoading\" nz-icon nzType=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\n    <span\n      class=\"ant-cascader-picker-label\"\n      [class.ant-cascader-show-search]=\"!!nzShowSearch\"\n      [class.ant-focusd]=\"!!nzShowSearch && isFocused && !inputValue\">\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\n      </ng-template>\n    </span>\n  </div>\n  <ng-content></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  (backdropClick)=\"closeMenu()\"\n  (detach)=\"closeMenu()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\n  <div\n    #menu\n    class=\"ant-cascader-menus\"\n    *ngIf=\"nzOptions && nzOptions.length || inSearchingMode\"\n    [class.ant-cascader-menus-hidden]=\"!menuVisible\"\n    [ngClass]=\"menuCls\"\n    [ngStyle]=\"nzMenuStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\n    <ul *ngFor=\"let options of cascaderService.columns; let i = index;\" class=\"ant-cascader-menu\"\n      [ngClass]=\"menuColumnCls\"\n      [style.height]=\"inSearchingMode && !cascaderService.columns[0].length ? 'auto': ''\"\n      [style.width]=\"dropdownWidthStyle\">\n      <li\n        nz-cascader-option\n        *ngFor=\"let option of options\"\n        [columnIndex]=\"i\"\n        [nzLabelProperty]=\"nzLabelProperty\"\n        [optionTemplate]=\"nzOptionRender\"\n        [activated]=\"isOptionActivated(option, i)\"\n        [highlightText]=\"inSearchingMode ? inputValue : ''\"\n        [option]=\"option\"\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\n        (click)=\"onOptionClick(option, i, $event)\">\n      </li>\n      <li *ngIf=\"inSearchingMode && !cascaderService.columns[0].length\"\n        class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\n        <nz-embed-empty [nzComponentName]=\"'cascader'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n",
                animations: [slideMotion],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzCascaderComponent)),
                        multi: true
                    },
                    NzCascaderService
                ],
                host: {
                    '[attr.tabIndex]': '"0"',
                    '[class.ant-cascader-lg]': 'nzSize === "large"',
                    '[class.ant-cascader-sm]': 'nzSize === "small"',
                    '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                    '[class.ant-cascader-picker-open]': 'menuVisible',
                    '[class.ant-cascader-picker-with-value]': '!!inputValue',
                    '[class.ant-cascader-focused]': 'isFocused'
                },
                styles: [`
      .ant-cascader-menus {
        margin-top: 4px;
        margin-bottom: 4px;
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
      }
    `]
            }] }
];
/** @nocollapse */
NzCascaderComponent.ctorParameters = () => [
    { type: NzCascaderService },
    { type: NzI18nService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzCascaderComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: false },] }],
    menu: [{ type: ViewChild, args: ['menu', { static: false },] }],
    overlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    cascaderItems: [{ type: ViewChildren, args: [NzCascaderOptionComponent,] }],
    nzOptionRender: [{ type: Input }],
    nzShowInput: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzChangeOnSelect: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzColumnClassName: [{ type: Input }],
    nzExpandTrigger: [{ type: Input }],
    nzValueProperty: [{ type: Input }],
    nzLabelRender: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzMenuClassName: [{ type: Input }],
    nzMenuStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzTriggerAction: [{ type: Input }],
    nzChangeOn: [{ type: Input }],
    nzLoadData: [{ type: Input }],
    nzOptions: [{ type: Input }],
    nzVisibleChange: [{ type: Output }],
    nzSelectionChange: [{ type: Output }],
    nzSelect: [{ type: Output }],
    nzClear: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onTriggerClick: [{ type: HostListener, args: ['click',] }],
    onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowInput", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzShowArrow", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCascaderComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzCascaderComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzCascaderComponent.prototype.input;
    /** @type {?} */
    NzCascaderComponent.prototype.menu;
    /** @type {?} */
    NzCascaderComponent.prototype.overlay;
    /** @type {?} */
    NzCascaderComponent.prototype.cascaderItems;
    /** @type {?} */
    NzCascaderComponent.prototype.nzOptionRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowInput;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOnSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCascaderComponent.prototype.nzColumnClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzExpandTrigger;
    /** @type {?} */
    NzCascaderComponent.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSize;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzTriggerAction;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOn;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLoadData;
    /** @type {?} */
    NzCascaderComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelectionChange;
    /**
     * @deprecated 9.0.0. This api is a duplication of `ngModelChange`.
     * @type {?}
     */
    NzCascaderComponent.prototype.nzSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzClear;
    /** @type {?} */
    NzCascaderComponent.prototype.el;
    /** @type {?} */
    NzCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    NzCascaderComponent.prototype.isLoading;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    NzCascaderComponent.prototype.onChange;
    /** @type {?} */
    NzCascaderComponent.prototype.onTouched;
    /** @type {?} */
    NzCascaderComponent.prototype.positions;
    /** @type {?} */
    NzCascaderComponent.prototype.dropdownWidthStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.isFocused;
    /** @type {?} */
    NzCascaderComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.$destroy;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.inputString;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.isOpening;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.delayMenuTimer;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.delaySelectTimer;
    /** @type {?} */
    NzCascaderComponent.prototype.cascaderService;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.i18nService;
    /** @type {?} */
    NzCascaderComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.cdr;
    /** @type {?} */
    NzCascaderComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLGVBQWUsRUFDZiwwQkFBMEIsRUFDMUIsWUFBWSxFQUdaLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVU1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUs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LCtDQUE0Qjs7SUFDNUIsMENBQW9COztJQUNwQix3Q0FBa0I7O0lBQ2xCLDhDQUF3Qjs7SUFDeEIsaURBQXdCOztJQUN4Qix1Q0FBOEI7O0lBQzlCLHdDQUErQjs7SUFDL0Isd0NBQXNFOztJQUN0RSxpREFBMkI7O0lBQzNCLHdDQUFrQjs7SUFFbEIscUNBQWdDOzs7OztJQUVoQyx1Q0FBdUM7Ozs7O0lBQ3ZDLDBDQUF5Qjs7Ozs7SUFDekIsd0NBQTBCOzs7OztJQUMxQiw2Q0FBc0M7Ozs7O0lBQ3RDLCtDQUF3Qzs7SUE0Q3RDLDhDQUF5Qzs7Ozs7SUFDekMsMENBQWtDOztJQUNsQyw4Q0FBdUM7Ozs7O0lBQ3ZDLGtDQUE4Qjs7SUFHOUIsMENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBzbGlkZU1vdGlvbixcbiAgdG9BcnJheSxcbiAgd2FybkRlcHJlY2F0aW9uLFxuICBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyxcbiAgSW5wdXRCb29sZWFuLFxuICBOZ0NsYXNzVHlwZSxcbiAgTmdTdHlsZUludGVyZmFjZSxcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICBXaXRoQ29uZmlnXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FzY2FkZXJJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7XG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcbiAgTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIsXG4gIE56Q2FzY2FkZXJPcHRpb24sXG4gIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24sXG4gIE56Q2FzY2FkZXJTaXplLFxuICBOekNhc2NhZGVyVHJpZ2dlclR5cGUsXG4gIE56U2hvd1NlYXJjaE9wdGlvbnNcbn0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpDYXNjYWRlclNlcnZpY2UgfSBmcm9tICcuL256LWNhc2NhZGVyLnNlcnZpY2UnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY2FzY2FkZXInO1xuY29uc3QgZGVmYXVsdERpc3BsYXlSZW5kZXIgPSAobGFiZWxzOiBzdHJpbmdbXSkgPT4gbGFiZWxzLmpvaW4oJyAvICcpO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotY2FzY2FkZXIsIFtuei1jYXNjYWRlcl0nLFxuICBleHBvcnRBczogJ256Q2FzY2FkZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhc2NhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhc2NhZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBOekNhc2NhZGVyU2VydmljZVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYkluZGV4XSc6ICdcIjBcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbGddJzogJ256U2l6ZSA9PT0gXCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1zbV0nOiAnbnpTaXplID09PSBcInNtYWxsXCInLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLW9wZW5dJzogJ21lbnVWaXNpYmxlJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItd2l0aC12YWx1ZV0nOiAnISFpbnB1dFZhbHVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5hbnQtY2FzY2FkZXItbWVudXMge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWVudScsIHsgc3RhdGljOiBmYWxzZSB9KSBtZW51OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkcmVuKE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQpIGNhc2NhZGVySXRlbXM6IFF1ZXJ5TGlzdDxOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBuek9wdGlvblJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56Q2FzY2FkZXJPcHRpb247IGluZGV4OiBudW1iZXIgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0lucHV0ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGFuZ2VPblNlbGVjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNvbHVtbkNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekV4cGFuZFRyaWdnZXI6IE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJztcbiAgQElucHV0KCkgbnpWYWx1ZVByb3BlcnR5ID0gJ3ZhbHVlJztcbiAgQElucHV0KCkgbnpMYWJlbFJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpDYXNjYWRlclNpemU7XG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaDogYm9vbGVhbiB8IE56U2hvd1NlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbnpNZW51Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56TWVudVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xuICBASW5wdXQoKSBuelRyaWdnZXJBY3Rpb246IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSB8IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdID0gWydjbGljayddIGFzIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdO1xuICBASW5wdXQoKSBuekNoYW5nZU9uOiAob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvYWREYXRhOiAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbiAgQElucHV0KClcbiAgZ2V0IG56T3B0aW9ucygpOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UubnpPcHRpb25zO1xuICB9XG5cbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uud2l0aE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpDYXNjYWRlck9wdGlvbltdPigpO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBhcGkgaXMgYSBkdXBsaWNhdGlvbiBvZiBgbmdNb2RlbENoYW5nZWAuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHsgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uOyBpbmRleDogbnVtYmVyIH0gfCBudWxsPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xuICBtZW51VmlzaWJsZSA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XG4gIGxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XG4gIGRyb3Bkb3duV2lkdGhTdHlsZTogc3RyaW5nO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICBsb2NhbGU6IE56Q2FzY2FkZXJJMThuSW50ZXJmYWNlO1xuXG4gIHByaXZhdGUgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGlucHV0U3RyaW5nID0gJyc7XG4gIHByaXZhdGUgaXNPcGVuaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZGVsYXlNZW51VGltZXI6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjogbnVtYmVyIHwgbnVsbDtcblxuICBnZXQgaW5TZWFyY2hpbmdNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5pblNlYXJjaGluZ01vZGU7XG4gIH1cblxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0U3RyaW5nID0gaW5wdXRWYWx1ZTtcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaGluZ01vZGUoISFpbnB1dFZhbHVlKTtcbiAgfVxuXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRTdHJpbmc7XG4gIH1cblxuICBnZXQgbWVudUNscygpOiBOZ0NsYXNzVHlwZSB7XG4gICAgcmV0dXJuIHsgW2Ake3RoaXMubnpNZW51Q2xhc3NOYW1lfWBdOiAhIXRoaXMubnpNZW51Q2xhc3NOYW1lIH07XG4gIH1cblxuICBnZXQgbWVudUNvbHVtbkNscygpOiBOZ0NsYXNzVHlwZSB7XG4gICAgcmV0dXJuIHsgW2Ake3RoaXMubnpDb2x1bW5DbGFzc05hbWV9YF06ICEhdGhpcy5uekNvbHVtbkNsYXNzTmFtZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaGFzSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcyAmJiB0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc1ZhbHVlKTtcbiAgfVxuXG4gIGdldCBjbGVhckljb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QWxsb3dDbGVhciAmJiAhdGhpcy5uekRpc2FibGVkICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuaGFzSW5wdXQpO1xuICB9XG5cbiAgZ2V0IGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLm56TGFiZWxSZW5kZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2FzY2FkZXJTZXJ2aWNlOiBOekNhc2NhZGVyU2VydmljZSxcbiAgICBwcml2YXRlIGkxOG5TZXJ2aWNlOiBOekkxOG5TZXJ2aWNlLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLndpdGhDb21wb25lbnQodGhpcyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyJyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhc2NhZGVyLXBpY2tlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc3J2ID0gdGhpcy5jYXNjYWRlclNlcnZpY2U7XG5cbiAgICBzcnYuJHJlZHJhdy5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIFRoZXNlIG9wZXJhdGlvbnMgd291bGQgbm90IG11dGF0ZSBkYXRhLlxuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuKCk7XG4gICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgc3J2LiRsb2FkaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUobG9hZGluZyA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmc7XG4gICAgfSk7XG5cbiAgICBzcnYuJG9wdGlvblNlbGVjdGVkLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShbXSk7XG4gICAgICAgIHRoaXMubnpTZWxlY3QuZW1pdChudWxsKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgb3B0aW9uLCBpbmRleCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ2xvc2UgPSBvcHRpb24uaXNMZWFmO1xuICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXggfSk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3J2LiRxdWl0U2VhcmNoaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dFN0cmluZyA9ICcnO1xuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMuaTE4blNlcnZpY2UubG9jYWxlQ2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5uelNlbGVjdC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKGBuelNlbGVjdCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256U2VsZWN0aW9uQ2hhbmdlJyBpbnN0ZWFkLmApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMgPSB0b0FycmF5KHZhbHVlKTtcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zeW5jT3B0aW9ucyh0cnVlKTtcbiAgfVxuXG4gIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IDEwMCwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8IHRoaXMubWVudVZpc2libGUgPT09IHZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnN5bmNPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGVsYXlNZW51VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlNZW51VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5TWVudVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9ICcnO1xuICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0ge307XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2UuY2xlYXIoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0U3VibWl0VmFsdWUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5jYXNjYWRlclNlcnZpY2UuZ2V0T3B0aW9uVmFsdWUobykpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5mb2N1cygpO1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmJsdXIoKTtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMubWVudVZpc2libGUgPyB0aGlzLmZvY3VzKCkgOiB0aGlzLmJsdXIoKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKFxuICAgICAga2V5Q29kZSAhPT0gRE9XTl9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gVVBfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IExFRlRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBFTlRFUiAmJlxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVzcyBhbnkga2V5cyBhYm92ZSB0byByZW9wZW4gbWVudS5cbiAgICBpZiAoIXRoaXMubWVudVZpc2libGUgJiYga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmIGtleUNvZGUgIT09IEVTQ0FQRSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0TWVudVZpc2libGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSB0aGVzZSBrZXlzIHdvcmsgYXMgZGVmYXVsdCBpbiBzZWFyY2hpbmcgbW9kZS5cbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUgJiYgKGtleUNvZGUgPT09IEJBQ0tTUEFDRSB8fCBrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludGVyYWN0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICB0aGlzLm9uRW50ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uVHJpZ2dlckNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTaG93U2VhcmNoKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQWN0aW9uVHJpZ2dlcignY2xpY2snKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKCF0aGlzLm1lbnVWaXNpYmxlLCAxMDApO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uVHJpZ2dlck1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAhdGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUodHJ1ZSwgdGhpcy5uek1vdXNlRW50ZXJEZWxheSwgdHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgIXRoaXMubWVudVZpc2libGUgfHwgdGhpcy5pc09wZW5pbmcgfHwgIXRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb3VzZVRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaG9zdEVsID0gdGhpcy5lbDtcbiAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgKHRoaXMubWVudS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gIH1cblxuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgaWYgKCFvcHRpb24uaXNMZWFmKSB7XG4gICAgICAgIHRoaXMuZGVsYXlTZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25PcHRpb25Nb3VzZUxlYXZlKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgX2NvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XG4gICAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICB0aGlzLmluU2VhcmNoaW5nTW9kZVxuICAgICAgPyB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRTZWFyY2hPcHRpb25TZWxlY3RlZChvcHRpb24gYXMgTnpDYXNjYWRlclNlYXJjaE9wdGlvbilcbiAgICAgIDogdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGlvblRyaWdnZXIoYWN0aW9uOiAnY2xpY2snIHwgJ2hvdmVyJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnXG4gICAgICA/IHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSBhY3Rpb25cbiAgICAgIDogdGhpcy5uelRyaWdnZXJBY3Rpb24uaW5kZXhPZihhY3Rpb24pICE9PSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgb25FbnRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF07XG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZVxuICAgICAgICA/IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbiBhcyBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKVxuICAgICAgICA6IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVVcE9yRG93bihpc1VwOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbY29sdW1uSW5kZXhdO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5jb2x1bW5zW2NvbHVtbkluZGV4XSB8fCBbXTtcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XG4gICAgaWYgKCFhY3RpdmVPcHRpb24pIHtcbiAgICAgIC8vIE5vdCBzZWxlY3RlZCBvcHRpb25zIGluIHRoaXMgY29sdW1uXG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbGVuZ3RoIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihhY3RpdmVPcHRpb24pO1xuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbmV4dEluZGV4IC0gMSA6IG5leHRJbmRleCArIDE7XG4gICAgICBpZiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dE9wdGlvbiA9IG9wdGlvbnNbbmV4dEluZGV4XTtcbiAgICAgIGlmICghbmV4dE9wdGlvbiB8fCBuZXh0T3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZUxlZnQoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBvcHRpb25zLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGxhc3Qgb25lXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlUmlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGg7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbbGVuZ3RoXTtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dE9wdCA9IG9wdGlvbnMuZmluZChvID0+ICFvLmRpc2FibGVkKTtcbiAgICAgIGlmIChuZXh0T3B0KSB7XG4gICAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0LCBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5U2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgcGVyZm9ybVNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgcGVyZm9ybVNlbGVjdCk7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xuICAgIH0sIDE1MCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pblNlYXJjaGluZ01vZGUgIT09IHRvU2VhcmNoaW5nKSB7XG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS50b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nKTtcbiAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gdG9TZWFyY2hpbmcgPyBgJHt0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgIDogJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSkge1xuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2UucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5pbnB1dFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpc09wdGlvbkFjdGl2YXRlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBhY3RpdmVPcHQgPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zW2luZGV4XTtcbiAgICByZXR1cm4gYWN0aXZlT3B0ID09PSBvcHRpb247XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ2JvdHRvbScgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgIGlmICh0aGlzLmRyb3BEb3duUG9zaXRpb24gIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwb3NpdGlvbiB0aGUgY2FzY2FkZXIgcGFuZWwuIFdoZW4gYSBtZW51IG9wZW5zLCB0aGUgY2FzY2FkZXIgZXhwYW5kc1xuICAgKiBhbmQgbWF5IGV4Y2VlZCB0aGUgYm91bmRhcnkgb2YgYnJvd3NlcidzIHdpbmRvdy5cbiAgICovXG4gIHByaXZhdGUgcmVwb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMubWVudVZpc2libGUpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBjYXNjYWRlciBvcHRpb25zIGlzIGNoYW5nZWQsIGEgY2hpbGQgbmVlZHMgdG8ga25vdyB0aGF0IGl0IHNob3VsZCByZS1yZW5kZXIuXG4gICAqL1xuICBwcml2YXRlIGNoZWNrQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FzY2FkZXJJdGVtcykge1xuICAgICAgdGhpcy5jYXNjYWRlckl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLm1hcmtGb3JDaGVjaygpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucztcbiAgICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmdldE9wdGlvbkxhYmVsKG8pKTtcblxuICAgIGlmICh0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7IGxhYmVscywgc2VsZWN0ZWRPcHRpb25zIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gZGVmYXVsdERpc3BsYXlSZW5kZXIuY2FsbCh0aGlzLCBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG5TZXJ2aWNlLmdldExvY2FsZURhdGEoJ2dsb2JhbCcpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=