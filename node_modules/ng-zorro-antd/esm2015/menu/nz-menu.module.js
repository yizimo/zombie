/**
 * @fileoverview added by tsickle
 * Generated from: nz-menu.module.ts
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
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDividerDirective } from './nz-menu-divider.directive';
import { NzMenuGroupComponent } from './nz-menu-group.component';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export class NzMenuModule {
}
NzMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    PlatformModule,
                    NzButtonModule,
                    OverlayModule,
                    NzIconModule,
                    NzNoAnimationModule,
                    NzAddOnModule
                ],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFzQjVELE1BQU0sT0FBTyxZQUFZOzs7WUFwQnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRTtvQkFDWixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO2FBQ2xIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBOek1lbnVEaXZpZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWRpdmlkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TWVudUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZW51LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uei1zdWJtZW51LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUGxhdGZvcm1Nb2R1bGUsXG4gICAgTnpCdXR0b25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcbiAgICBOekFkZE9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56TWVudURpcmVjdGl2ZSxcbiAgICBOek1lbnVJdGVtRGlyZWN0aXZlLFxuICAgIE56U3ViTWVudUNvbXBvbmVudCxcbiAgICBOek1lbnVEaXZpZGVyRGlyZWN0aXZlLFxuICAgIE56TWVudUdyb3VwQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtOek1lbnVEaXJlY3RpdmUsIE56TWVudUl0ZW1EaXJlY3RpdmUsIE56U3ViTWVudUNvbXBvbmVudCwgTnpNZW51RGl2aWRlckRpcmVjdGl2ZSwgTnpNZW51R3JvdXBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56TWVudU1vZHVsZSB7fVxuIl19