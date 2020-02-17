/**
 * @fileoverview added by tsickle
 * Generated from: nz-autocomplete-optgroup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzAutocompleteOptgroupComponent {
    constructor() { }
}
NzAutocompleteOptgroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-auto-optgroup',
                exportAs: 'nzAutoOptgroup',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\n  <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{nzLabel}}</ng-container>\n</div>\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\n  <ng-content select=\"nz-auto-option\"></ng-content>\n</ul>\n",
                host: {
                    role: 'group',
                    class: 'ant-select-dropdown-menu-item-group'
                }
            }] }
];
/** @nocollapse */
NzAutocompleteOptgroupComponent.ctorParameters = () => [];
NzAutocompleteOptgroupComponent.propDecorators = {
    nzLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype.nzLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjMUcsTUFBTSxPQUFPLCtCQUErQjtJQUcxQyxnQkFBZSxDQUFDOzs7WUFmakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsc1JBQXdEO2dCQUN4RCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLHFDQUFxQztpQkFDN0M7YUFDRjs7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWF1dG8tb3B0Z3JvdXAnLFxuICBleHBvcnRBczogJ256QXV0b09wdGdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIHJvbGU6ICdncm91cCcsXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpMYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19