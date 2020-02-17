/**
 * @fileoverview added by tsickle
 * Generated from: nz-anchor.component.ts
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
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { toNumber, InputBoolean, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    function NzAnchorComponent(nzConfigService, scrollSrv, doc, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cdr = cdr;
        this.platform = platform;
        this.nzAffix = true;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.destroyed = false;
    }
    Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.getTarget = /**
     * @private
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
        this.removeListen();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.removeListen = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    NzAnchorComponent.prototype.getOffsetTop = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
            }
            return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
        }
        return rect.top;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                if (top_1 < scope) {
                    sections.push({
                        top: top_1,
                        comp: comp
                    });
                }
            }
        }));
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            /** @type {?} */
            var maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) { return (curr.top > prev.top ? curr : prev); }));
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i.active = false;
            i.markForCheck();
        }));
    };
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        var linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.getOffsetTop(el);
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    };
    NzAnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-anchor',
                    exportAs: 'nzAnchor',
                    preserveWhitespaces: false,
                    template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</nz-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzAnchorComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
    NzAnchorComponent.propDecorators = {
        ink: [{ type: ViewChild, args: ['ink', { static: false },] }],
        nzAffix: [{ type: Input }],
        nzShowInkInFixed: [{ type: Input }],
        nzBounds: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzScroll: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAnchorComponent.prototype, "nzAffix", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzAnchorComponent.prototype, "nzBounds", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], NzAnchorComponent.prototype, "nzOffsetTop", null);
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.nzAffix;
    /** @type {?} */
    NzAnchorComponent.prototype.nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzBounds;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.links;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.animating;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.destroyed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUk1QixzQkFHQzs7O0lBRkMsdUJBQTRCOztJQUM1QixzQkFBWTs7O0lBR1Isd0JBQXdCLEdBQUcsUUFBUTs7SUFDbkMsZ0JBQWdCLEdBQUcsV0FBVztBQUVwQztJQXdERSwyQkFDUyxlQUFnQyxFQUMvQixTQUEwQixFQUVSLEdBQVEsRUFDMUIsR0FBc0IsRUFDdEIsUUFBa0I7UUFMbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBRVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkRILFlBQU8sR0FBRyxJQUFJLENBQUM7UUFpQ3JC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b0NBQWdCOztJQUNoQix5Q0FBMkQ7Ozs7O0lBRTNELGtDQUE0Qzs7Ozs7SUFDNUMsc0NBQTBCOzs7OztJQUMxQixtQ0FBc0M7Ozs7O0lBQ3RDLG9DQUE0Qzs7Ozs7SUFDNUMsc0NBQTBCOztJQUd4Qiw0Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFrQzs7Ozs7SUFFbEMsZ0NBQWtDOzs7OztJQUNsQyxnQ0FBOEI7Ozs7O0lBQzlCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICB0b051bWJlcixcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTmdTdHlsZUludGVyZmFjZSxcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOelNjcm9sbFNlcnZpY2UsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudDtcbiAgdG9wOiBudW1iZXI7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhbmNob3InO1xuY29uc3Qgc2hhcnBNYXRjaGVyUmVneCA9IC8jKFteI10rKSQvO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hbmNob3InLFxuICBleHBvcnRBczogJ256QW5jaG9yJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hbmNob3IuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2luaycsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGluazogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBZmZpeCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSlcbiAgQElucHV0Qm9vbGVhbigpXG4gIG56U2hvd0lua0luRml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA1KVxuICBASW5wdXROdW1iZXIoKVxuICBuekJvdW5kczogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlcj4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICB0aGlzLndyYXBwZXJTdHlsZSA9IHtcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXG4gICAgfTtcbiAgfVxuXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxOekFuY2hvckxpbmtDb21wb25lbnQ+KCk7XG5cbiAgdmlzaWJsZSA9IGZhbHNlO1xuICB3cmFwcGVyU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xuXG4gIHByaXZhdGUgbGlua3M6IE56QW5jaG9yTGlua0NvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgYW5pbWF0aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgdGFyZ2V0OiBFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICByZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5wdXNoKGxpbmspO1xuICB9XG5cbiAgdW5yZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5zcGxpY2UodGhpcy5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHRoaXMuZ2V0VGFyZ2V0KCksICdzY3JvbGwnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSg1MCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gICAgLy8gQnJvd3NlciB3b3VsZCBtYWludGFpbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIHdoZW4gcmVmcmVzaGluZy5cbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGRlbGF5IGNhbGN1bGF0aW9uIGluIGF2b2lkIG9mIGdldHRpbmcgYSBpbmNvcnJlY3QgcmVzdWx0LlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldFRvcChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcbiAgICAgIGlmICh0aGlzLmdldFRhcmdldCgpID09PSB3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQhLmNsaWVudFRvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWN0LnRvcCAtICh0aGlzLmdldFRhcmdldCgpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgfVxuICAgIHJldHVybiByZWN0LnRvcDtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmRlc3Ryb3llZCB8fCB0aGlzLmFuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5uekJvdW5kcztcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLm56SHJlZi50b1N0cmluZygpKTtcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbMV0pO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xuICAgICAgICBpZiAodG9wIDwgc2NvcGUpIHtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGNvbXBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52aXNpYmxlID0gISFzZWN0aW9ucy5sZW5ndGg7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWF4U2VjdGlvbiA9IHNlY3Rpb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gKGN1cnIudG9wID4gcHJldi50b3AgPyBjdXJyIDogcHJldikpO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobWF4U2VjdGlvbi5jb21wKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICBpLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xuICAgIGNvbXAubWFya0ZvckNoZWNrKCk7XG5cbiAgICBjb25zdCBsaW5rTm9kZSA9IChjb21wLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcihcbiAgICAgICcuYW50LWFuY2hvci1saW5rLXRpdGxlJ1xuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IobGlua0NvbXAubnpIcmVmKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKTtcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKGVsKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIHRhcmdldFNjcm9sbFRvcCwgdW5kZWZpbmVkLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XG4gIH1cbn1cbiJdfQ==