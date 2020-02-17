/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader-li.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    Object.defineProperty(NzCascaderOptionComponent.prototype, "optionLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.option[this.nzLabelProperty];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    NzCascaderOptionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    exportAs: 'nzCascaderOption',
                    template: "<ng-container *ngIf=\"optionTemplate; else defaultOptionTemplate\">\n  <ng-template [ngTemplateOutlet]=\"optionTemplate\"\n               [ngTemplateOutletContext]=\"{ $implicit: option, index: columnIndex }\"></ng-template>\n</ng-container>\n<ng-template #defaultOptionTemplate>\n  <span [innerHTML]=\"optionLabel | nzHighlight: highlightText: 'g': 'ant-cascader-menu-item-keyword'\"></span>\n</ng-template>\n<span *ngIf=\"!option.isLeaf || option.children?.length || option.loading\"\n      class=\"ant-cascader-menu-item-expand-icon\">\n  <i nz-icon\n     [nzType]=\"option.loading ? 'loading' : 'right'\"></i>\n</span>\n",
                    host: {
                        '[attr.title]': 'option.title || optionLabel',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        optionTemplate: [{ type: Input }],
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        columnIndex: [{ type: Input }]
    };
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
if (false) {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.optionTemplate;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.columnIndex;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBcUJFLG1DQUFvQixHQUFzQixFQUFFLFVBQXNCLEVBQUUsUUFBbUI7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQakMsbUJBQWMsR0FBeUMsSUFBSSxDQUFDO1FBRTVELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFJakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHNCQUFJLGtEQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBOzs7O0lBRUQsZ0RBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNG5CQUE4QztvQkFDOUMsSUFBSSxFQUFFO3dCQUNKLGNBQWMsRUFBRSw2QkFBNkI7d0JBQzdDLHVDQUF1QyxFQUFFLFdBQVc7d0JBQ3BELHVDQUF1QyxFQUFFLGdCQUFnQjt3QkFDekQseUNBQXlDLEVBQUUsaUJBQWlCO3FCQUM3RDtpQkFDRjs7OztnQkF2QkMsaUJBQWlCO2dCQUVqQixVQUFVO2dCQUVWLFNBQVM7OztpQ0FxQlIsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBYVIsZ0NBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQW5CWSx5QkFBeUI7OztJQUNwQyxtREFBcUU7O0lBQ3JFLDJDQUFrQzs7SUFDbEMsOENBQTJCOztJQUMzQixrREFBK0I7O0lBQy9CLG9EQUFtQzs7SUFDbkMsZ0RBQTZCOzs7OztJQUVqQix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnW256LWNhc2NhZGVyLW9wdGlvbl0nLFxuICBleHBvcnRBczogJ256Q2FzY2FkZXJPcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRpdGxlXSc6ICdvcHRpb24udGl0bGUgfHwgb3B0aW9uTGFiZWwnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1hY3RpdmVdJzogJ2FjdGl2YXRlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWV4cGFuZF0nOiAnIW9wdGlvbi5pc0xlYWYnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnb3B0aW9uLmRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpDYXNjYWRlck9wdGlvbj4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uO1xuICBASW5wdXQoKSBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xuICBASW5wdXQoKSBjb2x1bW5JbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlci1tZW51LWl0ZW0nKTtcbiAgfVxuXG4gIGdldCBvcHRpb25MYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvblt0aGlzLm56TGFiZWxQcm9wZXJ0eV07XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==