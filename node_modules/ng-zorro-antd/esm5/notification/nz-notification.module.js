/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER } from './nz-notification-config';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationComponent } from './nz-notification.component';
import { NzNotificationServiceModule } from './nz-notification.service.module';
var NzNotificationModule = /** @class */ (function () {
    function NzNotificationModule() {
    }
    NzNotificationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule, NzNotificationServiceModule],
                    declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                    providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER],
                    entryComponents: [NzNotificationContainerComponent]
                },] }
    ];
    return NzNotificationModule;
}());
export { NzNotificationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibnotbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FO0lBQUE7SUFNbUMsQ0FBQzs7Z0JBTm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwyQkFBMkIsQ0FBQztvQkFDakYsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsZ0NBQWdDLENBQUM7b0JBQ3pFLFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO29CQUNwRCxlQUFlLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDcEQ7O0lBQ2tDLDJCQUFDO0NBQUEsQUFOcEMsSUFNb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25TZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uc2VydmljZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekljb25Nb2R1bGUsIE56Tm90aWZpY2F0aW9uU2VydmljZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056Tm90aWZpY2F0aW9uQ29tcG9uZW50LCBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJR19QUk9WSURFUl0sXG4gIGVudHJ5Q29tcG9uZW50czogW056Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbk1vZHVsZSB7fVxuIl19