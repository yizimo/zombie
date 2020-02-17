/**
 * @fileoverview added by tsickle
 * Generated from: nz-countdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { REFRESH_INTERVAL } from './nz-statistic-definitions';
import { NzStatisticComponent } from './nz-statistic.component';
export class NzCountdownComponent extends NzStatisticComponent {
    /**
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(cdr, ngZone, platform) {
        super();
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        /**
         * @override
         */
        this.nzFormat = 'HH:mm:ss';
        this.nzCountdownFinish = new EventEmitter();
    }
    /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.syncTimer();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stopTimer();
    }
    /**
     * @return {?}
     */
    syncTimer() {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    }
    /**
     * @return {?}
     */
    startTimer() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.stopTimer();
                this.updater_ = interval(REFRESH_INTERVAL).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.updateValue();
                    this.cdr.detectChanges();
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    stopTimer() {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    }
    /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    updateValue() {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    }
}
NzCountdownComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-countdown',
                exportAs: 'nzCountdown',
                template: "<nz-statistic\n  [nzValue]=\"diff\"\n  [nzValueStyle]=\"nzValueStyle\"\n  [nzValueTemplate]=\"nzValueTemplate || countDownTpl\"\n  [nzTitle]=\"nzTitle\"\n  [nzPrefix]=\"nzPrefix\"\n  [nzSuffix]=\"nzSuffix\">\n</nz-statistic>\n\n<ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>"
            }] }
];
/** @nocollapse */
NzCountdownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Platform }
];
NzCountdownComponent.propDecorators = {
    nzFormat: [{ type: Input }],
    nzCountdownFinish: [{ type: Output }]
};
if (false) {
    /**
     * @override
     * @type {?}
     */
    NzCountdownComponent.prototype.nzFormat;
    /** @type {?} */
    NzCountdownComponent.prototype.nzCountdownFinish;
    /** @type {?} */
    NzCountdownComponent.prototype.diff;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.updater_;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFTaEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG9CQUFvQjs7Ozs7O0lBVTVELFlBQW9CLEdBQXNCLEVBQVUsTUFBYyxFQUFVLFFBQWtCO1FBQzVGLEtBQUssRUFBRSxDQUFDO1FBRFUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7OztRQVJyRixhQUFRLEdBQVcsVUFBVSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFTaEUsQ0FBQzs7Ozs7O0lBR0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUzs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDeEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzQixDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7O0lBS1MsV0FBVztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMlRBQTRDO2FBQzdDOzs7O1lBdkJDLGlCQUFpQjtZQUlqQixNQUFNO1lBUEMsUUFBUTs7O3VCQTZCZCxLQUFLO2dDQUNMLE1BQU07Ozs7Ozs7SUFEUCx3Q0FBdUM7O0lBQ3ZDLGlEQUFnRTs7SUFFaEUsb0NBQWE7Ozs7O0lBRWIsc0NBQXVCOzs7OztJQUN2Qix3Q0FBc0M7Ozs7O0lBRTFCLG1DQUE4Qjs7Ozs7SUFBRSxzQ0FBc0I7Ozs7O0lBQUUsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpbnRlcnZhbCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJFRlJFU0hfSU5URVJWQUwgfSBmcm9tICcuL256LXN0YXRpc3RpYy1kZWZpbml0aW9ucyc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY0NvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1jb3VudGRvd24nLFxuICBleHBvcnRBczogJ256Q291bnRkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvdW50ZG93bi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb3VudGRvd25Db21wb25lbnQgZXh0ZW5kcyBOelN0YXRpc3RpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKiogQG92ZXJyaWRlICovXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAnSEg6bW06c3MnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb3VudGRvd25GaW5pc2ggPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZGlmZjogbnVtYmVyO1xuXG4gIHByaXZhdGUgdGFyZ2V0OiBudW1iZXI7XG4gIHByaXZhdGUgdXBkYXRlcl86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelZhbHVlKSB7XG4gICAgICB0aGlzLnRhcmdldCA9IE51bWJlcihjaGFuZ2VzLm56VmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICAgIGlmICghY2hhbmdlcy5uelZhbHVlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICB0aGlzLnN5bmNUaW1lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3luY1RpbWVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICB9XG5cbiAgc3luY1RpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhcmdldCA+PSBEYXRlLm5vdygpKSB7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZXJfID0gaW50ZXJ2YWwoUkVGUkVTSF9JTlRFUlZBTCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cGRhdGVyXykge1xuICAgICAgdGhpcy51cGRhdGVyXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy51cGRhdGVyXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aW1lIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlmZiA9IE1hdGgubWF4KHRoaXMudGFyZ2V0IC0gRGF0ZS5ub3coKSwgMCk7XG5cbiAgICBpZiAodGhpcy5kaWZmID09PSAwKSB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgdGhpcy5uekNvdW50ZG93bkZpbmlzaC5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=