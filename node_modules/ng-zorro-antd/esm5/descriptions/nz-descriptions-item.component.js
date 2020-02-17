/**
 * @fileoverview added by tsickle
 * Generated from: nz-descriptions-item.component.ts
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
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputNumber } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
var NzDescriptionsItemComponent = /** @class */ (function () {
    function NzDescriptionsItemComponent() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzDescriptionsItemComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.inputChange$.next();
    };
    /**
     * @return {?}
     */
    NzDescriptionsItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.inputChange$.complete();
    };
    NzDescriptionsItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-descriptions-item',
                    template: "<!-- Use a template to wrap contents so contents wouldn't be displayed. -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                    exportAs: 'nzDescriptionsItem',
                    preserveWhitespaces: false
                }] }
    ];
    NzDescriptionsItemComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        nzSpan: [{ type: Input }],
        nzTitle: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
    return NzDescriptionsItemComponent;
}());
export { NzDescriptionsItemComponent };
if (false) {
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.content;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzSpan;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsItemComponent.prototype.inputChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kZXNjcmlwdGlvbnMvIiwic291cmNlcyI6WyJuei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBVzBCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFTOUMsQ0FBQzs7OztJQVBDLGlEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFKQUFvRDtvQkFDcEQsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7OzswQkFFRSxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFFdkMsS0FBSzswQkFDTCxLQUFLOztJQURrQjtRQUFkLFdBQVcsRUFBRTs7K0RBQVk7SUFZckMsa0NBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWZZLDJCQUEyQjs7O0lBQ3RDLDhDQUFxRTs7SUFFckUsNkNBQW1DOztJQUNuQyw4Q0FBOEI7O0lBRTlCLG1EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1kZXNjcmlwdGlvbnMtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbnpEZXNjcmlwdGlvbnNJdGVtJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelNwYW4gPSAxO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgPSAnJztcblxuICByZWFkb25seSBpbnB1dENoYW5nZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDaGFuZ2UkLm5leHQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDaGFuZ2UkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==