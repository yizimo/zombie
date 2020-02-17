/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.module.ts
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
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageComponent } from './nz-message.component';
import { NzMessageServiceModule } from './nz-message.service.module';
var NzMessageModule = /** @class */ (function () {
    function NzMessageModule() {
    }
    NzMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule, NzAddOnModule, NzMessageServiceModule],
                    declarations: [NzMessageContainerComponent, NzMessageComponent],
                    providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                    entryComponents: [NzMessageContainerComponent]
                },] }
    ];
    return NzMessageModule;
}());
export { NzMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRTtJQUFBO0lBTThCLENBQUM7O2dCQU45QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO29CQUMzRixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxrQkFBa0IsQ0FBQztvQkFDL0QsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQy9DLGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUMvQzs7SUFDNkIsc0JBQUM7Q0FBQSxBQU4vQixJQU0rQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tZXNzYWdlLnNlcnZpY2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBOek1lc3NhZ2VDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHX1BST1ZJREVSXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VNb2R1bGUge31cbiJdfQ==