/**
 * @fileoverview added by tsickle
 * Generated from: nz-option-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionGroupComponent {
    constructor() {
        this.isLabelString = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLabel(value) {
        this.label = value;
        this.isLabelString = !(this.nzLabel instanceof TemplateRef);
    }
    /**
     * @return {?}
     */
    get nzLabel() {
        return this.label;
    }
}
NzOptionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            }] }
];
NzOptionGroupComponent.propDecorators = {
    listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
    nzLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBUzFELE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQWF4QixDQUFDOzs7OztJQVRDLElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLHFDQUErQzthQUNoRDs7O3NDQUlFLGVBQWUsU0FBQyxpQkFBaUI7c0JBRWpDLEtBQUs7Ozs7SUFKTiwrQ0FBc0I7O0lBQ3RCLHVDQUFrQzs7SUFDbEMseURBQTBGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1vcHRpb24tZ3JvdXAnLFxuICBleHBvcnRBczogJ256T3B0aW9uR3JvdXAnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Hcm91cENvbXBvbmVudCB7XG4gIGlzTGFiZWxTdHJpbmcgPSBmYWxzZTtcbiAgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAQ29udGVudENoaWxkcmVuKE56T3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpMYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmxhYmVsID0gdmFsdWU7XG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh0aGlzLm56TGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gIH1cblxuICBnZXQgbnpMYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cbn1cbiJdfQ==