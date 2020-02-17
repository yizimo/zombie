/**
 * @fileoverview added by tsickle
 * Generated from: nz-context-menu.service.ts
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
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NzContextMenuServiceModule } from './nz-context-menu.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-context-menu.service.module";
var NzContextMenuService = /** @class */ (function () {
    function NzContextMenuService(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    NzContextMenuService.prototype.create = /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function ($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        /** @type {?} */
        var overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    };
    /**
     * @return {?}
     */
    NzContextMenuService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzContextMenuService.prototype.handleClickOutside = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), 
        // handle firefox contextmenu event
        filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.button !== 2; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    NzContextMenuService.prototype.attachTemplatePortal = /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function (overlayRef, nzDropdownMenuComponent) {
        var _this = this;
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    NzContextMenuService.prototype.setOpenState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.generatePositionStrategy = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return this.overlay
            .position()
            .flexibleConnectedTo({ x: $event.x, y: $event.y })
            .withPositions([
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ]);
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzContextMenuService.prototype.subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            // TODO: positionChanges won't trigger if not dispose
            _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        }));
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.createOverlay = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
        return this.overlayRef;
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.updatePosition = /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    function (overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    };
    NzContextMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzContextMenuServiceModule
                },] }
    ];
    /** @nocollapse */
    NzContextMenuService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzContextMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(i0.ɵɵinject(i1.Overlay)); }, token: NzContextMenuService, providedIn: i2.NzContextMenuServiceModule });
    return NzContextMenuService;
}());
export { NzContextMenuService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.nzDropdownMenuComponent;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.clickOutsideSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.clickMenuSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.positionSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotY29udGV4dC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFHOUU7SUFVRSw4QkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUo1Qiw2QkFBd0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzlDLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUVYLENBQUM7Ozs7OztJQUV4QyxxQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWtCLEVBQUUsdUJBQWdEO1FBQ3pFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFDbEIsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FB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OztJQUFyQixVQUFzQixNQUFrQjs7WUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBcUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBRU8sNkNBQWM7Ozs7OztJQUF0QixVQUF1QixVQUFzQixFQUFFLE1BQWtCO1FBQy9ELFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkEzR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSwwQkFBMEI7aUJBQ3ZDOzs7O2dCQWJDLE9BQU87OzsrQkFaVDtDQW1JQyxBQTVHRCxJQTRHQztTQXpHWSxvQkFBb0I7Ozs7OztJQUMvQiwwQ0FBK0I7Ozs7O0lBQy9CLHVEQUF5RDs7Ozs7SUFDekQsd0RBQXNEOzs7OztJQUN0RCxxREFBbUQ7Ozs7O0lBQ25ELG9EQUFrRDs7Ozs7SUFFdEMsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8qKiBrZWVwIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvNTAwNyAqKi9cbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZlxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb250ZXh0LW1lbnUuc2VydmljZS5tb2R1bGUnO1xuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBOekNvbnRleHRNZW51U2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbnRleHRNZW51U2VydmljZSB7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBuekRyb3Bkb3duTWVudUNvbXBvbmVudDogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gIHByaXZhdGUgY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIGNsaWNrTWVudVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBwb3NpdGlvblN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgY3JlYXRlKCRldmVudDogTW91c2VFdmVudCwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgkZXZlbnQpO1xuICAgIGlmIChvdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2hUZW1wbGF0ZVBvcnRhbChvdmVybGF5UmVmLCBuekRyb3Bkb3duTWVudUNvbXBvbmVudCk7XG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUoKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmNsaWNrTWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2tPdXRzaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jbGlja091dHNpZGVTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdjbGljaycpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+ICEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSksXG4gICAgICAgIC8vIGhhbmRsZSBmaXJlZm94IGNvbnRleHRtZW51IGV2ZW50XG4gICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudC5idXR0b24gIT09IDIpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaFRlbXBsYXRlUG9ydGFsKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpEcm9wZG93bk1lbnVDb21wb25lbnQgPSBuekRyb3Bkb3duTWVudUNvbXBvbmVudDtcbiAgICBuekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWYWx1ZSgnbnpUcmlnZ2VyJywgJ2NsaWNrJyk7XG4gICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNsaWNrTWVudVN1YnNjcmlwdGlvbiA9IG56RHJvcGRvd25NZW51Q29tcG9uZW50Lm56TWVudURyb3Bkb3duU2VydmljZS5tZW51SXRlbUNsaWNrJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIG92ZXJsYXlSZWYuYXR0YWNoKFxuICAgICAgbmV3IFRlbXBsYXRlUG9ydGFsKG56RHJvcGRvd25NZW51Q29tcG9uZW50LnRlbXBsYXRlUmVmLCBuekRyb3Bkb3duTWVudUNvbXBvbmVudC52aWV3Q29udGFpbmVyUmVmKVxuICAgICk7XG4gICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldE9wZW5TdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoJ29wZW4nLCBzdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoJGV2ZW50OiBNb3VzZUV2ZW50KTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBhbmVsQ2xhc3M6ICduei1kcm9wZG93bi1wYW5lbCcsXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQb3NpdGlvblN0cmF0ZWd5KCRldmVudDogTW91c2VFdmVudCk6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHsgeDogJGV2ZW50LngsIHk6ICRldmVudC55IH0pXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxuICAgICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgIF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1Bvc2l0aW9ucyhwb3NpdGlvbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICAvLyBUT0RPOiBwb3NpdGlvbkNoYW5nZXMgd29uJ3QgdHJpZ2dlciBpZiBub3QgZGlzcG9zZVxuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWYWx1ZShcbiAgICAgICAgJ2Ryb3BEb3duUG9zaXRpb24nLFxuICAgICAgICBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVkgPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBPdmVybGF5UmVmIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoJGV2ZW50KTtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHRoaXMub3ZlcmxheVJlZiwgJGV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVUb1Bvc2l0aW9ucyhjb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsICRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLmdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQpKTtcbiAgfVxufVxuIl19