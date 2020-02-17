/**
 * @fileoverview added by tsickle
 * Generated from: nz-mention.component.ts
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
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { getCaretCoordinates, getMentions, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, InputBoolean } from 'ng-zorro-antd/core';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionService } from './nz-mention.service';
/**
 * @record
 */
export function MentionOnSearchTypes() { }
if (false) {
    /** @type {?} */
    MentionOnSearchTypes.prototype.value;
    /** @type {?} */
    MentionOnSearchTypes.prototype.prefix;
}
/**
 * @record
 */
export function Mention() { }
if (false) {
    /** @type {?} */
    Mention.prototype.startPos;
    /** @type {?} */
    Mention.prototype.endPos;
    /** @type {?} */
    Mention.prototype.mention;
}
var NzMentionComponent = /** @class */ (function () {
    function NzMentionComponent(ngDocument, // tslint:disable-line:no-any
    changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; }); // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.activeIndex = -1;
        this.previousValue = null;
    }
    Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.suggestionTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.trigger.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzMentionService.triggerChanged().subscribe((/**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            _this.trigger = trigger;
            _this.bindTriggerEvents();
            _this.closeDropdown();
            _this.overlayRef = null;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.getMentions = /**
     * @return {?}
     */
    function () {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    };
    /**
     * @param {?} suggestion
     * @return {?}
     */
    NzMentionComponent.prototype.selectSuggestion = /**
     * @param {?} suggestion
     * @return {?}
     */
    function (suggestion) {
        /** @type {?} */
        var value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleInput = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && keyCode === UP_ARROW) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && keyCode === DOWN_ARROW) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.handleClick = /**
     * @private
     * @return {?}
     */
    function () {
        this.resetDropdown();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.bindTriggerEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.trigger.onInput.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleInput(e); }));
        this.trigger.onKeydown.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleKeydown(e); }));
        this.trigger.onClick.subscribe((/**
         * @return {?}
         */
        function () { return _this.handleClick(); }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzMentionComponent.prototype.suggestionsFilter = /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        var _this = this;
        /** @type {?} */
        var suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: (/** @type {?} */ (this.cursorMention)).substring(1),
                prefix: (/** @type {?} */ (this.cursorMention))[0]
            });
        }
        /** @type {?} */
        var searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter((/**
         * @param {?} suggestion
         * @return {?}
         */
        function (suggestion) {
            return _this.nzValueWith(suggestion)
                .toLowerCase()
                .includes(searchValue);
        }));
    };
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    NzMentionComponent.prototype.resetDropdown = /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.setNextItemActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.setPreviousItemActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.canOpen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.resetCursorMention = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        var selectionStart = (/** @type {?} */ (this.triggerNativeElement.selectionStart));
        /** @type {?} */
        var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        var i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            var startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            var mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ') ||
                startPos < 0 ||
                mention.includes(prefix[i], 1) ||
                mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.updatePositions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        var top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        /** @type {?} */
        var left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions(tslib_1.__spread(DEFAULT_MENTION_BOTTOM_POSITIONS));
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions(tslib_1.__spread(DEFAULT_MENTION_TOP_POSITIONS));
        }
        this.positionStrategy.apply();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.subscribeOverlayBackdropClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            if (_this.isOpen &&
                clickTarget !== _this.trigger.el.nativeElement &&
                (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget))) {
                _this.closeDropdown();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    NzMentionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-mention',
                    exportAs: 'nzMention',
                    template: "<ng-content></ng-content>\n<ng-template #suggestions>\n  <ul class=\"ant-mention-dropdown\">\n    <li class=\"ant-mention-dropdown-item\"\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\n        [class.focus]=\"i === activeIndex\"\n        (mousedown)=\"$event.preventDefault()\"\n        (click)=\"selectSuggestion(suggestion)\">\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\n    </li>\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\n        *ngIf=\"filteredSuggestions.length === 0\">\n      <span *ngIf=\"nzLoading\"><i nz-icon nzType=\"loading\"></i></span>\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\n    </li>\n  </ul>\n</ng-template>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzMentionService],
                    styles: ["\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzMentionComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: NzMentionService }
    ]; };
    NzMentionComponent.propDecorators = {
        nzValueWith: [{ type: Input }],
        nzPrefix: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzSuggestions: [{ type: Input }],
        nzOnSelect: [{ type: Output }],
        nzOnSearchChange: [{ type: Output }],
        suggestionsTemp: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
        suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMentionComponent.prototype, "nzLoading", void 0);
    return NzMentionComponent;
}());
export { NzMentionComponent };
if (false) {
    /** @type {?} */
    NzMentionComponent.prototype.nzValueWith;
    /** @type {?} */
    NzMentionComponent.prototype.nzPrefix;
    /** @type {?} */
    NzMentionComponent.prototype.nzLoading;
    /** @type {?} */
    NzMentionComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzMentionComponent.prototype.nzPlacement;
    /** @type {?} */
    NzMentionComponent.prototype.nzSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSelect;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSearchChange;
    /** @type {?} */
    NzMentionComponent.prototype.trigger;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionsTemp;
    /** @type {?} */
    NzMentionComponent.prototype.isOpen;
    /** @type {?} */
    NzMentionComponent.prototype.filteredSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionTemplate;
    /** @type {?} */
    NzMentionComponent.prototype.activeIndex;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMention;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMentionStart;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMentionEnd;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlayBackdropClickSubscription;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.ngDocument;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.nzMentionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnRpb24vIiwic291cmNlcyI6WyJuei1tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFHLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUV0RCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxnQ0FBZ0MsRUFDaEMsNkJBQTZCLEVBQzdCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBRXhELDBDQUdDOzs7SUFGQyxxQ0FBYzs7SUFDZCxzQ0FBZTs7Ozs7QUFHakIsNkJBSUM7OztJQUhDLDJCQUFpQjs7SUFDakIseUJBQWU7O0lBQ2Ys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SUFDOUUsOENBQTZGOztJQUU3RixxQ0FBbUM7O0lBQ25DLDZDQUE4RTs7SUFVOUUsb0NBQWU7O0lBQ2YsaURBQW1DOztJQUNuQyxnREFBa0U7O0lBQ2xFLHlDQUFpQjs7Ozs7SUFFakIsMkNBQTRDOzs7OztJQUM1QywyQ0FBcUM7Ozs7O0lBQ3JDLGdEQUFtQzs7Ozs7SUFDbkMsOENBQWlDOzs7OztJQUNqQyx3Q0FBc0M7Ozs7O0lBQ3RDLG9DQUFxQzs7Ozs7SUFDckMsOENBQTREOzs7OztJQUM1RCw4REFBdUQ7Ozs7O0lBT3JELHdDQUFxRDs7Ozs7SUFDckQsK0NBQTRDOzs7OztJQUM1QyxxQ0FBd0I7Ozs7O0lBQ3hCLDhDQUEwQzs7Ozs7SUFDMUMsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBnZXRDYXJldENvb3JkaW5hdGVzLFxuICBnZXRNZW50aW9ucyxcbiAgREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlMsXG4gIERFRkFVTFRfTUVOVElPTl9UT1BfUE9TSVRJT05TLFxuICBJbnB1dEJvb2xlYW5cbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpNZW50aW9uU3VnZ2VzdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudGlvbi1zdWdnZXN0aW9ucyc7XG5pbXBvcnQgeyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXRyaWdnZXInO1xuaW1wb3J0IHsgTnpNZW50aW9uU2VydmljZSB9IGZyb20gJy4vbnotbWVudGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uT25TZWFyY2hUeXBlcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHByZWZpeDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnRpb24ge1xuICBzdGFydFBvczogbnVtYmVyO1xuICBlbmRQb3M6IG51bWJlcjtcbiAgbWVudGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBNZW50aW9uUGxhY2VtZW50ID0gJ3RvcCcgfCAnYm90dG9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbWVudGlvbicsXG4gIGV4cG9ydEFzOiAnbnpNZW50aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1lbnRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW056TWVudGlvblNlcnZpY2VdLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYW50LW1lbnRpb24tZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpWYWx1ZVdpdGg6ICh2YWx1ZTogYW55KSA9PiBzdHJpbmcgPSB2YWx1ZSA9PiB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgPSAn5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlJztcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE1lbnRpb25QbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgQElucHV0KCkgbnpTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWVudGlvbk9uU2VhcmNoVHlwZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRyaWdnZXI6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSBzdWdnZXN0aW9uc1RlbXA6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBDb250ZW50Q2hpbGQoTnpNZW50aW9uU3VnZ2VzdGlvbkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBzdWdnZXN0aW9uQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGlvblRlbXBsYXRlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaXNPcGVuID0gZmFsc2U7XG4gIGZpbHRlcmVkU3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gW107XG4gIHN1Z2dlc3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PiB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBhY3RpdmVJbmRleCA9IC0xO1xuXG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbjogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uU3RhcnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uRW5kOiBudW1iZXI7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx2b2lkPjtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCB0cmlnZ2VyTmF0aXZlRWxlbWVudCgpOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBuZ0RvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG56TWVudGlvblNlcnZpY2U6IE56TWVudGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS50cmlnZ2VyQ2hhbmdlZCgpLnN1YnNjcmliZSh0cmlnZ2VyID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgICB0aGlzLmJpbmRUcmlnZ2VyRXZlbnRzKCk7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256U3VnZ2VzdGlvbnMnKSkge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5yZXNldERyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0TWVudGlvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXIgPyBnZXRNZW50aW9ucyh0aGlzLnRyaWdnZXIudmFsdWUsIHRoaXMubnpQcmVmaXgpIDogW107XG4gIH1cblxuICBzZWxlY3RTdWdnZXN0aW9uKHN1Z2dlc3Rpb246IHN0cmluZyB8IHt9KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pO1xuICAgIHRoaXMudHJpZ2dlci5pbnNlcnRNZW50aW9uKHtcbiAgICAgIG1lbnRpb246IHZhbHVlLFxuICAgICAgc3RhcnRQb3M6IHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0LFxuICAgICAgZW5kUG9zOiB0aGlzLmN1cnNvck1lbnRpb25FbmRcbiAgICB9KTtcbiAgICB0aGlzLm56T25TZWxlY3QuZW1pdChzdWdnZXN0aW9uKTtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRoaXMudHJpZ2dlci5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICAgIHRoaXMudHJpZ2dlci52YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUiAmJiB0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSAmJiB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zW3RoaXMuYWN0aXZlSW5kZXhdKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFRBQiB8fCBrZXlDb2RlID09PSBFU0NBUEUpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kVHJpZ2dlckV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXIub25JbnB1dC5zdWJzY3JpYmUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXQoZSkpO1xuICAgIHRoaXMudHJpZ2dlci5vbktleWRvd24uc3Vic2NyaWJlKChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpO1xuICAgIHRoaXMudHJpZ2dlci5vbkNsaWNrLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWdnZXN0aW9uc0ZpbHRlcih2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMubnpPblNlYXJjaENoYW5nZS5lbWl0KHtcbiAgICAgICAgdmFsdWU6IHRoaXMuY3Vyc29yTWVudGlvbiEuc3Vic3RyaW5nKDEpLFxuICAgICAgICBwcmVmaXg6IHRoaXMuY3Vyc29yTWVudGlvbiFbMF1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHN1Z2dlc3Rpb25zLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zID0gdGhpcy5uelN1Z2dlc3Rpb25zLmZpbHRlcihzdWdnZXN0aW9uID0+XG4gICAgICB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2hWYWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERyb3Bkb3duKGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldEN1cnNvck1lbnRpb24oKTtcbiAgICBpZiAodHlwZW9mIHRoaXMuY3Vyc29yTWVudGlvbiAhPT0gJ3N0cmluZycgfHwgIXRoaXMuY2FuT3BlbigpKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdWdnZXN0aW9uc0ZpbHRlcih0aGlzLmN1cnNvck1lbnRpb24sIGVtaXQpO1xuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmluZGV4T2YodGhpcy5jdXJzb3JNZW50aW9uLnN1YnN0cmluZygxKSk7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ID49IDAgPyBhY3RpdmVJbmRleCA6IDA7XG4gICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxIDw9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxID8gdGhpcy5hY3RpdmVJbmRleCArIDEgOiAwO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAtIDEgPCAwID8gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4IC0gMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gIWVsZW1lbnQucmVhZE9ubHkgJiYgIWVsZW1lbnQuZGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0Q3Vyc29yTWVudGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQudmFsdWUucmVwbGFjZSgvW1xcclxcbl0vZywgJyAnKSB8fCAnJztcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQhO1xuICAgIGNvbnN0IHByZWZpeCA9IHR5cGVvZiB0aGlzLm56UHJlZml4ID09PSAnc3RyaW5nJyA/IFt0aGlzLm56UHJlZml4XSA6IHRoaXMubnpQcmVmaXg7XG4gICAgbGV0IGkgPSBwcmVmaXgubGVuZ3RoO1xuICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdmFsdWUubGFzdEluZGV4T2YocHJlZml4W2ldLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICBjb25zdCBlbmRQb3MgPSB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpID4gLTEgPyB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpIDogdmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3QgbWVudGlvbiA9IHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgZW5kUG9zKTtcbiAgICAgIGlmIChcbiAgICAgICAgKHN0YXJ0UG9zID4gMCAmJiB2YWx1ZVtzdGFydFBvcyAtIDFdICE9PSAnICcpIHx8XG4gICAgICAgIHN0YXJ0UG9zIDwgMCB8fFxuICAgICAgICBtZW50aW9uLmluY2x1ZGVzKHByZWZpeFtpXSwgMSkgfHxcbiAgICAgICAgbWVudGlvbi5pbmNsdWRlcygnICcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSAtMTtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb24gPSBtZW50aW9uO1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25TdGFydCA9IHN0YXJ0UG9zO1xuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSBlbmRQb3M7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENhcmV0Q29vcmRpbmF0ZXModGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudCwgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQpO1xuICAgIGNvbnN0IHRvcCA9XG4gICAgICBjb29yZGluYXRlcy50b3AgLVxuICAgICAgdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLVxuICAgICAgdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgK1xuICAgICAgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gY29vcmRpbmF0ZXMuaGVpZ2h0IC0gNiA6IC02KTtcbiAgICBjb25zdCBsZWZ0ID0gY29vcmRpbmF0ZXMubGVmdCAtIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aERlZmF1bHRPZmZzZXRYKGxlZnQpLndpdGhEZWZhdWx0T2Zmc2V0WSh0b3ApO1xuICAgIGlmICh0aGlzLm56UGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWy4uLkRFRkFVTFRfTUVOVElPTl9CT1RUT01fUE9TSVRJT05TXSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56UGxhY2VtZW50ID09PSAndG9wJykge1xuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWy4uLkRFRkFVTFRfTUVOVElPTl9UT1BfUE9TSVRJT05TXSk7XG4gICAgfVxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS5hcHBseSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgIGZyb21FdmVudDxUb3VjaEV2ZW50Pih0aGlzLm5nRG9jdW1lbnQsICd0b3VjaGVuZCcpXG4gICAgKS5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNPcGVuICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLnRyaWdnZXIuZWwubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAoISF0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuc3VnZ2VzdGlvbnNUZW1wLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUG9zaXRpb25zKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgXTtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLnRyaWdnZXIuZWwpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgIC53aXRoUHVzaChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcbiAgfVxufVxuIl19