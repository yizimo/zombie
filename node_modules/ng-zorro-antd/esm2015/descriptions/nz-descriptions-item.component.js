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
export class NzDescriptionsItemComponent {
    constructor() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.inputChange$.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.inputChange$.complete();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kZXNjcmlwdGlvbnMvIiwic291cmNlcyI6WyJuei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVUvQixNQUFNLE9BQU8sMkJBQTJCO0lBUnhDO1FBVzBCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFTOUMsQ0FBQzs7OztJQVBDLFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMscUpBQW9EO2dCQUNwRCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7c0JBRUUsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBRXZDLEtBQUs7c0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7OzJEQUFZOzs7SUFGbkMsOENBQXFFOztJQUVyRSw2Q0FBbUM7O0lBQ25DLDhDQUE4Qjs7SUFFOUIsbURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWRlc2NyaXB0aW9ucy1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICduekRlc2NyaXB0aW9uc0l0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3BhbiA9IDE7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gIHJlYWRvbmx5IGlucHV0Q2hhbmdlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZSQubmV4dCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19