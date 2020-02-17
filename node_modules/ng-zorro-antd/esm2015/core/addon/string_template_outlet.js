/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class NzStringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} defaultTemplate
     */
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    /**
     * @return {?}
     */
    recreateView() {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        /** @type {?} */
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    hasContextShapeChanged(ctxChange) {
        /** @type {?} */
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    }
}
NzStringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            },] }
];
/** @nocollapse */
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultViewRef;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbInN0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBSUwsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQU12QixNQUFNLE9BQU8sK0JBQStCOzs7OztJQStGMUMsWUFBb0IsYUFBK0IsRUFBVSxlQUFrQztRQUEzRSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7O1FBNUZ2RixrQkFBYSxHQUE0QixJQUFJLENBQUM7UUFDOUMsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBQ2xELG1CQUFjLEdBQWlDLElBQUksQ0FBQzs7UUFHbkQsa0NBQTZCLEdBQWUsSUFBSSxDQUFDO0lBdUZ3QyxDQUFDOzs7OztJQXJGbkcsSUFFSSxzQkFBc0IsQ0FBQyxLQUFnQztRQUN6RCxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUN6RCxJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJLENBQUMs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SSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO2dCQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDaEU7U0FDRjtJQUNILENBQUM7OztZQW5IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7OztZQU5DLGdCQUFnQjtZQURoQixXQUFXOzs7NENBZ0JWLEtBQUs7cUNBRUwsS0FBSzs7Ozs7OztJQVROLHFEQUE0Qjs7Ozs7SUFFNUIsd0RBQXNEOzs7OztJQUN0RCx1REFBMEQ7Ozs7O0lBQzFELHlEQUE0RDs7SUFHNUQsd0VBQTBEOzs7OztJQXVGOUMsd0RBQXVDOzs7OztJQUFFLDBEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256U3RyaW5nVGVtcGxhdGVPdXRsZXRdJyxcbiAgZXhwb3J0QXM6ICduelN0cmluZ1RlbXBsYXRlT3V0bGV0J1xufSlcbmV4cG9ydCBjbGFzcyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBpc1RlbXBsYXRlOiBib29sZWFuO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgaW5wdXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGlucHV0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVmYXVsdFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IGFueSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IG56U3RyaW5nVGVtcGxhdGVPdXRsZXQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZWNyZWF0ZVZpZXcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzVGVtcGxhdGUpIHtcbiAgICAgIC8qKiB1c2UgZGVmYXVsdCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHN0cmluZyAqKi9cbiAgICAgIGlmICghdGhpcy5kZWZhdWx0Vmlld1JlZikge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VGVtcGxhdGUpIHtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRlbXBsYXRlLFxuICAgICAgICAgICAgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIHVzZSBpbnB1dCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHRlbXBsYXRlUmVmICoqL1xuICAgICAgaWYgKCF0aGlzLmlucHV0Vmlld1JlZikge1xuICAgICAgICBpZiAodGhpcy5pbnB1dFRlbXBsYXRlKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlLFxuICAgICAgICAgICAgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pik6ICd0ZW1wbGF0ZScgfCAnc3RyaW5nJyB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHJldHVybiAndGVtcGxhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3N0cmluZyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQsIG56U3RyaW5nVGVtcGxhdGVPdXRsZXQgfSA9IGNoYW5nZXM7XG4gICAgbGV0IHNob3VsZE91dGxldFJlY3JlYXRlID0gZmFsc2U7XG4gICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQpIHtcbiAgICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzT3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LnByZXZpb3VzVmFsdWUpO1xuICAgICAgICBjb25zdCBjdXJyZW50T3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gIShwcmV2aW91c091dGxldFR5cGUgPT09ICdzdHJpbmcnICYmIGN1cnJlbnRPdXRsZXRUeXBlID09PSAnc3RyaW5nJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZENvbnRleHRSZWNyZWF0ZSA9XG4gICAgICBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCAmJiB0aGlzLmhhc0NvbnRleHRTaGFwZUNoYW5nZWQobnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpO1xuICAgIHJldHVybiBzaG91bGRDb250ZXh0UmVjcmVhdGUgfHwgc2hvdWxkT3V0bGV0UmVjcmVhdGU7XG4gIH1cblxuICBwcml2YXRlIGhhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcbiAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcbiAgICBjb25zdCBjdXJyQ3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5jdXJyZW50VmFsdWUgfHwge30pO1xuXG4gICAgaWYgKHByZXZDdHhLZXlzLmxlbmd0aCA9PT0gY3VyckN0eEtleXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIGN1cnJDdHhLZXlzKSB7XG4gICAgICAgIGlmIChwcmV2Q3R4S2V5cy5pbmRleE9mKHByb3BOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgdXBkYXRlRXhpc3RpbmdDb250ZXh0KGN0eDogYW55KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAodGhpcy5pbnB1dFZpZXdSZWYhLmNvbnRleHQgYXMgYW55KVtwcm9wTmFtZV0gPSB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0W3Byb3BOYW1lXTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gdGhpcy5zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlcyk7XG4gICAgaWYgKHJlY3JlYXRlVmlldykge1xuICAgICAgaWYgKHRoaXMudmlld0NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5wdXRWaWV3UmVmID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVjcmVhdGVWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlucHV0Vmlld1JlZiAmJiB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXhpc3RpbmdDb250ZXh0KHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19