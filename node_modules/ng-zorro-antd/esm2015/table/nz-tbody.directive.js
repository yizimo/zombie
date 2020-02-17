/**
 * @fileoverview added by tsickle
 * Generated from: nz-tbody.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
export class NzTbodyDirective {
    /**
     * @param {?} nzTableComponent
     */
    constructor(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
    }
}
NzTbodyDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tbody',
                host: {
                    '[class.ant-table-tbody]': 'nzTableComponent'
                }
            },] }
];
/** @nocollapse */
NzTbodyDirective.ctorParameters = () => [
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
if (false) {
    /** @type {?} */
    NzTbodyDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGJvZHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRib2R5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTeEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7OztZQVI5RSxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0oseUJBQXlCLEVBQUUsa0JBQWtCO2lCQUM5QzthQUNGOzs7O1lBUlEsZ0JBQWdCLHVCQVVWLElBQUksWUFBSSxRQUFROzs7O0lBQWpCLDRDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3Rib2R5JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXRib2R5XSc6ICduelRhYmxlQ29tcG9uZW50J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGJvZHlEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50KSB7fVxufVxuIl19