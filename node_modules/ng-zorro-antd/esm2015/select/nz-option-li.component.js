/**
 * @fileoverview added by tsickle
 * Generated from: nz-option-li.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectService } from './nz-select.service';
export class NzOptionLiComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    /**
     * @return {?}
     */
    clickOption() {
        this.nzSelectService.clickOption(this.nzOption);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.selected = isNotNil(list.find((/**
             * @param {?} v
             * @return {?}
             */
            v => this.nzSelectService.compareWith(v, this.nzOption.nzValue))));
            this.cdr.markForCheck();
        }));
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option) {
                this.active = this.nzSelectService.compareWith(option.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzOptionLiComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-option-li]',
                exportAs: 'nzOptionLi',
                template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\n  {{nzOption.nzLabel}}\n</ng-container>\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }] }
];
/** @nocollapse */
NzOptionLiComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzSelectService },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
NzOptionLiComponent.propDecorators = {
    nzOption: [{ type: Input }],
    nzMenuItemSelectedIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzOptionLiComponent.prototype.el;
    /** @type {?} */
    NzOptionLiComponent.prototype.selected;
    /** @type {?} */
    NzOptionLiComponent.prototype.active;
    /** @type {?} */
    NzOptionLiComponent.prototype.destroy$;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzMenuItemSelectedIcon;
    /**
     * @type {?}
     * @private
     */
    NzOptionLiComponent.prototype.elementRef;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzOptionLiComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0J0RCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBWTlCLFlBQ1UsVUFBc0IsRUFDdkIsZUFBZ0MsRUFDL0IsR0FBc0IsRUFDOUIsUUFBbUI7UUFIWCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWRoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBY3ZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFYRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFXRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUN4RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3JHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RGLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG1WQUE0QztnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osZ0RBQWdELEVBQUUsa0NBQWtDO29CQUNwRixnREFBZ0QsRUFBRSxxQkFBcUI7b0JBQ3ZFLDhDQUE4QyxFQUFFLGdDQUFnQztvQkFDaEYscUJBQXFCLEVBQUUsZ0JBQWdCO29CQUN2QyxxQkFBcUIsRUFBRSxRQUFRO29CQUMvQixTQUFTLEVBQUUsZUFBZTtvQkFDMUIsYUFBYSxFQUFFLHlCQUF5QjtpQkFDekM7YUFDRjs7OztZQS9CQyxVQUFVO1lBY0gsZUFBZTtZQWhCdEIsaUJBQWlCO1lBTWpCLFNBQVM7Ozt1QkFpQ1IsS0FBSztxQ0FDTCxLQUFLOzs7O0lBTE4saUNBQWdEOztJQUNoRCx1Q0FBaUI7O0lBQ2pCLHFDQUFlOztJQUNmLHVDQUF5Qjs7SUFDekIsdUNBQXFDOztJQUNyQyxxREFBbUQ7Ozs7O0lBT2pELHlDQUE4Qjs7SUFDOUIsOENBQXVDOzs7OztJQUN2QyxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei1zZWxlY3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tbGldJyxcbiAgZXhwb3J0QXM6ICduek9wdGlvbkxpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256T3B0aW9uLm56RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXSc6ICdhY3RpdmUgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJzogJ1widW5zZWxlY3RhYmxlXCInLFxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJzogJ1wibm9uZVwiJyxcbiAgICAnKGNsaWNrKSc6ICdjbGlja09wdGlvbigpJyxcbiAgICAnKG1vdXNlZG93biknOiAnJGV2ZW50LnByZXZlbnREZWZhdWx0KCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25MaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBJbnB1dCgpIG56T3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudDtcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY2xpY2tPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xpY2tPcHRpb24odGhpcy5uek9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogTnpTZWxlY3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGlzTm90TmlsKGxpc3QuZmluZCh2ID0+IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKHYsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xuICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG9wdGlvbi5uelZhbHVlLCB0aGlzLm56T3B0aW9uLm56VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=