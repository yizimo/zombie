/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** keep track https://github.com/angular/material2/issues/5007 **/
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropdownServiceModule } from './nz-dropdown.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-dropdown.service.module";
var NzDropdownService = /** @class */ (function () {
    function NzDropdownService(overlay) {
        this.overlay = overlay;
        warnDeprecation("'NzDropdownService' is going to be removed in 9.0.0. Please use 'NzContextMenuService' instead. Read https://ng.ant.design/components/dropdown/en");
    }
    /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    NzDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    function ($event, templateRef) {
        var _this = this;
        $event.preventDefault();
        this.dispose();
        this.overlayRef = this.overlay.create(new OverlayConfig({
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo({
                x: $event.x,
                y: $event.y
            })
                .withPositions([
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            ])
        }));
        /** @type {?} */
        var positionChanges = ((/** @type {?} */ (this.overlayRef.getConfig().positionStrategy)))
            .positionChanges;
        /** @type {?} */
        var instance = this.overlayRef.attach(new ComponentPortal(NzDropdownContextComponent)).instance;
        fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () { return instance.close(); }));
        instance.init(true, templateRef, positionChanges, this);
        return instance;
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    NzDropdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzDropdownServiceModule
                },] }
    ];
    /** @nocollapse */
    NzDropdownService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzDropdownService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDropdownService_Factory() { return new NzDropdownService(i0.ɵɵinject(i1.Overlay)); }, token: NzDropdownService, providedIn: i2.NzDropdownServiceModule });
    return NzDropdownService;
}());
export { NzDropdownService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropdownService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJvcGRvd24vIiwic291cmNlcyI6WyJuei1kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRXZFO0lBU0UsMkJBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDbEMsZUFBZSxDQUNiLG1KQUFtSixDQUNwSixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsa0NBQU07Ozs7O0lBQU4sVUFBTyxNQUFrQixFQUFFLFdBQThCO1FBQXpELGlCQWdDQztRQS9CQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDbkMsSUFBSSxhQUFhLENBQUM7WUFDaEIsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQzNCLFFBQVEsRUFBRTtpQkFDVixtQkFBbUIsQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNaLENBQUM7aUJBQ0QsYUFBYSxDQUFDO2dCQUNiLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUN4RyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3pHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3ZHLENBQUM7U0FDTCxDQUFDLENBQ0gsQ0FBQzs7WUFDSSxlQUFlLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFxQyxDQUFDO2FBQ3hHLGVBQWU7O1lBQ1osUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQ2pHLFNBQVMsQ0FBYSxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLElBQUksQ0FDSCxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlLENBQUMsRUFBMUYsQ0FBMEYsRUFBQyxFQUMzRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbUNBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkF0REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSx1QkFBdUI7aUJBQ3BDOzs7O2dCQWRDLE9BQU87Ozs0QkFaVDtDQStFQyxBQXZERCxJQXVEQztTQWpEWSxpQkFBaUI7Ozs7OztJQUM1Qix1Q0FBc0M7Ozs7O0lBRTFCLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vKioga2VlcCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzUwMDcgKiovXG5pbXBvcnQge1xuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJvcGRvd25TZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5zZXJ2aWNlLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogTnpEcm9wZG93blNlcnZpY2VNb2R1bGVcbn0pXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgTnpDb250ZXh0TWVudVNlcnZpY2VgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duU2VydmljZSB7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCdOekRyb3Bkb3duU2VydmljZScgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTnpDb250ZXh0TWVudVNlcnZpY2UnIGluc3RlYWQuIFJlYWQgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJvcGRvd24vZW5gXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPik6IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxuICAgICAgbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICAgICAgcGFuZWxDbGFzczogJ256LWRyb3Bkb3duLXBhbmVsJyxcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5XG4gICAgICAgICAgLnBvc2l0aW9uKClcbiAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh7XG4gICAgICAgICAgICB4OiAkZXZlbnQueCxcbiAgICAgICAgICAgIHk6ICRldmVudC55XG4gICAgICAgICAgfSlcbiAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICAgICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxuICAgICAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxuICAgICAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBwb3NpdGlvbkNoYW5nZXMgPSAodGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KVxuICAgICAgLnBvc2l0aW9uQ2hhbmdlcztcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCkpLmluc3RhbmNlO1xuICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gISF0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiBpbnN0YW5jZS5jbG9zZSgpKTtcbiAgICBpbnN0YW5jZS5pbml0KHRydWUsIHRlbXBsYXRlUmVmLCBwb3NpdGlvbkNoYW5nZXMsIHRoaXMpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=