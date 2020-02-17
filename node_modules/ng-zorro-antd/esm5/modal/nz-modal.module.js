/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal.module.ts
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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule, NzPipesModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import { NzModalFooterDirective } from './nz-modal-footer.directive';
import { NzModalComponent } from './nz-modal.component';
import { NzModalServiceModule } from './nz-modal.service.module';
var NzModalModule = /** @class */ (function () {
    function NzModalModule() {
    }
    NzModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        NzAddOnModule,
                        NzI18nModule,
                        NzButtonModule,
                        NzIconModule,
                        NzPipesModule,
                        NzNoAnimationModule,
                        NzModalServiceModule,
                        NzModalControlServiceModule
                    ],
                    exports: [NzModalComponent, NzModalFooterDirective],
                    declarations: [NzModalComponent, NzModalFooterDirective],
                    entryComponents: [NzModalComponent]
                },] }
    ];
    return NzModalModule;
}());
export { NzModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRTtJQUFBO0lBaUI0QixDQUFDOztnQkFqQjVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDbkQsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUNwQzs7SUFDMkIsb0JBQUM7Q0FBQSxBQWpCN0IsSUFpQjZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56UGlwZXNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56TW9kYWxDb250cm9sU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL256LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbW9kYWwuc2VydmljZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTnpBZGRPbk1vZHVsZSxcbiAgICBOekkxOG5Nb2R1bGUsXG4gICAgTnpCdXR0b25Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56UGlwZXNNb2R1bGUsXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcbiAgICBOek1vZGFsU2VydmljZU1vZHVsZSxcbiAgICBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW056TW9kYWxDb21wb25lbnQsIE56TW9kYWxGb290ZXJEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtOek1vZGFsQ29tcG9uZW50LCBOek1vZGFsRm9vdGVyRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTnpNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbE1vZHVsZSB7fVxuIl19