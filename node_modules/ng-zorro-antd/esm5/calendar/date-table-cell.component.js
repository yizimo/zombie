/**
 * @fileoverview added by tsickle
 * Generated from: date-table-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
var DateTableCellComponent = /** @class */ (function () {
    function DateTableCellComponent() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    DateTableCellComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[date-table-cell]',
                    exportAs: 'dateTableCell',
                    template: "<ng-container [ngSwitch]=\"prefixCls\">\n  <ng-container *ngSwitchCase=\"'ant-calendar'\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(cell.dateCellRender)\">\n        <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: { $implicit: cell.value }\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(cell.dateCellRender)\">\n        <span [innerHTML]=\"cell.dateCellRender\"></span>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\">\n          {{ cell.content }}\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\n    <div class=\"ant-fullcalendar-date\">\n      <ng-container *ngIf=\"cell.dateFullCellRender else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"cell.dateFullCellRender; context: {$implicit: cell.value}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultCell>\n        <div class=\"{{ prefixCls }}-value\">{{ cell.content }}</div>\n        <div *ngIf=\"cell.dateCellRender\" class=\"{{ prefixCls }}-content\">\n          <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: {$implicit: cell.value}\"></ng-container>\n        </div>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>"
                }] }
    ];
    DateTableCellComponent.propDecorators = {
        prefixCls: [{ type: Input }],
        cell: [{ type: Input }]
    };
    return DateTableCellComponent;
}());
export { DateTableCellComponent };
if (false) {
    /** @type {?} */
    DateTableCellComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableCellComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableCellComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableCellComponent.prototype.cell;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJkYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRTtJQUFBO1FBUUUsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFJdEMsQ0FBQzs7Z0JBYkEsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsZUFBZTtvQkFDekIscTlDQUErQztpQkFFaEQ7Ozs0QkFLRSxLQUFLO3VCQUNMLEtBQUs7O0lBQ1IsNkJBQUM7Q0FBQSxBQWJELElBYUM7U0FOWSxzQkFBc0I7OztJQUNqQywrQ0FBOEI7O0lBQzlCLGtEQUFvQzs7SUFFcEMsMkNBQXdEOztJQUN4RCxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBEYXRlQ2VsbCB9IGZyb20gJy4vZGF0ZS10YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZGF0ZS10YWJsZS1jZWxsXScsXG4gIGV4cG9ydEFzOiAnZGF0ZVRhYmxlQ2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNlbGxDb21wb25lbnQge1xuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XG5cbiAgQElucHV0KCkgcHJlZml4Q2xzOiAnYW50LWNhbGVuZGFyJyB8ICdhbnQtZnVsbGNhbGVuZGFyJztcbiAgQElucHV0KCkgY2VsbDogRGF0ZUNlbGw7XG59XG4iXX0=