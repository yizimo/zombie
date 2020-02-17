/**
 * @fileoverview added by tsickle
 * Generated from: nz-form-item.component.ts
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
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, NgZone, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormExplainComponent } from './nz-form-explain.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
export class NzFormItemComponent extends NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} nzDomEventService
     * @param {?} cdr
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.nzFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    /**
     * @return {?}
     */
    updateFlexStyle() {
        if (this.nzFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('nzFlex')) {
            this.updateFlexStyle();
        }
    }
}
NzFormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-item',
                exportAs: 'nzFormItem',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                styles: [`
      nz-form-item {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: NzDomEventService },
    { type: ChangeDetectorRef }
];
NzFormItemComponent.propDecorators = {
    nzFlex: [{ type: Input }],
    listOfNzFormExplainComponent: [{ type: ContentChildren, args: [NzFormExplainComponent, { descendants: true },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzFormItemComponent.prototype, "nzFlex", void 0);
if (false) {
    /** @type {?} */
    NzFormItemComponent.prototype.nzFlex;
    /** @type {?} */
    NzFormItemComponent.prototype.listOfNzFormExplainComponent;
    /** @type {?} */
    NzFormItemComponent.prototype.withHelpClass;
    /** @type {?} */
    NzFormItemComponent.prototype.tipsMode;
    /**
     * @type {?}
     * @private
     */
    NzFormItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBQ1QsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFzQnJFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjOzs7Ozs7Ozs7OztJQXNCckQsWUFDRSxVQUFzQixFQUN0QixRQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUM1QixHQUFzQjtRQUU5QixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRmpHLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBNUJQLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQTJCZixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQTFCRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFnQkQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPO2lCQUN0QyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2lCQUNBLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxxQ0FBNEM7Z0JBQzVDLElBQUksRUFBRTtvQkFDSixpQ0FBaUMsRUFBRSxlQUFlO2lCQUNuRDt5QkFFQzs7OztLQUlDO2FBRUo7Ozs7WUFyQ0MsVUFBVTtZQU9WLFNBQVM7WUFNK0Isd0JBQXdCO1lBckJ6RCxZQUFZO1lBVW5CLE1BQU07WUFUQyxRQUFRO1lBb0JNLGlCQUFpQjtZQWhCdEMsaUJBQWlCOzs7cUJBMkNoQixLQUFLOzJDQUNMLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7O0FBRHJDO0lBQWYsWUFBWSxFQUFFOzttREFBeUI7OztJQUFqRCxxQ0FBaUQ7O0lBQ2pELDJEQUNnRTs7SUFDaEUsNENBQXNCOztJQUN0Qix1Q0FBaUI7Ozs7O0lBd0JmLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RG9tRXZlbnRTZXJ2aWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuXG5pbXBvcnQgeyBOekZvcm1FeHBsYWluQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50JztcblxuLyoqIHNob3VsZCBhZGQgbnotcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZm9ybS1pdGVtJyxcbiAgZXhwb3J0QXM6ICduekZvcm1JdGVtJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3dpdGhIZWxwQ2xhc3MnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWZvcm0taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgTnpSb3dEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGbGV4OiBib29sZWFuID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpGb3JtRXhwbGFpbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpGb3JtRXhwbGFpbkNvbXBvbmVudD47XG4gIHdpdGhIZWxwQ2xhc3MgPSBmYWxzZTtcbiAgdGlwc01vZGUgPSBmYWxzZTtcblxuICB1cGRhdGVGbGV4U3R5bGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpGbGV4KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0V2l0aEhlbHBWaWFUaXBzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy50aXBzTW9kZSA9IHRydWU7XG4gICAgdGhpcy53aXRoSGVscENsYXNzID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgbWVkaWFNYXRjaGVyLCBuZ1pvbmUsIHBsYXRmb3JtLCBuekRvbUV2ZW50U2VydmljZSk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbScpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50aXBzTW9kZSkge1xuICAgICAgdGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50LmNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQubGVuZ3RoID4gMDtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMudXBkYXRlRmxleFN0eWxlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekZsZXgnKSkge1xuICAgICAgdGhpcy51cGRhdGVGbGV4U3R5bGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==