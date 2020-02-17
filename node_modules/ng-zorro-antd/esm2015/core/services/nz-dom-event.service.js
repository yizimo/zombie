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
export class NzDomEventService {
    /**
     * @param {?} ngZone
     * @param {?} rendererFactory2
     */
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: (/**
                 * @return {?}
                 */
                () => {
                    this.resizeSource.next();
                }),
                countOfListeners: 0
            });
        }
        /** @type {?} */
        const listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    /**
     * @return {?}
     */
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        /** @type {?} */
        const listener = (/** @type {?} */ (this.domEventListeners.get('resize')));
        this.tryToStopListener(listener);
    }
    /**
     * @private
     * @param {?} l
     * @param {?} name
     * @return {?}
     */
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        }));
    }
    /**
     * @private
     * @param {?} l
     * @return {?}
     */
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            (/** @type {?} */ (l.unsubscribe))();
            l.unsubscribe = undefined;
        }
    }
}
NzDomEventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzDomEventService.ctorParameters = () => [
    { type: NgZone },
    { type: RendererFactory2 }
];
/** @nocollapse */ NzDomEventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDomEventService_Factory() { return new NzDomEventService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDomEventService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0MsdUJBSUM7OztJQURDLG9DQUF5Qjs7Ozs7SUFGekIsOENBQXdCOzs7O0lBQ3hCLGlEQUFxQjs7QUFPdkIsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFLNUIsWUFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNuQyxPQUFPOzs7Z0JBQUUsR0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUE7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7U0FDSjs7Y0FFSyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxPQUFPO1NBQ1I7O2NBRUssUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxDQUFXLEVBQUUsSUFBWTtRQUNsRCxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxDQUFXO1FBQ25DLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQzVCLG1CQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpvQixNQUFNO1lBQWEsZ0JBQWdCOzs7Ozs7OztJQWN0RCx5Q0FBb0Q7Ozs7O0lBQ3BELDhDQUFpRTs7Ozs7SUFDakUscUNBQTRCOzs7OztJQUVoQixtQ0FBc0I7Ozs7O0lBQUUsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBMaXN0ZW5lciB7XG4gIGhhbmRsZXIoZTogRXZlbnQpOiB2b2lkO1xuICB1bnN1YnNjcmliZT8oKTogdm9pZDtcbiAgY291bnRPZkxpc3RlbmVyczogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekRvbUV2ZW50U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU291cmNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb21FdmVudExpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0ZW5lcj4oKTtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICByZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XG4gICAgICB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLnNldCgncmVzaXplJywge1xuICAgICAgICBoYW5kbGVyOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNpemVTb3VyY2UubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICBjb3VudE9mTGlzdGVuZXJzOiAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XG4gICAgdGhpcy50cnlUb1N0YXJ0TGlzdGVuZXIobGlzdGVuZXIsICdyZXNpemUnKTtcblxuICAgIHJldHVybiB0aGlzLnJlc2l6ZVNvdXJjZS5waXBlKGF1ZGl0VGltZSgxNikpO1xuICB9XG5cbiAgdW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xuICAgIHRoaXMudHJ5VG9TdG9wTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlUb1N0YXJ0TGlzdGVuZXIobDogTGlzdGVuZXIsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGwuY291bnRPZkxpc3RlbmVycyArPSAxO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDEpIHtcbiAgICAgICAgbC51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCBuYW1lLCBsLmhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlUb1N0b3BMaXN0ZW5lcihsOiBMaXN0ZW5lcik6IHZvaWQge1xuICAgIGwuY291bnRPZkxpc3RlbmVycyAtPSAxO1xuICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDApIHtcbiAgICAgIGwudW5zdWJzY3JpYmUhKCk7XG4gICAgICBsLnVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19