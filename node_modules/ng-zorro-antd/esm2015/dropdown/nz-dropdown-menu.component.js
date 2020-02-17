/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, Renderer2, Self, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
export class NzDropdownMenuComponent {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} viewContainerRef
     * @param {?} nzMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.open = false;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.visible$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzPlacement = 'bottomLeft';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzTableFilter = false;
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
}
NzDropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: `nz-dropdown-menu`,
                template: "<ng-template>\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown nz-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n       [ngClass]=\"nzOverlayClassName\"\n       [ngStyle]=\"nzOverlayStyle\"\n       [@slideMotion]=\"dropDownPosition\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                exportAs: `nzDropdownMenu`,
                animations: [slideMotion],
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: dropdownMenuServiceFactory,
                        deps: [[new Self(), Injector]]
                    }
                ],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :root .ant-dropdown.nz-dropdown {
        top: 0;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropdownMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDropdownMenuComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzDropdownMenuComponent.prototype.open;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.visible$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.renderer;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.viewContainerRef;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxFQUNKLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGlDQUFpQyxFQUVqQyxzQkFBc0IsRUFDdkIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUluRSxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBa0I7SUFDM0QsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQStCRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7SUF3QmxDLFlBQ1UsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZ0JBQWtDLEVBQ2xDLHFCQUE0QyxFQUN4QixXQUFvQztRQUx2RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTdCakUsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFnQyxRQUFRLENBQUM7UUFDekQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsY0FBUyxHQUFzQixPQUFPLENBQUM7UUFDdkMsZ0JBQVcsR0FBb0IsWUFBWSxDQUFDO1FBQzVDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUE4QixFQUFFLENBQUM7UUFDL0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFzQm5CLENBQUM7Ozs7OztJQWxCSixtQkFBbUIsQ0FBQyxPQUFnQixFQUFFLFVBQXFDLEtBQUs7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELFFBQVEsQ0FBMEMsR0FBTSxFQUFFLEtBQWM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFXRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BILENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZ21CQUFnRDtnQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN6QixTQUFTLEVBQUU7b0JBQ1QscUJBQXFCO29CQUNyQjt3QkFDRSxPQUFPLEVBQUUsaUNBQWlDO3dCQUMxQyxVQUFVLEVBQUUsMEJBQTBCO3dCQUN0QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQy9CO2lCQUNGO2dCQWFELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFiN0M7Ozs7Ozs7OztLQVNDO2FBS0o7Ozs7WUF6REMsaUJBQWlCO1lBRWpCLFVBQVU7WUFJVixTQUFTO1lBSVQsZ0JBQWdCO1lBV1QscUJBQXFCO1lBSjVCLHNCQUFzQix1QkF1RW5CLElBQUksWUFBSSxRQUFROzs7MEJBbkJsQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVZ4Qyx1Q0FBYTs7SUFDYiwrQ0FBaUI7O0lBQ2pCLG1EQUF5RDs7SUFDekQsMkNBQWtDOztJQUNsQyw0Q0FBdUM7O0lBQ3ZDLDhDQUE0Qzs7SUFDNUMscURBQXdCOztJQUN4QixpREFBK0M7O0lBQy9DLGdEQUFzQjs7SUFFdEIsOENBQXdFOzs7OztJQWN0RSxzQ0FBOEI7Ozs7O0lBQzlCLDZDQUE4Qjs7Ozs7SUFDOUIsMkNBQTJCOztJQUMzQixtREFBeUM7O0lBQ3pDLHdEQUFtRDs7SUFDbkQsOENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbmplY3RvcixcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBzbGlkZU1vdGlvbixcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICBOek1lbnVCYXNlU2VydmljZSxcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRyb3Bkb3duTWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlIHtcbiAgcmV0dXJuIGluamVjdG9yLmdldChOek1lbnVEcm9wZG93blNlcnZpY2UpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBuei1kcm9wZG93bi1tZW51YCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBleHBvcnRBczogYG56RHJvcGRvd25NZW51YCxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgICAgIHVzZUZhY3Rvcnk6IGRyb3Bkb3duTWVudVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXG4gICAgfVxuICBdLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6cm9vdCAuYW50LWRyb3Bkb3duLm56LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBvcGVuID0gZmFsc2U7XG4gIHRyaWdnZXJXaWR0aCA9IDA7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xuICBuelBsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xuICBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgbnpUYWJsZUZpbHRlciA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHNldFZpc2libGVTdGF0ZVdoZW4odmlzaWJsZTogYm9vbGVhbiwgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyA9ICdhbGwnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSB0cmlnZ2VyIHx8IHRyaWdnZXIgPT09ICdhbGwnKSB7XG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIE56RHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiB0aGlzW1RdKTogdm9pZCB7XG4gICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==