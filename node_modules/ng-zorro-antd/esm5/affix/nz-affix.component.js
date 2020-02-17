/**
 * @fileoverview added by tsickle
 * Generated from: nz-affix.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { getStyleAsText, shallowEqual, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
import { isTargetWindow } from './utils';
/**
 * @record
 */
function SimpleRect() { }
if (false) {
    /** @type {?} */
    SimpleRect.prototype.top;
    /** @type {?} */
    SimpleRect.prototype.left;
    /** @type {?|undefined} */
    SimpleRect.prototype.width;
    /** @type {?|undefined} */
    SimpleRect.prototype.height;
    /** @type {?|undefined} */
    SimpleRect.prototype.bottom;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
var NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
/** @type {?} */
var NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var NzAffixComponent = /** @class */ (function () {
    function NzAffixComponent(el, doc, // tslint:disable-line no-any
    nzConfigService, scrollSrv, ngZone, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzChange = new EventEmitter();
        this.scroll$ = Subscription.EMPTY;
        // The wrapper would stay at the original position as a placeholder.
        this.placeholderNode = el.nativeElement;
        this.document = doc;
    }
    Object.defineProperty(NzAffixComponent.prototype, "target", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.nzTarget;
            return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOffsetBottom = changes.nzOffsetBottom, nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition((/** @type {?} */ ({})));
        }
        if (nzTarget) {
            this.registerListeners();
        }
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerListeners();
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListeners();
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.registerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread(NZ_AFFIX_RESPOND_EVENTS.map((/**
             * @param {?} evName
             * @return {?}
             */
            function (evName) { return fromEvent(_this.target, evName); })))).pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.updatePosition(e); }));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return _this.updatePosition((/** @type {?} */ ({}))); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.removeListeners = /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.document.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    };
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = this.fixedEl.nativeElement;
        wrapEl.style.cssText = getStyleAsText(affixStyle);
        this.affixStyle = affixStyle;
        if (fixed) {
            wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
        }
        else {
            wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.syncPlaceholderStyle = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        var styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var targetNode = this.target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        var fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        var elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
        }
        /** @type {?} */
        var targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        var targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    exportAs: 'nzAffix',
                    template: "<div #fixedEl>\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      nz-affix {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzAffixComponent.propDecorators = {
        fixedEl: [{ type: ViewChild, args: ['fixedEl', { static: true },] }],
        nzTarget: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzOffsetBottom: [{ type: Input }],
        nzChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 0),
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetTop", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, null),
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
    return NzAffixComponent;
}());
export { NzAffixComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.fixedEl;
    /** @type {?} */
    NzAffixComponent.prototype.nzTarget;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetTop;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderNode;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.affixStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.document;
    /** @type {?} */
    NzAffixComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxFQUVYLGVBQWUsRUFDZixlQUFlLEVBQ2YsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUV6Qyx5QkFNQzs7O0lBTEMseUJBQVk7O0lBQ1osMEJBQWE7O0lBQ2IsMkJBQWU7O0lBQ2YsNEJBQWdCOztJQUNoQiw0QkFBZ0I7OztJQUdaLHdCQUF3QixHQUFHLE9BQU87O0lBQ2xDLG1CQUFtQixHQUFHLFdBQVc7O0lBQ2pDLDRCQUE0QixHQUFHLEVBQUU7O0lBQ2pDLHVCQUF1QixHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO0FBRS9HO0lBNENFLDBCQUNFLEVBQWMsRUFDSSxHQUFRLEVBQUUs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QUFTO29CQUNuQixpRUFBd0M7b0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQVEvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs2QkFObkMsNERBSUM7aUJBR0o7Ozs7Z0JBcERDLFVBQVU7Z0RBcUZQLE1BQU0sU0FBQyxRQUFRO2dCQWpFbEIsZUFBZTtnQkFDZixlQUFlO2dCQWpCZixNQUFNO2dCQVZDLFFBQVE7OzswQkE0RGQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXJDLEtBQUs7OEJBRUwsS0FBSztpQ0FLTCxLQUFLOzJCQUtMLE1BQU07O0lBUFA7UUFGQyxVQUFVLENBQWdCLHdCQUF3QixFQUFFLENBQUMsQ0FBQztRQUN0RCxXQUFXLEVBQUU7O3lEQUNhO0lBSzNCO1FBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxJQUFJLENBQUM7UUFDekQsV0FBVyxFQUFFOzs0REFDZ0I7SUErTmhDLHVCQUFDO0NBQUEsQUExUEQsSUEwUEM7U0E1T1ksZ0JBQWdCOzs7Ozs7SUFDM0IsbUNBQW9GOztJQUVwRixvQ0FBNkM7O0lBRTdDLHVDQUcyQjs7SUFFM0IsMENBRzhCOztJQUU5QixvQ0FBMEQ7Ozs7O0lBRTFELDJDQUE4Qzs7Ozs7SUFFOUMsc0NBQXNDOzs7OztJQUN0Qyw0Q0FBNEM7Ozs7O0lBQzVDLG1DQUFtRDs7Ozs7SUFDbkQsbUNBQXlCOzs7OztJQUN6QixvQ0FBMkI7O0lBVXpCLDJDQUF1Qzs7Ozs7SUFDdkMscUNBQWtDOzs7OztJQUNsQyxrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBnZXRTdHlsZUFzVGV4dCxcbiAgc2hhbGxvd0VxdWFsLFxuICBJbnB1dE51bWJlcixcbiAgTmdTdHlsZUludGVyZmFjZSxcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOelNjcm9sbFNlcnZpY2UsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IGlzVGFyZ2V0V2luZG93IH0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBTaW1wbGVSZWN0IHtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYWZmaXgnO1xuY29uc3QgTlpfQUZGSVhfQ0xTX1BSRUZJWCA9ICdhbnQtYWZmaXgnO1xuY29uc3QgTlpfQUZGSVhfREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xuY29uc3QgTlpfQUZGSVhfUkVTUE9ORF9FVkVOVFMgPSBbJ3Jlc2l6ZScsICdzY3JvbGwnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAncGFnZXNob3cnLCAnbG9hZCddO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hZmZpeCcsXG4gIGV4cG9ydEFzOiAnbnpBZmZpeCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hZmZpeC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1hZmZpeCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOekFmZml4Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaXhlZEVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBmaXhlZEVsOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSBuelRhcmdldDogc3RyaW5nIHwgRWxlbWVudCB8IFdpbmRvdztcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZzxudW1iZXIgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDApXG4gIEBJbnB1dE51bWJlcigpXG4gIG56T2Zmc2V0VG9wOiBudWxsIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgbnVsbClcbiAgQElucHV0TnVtYmVyKClcbiAgbnpPZmZzZXRCb3R0b206IG51bGwgfCBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSB0aW1lb3V0PzogbnVtYmVyO1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBwcml2YXRlIGdldCB0YXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm56VGFyZ2V0O1xuICAgIHJldHVybiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbCkgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICAvLyBUaGUgd3JhcHBlciB3b3VsZCBzdGF5IGF0IHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBhcyBhIHBsYWNlaG9sZGVyLlxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPZmZzZXRCb3R0b20sIG56T2Zmc2V0VG9wLCBuelRhcmdldCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuek9mZnNldEJvdHRvbSB8fCBuek9mZnNldFRvcCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCk7XG4gICAgfVxuICAgIGlmIChuelRhcmdldCkge1xuICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuc2Nyb2xsJCA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiBtZXJnZSguLi5OWl9BRkZJWF9SRVNQT05EX0VWRU5UUy5tYXAoZXZOYW1lID0+IGZyb21FdmVudCh0aGlzLnRhcmdldCwgZXZOYW1lKSkpXG4gICAgICAgIC5waXBlKGF1ZGl0VGltZShOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FKSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMudXBkYXRlUG9zaXRpb24oZSkpO1xuICAgIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkKTogU2ltcGxlUmVjdCB7XG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0ISk7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgZmFsc2UpO1xuXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgMDtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1SZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgICAgbGVmdDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgICAgd2lkdGg6IGVsZW1SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXRSZWN0KHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyk6IFNpbXBsZVJlY3Qge1xuICAgIHJldHVybiAhaXNUYXJnZXRXaW5kb3codGFyZ2V0KVxuICAgICAgPyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIDoge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogMFxuICAgICAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IEV2ZW50LCBhZmZpeFN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsQWZmaXhTdHlsZSA9IHRoaXMuYWZmaXhTdHlsZTtcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRoaXMudGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbCcgJiYgb3JpZ2luYWxBZmZpeFN0eWxlICYmIGFmZml4U3R5bGUgJiYgaXNXaW5kb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNoYWxsb3dFcXVhbChvcmlnaW5hbEFmZml4U3R5bGUsIGFmZml4U3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd3JhcEVsLnN0eWxlLmNzc1RleHQgPSBnZXRTdHlsZUFzVGV4dChhZmZpeFN0eWxlKTtcbiAgICB0aGlzLmFmZml4U3R5bGUgPSBhZmZpeFN0eWxlO1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKE5aX0FGRklYX0NMU19QUkVGSVgpO1xuICAgIH1cblxuICAgIGlmICgoYWZmaXhTdHlsZSAmJiAhb3JpZ2luYWxBZmZpeFN0eWxlKSB8fCAoIWFmZml4U3R5bGUgJiYgb3JpZ2luYWxBZmZpeFN0eWxlKSkge1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KGZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBsYWNlaG9sZGVyU3R5bGUocGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLnBsYWNlaG9sZGVyU3R5bGU7XG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSBnZXRTdHlsZUFzVGV4dChwbGFjZWhvbGRlclN0eWxlKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSBwbGFjZWhvbGRlclN0eWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jUGxhY2Vob2xkZXJTdHlsZShlOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hZmZpeFN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3R5bGVPYmogPSB7XG4gICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcbiAgICAgIC4uLnN0eWxlT2JqXG4gICAgfSk7XG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHN0eWxlT2JqKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldDtcbiAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5uek9mZnNldFRvcDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSwgdHJ1ZSk7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMucGxhY2Vob2xkZXJOb2RlLCB0YXJnZXROb2RlISk7XG4gICAgY29uc3QgZml4ZWROb2RlID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgZWxlbVNpemUgPSB7XG4gICAgICB3aWR0aDogZml4ZWROb2RlLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBmaXhlZE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIGJvdHRvbTogZmFsc2VcbiAgICB9O1xuICAgIC8vIERlZmF1bHQgdG8gYG9mZnNldFRvcD0wYC5cbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XG4gICAgICBvZmZzZXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpO1xuICAgIGNvbnN0IHRhcmdldElubmVySGVpZ2h0ID0gKHRhcmdldE5vZGUgYXMgV2luZG93KS5pbm5lckhlaWdodCB8fCAodGFyZ2V0Tm9kZSBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChzY3JvbGxUb3AgPj0gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcbiAgICAgIGNvbnN0IHRvcCA9IHRhcmdldFJlY3QudG9wICsgKG9mZnNldFRvcCBhcyBudW1iZXIpO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxuICAgICAgICBtYXhIZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0b3B9cHgpYCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc2Nyb2xsVG9wIDw9IGVsZW1PZmZzZXQudG9wICsgZWxlbVNpemUuaGVpZ2h0ICsgKHRoaXMubnpPZmZzZXRCb3R0b20gYXMgbnVtYmVyKSAtIHRhcmdldElubmVySGVpZ2h0ICYmXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxuICAgICkge1xuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2ZmZXQgPSB0YXJnZXROb2RlID09PSB3aW5kb3cgPyAwIDogd2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b20hO1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbTogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpLFxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICBlLnR5cGUgPT09ICdyZXNpemUnICYmXG4gICAgICAgIHRoaXMuYWZmaXhTdHlsZSAmJlxuICAgICAgICB0aGlzLmFmZml4U3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcgJiZcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50eXBlID09PSAncmVzaXplJykge1xuICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZShlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==