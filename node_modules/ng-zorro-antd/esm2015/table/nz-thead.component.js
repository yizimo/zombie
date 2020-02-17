/**
 * @fileoverview added by tsickle
 * Generated from: nz-thead.component.ts
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
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzTableComponent } from './nz-table.component';
import { NzThComponent } from './nz-th.component';
export class NzTheadComponent {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} nzTableComponent
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(nzTableComponent, elementRef, renderer) {
        this.nzTableComponent = nzTableComponent;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.nzSingleSort = false;
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listOfNzThComponent.changes
            .pipe(startWith(true), switchMap((/**
         * @return {?}
         */
        () => merge(...this.listOfNzThComponent.map((/**
         * @param {?} th
         * @return {?}
         */
        th => th.nzSortChangeWithKey))))), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.nzSortChange.emit(data);
            if (this.nzSingleSort) {
                this.listOfNzThComponent.forEach((/**
                 * @param {?} th
                 * @return {?}
                 */
                th => {
                    th.nzSort = th.nzSortKey === data.key ? th.nzSort : null;
                    th.marForCheck();
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzTableComponent) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTheadComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!nzTableComponent\">\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n</ng-container>"
            }] }
];
/** @nocollapse */
NzTheadComponent.ctorParameters = () => [
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];
NzTheadComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['contentTemplate', { static: true },] }],
    listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
    nzSingleSort: [{ type: Input }],
    nzSortChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTheadComponent.prototype, "nzSingleSort", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.destroy$;
    /** @type {?} */
    NzTheadComponent.prototype.templateRef;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTheadComponent.prototype.nzSingleSort;
    /** @type {?} */
    NzTheadComponent.prototype.nzSortChange;
    /** @type {?} */
    NzTheadComponent.prototype.nzTableComponent;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVNsRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBUTNCLFlBQzZCLGdCQUFrQyxFQUNyRCxVQUFzQixFQUN0QixRQUFtQjtRQUZBLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDckQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVnJCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDM0IsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQVFuRixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTzthQUM3QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUNiLEtBQUssQ0FBaUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFDLENBQUMsRUFDckcsRUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLElBQW9DLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPOzs7O2dCQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUNwQyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN6RCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25IO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQywwTkFBd0M7YUFDekM7Ozs7WUFUUSxnQkFBZ0IsdUJBbUJwQixJQUFJLFlBQUksUUFBUTtZQXJDbkIsVUFBVTtZQVFWLFNBQVM7OzswQkFzQlIsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtrQ0FDN0MsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7MkJBQ3BELEtBQUs7MkJBQ0wsTUFBTTs7QUFEa0I7SUFBZixZQUFZLEVBQUU7O3NEQUFzQjs7Ozs7O0lBSDlDLG9DQUF1Qzs7SUFDdkMsdUNBQStFOztJQUMvRSwrQ0FBcUc7O0lBQ3JHLHdDQUE4Qzs7SUFDOUMsd0NBQXFGOztJQUluRiw0Q0FBNkQ7Ozs7O0lBQzdELHNDQUE4Qjs7Ozs7SUFDOUIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGhDb21wb25lbnQgfSBmcm9tICcuL256LXRoLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGhlYWQ6bm90KC5hbnQtdGFibGUtdGhlYWQpJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aGVhZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUaENvbXBvbmVudD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNpbmdsZVNvcnQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudCxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmICh0aGlzLm56VGFibGVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpUYWJsZUNvbXBvbmVudC5uelRoZWFkQ29tcG9uZW50ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOelRoQ29tcG9uZW50LmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgIG1lcmdlPHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4oLi4udGhpcy5saXN0T2ZOelRoQ29tcG9uZW50Lm1hcCh0aCA9PiB0aC5uelNvcnRDaGFuZ2VXaXRoS2V5KSlcbiAgICAgICAgKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgICAgaWYgKHRoaXMubnpTaW5nbGVTb3J0KSB7XG4gICAgICAgICAgdGhpcy5saXN0T2ZOelRoQ29tcG9uZW50LmZvckVhY2godGggPT4ge1xuICAgICAgICAgICAgdGgubnpTb3J0ID0gdGgubnpTb3J0S2V5ID09PSBkYXRhLmtleSA/IHRoLm56U29ydCA6IG51bGw7XG4gICAgICAgICAgICB0aC5tYXJGb3JDaGVjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelRhYmxlQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==