/**
 * @fileoverview added by tsickle
 * Generated from: nz-breadcrumb-item.component.ts
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
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
var NzBreadCrumbItemComponent = /** @class */ (function () {
    function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
    NzBreadCrumbItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-breadcrumb-item',
                    exportAs: 'nzBreadcrumbItem',
                    preserveWhitespaces: false,
                    template: "<ng-container *ngIf=\"!!nzOverlay; else noMenuTpl\">\n  <span class=\"ant-breadcrumb-overlay-link\" nz-dropdown [nzDropdownMenu]=\"nzOverlay\">\n    <ng-template [ngTemplateOutlet]=\"noMenuTpl\"></ng-template>\n    <i *ngIf=\"!!nzOverlay\" nz-icon nzType=\"down\"></i>\n  </span>\n</ng-container>\n\n<ng-template #noMenuTpl>\n  <span class=\"ant-breadcrumb-link\">\n    <ng-content></ng-content>\n  </span>\n</ng-template>\n\n<span class=\"ant-breadcrumb-separator\">\n  <ng-container *nzStringTemplateOutlet=\"nzBreadCrumbComponent.nzSeparator\">\n    {{ nzBreadCrumbComponent.nzSeparator }}\n  </ng-container>\n</span>\n",
                    styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: NzBreadCrumbComponent }
    ]; };
    NzBreadCrumbItemComponent.propDecorators = {
        nzOverlay: [{ type: Input }]
    };
    return NzBreadCrumbItemComponent;
}());
export { NzBreadCrumbItemComponent };
if (false) {
    /**
     * Dropdown content of a breadcrumb item.
     * @type {?}
     */
    NzBreadCrumbItemComponent.prototype.nzOverlay;
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYi8iLCJzb3VyY2VzIjpbIm56LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUF5QkUsbUNBQW1CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUcsQ0FBQzs7Z0JBekJwRSxTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiwwbkJBQWtEOzZCQUVoRCxpTUFRQztpQkFFSjs7OztnQkFwQlEscUJBQXFCOzs7NEJBeUIzQixLQUFLOztJQUdSLGdDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FQWSx5QkFBeUI7Ozs7OztJQUlwQyw4Q0FBNkM7O0lBRWpDLDBEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcblxuaW1wb3J0IHsgTnpCcmVhZENydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9uei1icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1icmVhZGNydW1iLWl0ZW0nLFxuICBleHBvcnRBczogJ256QnJlYWRjcnVtYkl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgICB9XG5cbiAgICAgIG56LWJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERyb3Bkb3duIGNvbnRlbnQgb2YgYSBicmVhZGNydW1iIGl0ZW0uXG4gICAqL1xuICBASW5wdXQoKSBuek92ZXJsYXk/OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpCcmVhZENydW1iQ29tcG9uZW50OiBOekJyZWFkQ3J1bWJDb21wb25lbnQpIHt9XG59XG4iXX0=