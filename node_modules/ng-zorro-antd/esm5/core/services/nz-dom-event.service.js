/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-dom-event.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Listener() { }
if (false) {
    /** @type {?} */
    Listener.prototype.countOfListeners;
    /**
     * @param {?} e
     * @return {?}
     */
    Listener.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    Listener.prototype.unsubscribe = function () { };
}
var NzDomEventService = /** @class */ (function () {
    function NzDomEventService(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    NzDomEventService.prototype.registerResizeListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: (/**
                 * @return {?}
                 */
                function () {
                    _this.resizeSource.next();
                }),
                countOfListeners: 0
            });
        }
        /** @type {?} */
        var listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    };
    /**
     * @return {?}
     */
    NzDomEventService.prototype.unregisterResizeListener = /**
     * @return {?}
     */
    function () {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        /** @type {?} */
        var listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStopListener(listener);
    };
    /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    NzDomEventService.prototype.tryToStartListener = /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    function (l, name) {
        var _this = this;
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (l.countOfListeners === 1) {
                l.unsubscribe = _this.renderer.listen('window', name, l.handler);
            }
        }));
    };
    /**
     * @private
     * @param {?} l
     * @return {?}
     */
    NzDomEventService.prototype.tryToStopListener = /**
     * @private
     * @param {?} l
     * @return {?}
     */
    function (l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            (/** @type {?} */ (l.unsubscribe))();
            l.unsubscribe = undefined;
        }
    };
    NzDomEventService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDomEventService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzDomEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDomEventService_Factory() { return new NzDomEventService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDomEventService, providedIn: "root" });
    return NzDomEventService;
}());
export { NzDomEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.resizeSource;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.domEventListeners;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzDomEventService.prototype.rendererFactory2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0MsdUJBSUM7OztJQURDLG9DQUF5Qjs7Ozs7SUFGekIsOENBQXdCOzs7O0lBQ3hCLGlEQUFxQjs7QUFJdkI7SUFRRSwyQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsa0RBQXNCOzs7SUFBdEI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNuQyxPQUFPOzs7Z0JBQUU7b0JBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFBO2dCQUNELGdCQUFnQixFQUFFLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7O1lBRUssUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxvREFBd0I7OztJQUF4QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDUjs7WUFFSyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQUVPLDhDQUFrQjs7Ozs7O0lBQTFCLFVBQTJCLENBQVcsRUFBRSxJQUFZO1FBQXBELGlCQU9DO1FBTkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDNUIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyw2Q0FBaUI7Ozs7O0lBQXpCLFVBQTBCLENBQVc7UUFDbkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDNUIsbUJBQUEsQ0FBQyxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkFwREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFab0IsTUFBTTtnQkFBYSxnQkFBZ0I7Ozs0QkFSeEQ7Q0F1RUMsQUFyREQsSUFxREM7U0FsRFksaUJBQWlCOzs7Ozs7SUFDNUIseUNBQW9EOzs7OztJQUNwRCw4Q0FBaUU7Ozs7O0lBQ2pFLHFDQUE0Qjs7Ozs7SUFFaEIsbUNBQXNCOzs7OztJQUFFLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgTGlzdGVuZXIge1xuICBoYW5kbGVyKGU6IEV2ZW50KTogdm9pZDtcbiAgdW5zdWJzY3JpYmU/KCk6IHZvaWQ7XG4gIGNvdW50T2ZMaXN0ZW5lcnM6IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpEb21FdmVudFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVNvdXJjZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG9tRXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgTGlzdGVuZXI+KCk7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgcmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuaGFzKCdyZXNpemUnKSkge1xuICAgICAgdGhpcy5kb21FdmVudExpc3RlbmVycy5zZXQoJ3Jlc2l6ZScsIHtcbiAgICAgICAgaGFuZGxlcjogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMucmVzaXplU291cmNlLm5leHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY291bnRPZkxpc3RlbmVyczogMFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xuICAgIHRoaXMudHJ5VG9TdGFydExpc3RlbmVyKGxpc3RlbmVyLCAncmVzaXplJyk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXNpemVTb3VyY2UucGlwZShhdWRpdFRpbWUoMTYpKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuaGFzKCdyZXNpemUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcbiAgICB0aGlzLnRyeVRvU3RvcExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5VG9TdGFydExpc3RlbmVyKGw6IExpc3RlbmVyLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsLmNvdW50T2ZMaXN0ZW5lcnMgKz0gMTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAxKSB7XG4gICAgICAgIGwudW5zdWJzY3JpYmUgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgbmFtZSwgbC5oYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5VG9TdG9wTGlzdGVuZXIobDogTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBsLmNvdW50T2ZMaXN0ZW5lcnMgLT0gMTtcbiAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAwKSB7XG4gICAgICBsLnVuc3Vic2NyaWJlISgpO1xuICAgICAgbC51bnN1YnNjcmliZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==