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
const NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
/** @type {?} */
const NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
export class NzAffixComponent {
    /**
     * @param {?} el
     * @param {?} doc
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(el, doc, // tslint:disable-line no-any
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
    /**
     * @private
     * @return {?}
     */
    get target() {
        /** @type {?} */
        const el = this.nzTarget;
        return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffsetBottom, nzOffsetTop, nzTarget } = changes;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition((/** @type {?} */ ({})));
        }
        if (nzTarget) {
            this.registerListeners();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerListeners();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListeners();
    }
    /**
     * @private
     * @return {?}
     */
    registerListeners() {
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return merge(...NZ_AFFIX_RESPOND_EVENTS.map((/**
             * @param {?} evName
             * @return {?}
             */
            evName => fromEvent(this.target, evName))))
                .pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => this.updatePosition(e)));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => this.updatePosition((/** @type {?} */ ({})))));
    }
    /**
     * @private
     * @return {?}
     */
    removeListeners() {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = this.document.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    }
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = this.fixedEl.nativeElement;
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
    }
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    syncPlaceholderStyle(e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        const styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, Object.assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const targetNode = this.target;
        /** @type {?} */
        let offsetTop = this.nzOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        const elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        const fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        const elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
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
        const targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        const targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }
}
NzAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                template: "<div #fixedEl>\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-affix {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzAffixComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: NzScrollService },
    { type: NgZone },
    { type: Platform }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxFQUVYLGVBQWUsRUFDZixlQUFlLEVBQ2YsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUV6Qyx5QkFNQzs7O0lBTEMseUJBQVk7O0lBQ1osMEJBQWE7O0lBQ2IsMkJBQWU7O0lBQ2YsNEJBQWdCOztJQUNoQiw0QkFBZ0I7OztNQUdaLHdCQUF3QixHQUFHLE9BQU87O01BQ2xDLG1CQUFtQixHQUFHLFdBQVc7O01BQ2pDLDRCQUE0QixHQUFHLEVBQUU7O01BQ2pDLHVCQUF1QixHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO0FBZ0IvRyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUE4QjNC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QUFDLFFBQVE7WUFqRWxCLGVBQWU7WUFDZixlQUFlO1lBakJmLE1BQU07WUFWQyxRQUFROzs7c0JBNERkLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUVyQyxLQUFLOzBCQUVMLEtBQUs7NkJBS0wsS0FBSzt1QkFLTCxNQUFNOztBQVBQO0lBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDdEQsV0FBVyxFQUFFOztxREFDYTtBQUszQjtJQUZDLFVBQVUsQ0FBZ0Isd0JBQXdCLEVBQUUsSUFBSSxDQUFDO0lBQ3pELFdBQVcsRUFBRTs7d0RBQ2dCOzs7Ozs7SUFaOUIsbUNBQW9GOztJQUVwRixvQ0FBNkM7O0lBRTdDLHVDQUcyQjs7SUFFM0IsMENBRzhCOztJQUU5QixvQ0FBMEQ7Ozs7O0lBRTFELDJDQUE4Qzs7Ozs7SUFFOUMsc0NBQXNDOzs7OztJQUN0Qyw0Q0FBNEM7Ozs7O0lBQzVDLG1DQUFtRDs7Ozs7SUFDbkQsbUNBQXlCOzs7OztJQUN6QixvQ0FBMkI7O0lBVXpCLDJDQUF1Qzs7Ozs7SUFDdkMscUNBQWtDOzs7OztJQUNsQyxrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBnZXRTdHlsZUFzVGV4dCxcbiAgc2hhbGxvd0VxdWFsLFxuICBJbnB1dE51bWJlcixcbiAgTmdTdHlsZUludGVyZmFjZSxcbiAgTnpDb25maWdTZXJ2aWNlLFxuICBOelNjcm9sbFNlcnZpY2UsXG4gIFdpdGhDb25maWdcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IGlzVGFyZ2V0V2luZG93IH0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBTaW1wbGVSZWN0IHtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYWZmaXgnO1xuY29uc3QgTlpfQUZGSVhfQ0xTX1BSRUZJWCA9ICdhbnQtYWZmaXgnO1xuY29uc3QgTlpfQUZGSVhfREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xuY29uc3QgTlpfQUZGSVhfUkVTUE9ORF9FVkVOVFMgPSBbJ3Jlc2l6ZScsICdzY3JvbGwnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAncGFnZXNob3cnLCAnbG9hZCddO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hZmZpeCcsXG4gIGV4cG9ydEFzOiAnbnpBZmZpeCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hZmZpeC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1hZmZpeCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOekFmZml4Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaXhlZEVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBmaXhlZEVsOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSBuelRhcmdldDogc3RyaW5nIHwgRWxlbWVudCB8IFdpbmRvdztcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZzxudW1iZXIgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDApXG4gIEBJbnB1dE51bWJlcigpXG4gIG56T2Zmc2V0VG9wOiBudWxsIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgbnVsbClcbiAgQElucHV0TnVtYmVyKClcbiAgbnpPZmZzZXRCb3R0b206IG51bGwgfCBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSB0aW1lb3V0PzogbnVtYmVyO1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBwcml2YXRlIGdldCB0YXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm56VGFyZ2V0O1xuICAgIHJldHVybiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbCkgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICAvLyBUaGUgd3JhcHBlciB3b3VsZCBzdGF5IGF0IHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBhcyBhIHBsYWNlaG9sZGVyLlxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPZmZzZXRCb3R0b20sIG56T2Zmc2V0VG9wLCBuelRhcmdldCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuek9mZnNldEJvdHRvbSB8fCBuek9mZnNldFRvcCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCk7XG4gICAgfVxuICAgIGlmIChuelRhcmdldCkge1xuICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuc2Nyb2xsJCA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiBtZXJnZSguLi5OWl9BRkZJWF9SRVNQT05EX0VWRU5UUy5tYXAoZXZOYW1lID0+IGZyb21FdmVudCh0aGlzLnRhcmdldCwgZXZOYW1lKSkpXG4gICAgICAgIC5waXBlKGF1ZGl0VGltZShOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FKSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMudXBkYXRlUG9zaXRpb24oZSkpO1xuICAgIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkKTogU2ltcGxlUmVjdCB7XG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0ISk7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgZmFsc2UpO1xuXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgMDtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1SZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgICAgbGVmdDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgICAgd2lkdGg6IGVsZW1SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXRSZWN0KHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyk6IFNpbXBsZVJlY3Qge1xuICAgIHJldHVybiAhaXNUYXJnZXRXaW5kb3codGFyZ2V0KVxuICAgICAgPyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIDoge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogMFxuICAgICAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IEV2ZW50LCBhZmZpeFN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsQWZmaXhTdHlsZSA9IHRoaXMuYWZmaXhTdHlsZTtcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRoaXMudGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbCcgJiYgb3JpZ2luYWxBZmZpeFN0eWxlICYmIGFmZml4U3R5bGUgJiYgaXNXaW5kb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNoYWxsb3dFcXVhbChvcmlnaW5hbEFmZml4U3R5bGUsIGFmZml4U3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd3JhcEVsLnN0eWxlLmNzc1RleHQgPSBnZXRTdHlsZUFzVGV4dChhZmZpeFN0eWxlKTtcbiAgICB0aGlzLmFmZml4U3R5bGUgPSBhZmZpeFN0eWxlO1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKE5aX0FGRklYX0NMU19QUkVGSVgpO1xuICAgIH1cblxuICAgIGlmICgoYWZmaXhTdHlsZSAmJiAhb3JpZ2luYWxBZmZpeFN0eWxlKSB8fCAoIWFmZml4U3R5bGUgJiYgb3JpZ2luYWxBZmZpeFN0eWxlKSkge1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KGZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBsYWNlaG9sZGVyU3R5bGUocGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLnBsYWNlaG9sZGVyU3R5bGU7XG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSBnZXRTdHlsZUFzVGV4dChwbGFjZWhvbGRlclN0eWxlKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSBwbGFjZWhvbGRlclN0eWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jUGxhY2Vob2xkZXJTdHlsZShlOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hZmZpeFN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3R5bGVPYmogPSB7XG4gICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcbiAgICAgIC4uLnN0eWxlT2JqXG4gICAgfSk7XG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHN0eWxlT2JqKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldDtcbiAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5uek9mZnNldFRvcDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSwgdHJ1ZSk7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMucGxhY2Vob2xkZXJOb2RlLCB0YXJnZXROb2RlISk7XG4gICAgY29uc3QgZml4ZWROb2RlID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgZWxlbVNpemUgPSB7XG4gICAgICB3aWR0aDogZml4ZWROb2RlLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBmaXhlZE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIGJvdHRvbTogZmFsc2VcbiAgICB9O1xuICAgIC8vIERlZmF1bHQgdG8gYG9mZnNldFRvcD0wYC5cbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XG4gICAgICBvZmZzZXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpO1xuICAgIGNvbnN0IHRhcmdldElubmVySGVpZ2h0ID0gKHRhcmdldE5vZGUgYXMgV2luZG93KS5pbm5lckhlaWdodCB8fCAodGFyZ2V0Tm9kZSBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChzY3JvbGxUb3AgPj0gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcbiAgICAgIGNvbnN0IHRvcCA9IHRhcmdldFJlY3QudG9wICsgKG9mZnNldFRvcCBhcyBudW1iZXIpO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxuICAgICAgICBtYXhIZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0b3B9cHgpYCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc2Nyb2xsVG9wIDw9IGVsZW1PZmZzZXQudG9wICsgZWxlbVNpemUuaGVpZ2h0ICsgKHRoaXMubnpPZmZzZXRCb3R0b20gYXMgbnVtYmVyKSAtIHRhcmdldElubmVySGVpZ2h0ICYmXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxuICAgICkge1xuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2ZmZXQgPSB0YXJnZXROb2RlID09PSB3aW5kb3cgPyAwIDogd2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b20hO1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbTogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpLFxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICBlLnR5cGUgPT09ICdyZXNpemUnICYmXG4gICAgICAgIHRoaXMuYWZmaXhTdHlsZSAmJlxuICAgICAgICB0aGlzLmFmZml4U3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcgJiZcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50eXBlID09PSAncmVzaXplJykge1xuICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZShlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==