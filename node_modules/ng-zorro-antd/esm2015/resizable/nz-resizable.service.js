/**
 * @fileoverview added by tsickle
 * Generated from: nz-resizable.service.ts
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
import { Inject, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { isTouchEvent } from 'ng-zorro-antd/core';
export class NzResizableService {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} ngZone
     * @param {?} document
     */
    constructor(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startResizing(event) {
        /** @type {?} */
        const _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        /** @type {?} */
        const moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        /** @type {?} */
        const upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        /** @type {?} */
        const moveEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseMove$.next(e);
        });
        /** @type {?} */
        const upEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseUp$.next(e);
            this.clearListeners();
        });
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.listeners.forEach((/**
             * @param {?} handler
             * @param {?} name
             * @return {?}
             */
            (handler, name) => {
                this.document.addEventListener(name, (/** @type {?} */ (handler)));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearListeners() {
        this.listeners.forEach((/**
         * @param {?} handler
         * @param {?} name
         * @return {?}
         */
        (handler, name) => {
            this.document.removeEventListener(name, (/** @type {?} */ (handler)));
        }));
        this.listeners.clear();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    }
}
NzResizableService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzResizableService.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.listeners;
    /** @type {?} */
    NzResizableService.prototype.handleMouseDown$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseUp$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseMove$;
    /** @type {?} */
    NzResizableService.prototype.mouseEntered$;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbIm56LXJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJbEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBVTdCLFlBQW9CLE1BQWMsRUFBb0IsUUFBYTtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUjFCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBb0QsQ0FBQztRQUVoRixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBZ0MsQ0FBQztRQUMvRCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUMxRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFJckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBOEI7O2NBQ3BDLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Y0FDaEIsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXOztjQUNyRCxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7O2NBQ2hELGdCQUFnQjs7OztRQUFHLENBQUMsQ0FBMEIsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBOztjQUNLLGNBQWM7Ozs7UUFBRyxDQUFDLENBQTBCLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQW5ERixVQUFVOzs7O1lBUGtCLE1BQU07NENBa0JJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBVHBELHNDQUEyQjs7Ozs7SUFDM0IsdUNBQWdGOztJQUVoRiw4Q0FBK0Q7O0lBQy9ELDhDQUEwRDs7SUFDMUQsZ0RBQTREOztJQUM1RCwyQ0FBdUM7Ozs7O0lBRzNCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgaXNUb3VjaEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQgfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIGxpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB2b2lkPigpO1xuXG4gIGhhbmRsZU1vdXNlRG93biQgPSBuZXcgU3ViamVjdDxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xuICBkb2N1bWVudE1vdXNlVXAkID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KCk7XG4gIGRvY3VtZW50TW91c2VNb3ZlJCA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PigpO1xuICBtb3VzZUVudGVyZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBzdGFydFJlc2l6aW5nKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IF9pc1RvdWNoRXZlbnQgPSBpc1RvdWNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBtb3ZlRXZlbnQgPSBfaXNUb3VjaEV2ZW50ID8gJ3RvdWNobW92ZScgOiAnbW91c2Vtb3ZlJztcbiAgICBjb25zdCB1cEV2ZW50ID0gX2lzVG91Y2hFdmVudCA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XG4gICAgY29uc3QgbW92ZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQubmV4dChlKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VVcCQubmV4dChlKTtcbiAgICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KG1vdmVFdmVudCwgbW92ZUV2ZW50SGFuZGxlcik7XG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KHVwRXZlbnQsIHVwRXZlbnRIYW5kbGVyKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGhhbmRsZXIsIG5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoaGFuZGxlciwgbmFtZSkgPT4ge1xuICAgICAgdGhpcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlTW91c2VEb3duJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5tb3VzZUVudGVyZWQkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICB9XG59XG4iXX0=