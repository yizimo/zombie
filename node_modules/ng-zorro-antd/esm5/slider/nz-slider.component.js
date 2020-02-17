/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider.component.ts
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
import { Platform } from '@angular/cdk/platform';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, shallowCopyArray, silentEvent, InputBoolean } from 'ng-zorro-antd/core';
import { isValueARange } from './nz-slider-definitions';
import { getValueTypeNotMatchError } from './nz-slider-error';
var NzSliderComponent = /** @class */ (function () {
    function NzSliderComponent(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzDefaultValue = null;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzTooltipPlacement = 'top';
        this.nzOnAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        // now for nz-slider-step
        this.isDragging = false; // Current dragging state
    }
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.handles = this.generateHandles(this.nzRange ? 2 : 1);
        this.sliderDOM = this.slider.nativeElement;
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        if (this.platform.isBrowser) {
            this.createDraggingObservables();
        }
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.setValue(val, true);
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    NzSliderComponent.prototype.onValueChange = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    NzSliderComponent.prototype.setValue = /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (value, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!this.valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    };
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    NzSliderComponent.prototype.getValue = /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        if (cloneAndSort && this.value && isValueARange(this.value)) {
            return shallowCopyArray(this.value).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a - b; }));
        }
        return (/** @type {?} */ (this.value));
    };
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    NzSliderComponent.prototype.getValueToOffset = /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueARange(normalizedValue)
            ? normalizedValue.map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return _this.valueToOffset(val); }))
            : this.valueToOffset(normalizedValue);
    };
    /**
     * Find the closest value to be activated (only for range = true).
     */
    /**
     * Find the closest value to be activated (only for range = true).
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValueIndex = /**
     * Find the closest value to be activated (only for range = true).
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        /** @type {?} */
        var value = this.getValue();
        if (isValueARange(value)) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1;
            /** @type {?} */
            var activeIndex_1 = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < (/** @type {?} */ (minimal_1))) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            }));
            this.activeValueIndex = activeIndex_1;
        }
    };
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValue = /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (isValueARange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            var newValue = shallowCopyArray((/** @type {?} */ (this.value)));
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * Update track and handles' position and length.
     */
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.updateTrackAndHandles = /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    function () {
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        var trackParts = isValueARange(offsetSorted)
            ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]]
            : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        function (handle, index) {
            handle.offset = isValueARange(offset) ? offset[index] : offset;
            handle.value = isValueARange(value) ? value[index] : value || 0;
        }));
        _a = tslib_1.__read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = tslib_1.__read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragStart = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragMove = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.onDragEnd = /**
     * @private
     * @return {?}
     */
    function () {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    };
    /**
     * Create user interactions handles.
     */
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.createDraggingObservables = /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        /** @type {?} */
        var orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof TouchEvent; })
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (/**
             * @return {?}
             */
            function () { return true; }) : _a;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.findClosestValue(position); })));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), distinctUntilChanged(), map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.findClosestValue(position); })), distinctUntilChanged(), takeUntil(source.end$));
        }));
        this.dragStart$ = merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    };
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.subscribeDrag = /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    };
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.unsubscribeDrag = /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    };
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragMoving = /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragDisabled = /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzSliderComponent.prototype.findClosestValue = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        var points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        function (point) { return Math.abs(val - point); }));
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, tslib_1.__spread(gaps)))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.valueToOffset = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return getPercent(this.nzMin, this.nzMax, value);
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderStartPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderLength = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    NzSliderComponent.prototype.cacheSliderProperty = /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.formatValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var res = value;
        if (!this.assertValueValid((/** @type {?} */ (value)))) {
            res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else {
            res = isValueARange((/** @type {?} */ (value)))
                ? ((/** @type {?} */ (value))).map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return ensureNumberInRange(val, _this.nzMin, _this.nzMax); }))
                : ensureNumberInRange((/** @type {?} */ (value)), this.nzMin, this.nzMax);
        }
        return res;
    };
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    /**
     * Check if value is valid and throw error if value-type/range not match.
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.assertValueValid = /**
     * Check if value is valid and throw error if value-type/range not match.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
            return false;
        }
        return this.assertValueTypeMatch(value);
    };
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     */
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.assertValueTypeMatch = /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return true;
        }
        else if (isValueARange(value) !== this.nzRange) {
            throw getValueTypeNotMatchError();
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @param {?} valA
     * @param {?} valB
     * @return {?}
     */
    NzSliderComponent.prototype.valuesEqual = /**
     * @private
     * @param {?} valA
     * @param {?} valB
     * @return {?}
     */
    function (valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueARange(valA) && isValueARange(valB) ? arraysEqual(valA, valB) : valA === valB;
    };
    /**
     * Show one handle's tooltip and hide others'.
     */
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    NzSliderComponent.prototype.showHandleTooltip = /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        function (handle, index) {
            handle.active = index === handleIndex;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.hideAllHandleTooltip = /**
     * @private
     * @return {?}
     */
    function () {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return (handle.active = false); }));
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    NzSliderComponent.prototype.generateHandles = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return Array(amount)
            .fill(0)
            .map((/**
         * @return {?}
         */
        function () { return ({ offset: null, value: null, active: false }); }));
    };
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    NzSliderComponent.prototype.generateMarkItems = /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    };
    NzSliderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-slider',
                    exportAs: 'nzSlider',
                    preserveWhitespaces: false,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzSliderComponent; })),
                            multi: true
                        }
                    ],
                    template: "<div #slider\n  class=\"ant-slider\"\n  [class.ant-slider-disabled]=\"nzDisabled\"\n  [class.ant-slider-vertical]=\"nzVertical\"\n  [class.ant-slider-with-marks]=\"marksArray\">\n  <div class=\"ant-slider-rail\"></div>\n  <nz-slider-track\n    [nzVertical]=\"nzVertical\"\n    [nzIncluded]=\"nzIncluded\"\n    [nzOffset]=\"track.offset\"\n    [nzLength]=\"track.length\"></nz-slider-track>\n  <nz-slider-step\n    *ngIf=\"marksArray\"\n    [nzVertical]=\"nzVertical\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"></nz-slider-step>\n  <nz-slider-handle\n    *ngFor=\"let handle of handles\"\n    [nzVertical]=\"nzVertical\"\n    [nzOffset]=\"handle.offset\"\n    [nzValue]=\"handle.value\"\n    [nzActive]=\"handle.active\"\n    [nzTipFormatter]=\"nzTipFormatter\"\n    [nzTooltipVisible]=\"nzTooltipVisible\"\n    [nzTooltipPlacement]=\"nzTooltipPlacement\"\n    ></nz-slider-handle>\n  <nz-slider-marks\n    *ngIf=\"marksArray\"\n    [nzVertical]=\"nzVertical\"\n    [nzMin]=\"nzMin\"\n    [nzMax]=\"nzMax\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"></nz-slider-marks>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzSliderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
    NzSliderComponent.propDecorators = {
        slider: [{ type: ViewChild, args: ['slider', { static: true },] }],
        nzDisabled: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzIncluded: [{ type: Input }],
        nzRange: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzMarks: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzStep: [{ type: Input }],
        nzTooltipVisible: [{ type: Input }],
        nzTooltipPlacement: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzOnAfterChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzDots", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzIncluded", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzRange", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzSliderComponent.prototype, "nzVertical", void 0);
    return NzSliderComponent;
}());
export { NzSliderComponent };
if (false) {
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSliderComponent.prototype.nzDots;
    /** @type {?} */
    NzSliderComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderComponent.prototype.nzRange;
    /** @type {?} */
    NzSliderComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipPlacement;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /** @type {?} */
    NzSliderComponent.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsWUFBWSxFQUViLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUNMLGFBQWEsRUFNZCxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlEO0lBb0RFLDJCQUFvQixHQUFzQixFQUFVLFFBQWtCO1FBQWxELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWxDN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FB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WSxFQUFFOzt5REFBNkI7SUFrWnZELHdCQUFDO0NBQUEsQUF4YUQsSUF3YUM7U0F6WlksaUJBQWlCOzs7SUFDNUIsbUNBQTBFOztJQUUxRSx1Q0FBNEM7O0lBQzVDLG1DQUFpRDs7SUFDakQsdUNBQW9EOztJQUNwRCxvQ0FBa0Q7O0lBQ2xELHVDQUFxRDs7SUFDckQsMkNBQW1EOztJQUNuRCxvQ0FBd0M7O0lBQ3hDLGtDQUFxQjs7SUFDckIsa0NBQW1COztJQUNuQixtQ0FBb0I7O0lBQ3BCLDZDQUF5RDs7SUFDekQsK0NBQTRDOztJQUM1QywyQ0FBbUQ7O0lBRW5ELDRDQUFxRTs7SUFFckUsa0NBQWlDOztJQUNqQyxzQ0FBMEI7O0lBQzFCLDZDQUF1Qzs7SUFDdkMsOENBQXdDOztJQUN4Qyw2Q0FBaUQ7O0lBQ2pELGtDQUF5Rjs7SUFDekYsb0NBQXlCOztJQUN6Qix1Q0FBa0M7O0lBQ2xDLG1DQUFnRzs7SUFDaEcsdUNBQW1COzs7OztJQUVuQix1Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFzQzs7Ozs7SUFDdEMscUNBQW9DOzs7OztJQUNwQyx1Q0FBd0M7Ozs7O0lBQ3hDLHNDQUF1Qzs7Ozs7SUFDdkMscUNBQXNDOzs7OztJQUUxQixnQ0FBOEI7Ozs7O0lBQUUscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBhcnJheXNFcXVhbCxcbiAgZW5zdXJlTnVtYmVySW5SYW5nZSxcbiAgZ2V0RWxlbWVudE9mZnNldCxcbiAgZ2V0UGVyY2VudCxcbiAgZ2V0UHJlY2lzaW9uLFxuICBzaGFsbG93Q29weUFycmF5LFxuICBzaWxlbnRFdmVudCxcbiAgSW5wdXRCb29sZWFuLFxuICBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHtcbiAgaXNWYWx1ZUFSYW5nZSxcbiAgRXh0ZW5kZWRNYXJrLFxuICBOek1hcmtzLFxuICBTbGlkZXJIYW5kbGVyLFxuICBTbGlkZXJTaG93VG9vbHRpcCxcbiAgU2xpZGVyVmFsdWVcbn0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvciB9IGZyb20gJy4vbnotc2xpZGVyLWVycm9yJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXNsaWRlcicsXG4gIGV4cG9ydEFzOiAnbnpTbGlkZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNsaWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RG90czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuek1hcmtzOiBOek1hcmtzIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWF4ID0gMTAwO1xuICBASW5wdXQoKSBuek1pbiA9IDA7XG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XG4gIEBJbnB1dCgpIG56VG9vbHRpcFZpc2libGU6IFNsaWRlclNob3dUb29sdGlwID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTbGlkZXJWYWx1ZT4oKTtcblxuICB2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsID0gbnVsbDtcbiAgc2xpZGVyRE9NOiBIVE1MRGl2RWxlbWVudDtcbiAgY2FjaGVTbGlkZXJTdGFydDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGNhY2hlU2xpZGVyTGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgYWN0aXZlVmFsdWVJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXG4gIHRyYWNrOiB7IG9mZnNldDogbnVsbCB8IG51bWJlcjsgbGVuZ3RoOiBudWxsIHwgbnVtYmVyIH0gPSB7IG9mZnNldDogbnVsbCwgbGVuZ3RoOiBudWxsIH07IC8vIFRyYWNrJ3Mgb2Zmc2V0IGFuZCBsZW5ndGhcbiAgaGFuZGxlczogU2xpZGVySGFuZGxlcltdOyAvLyBIYW5kbGVzJyBvZmZzZXRcbiAgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gfCBudWxsOyAvLyBcInN0ZXBzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xuICBib3VuZHM6IHsgbG93ZXI6IFNsaWRlclZhbHVlIHwgbnVsbDsgdXBwZXI6IFNsaWRlclZhbHVlIHwgbnVsbCB9ID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBuei1zbGlkZXItc3RlcFxuICBpc0RyYWdnaW5nID0gZmFsc2U7IC8vIEN1cnJlbnQgZHJhZ2dpbmcgc3RhdGVcblxuICBwcml2YXRlIGRyYWdTdGFydCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBkcmFnTW92ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBkcmFnRW5kJDogT2JzZXJ2YWJsZTxFdmVudD47XG4gIHByaXZhdGUgZHJhZ1N0YXJ0XzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkcmFnTW92ZV86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG4gIHByaXZhdGUgZHJhZ0VuZF86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLmdlbmVyYXRlSGFuZGxlcyh0aGlzLm56UmFuZ2UgPyAyIDogMSk7XG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmNyZWF0ZURyYWdnaW5nT2JzZXJ2YWJsZXMoKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TWFya3MsIG56UmFuZ2UgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpEaXNhYmxlZCAmJiAhbnpEaXNhYmxlZC5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQobnpEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAobnpNYXJrcyAmJiAhbnpNYXJrcy5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID8gdGhpcy5nZW5lcmF0ZU1hcmtJdGVtcyh0aGlzLm56TWFya3MpIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKG56UmFuZ2UgJiYgIW56UmFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKF92YWx1ZTogU2xpZGVyVmFsdWUpOiB2b2lkIHt9XG5cbiAgb25Ub3VjaGVkKCk6IHZvaWQge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpc1dyaXRlVmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy52YWx1ZXNFcXVhbCh0aGlzLnZhbHVlISwgdmFsdWUhKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlKGNsb25lQW5kU29ydDogYm9vbGVhbiA9IGZhbHNlKTogU2xpZGVyVmFsdWUge1xuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy52YWx1ZSAmJiBpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm4gc2hhbGxvd0NvcHlBcnJheSh0aGlzLnZhbHVlKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlITtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7XG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbHVlQVJhbmdlKG5vcm1hbGl6ZWRWYWx1ZSlcbiAgICAgID8gbm9ybWFsaXplZFZhbHVlLm1hcCh2YWwgPT4gdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCkpXG4gICAgICA6IHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGNsb3Nlc3QgdmFsdWUgdG8gYmUgYWN0aXZhdGVkIChvbmx5IGZvciByYW5nZSA9IHRydWUpLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgaWYgKGlzVmFsdWVBUmFuZ2UodmFsdWUpKSB7XG4gICAgICBsZXQgbWluaW1hbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgZ2FwOiBudW1iZXI7XG4gICAgICBsZXQgYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZ2FwID0gTWF0aC5hYnMocG9pbnRlclZhbHVlIC0gdmFsKTtcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCEpIHtcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUhKSkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBzaGFsbG93Q29weUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pO1xuICAgICAgbmV3VmFsdWVbdGhpcy5hY3RpdmVWYWx1ZUluZGV4IV0gPSBwb2ludGVyVmFsdWU7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdHJhY2sgYW5kIGhhbmRsZXMnIHBvc2l0aW9uIGFuZCBsZW5ndGguXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWUpO1xuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICBjb25zdCBvZmZzZXRTb3J0ZWQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWVTb3J0ZWQpO1xuICAgIGNvbnN0IGJvdW5kUGFydHMgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlU29ydGVkKSA/IHZhbHVlU29ydGVkIDogWzAsIHZhbHVlU29ydGVkXTtcbiAgICBjb25zdCB0cmFja1BhcnRzID0gaXNWYWx1ZUFSYW5nZShvZmZzZXRTb3J0ZWQpXG4gICAgICA/IFtvZmZzZXRTb3J0ZWRbMF0sIG9mZnNldFNvcnRlZFsxXSAtIG9mZnNldFNvcnRlZFswXV1cbiAgICAgIDogWzAsIG9mZnNldFNvcnRlZF07XG5cbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLm9mZnNldCA9IGlzVmFsdWVBUmFuZ2Uob2Zmc2V0KSA/IG9mZnNldFtpbmRleF0gOiBvZmZzZXQ7XG4gICAgICBoYW5kbGUudmFsdWUgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlKSA/IHZhbHVlW2luZGV4XSA6IHZhbHVlIHx8IDA7XG4gICAgfSk7XG5cbiAgICBbdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyXSA9IGJvdW5kUGFydHM7XG4gICAgW3RoaXMudHJhY2sub2Zmc2V0LCB0aGlzLnRyYWNrLmxlbmd0aF0gPSB0cmFja1BhcnRzO1xuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcodHJ1ZSk7XG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KCk7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHZhbHVlKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnNob3dIYW5kbGVUb29sdGlwKHRoaXMubnpSYW5nZSA/IHRoaXMuYWN0aXZlVmFsdWVJbmRleCA6IDApO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdNb3ZlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkFmdGVyQ2hhbmdlLmVtaXQodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKGZhbHNlKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkodHJ1ZSk7XG4gICAgdGhpcy5oaWRlQWxsSGFuZGxlVG9vbHRpcCgpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1c2VyIGludGVyYWN0aW9ucyBoYW5kbGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVEcmFnZ2luZ09ic2VydmFibGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyRE9NO1xuICAgIGNvbnN0IG9yaWVudEZpZWxkID0gdGhpcy5uelZlcnRpY2FsID8gJ3BhZ2VZJyA6ICdwYWdlWCc7XG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgZW5kOiAnbW91c2V1cCcsXG4gICAgICBwbHVja0tleTogW29yaWVudEZpZWxkXVxuICAgIH07XG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcbiAgICAgIHBsdWNrS2V5OiBbJ3RvdWNoZXMnLCAnMCcsIG9yaWVudEZpZWxkXSxcbiAgICAgIGZpbHRlcjogKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudFxuICAgIH07XG5cbiAgICBbbW91c2UsIHRvdWNoXS5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XG5cbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXG4gICAgICApO1xuICAgICAgc291cmNlLmVuZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIGVuZCk7XG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydCQgPSBtZXJnZShtb3VzZS5zdGFydFBsdWNrZWQkISwgdG91Y2guc3RhcnRQbHVja2VkJCEpO1xuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcbiAgICB0aGlzLmRyYWdFbmQkID0gbWVyZ2UobW91c2UuZW5kJCEsIHRvdWNoLmVuZCQhKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ1N0YXJ0JCAmJiAhdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gdGhpcy5kcmFnTW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kJCAmJiAhdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IHRoaXMuZHJhZ0VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xuICAgICAgdGhpcy5kcmFnTW92ZV8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmFnTW92aW5nKG1vdmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xuICAgIGlmIChtb3ZhYmxlKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcoWydzdGFydCddKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2xpZGVyU3RhcnQgPSB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcbiAgICBjb25zdCBzbGlkZXJMZW5ndGggPSB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICAgIGNvbnN0IHJhdGlvID0gZW5zdXJlTnVtYmVySW5SYW5nZSgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xuICAgIGNvbnN0IHZhbCA9ICh0aGlzLm56TWF4IC0gdGhpcy5uek1pbikgKiAodGhpcy5uelZlcnRpY2FsID8gMSAtIHJhdGlvIDogcmF0aW8pICsgdGhpcy5uek1pbjtcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLm56TWFya3MgPT09IG51bGwgPyBbXSA6IE9iamVjdC5rZXlzKHRoaXMubnpNYXJrcykubWFwKHBhcnNlRmxvYXQpO1xuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcbiAgICAgIGNvbnN0IGNsb3Nlc3RPbmUgPSBNYXRoLnJvdW5kKHZhbCAvIHRoaXMubnpTdGVwKSAqIHRoaXMubnpTdGVwO1xuICAgICAgcG9pbnRzLnB1c2goY2xvc2VzdE9uZSk7XG4gICAgfVxuICAgIGNvbnN0IGdhcHMgPSBwb2ludHMubWFwKHBvaW50ID0+IE1hdGguYWJzKHZhbCAtIHBvaW50KSk7XG4gICAgY29uc3QgY2xvc2VzdCA9IHBvaW50c1tnYXBzLmluZGV4T2YoTWF0aC5taW4oLi4uZ2FwcykpXTtcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDogcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRQZXJjZW50KHRoaXMubnpNaW4sIHRoaXMubnpNYXgsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyU3RhcnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5zbGlkZXJET00pO1xuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmxlZnQ7XG4gIH1cblxuICBwcml2YXRlIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlckxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/IHNsaWRlckRPTS5jbGllbnRIZWlnaHQgOiBzbGlkZXJET00uY2xpZW50V2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcbiAgICovXG4gIHByaXZhdGUgY2FjaGVTbGlkZXJQcm9wZXJ0eShyZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVTbGlkZXJTdGFydCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFZhbHVlKHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiBTbGlkZXJWYWx1ZSB7XG4gICAgbGV0IHJlcyA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5hc3NlcnRWYWx1ZVZhbGlkKHZhbHVlISkpIHtcbiAgICAgIHJlcyA9IHRoaXMubnpEZWZhdWx0VmFsdWUgPT09IG51bGwgPyAodGhpcy5uelJhbmdlID8gW3RoaXMubnpNaW4sIHRoaXMubnpNYXhdIDogdGhpcy5uek1pbikgOiB0aGlzLm56RGVmYXVsdFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlISlcbiAgICAgICAgPyAodmFsdWUgYXMgbnVtYmVyW10pLm1hcCh2YWwgPT4gZW5zdXJlTnVtYmVySW5SYW5nZSh2YWwsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpKVxuICAgICAgICA6IGVuc3VyZU51bWJlckluUmFuZ2UodmFsdWUgYXMgbnVtYmVyLCB0aGlzLm56TWluLCB0aGlzLm56TWF4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cbiAgICovXG4gIHByaXZhdGUgYXNzZXJ0VmFsdWVWYWxpZCh2YWx1ZTogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGlzTmFOKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0IHRoYXQgaWYgYHRoaXMubnpSYW5nZWAgaXMgYHRydWVgLCB2YWx1ZSBpcyBhbHNvIGEgcmFuZ2UsIHZpY2UgdmVyc2EuXG4gICAqL1xuICBwcml2YXRlIGFzc2VydFZhbHVlVHlwZU1hdGNoKHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGlzVmFsdWVBUmFuZ2UodmFsdWUpICE9PSB0aGlzLm56UmFuZ2UpIHtcbiAgICAgIHRocm93IGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2YWx1ZXNFcXVhbCh2YWxBOiBTbGlkZXJWYWx1ZSwgdmFsQjogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHZhbEEgIT09IHR5cGVvZiB2YWxCKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbHVlQVJhbmdlKHZhbEEpICYmIGlzVmFsdWVBUmFuZ2UodmFsQikgPyBhcnJheXNFcXVhbDxudW1iZXI+KHZhbEEsIHZhbEIpIDogdmFsQSA9PT0gdmFsQjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycycuXG4gICAqL1xuICBwcml2YXRlIHNob3dIYW5kbGVUb29sdGlwKGhhbmRsZUluZGV4OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGhhbmRsZS5hY3RpdmUgPSBpbmRleCA9PT0gaGFuZGxlSW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGxIYW5kbGVUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiAoaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZXJbXSB7XG4gICAgcmV0dXJuIEFycmF5KGFtb3VudClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKCgpID0+ICh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZU1hcmtJdGVtcyhtYXJrczogTnpNYXJrcyk6IEV4dGVuZGVkTWFya1tdIHwgbnVsbCB7XG4gICAgY29uc3QgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXJrcykge1xuICAgICAgY29uc3QgbWFyayA9IG1hcmtzW2tleV07XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5uek1pbiAmJiB2YWwgPD0gdGhpcy5uek1heCkge1xuICAgICAgICBtYXJrc0FycmF5LnB1c2goeyB2YWx1ZTogdmFsLCBvZmZzZXQ6IHRoaXMudmFsdWVUb09mZnNldCh2YWwpLCBjb25maWc6IG1hcmsgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXJrc0FycmF5Lmxlbmd0aCA/IG1hcmtzQXJyYXkgOiBudWxsO1xuICB9XG59XG4iXX0=