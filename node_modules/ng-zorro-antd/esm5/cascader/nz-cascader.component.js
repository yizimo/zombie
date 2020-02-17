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
var NZ_CONFIG_COMPONENT_NAME = 'cascader';
/** @type {?} */
var defaultDisplayRender = (/**
 * @param {?} labels
 * @return {?}
 */
function (labels) { return labels.join(' / '); });
var ɵ0 = defaultDisplayRender;
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(cascaderService, i18nService, nzConfigService, cdr, elementRef, renderer, noAnimation) {
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.isFocused = false;
        this.$destroy = new Subject();
        this.inputString = '';
        this.isOpening = false;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: 
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        function () {
            return this.cascaderService.nzOptions;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.cascaderService.withOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inSearchingMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cascaderService.inSearchingMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputString;
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this.inputString = inputValue;
            this.toggleSearchingMode(!!inputValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {}, _a["" + this.nzMenuClassName] = !!this.nzMenuClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {}, _a["" + this.nzColumnClassName] = !!this.nzColumnClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.cascaderService.values && this.cascaderService.values.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            // These operations would not mutate data.
            _this.checkChildren();
            _this.buildDisplayLabel();
            _this.reposition();
            _this.cdr.markForCheck();
        }));
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            _this.isLoading = loading;
        }));
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data) {
                _this.onChange([]);
                _this.nzSelect.emit(null);
                _this.nzSelectionChange.emit([]);
            }
            else {
                var option = data.option, index = data.index;
                /** @type {?} */
                var shouldClose = option.isLeaf;
                if (shouldClose) {
                    _this.delaySetMenuVisible(false);
                }
                _this.onChange(_this.cascaderService.values);
                _this.nzSelectionChange.emit(_this.cascaderService.selectedOptions);
                _this.nzSelect.emit({ option: option, index: index });
                _this.cdr.markForCheck();
            }
        }));
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.inputString = '';
            _this.dropdownWidthStyle = '';
        }));
        this.i18nService.localeChange
            .pipe(startWith(), takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setLocale();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.$destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
        if (this.nzSelect.observers.length > 0) {
            warnDeprecation("nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.");
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
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
    NzCascaderComponent.prototype.registerOnTouched = /**
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
    NzCascaderComponent.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    };
    /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (delay === void 0) { delay = 100; }
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayMenuTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = 
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cascaderService.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.cascaderService.getOptionValue(o); }));
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * @return {?}
     */
    function () {
        this.menuVisible ? this.focus() : this.blur();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * @return {?}
     */
    function () {
        this.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
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
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        /** @type {?} */
        var mouseTarget = (/** @type {?} */ (event.relatedTarget));
        /** @type {?} */
        var hostEl = this.el;
        /** @type {?} */
        var menuEl = this.menu && ((/** @type {?} */ (this.menu.nativeElement)));
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover') {
            if (!option.isLeaf) {
                this.delaySetOptionActivated(option, columnIndex, false);
            }
            else {
                this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
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
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    NzCascaderComponent.prototype.isActionTrigger = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        var option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    };
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.cascaderService.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.cascaderService.columns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
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
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.cascaderService.activatedOptions.length;
        /** @type {?} */
        var options = this.cascaderService.columns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return !o.disabled; }));
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetOptionActivated = /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    function (option, columnIndex, performSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            _this.delaySelectTimer = null;
        }), 150);
    };
    /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    NzCascaderComponent.prototype.toggleSearchingMode = /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    function (toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? this.input.nativeElement.offsetWidth + "px" : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isOptionActivated = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.reposition = /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.overlay.overlayRef.updatePosition();
            }));
        }
    };
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.checkChildren = /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    function () {
        if (this.cascaderItems) {
            this.cascaderItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.markForCheck(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.cascaderService.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.cascaderService.getOptionLabel(o); }));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.setLocale = /**
     * @private
     * @return {?}
     */
    function () {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    };
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
                            function () { return NzCascaderComponent; })),
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
                    styles: ["\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: NzCascaderService },
        { type: NzI18nService },
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLGVBQWUsRUFDZiwwQkFBMEIsRUFDMUIsWUFBWSxFQUdaLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVU1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUs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dGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIHNsaWRlTW90aW9uLFxuICB0b0FycmF5LFxuICB3YXJuRGVwcmVjYXRpb24sXG4gIERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLFxuICBJbnB1dEJvb2xlYW4sXG4gIE5nQ2xhc3NUeXBlLFxuICBOZ1N0eWxlSW50ZXJmYWNlLFxuICBOekNvbmZpZ1NlcnZpY2UsXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpDYXNjYWRlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHtcbiAgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLFxuICBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlcixcbiAgTnpDYXNjYWRlck9wdGlvbixcbiAgTnpDYXNjYWRlclNlYXJjaE9wdGlvbixcbiAgTnpDYXNjYWRlclNpemUsXG4gIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSxcbiAgTnpTaG93U2VhcmNoT3B0aW9uc1xufSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNhc2NhZGVyU2VydmljZSB9IGZyb20gJy4vbnotY2FzY2FkZXIuc2VydmljZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXNjYWRlcic7XG5jb25zdCBkZWZhdWx0RGlzcGxheVJlbmRlciA9IChsYWJlbHM6IHN0cmluZ1tdKSA9PiBsYWJlbHMuam9pbignIC8gJyk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1jYXNjYWRlciwgW256LWNhc2NhZGVyXScsXG4gIGV4cG9ydEFzOiAnbnpDYXNjYWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FzY2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FzY2FkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIE56Q2FzY2FkZXJTZXJ2aWNlXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGFiSW5kZXhdJzogJ1wiMFwiJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1sZ10nOiAnbnpTaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXNtXSc6ICduelNpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItb3Blbl0nOiAnbWVudVZpc2libGUnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci13aXRoLXZhbHVlXSc6ICchIWlucHV0VmFsdWUnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmFudC1jYXNjYWRlci1tZW51cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2UsIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1lbnU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGRyZW4oTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCkgY2FzY2FkZXJJdGVtczogUXVlcnlMaXN0PE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIG56T3B0aW9uUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SW5wdXQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QXJyb3cgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoYW5nZU9uU2VsZWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q29sdW1uQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RXhwYW5kVHJpZ2dlcjogTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snO1xuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xuICBASW5wdXQoKSBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiBOekNhc2NhZGVyU2l6ZTtcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoOiBib29sZWFuIHwgTnpTaG93U2VhcmNoT3B0aW9ucztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpNZW51U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbJ2NsaWNrJ10gYXMgTnpDYXNjYWRlclRyaWdnZXJUeXBlW107XG4gIEBJbnB1dCgpIG56Q2hhbmdlT246IChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56TG9hZERhdGE6IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuICBASW5wdXQoKVxuICBnZXQgbnpPcHRpb25zKCk6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNhc2NhZGVyU2VydmljZS5uek9wdGlvbnM7XG4gIH1cblxuICBzZXQgbnpPcHRpb25zKG9wdGlvbnM6IE56Q2FzY2FkZXJPcHRpb25bXSB8IG51bGwpIHtcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS53aXRoT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekNhc2NhZGVyT3B0aW9uW10+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIGFwaSBpcyBhIGR1cGxpY2F0aW9uIG9mIGBuZ01vZGVsQ2hhbmdlYC5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBvcHRpb246IE56Q2FzY2FkZXJPcHRpb247IGluZGV4OiBudW1iZXIgfSB8IG51bGw+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZWw6IEhUTUxFbGVtZW50O1xuICBkcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gIG1lbnVWaXNpYmxlID0gZmFsc2U7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsYWJlbFJlbmRlclRleHQ6IHN0cmluZztcbiAgbGFiZWxSZW5kZXJDb250ZXh0ID0ge307XG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TXTtcbiAgZHJvcGRvd25XaWR0aFN0eWxlOiBzdHJpbmc7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gIGxvY2FsZTogTnpDYXNjYWRlckkxOG5JbnRlcmZhY2U7XG5cbiAgcHJpdmF0ZSAkZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgaW5wdXRTdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBpc09wZW5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZWxheU1lbnVUaW1lcjogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBkZWxheVNlbGVjdFRpbWVyOiBudW1iZXIgfCBudWxsO1xuXG4gIGdldCBpblNlYXJjaGluZ01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmluU2VhcmNoaW5nTW9kZTtcbiAgfVxuXG4gIHNldCBpbnB1dFZhbHVlKGlucHV0VmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuaW5wdXRTdHJpbmcgPSBpbnB1dFZhbHVlO1xuICAgIHRoaXMudG9nZ2xlU2VhcmNoaW5nTW9kZSghIWlucHV0VmFsdWUpO1xuICB9XG5cbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dFN0cmluZztcbiAgfVxuXG4gIGdldCBtZW51Q2xzKCk6IE5nQ2xhc3NUeXBlIHtcbiAgICByZXR1cm4geyBbYCR7dGhpcy5uek1lbnVDbGFzc05hbWV9YF06ICEhdGhpcy5uek1lbnVDbGFzc05hbWUgfTtcbiAgfVxuXG4gIGdldCBtZW51Q29sdW1uQ2xzKCk6IE5nQ2xhc3NUeXBlIHtcbiAgICByZXR1cm4geyBbYCR7dGhpcy5uekNvbHVtbkNsYXNzTmFtZX1gXTogISF0aGlzLm56Q29sdW1uQ2xhc3NOYW1lIH07XG4gIH1cblxuICBwcml2YXRlIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmlucHV0VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldCBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXNjYWRlclNlcnZpY2UudmFsdWVzICYmIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IHNob3dQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISh0aGlzLmhhc0lucHV0IHx8IHRoaXMuaGFzVmFsdWUpO1xuICB9XG5cbiAgZ2V0IGNsZWFySWNvblZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpBbGxvd0NsZWFyICYmICF0aGlzLm56RGlzYWJsZWQgJiYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5oYXNJbnB1dCk7XG4gIH1cblxuICBnZXQgaXNMYWJlbFJlbmRlclRlbXBsYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMubnpMYWJlbFJlbmRlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjYXNjYWRlclNlcnZpY2U6IE56Q2FzY2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaTE4blNlcnZpY2U6IE56STE4blNlcnZpY2UsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uud2l0aENvbXBvbmVudCh0aGlzKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXInKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItcGlja2VyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzcnYgPSB0aGlzLmNhc2NhZGVyU2VydmljZTtcblxuICAgIHNydi4kcmVkcmF3LnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gVGhlc2Ugb3BlcmF0aW9ucyB3b3VsZCBub3QgbXV0YXRlIGRhdGEuXG4gICAgICB0aGlzLmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcbiAgICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBzcnYuJGxvYWRpbmcucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZShsb2FkaW5nID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gbG9hZGluZztcbiAgICB9KTtcblxuICAgIHNydi4kb3B0aW9uU2VsZWN0ZWQucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKFtdKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdC5lbWl0KG51bGwpO1xuICAgICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQoW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBvcHRpb24sIGluZGV4IH0gPSBkYXRhO1xuICAgICAgICBjb25zdCBzaG91bGRDbG9zZSA9IG9wdGlvbi5pc0xlYWY7XG4gICAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNhc2NhZGVyU2VydmljZS52YWx1ZXMpO1xuICAgICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdC5lbWl0KHsgb3B0aW9uLCBpbmRleCB9KTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzcnYuJHF1aXRTZWFyY2hpbmcucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0U3RyaW5nID0gJyc7XG4gICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9ICcnO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pMThuU2VydmljZS5sb2NhbGVDaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGUoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLm56U2VsZWN0Lm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYG56U2VsZWN0IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnpTZWxlY3Rpb25DaGFuZ2UnIGluc3RlYWQuYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnZhbHVlcyA9IHRvQXJyYXkodmFsdWUpO1xuICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnN5bmNPcHRpb25zKHRydWUpO1xuICB9XG5cbiAgZGVsYXlTZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gMTAwLCBzZXRPcGVuaW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGlmICh2aXNpYmxlICYmIHNldE9wZW5pbmcpIHtcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgdGhpcy5tZW51VmlzaWJsZSA9PT0gdmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc3luY09wdGlvbnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1lbnVWaXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheU1lbnVUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheU1lbnVUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlNZW51VGltZXIpO1xuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XG4gICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcbiAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5jbGVhcigpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRTdWJtaXRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmNhc2NhZGVyU2VydmljZS5nZXRPcHRpb25WYWx1ZShvKSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmZvY3VzKCk7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuYmx1cigpO1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51VmlzaWJsZSA/IHRoaXMuZm9jdXMoKSA6IHRoaXMuYmx1cigpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoXG4gICAgICBrZXlDb2RlICE9PSBET1dOX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBVUF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gTEVGVF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gUklHSFRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IEVOVEVSICYmXG4gICAgICBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiZcbiAgICAgIGtleUNvZGUgIT09IEVTQ0FQRVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51LlxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSAmJiBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiYga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRNZW51VmlzaWJsZSh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHRoZXNlIGtleXMgd29yayBhcyBkZWZhdWx0IGluIHNlYXJjaGluZyBtb2RlLlxuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSAmJiAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW50ZXJhY3Qgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIGlmICh0aGlzLm1lbnVWaXNpYmxlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24oZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIHRoaXMub25FbnRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25UcmlnZ2VyQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdjbGljaycpKSB7XG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoIXRoaXMubWVudVZpc2libGUsIDEwMCk7XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25UcmlnZ2VyTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICF0aGlzLmlzQWN0aW9uVHJpZ2dlcignaG92ZXInKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSh0cnVlLCB0aGlzLm56TW91c2VFbnRlckRlbGF5LCB0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxuICBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAhdGhpcy5tZW51VmlzaWJsZSB8fCB0aGlzLmlzT3BlbmluZyB8fCAhdGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBob3N0RWwgPSB0aGlzLmVsO1xuICAgIGNvbnN0IG1lbnVFbCA9IHRoaXMubWVudSAmJiAodGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIGlmIChob3N0RWwuY29udGFpbnMobW91c2VUYXJnZXQpIHx8IChtZW51RWwgJiYgbWVudUVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLm56TW91c2VMZWF2ZURlbGF5KTtcbiAgfVxuXG4gIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICBpZiAoIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgICAgdGhpcy5kZWxheVNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25EZWFjdGl2YXRlZFNpbmNlQ29sdW1uKGNvbHVtbkluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBfY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcHRpb25DbGljayhvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlXG4gICAgICA/IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbiBhcyBOekNhc2NhZGVyU2VhcmNoT3B0aW9uKVxuICAgICAgOiB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGlzQWN0aW9uVHJpZ2dlcihhY3Rpb246ICdjbGljaycgfCAnaG92ZXInKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gJ3N0cmluZydcbiAgICAgID8gdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09IGFjdGlvblxuICAgICAgOiB0aGlzLm56VHJpZ2dlckFjdGlvbi5pbmRleE9mKGFjdGlvbikgIT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkVudGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4XTtcbiAgICBpZiAob3B0aW9uICYmICFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5TZWFyY2hpbmdNb2RlXG4gICAgICAgID8gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uIGFzIE56Q2FzY2FkZXJTZWFyY2hPcHRpb24pXG4gICAgICAgIDogdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVVwT3JEb3duKGlzVXA6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmNvbHVtbnNbY29sdW1uSW5kZXhdIHx8IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikge1xuICAgICAgLy8gTm90IHNlbGVjdGVkIG9wdGlvbnMgaW4gdGhpcyBjb2x1bW5cbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGFjdGl2ZU9wdGlvbik7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0T3B0aW9uID0gb3B0aW9uc1tuZXh0SW5kZXhdO1xuICAgICAgaWYgKCFuZXh0T3B0aW9uIHx8IG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuYWN0aXZhdGVkT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIG9wdGlvbnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgbGFzdCBvbmVcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNhc2NhZGVyU2VydmljZS5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2UuY29sdW1uc1tsZW5ndGhdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xuICAgICAgaWYgKG5leHRPcHQpIHtcbiAgICAgICAgdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHQsIGxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5U2VsZWN0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlTZWxlY3RUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlTZWxlY3RUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlTZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBwZXJmb3JtU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcbiAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCBwZXJmb3JtU2VsZWN0KTtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XG4gICAgfSwgMTUwKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlU2VhcmNoaW5nTW9kZSh0b1NlYXJjaGluZzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmluU2VhcmNoaW5nTW9kZSAhPT0gdG9TZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMuY2FzY2FkZXJTZXJ2aWNlLnRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmcpO1xuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSB0b1NlYXJjaGluZyA/IGAke3RoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGAgOiAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XG4gICAgICB0aGlzLmNhc2NhZGVyU2VydmljZS5wcmVwYXJlU2VhcmNoT3B0aW9ucyh0aGlzLmlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuY2FzY2FkZXJTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbnNbaW5kZXhdO1xuICAgIHJldHVybiBhY3RpdmVPcHQgPT09IG9wdGlvbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuYmx1cigpO1xuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJyA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgaWYgKHRoaXMuZHJvcERvd25Qb3NpdGlvbiAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvc2l0aW9uIHRoZSBjYXNjYWRlciBwYW5lbC4gV2hlbiBhIG1lbnUgb3BlbnMsIHRoZSBjYXNjYWRlciBleHBhbmRzXG4gICAqIGFuZCBtYXkgZXhjZWVkIHRoZSBib3VuZGFyeSBvZiBicm93c2VyJ3Mgd2luZG93LlxuICAgKi9cbiAgcHJpdmF0ZSByZXBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5tZW51VmlzaWJsZSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIGNhc2NhZGVyIG9wdGlvbnMgaXMgY2hhbmdlZCwgYSBjaGlsZCBuZWVkcyB0byBrbm93IHRoYXQgaXQgc2hvdWxkIHJlLXJlbmRlci5cbiAgICovXG4gIHByaXZhdGUgY2hlY2tDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXNjYWRlckl0ZW1zKSB7XG4gICAgICB0aGlzLmNhc2NhZGVySXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0ubWFya0ZvckNoZWNrKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaXNwbGF5TGFiZWwoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5jYXNjYWRlclNlcnZpY2Uuc2VsZWN0ZWRPcHRpb25zO1xuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5jYXNjYWRlclNlcnZpY2UuZ2V0T3B0aW9uTGFiZWwobykpO1xuXG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4blNlcnZpY2UuZ2V0TG9jYWxlRGF0YSgnZ2xvYmFsJyk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==