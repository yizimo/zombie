/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.module.ts
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
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PlatformModule } from '@angular/cdk/platform';
import { NzContextMenuServiceModule } from './nz-context-menu.service.module';
import { NzDropDownADirective } from './nz-dropdown-a.directive';
import { NzDropDownButtonComponent } from './nz-dropdown-button.component';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzDropdownServiceModule } from './nz-dropdown.service.module';
export class NzDropDownModule {
}
NzDropDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    FormsModule,
                    NzButtonModule,
                    NzMenuModule,
                    NzIconModule,
                    PlatformModule,
                    NzNoAnimationModule,
                    NzOverlayModule,
                    NzDropdownServiceModule,
                    NzContextMenuServiceModule,
                    NzAddOnModule
                ],
                entryComponents: [NzDropdownContextComponent, NzDropdownMenuComponent],
                declarations: [
                    NzDropDownComponent,
                    NzDropDownButtonComponent,
                    NzDropDownDirective,
                    NzDropDownADirective,
                    NzDropdownContextComponent,
                    NzDropdownMenuComponent
                ],
                exports: [
                    NzMenuModule,
                    NzDropDownComponent,
                    NzDropDownButtonComponent,
                    NzDropDownDirective,
                    NzDropDownADirective,
                    NzDropdownMenuComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBbUN2RSxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFqQzVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLGFBQWE7aUJBQ2Q7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ3RFLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5cbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb250ZXh0LW1lbnUuc2VydmljZS5tb2R1bGUnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkFEaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLWEuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56RHJvcERvd25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56RHJvcGRvd25TZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5zZXJ2aWNlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOekJ1dHRvbk1vZHVsZSxcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIFBsYXRmb3JtTW9kdWxlLFxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXG4gICAgTnpPdmVybGF5TW9kdWxlLFxuICAgIE56RHJvcGRvd25TZXJ2aWNlTW9kdWxlLFxuICAgIE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlLFxuICAgIE56QWRkT25Nb2R1bGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25NZW51Q29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpEcm9wRG93bkNvbXBvbmVudCxcbiAgICBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50LFxuICAgIE56RHJvcERvd25EaXJlY3RpdmUsXG4gICAgTnpEcm9wRG93bkFEaXJlY3RpdmUsXG4gICAgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsXG4gICAgTnpEcm9wZG93bk1lbnVDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE56TWVudU1vZHVsZSxcbiAgICBOekRyb3BEb3duQ29tcG9uZW50LFxuICAgIE56RHJvcERvd25CdXR0b25Db21wb25lbnQsXG4gICAgTnpEcm9wRG93bkRpcmVjdGl2ZSxcbiAgICBOekRyb3BEb3duQURpcmVjdGl2ZSxcbiAgICBOekRyb3Bkb3duTWVudUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25Nb2R1bGUge31cbiJdfQ==