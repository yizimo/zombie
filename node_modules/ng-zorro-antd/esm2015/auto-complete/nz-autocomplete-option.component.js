/**
 * @fileoverview added by tsickle
 * Generated from: nz-autocomplete-option.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { scrollIntoView, InputBoolean } from 'ng-zorro-antd/core';
export class NzOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
if (false) {
    /** @type {?} */
    NzOptionSelectionChange.prototype.source;
    /** @type {?} */
    NzOptionSelectionChange.prototype.isUserInput;
}
export class NzAutocompleteOptionComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} element
     */
    constructor(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    /**
     * @param {?=} emit
     * @return {?}
     */
    select(emit = true) {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    }
    /**
     * @return {?}
     */
    deselect() {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    }
    /**
     * Git display label
     * @return {?}
     */
    getLabel() {
        return this.nzLabel || this.nzValue.toString();
    }
    /**
     * Set active (only styles)
     * @return {?}
     */
    setActiveStyles() {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * Unset active (only styles)
     * @return {?}
     */
    setInactiveStyles() {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    scrollIntoViewIfNeeded() {
        scrollIntoView(this.element.nativeElement);
    }
    /**
     * @return {?}
     */
    selectViaInteraction() {
        if (!this.nzDisabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    emitSelectionChangeEvent(isUserInput = false) {
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    }
}
NzAutocompleteOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-auto-option',
                exportAs: 'nzAutoOption',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>",
                host: {
                    role: 'menuitem',
                    class: 'ant-select-dropdown-menu-item',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                    '[class.ant-select-dropdown-menu-item-active]': 'active',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'nzDisabled.toString()',
                    '(click)': 'selectViaInteraction()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }] }
];
/** @nocollapse */
NzAutocompleteOptionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NzAutocompleteOptionComponent.propDecorators = {
    nzValue: [{ type: Input }],
    nzLabel: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
if (false) {
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteOptionComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteOptionComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUvIiwic291cmNlcyI6WyJuei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxZQUFtQixNQUFxQyxFQUFTLGNBQXVCLEtBQUs7UUFBMUUsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFBRyxDQUFDO0NBQ2xHOzs7SUFEYSx5Q0FBNEM7O0lBQUUsOENBQW1DOztBQXNCL0YsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFVeEMsWUFBb0IsaUJBQW9DLEVBQVUsT0FBbUI7UUFBakUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFONUQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRWpGLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRXVFLENBQUM7Ozs7O0lBRXpGLE1BQU0sQ0FBQyxPQUFnQixJQUFJO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7WUFDRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sd0JBQXdCLENBQUMsY0FBdUIsS0FBSztRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXJGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMscUNBQXNEO2dCQUN0RCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEtBQUssRUFBRSwrQkFBK0I7b0JBQ3RDLGdEQUFnRCxFQUFFLFVBQVU7b0JBQzVELDhDQUE4QyxFQUFFLFFBQVE7b0JBQ3hELGdEQUFnRCxFQUFFLFlBQVk7b0JBQzlELHNCQUFzQixFQUFFLHFCQUFxQjtvQkFDN0Msc0JBQXNCLEVBQUUsdUJBQXVCO29CQUMvQyxTQUFTLEVBQUUsd0JBQXdCO29CQUNuQyxhQUFhLEVBQUUseUJBQXlCO2lCQUN6QzthQUNGOzs7O1lBakNDLGlCQUFpQjtZQUVqQixVQUFVOzs7c0JBa0NULEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLE1BQU07O0FBRGtCO0lBQWYsWUFBWSxFQUFFOztpRUFBb0I7OztJQUY1QyxnREFBc0I7O0lBQ3RCLGdEQUF5Qjs7SUFDekIsbURBQTRDOztJQUM1Qyx3REFBaUY7O0lBRWpGLCtDQUFlOztJQUNmLGlEQUFpQjs7Ozs7SUFFTCwwREFBNEM7Ozs7O0lBQUUsZ0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzY3JvbGxJbnRvVmlldywgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHNvdXJjZTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIHB1YmxpYyBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hdXRvLW9wdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpBdXRvT3B0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAnbWVudWl0ZW0nLFxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0nLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2F0dHIuYXJpYS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQudG9TdHJpbmcoKScsXG4gICAgJyhjbGljayknOiAnc2VsZWN0VmlhSW50ZXJhY3Rpb24oKScsXG4gICAgJyhtb3VzZWRvd24pJzogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBASW5wdXQoKSBuelZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIG56TGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+KCk7XG5cbiAgYWN0aXZlID0gZmFsc2U7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBzZWxlY3QoZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIGRlc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KCk7XG4gIH1cblxuICAvKiogR2l0IGRpc3BsYXkgbGFiZWwgKi9cbiAgZ2V0TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uekxhYmVsIHx8IHRoaXMubnpWYWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqIFNldCBhY3RpdmUgKG9ubHkgc3R5bGVzKSAqL1xuICBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogVW5zZXQgYWN0aXZlIChvbmx5IHN0eWxlcykgKi9cbiAgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk6IHZvaWQge1xuICAgIHNjcm9sbEludG9WaWV3KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHNlbGVjdFZpYUludGVyYWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQodHJ1ZSk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG5ldyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSh0aGlzLCBpc1VzZXJJbnB1dCkpO1xuICB9XG59XG4iXX0=