/**
 * @fileoverview added by tsickle
 * Generated from: scroll/nz-scroll.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    const cc = c - b;
    /** @type {?} */
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    }
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        /** @type {?} */
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            const doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(el, top = true) {
        /** @type {?} */
        const target = el ? el : window;
        /** @type {?} */
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        const method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        const isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        /** @type {?} */
        const target = containerEl ? containerEl : window;
        /** @type {?} */
        const scrollTop = this.getScroll(target);
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const frameFunc = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const timestamp = Date.now();
            /** @type {?} */
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7OztBQUk3RCxTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTOztVQUMxRCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1FBQ1osRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDcEM7U0FBTTtRQUNMLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7QUFHRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFJMUIsWUFBOEIsR0FBUTtRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBR0QsWUFBWSxDQUFDLEVBQW9CLEVBQUUsV0FBbUIsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdB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YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRjtRQUNILENBQUMsQ0FBQTtRQUNELFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFsRkYsVUFBVTs7Ozs0Q0FLSSxNQUFNLFNBQUMsUUFBUTs7Ozs7OztJQUg1Qiw4QkFBc0I7Ozs7Ozs7QUFtRnhCLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxHQUFhLEVBQUUsYUFBOEI7SUFDM0YsT0FBTyxhQUFhLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGVBQWU7SUFDeEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7Q0FDcEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcblxuZXhwb3J0IHR5cGUgRWFzeWluZ0ZuID0gKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjYyA9IGMgLSBiO1xuICBsZXQgdHQgPSB0IC8gKGQgLyAyKTtcbiAgaWYgKHR0IDwgMSkge1xuICAgIHJldHVybiAoY2MgLyAyKSAqIHR0ICogdHQgKiB0dCArIGI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChjYyAvIDIpICogKCh0dCAtPSAyKSAqIHR0ICogdHQgKyAyKSArIGI7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56U2Nyb2xsU2VydmljZSB7XG4gIHByaXZhdGUgZG9jOiBEb2N1bWVudDtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55KSB7XG4gICAgdGhpcy5kb2MgPSBkb2M7XG4gIH1cblxuICAvKiogU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2Nyb2xsIGJhciBvZiBgZWxgLiAqL1xuICBzZXRTY3JvbGxUb3AoZWw6IEVsZW1lbnQgfCBXaW5kb3csIHRvcFZhbHVlOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKGVsID09PSB3aW5kb3cpIHtcbiAgICAgIHRoaXMuZG9jLmJvZHkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQhLnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldCBwb3NpdGlvbiBvZiBgZWxgIGFnYWluc3Qgd2luZG93LiAqL1xuICBnZXRPZmZzZXQoZWw6IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gICAgaWYgKCFlbCB8fCAhZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XG4gICAgICBjb25zdCBkb2MgPSBlbC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByZXQudG9wID0gcmVjdC50b3AgLSBkb2MhLmNsaWVudFRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jIS5jbGllbnRMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjb2xsIGJhciBvZiBgZWxgLiAqL1xuICAvLyBUT0RPOiByZW1vdmUgJ3wgV2luZG93JyBhcyB0aGUgZmFsbGJhY2sgYWxyZWFkeSBoYXBwZW5zIGhlcmVcbiAgZ2V0U2Nyb2xsKGVsPzogRWxlbWVudCB8IFdpbmRvdywgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZWwgPyBlbCA6IHdpbmRvdztcbiAgICBjb25zdCBwcm9wID0gdG9wID8gJ3BhZ2VZT2Zmc2V0JyA6ICdwYWdlWE9mZnNldCc7XG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gICAgY29uc3QgaXNXaW5kb3cgPSB0YXJnZXQgPT09IHdpbmRvdztcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbGV0IHJldCA9IGlzV2luZG93ID8gdGFyZ2V0W3Byb3BdIDogdGFyZ2V0W21ldGhvZF07XG4gICAgaWYgKGlzV2luZG93ICYmIHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQhW21ldGhvZF07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsIGBlbGAgdG8gc29tZSBwb3NpdGlvbiB3aXRoIGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRhaW5lckVsIGNvbnRhaW5lciwgYHdpbmRvd2AgYnkgZGVmYXVsdFxuICAgKiBAcGFyYW0gdGFyZ2V0VG9wVmFsdWUgU2Nyb2xsIHRvIGB0b3BgLCAwIGJ5IGRlZmF1bHRcbiAgICogQHBhcmFtIGVhc2luZyBUcmFuc2l0aW9uIGN1cnZlLCBgZWFzZUluT3V0Q3ViaWNgIGJ5IGRlZmF1bHRcbiAgICogQHBhcmFtIGNhbGxiYWNrIGNhbGxiYWNrIGludm9rZWQgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcbiAgICovXG4gIHNjcm9sbFRvKGNvbnRhaW5lckVsOiBFbGVtZW50IHwgV2luZG93LCB0YXJnZXRUb3BWYWx1ZTogbnVtYmVyID0gMCwgZWFzaW5nPzogRWFzeWluZ0ZuLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBjb250YWluZXJFbCA/IGNvbnRhaW5lckVsIDogd2luZG93O1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsKHRhcmdldCk7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBmcmFtZUZ1bmMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHRhcmdldCwgKGVhc2luZyB8fCBlYXNlSW5PdXRDdWJpYykodGltZSwgc2Nyb2xsVG9wLCB0YXJnZXRUb3BWYWx1ZSwgNDUwKSk7XG4gICAgICBpZiAodGltZSA8IDQ1MCkge1xuICAgICAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGRvYzogRG9jdW1lbnQsIHNjcm9sbFNlcnZpY2U6IE56U2Nyb2xsU2VydmljZSk6IE56U2Nyb2xsU2VydmljZSB7XG4gIHJldHVybiBzY3JvbGxTZXJ2aWNlIHx8IG5ldyBOelNjcm9sbFNlcnZpY2UoZG9jKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTnpTY3JvbGxTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzOiBbRE9DVU1FTlQsIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE56U2Nyb2xsU2VydmljZV1dXG59O1xuIl19