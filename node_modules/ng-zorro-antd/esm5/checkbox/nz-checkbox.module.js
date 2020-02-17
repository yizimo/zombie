/**
 * @fileoverview added by tsickle
 * Generated from: nz-checkbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxGroupComponent } from './nz-checkbox-group.component';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
import { NzCheckboxComponent } from './nz-checkbox.component';
var NzCheckboxModule = /** @class */ (function () {
    function NzCheckboxModule() {
    }
    NzCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ObserversModule],
                    declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                    exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
                },] }
    ];
    return NzCheckboxModule;
}());
export { NzCheckboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBQUE7SUFLK0IsQ0FBQzs7Z0JBTC9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQztvQkFDckQsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsMEJBQTBCLENBQUM7b0JBQ3pGLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixDQUFDO2lCQUNyRjs7SUFDOEIsdUJBQUM7Q0FBQSxBQUxoQyxJQUtnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekNoZWNrYm94R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3guY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE9ic2VydmVyc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056Q2hlY2tib3hDb21wb25lbnQsIE56Q2hlY2tib3hHcm91cENvbXBvbmVudCwgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpDaGVja2JveENvbXBvbmVudCwgTnpDaGVja2JveEdyb3VwQ29tcG9uZW50LCBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveE1vZHVsZSB7fVxuIl19