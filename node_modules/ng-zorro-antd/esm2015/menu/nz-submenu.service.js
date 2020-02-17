/**
 * @fileoverview added by tsickle
 * Generated from: nz-submenu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { NzMenuService } from './nz-menu.service';
export class NzSubmenuService {
    /**
     * @param {?} nzHostSubmenuService
     * @param {?} nzMenuService
     */
    constructor(nzHostSubmenuService, nzMenuService) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        mode => {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })), tap((/**
         * @param {?} mode
         * @return {?}
         */
        mode => (this.mode = (/** @type {?} */ (mode))))));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => value[0] || value[1])), auditTime(150), distinctUntilChanged(), tap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.setOpenState(data);
            if (this.nzHostSubmenuService) {
                this.nzHostSubmenuService.subMenuOpen$.next(data);
            }
        })));
        if (this.nzHostSubmenuService) {
            this.setLevel(this.nzHostSubmenuService.level + 1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.open$.next(value);
    }
    /**
     * @return {?}
     */
    onMenuItemClick() {
        this.setMouseEnterState(false);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setLevel(value) {
        this.level$.next(value);
        this.level = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMouseEnterState(value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    }
}
NzSubmenuService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzSubmenuService.ctorParameters = () => [
    { type: NzSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: NzMenuService }
];
if (false) {
    /** @type {?} */
    NzSubmenuService.prototype.disabled;
    /** @type {?} */
    NzSubmenuService.prototype.mode;
    /** @type {?} */
    NzSubmenuService.prototype.mode$;
    /** @type {?} */
    NzSubmenuService.prototype.level;
    /** @type {?} */
    NzSubmenuService.prototype.level$;
    /** @type {?} */
    NzSubmenuService.prototype.subMenuOpen$;
    /** @type {?} */
    NzSubmenuService.prototype.open$;
    /** @type {?} */
    NzSubmenuService.prototype.mouseEnterLeave$;
    /** @type {?} */
    NzSubmenuService.prototype.menuOpen$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.nzHostSubmenuService;
    /** @type {?} */
    NzSubmenuService.prototype.nzMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsibnotc3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2xELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBbUQzQixZQUNrQyxvQkFBc0MsRUFDL0QsYUFBNEI7UUFESCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWtCO1FBQy9ELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBcERyQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBdUIsVUFBVSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ25DLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDM0QsT0FBTyxVQUFVLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsT0FBTyxZQUFZLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsSUFBSSxFQUFzQixDQUFDLEVBQUMsQ0FDdEQsQ0FBQztRQUNGLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUMxQyxjQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUN0RSxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQ2xDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDZCxvQkFBb0IsRUFBRSxFQUN0QixHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUF5QkEsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Ozs7SUExQkQsWUFBWSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUFsREYsVUFBVTs7OztZQXFEK0MsZ0JBQWdCLHVCQUFyRSxRQUFRLFlBQUksUUFBUTtZQXZEaEIsYUFBYTs7OztJQUlwQixvQ0FBaUI7O0lBQ2pCLGdDQUFzQzs7SUFDdEMsaUNBV0U7O0lBQ0YsaUNBQVU7O0lBQ1Ysa0NBQXdDOztJQUN4Qyx3Q0FBbUQ7O0lBQ25ELGlDQUE0Qzs7SUFDNUMsNENBQTBDOztJQUMxQyxxQ0FVRTs7Ozs7SUFzQkEsZ0RBQXNFOztJQUN0RSx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51U2VydmljZSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIG1vZGUkID0gdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUoXG4gICAgbWFwKG1vZGUgPT4ge1xuICAgICAgaWYgKG1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3ZlcnRpY2FsJyB8fCB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0YXAobW9kZSA9PiAodGhpcy5tb2RlID0gbW9kZSBhcyBOekRpcmVjdGlvblZISVR5cGUpKVxuICApO1xuICBsZXZlbCA9IDE7XG4gIGxldmVsJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigxKTtcbiAgc3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIG9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIG1vdXNlRW50ZXJMZWF2ZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBtZW51T3BlbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMuc3ViTWVudU9wZW4kLCB0aGlzLm1vdXNlRW50ZXJMZWF2ZSQpLnBpcGUoXG4gICAgbWFwKHZhbHVlID0+IHZhbHVlWzBdIHx8IHZhbHVlWzFdKSxcbiAgICBhdWRpdFRpbWUoMTUwKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcChkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGRhdGEpO1xuICAgICAgaWYgKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZS5zdWJNZW51T3BlbiQubmV4dChkYXRhKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3VzZUVudGVyU3RhdGUoZmFsc2UpO1xuICB9XG5cbiAgc2V0TGV2ZWwodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubGV2ZWwkLm5leHQodmFsdWUpO1xuICAgIHRoaXMubGV2ZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICgodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcgfHwgdGhpcy5tb2RlID09PSAndmVydGljYWwnIHx8IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24pICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1vdXNlRW50ZXJMZWF2ZSQubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekhvc3RTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTnpNZW51U2VydmljZVxuICApIHtcbiAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgdGhpcy5zZXRMZXZlbCh0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=