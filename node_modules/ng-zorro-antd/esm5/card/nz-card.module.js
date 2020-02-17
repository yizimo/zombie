/**
 * @fileoverview added by tsickle
 * Generated from: nz-card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardLoadingComponent } from './nz-card-loading.component';
import { NzCardMetaComponent } from './nz-card-meta.component';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardComponent } from './nz-card.component';
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    NzCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                    exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
                },] }
    ];
    return NzCardModule;
}());
export { NzCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJuei1jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBQUE7SUFLMkIsQ0FBQzs7Z0JBTDNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3JILE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQztpQkFDakg7O0lBQzBCLG1CQUFDO0NBQUEsQUFMNUIsSUFLNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FyZEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcmQtZ3JpZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpDYXJkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC1sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNhcmRNZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLW1ldGEuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpDYXJkQ29tcG9uZW50LCBOekNhcmRHcmlkRGlyZWN0aXZlLCBOekNhcmRNZXRhQ29tcG9uZW50LCBOekNhcmRMb2FkaW5nQ29tcG9uZW50LCBOekNhcmRUYWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpDYXJkQ29tcG9uZW50LCBOekNhcmRHcmlkRGlyZWN0aXZlLCBOekNhcmRNZXRhQ29tcG9uZW50LCBOekNhcmRMb2FkaW5nQ29tcG9uZW50LCBOekNhcmRUYWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FyZE1vZHVsZSB7fVxuIl19