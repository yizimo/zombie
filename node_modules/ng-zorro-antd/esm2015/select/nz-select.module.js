/**
 * @fileoverview added by tsickle
 * Generated from: nz-select.module.ts
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
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzOptionComponent } from './nz-option.component';
import { NzFilterGroupOptionPipe, NzFilterOptionPipe } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectUnselectableDirective } from './nz-select-unselectable.directive';
import { NzSelectComponent } from './nz-select.component';
export class NzSelectModule {
}
NzSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NzI18nModule,
                    FormsModule,
                    PlatformModule,
                    OverlayModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzOverlayModule,
                    NzNoAnimationModule
                ],
                declarations: [
                    NzFilterGroupOptionPipe,
                    NzFilterOptionPipe,
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzOptionLiComponent,
                    NzSelectTopControlComponent,
                    NzSelectUnselectableDirective
                ],
                exports: [
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzSelectTopControlComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBa0MxRCxNQUFNLE9BQU8sY0FBYzs7O1lBaEMxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO29CQUNmLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsMkJBQTJCO29CQUMzQiw2QkFBNkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLDJCQUEyQjtpQkFDNUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGaWx0ZXJHcm91cE9wdGlvblBpcGUsIE56RmlsdGVyT3B0aW9uUGlwZSB9IGZyb20gJy4vbnotb3B0aW9uLnBpcGUnO1xuaW1wb3J0IHsgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2VsZWN0VW5zZWxlY3RhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1zZWxlY3QtdW5zZWxlY3RhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbnotc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpJMThuTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFBsYXRmb3JtTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56QWRkT25Nb2R1bGUsXG4gICAgTnpFbXB0eU1vZHVsZSxcbiAgICBOek92ZXJsYXlNb2R1bGUsXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOekZpbHRlckdyb3VwT3B0aW9uUGlwZSxcbiAgICBOekZpbHRlck9wdGlvblBpcGUsXG4gICAgTnpPcHRpb25Db21wb25lbnQsXG4gICAgTnpTZWxlY3RDb21wb25lbnQsXG4gICAgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQsXG4gICAgTnpPcHRpb25Hcm91cENvbXBvbmVudCxcbiAgICBOek9wdGlvbkxpQ29tcG9uZW50LFxuICAgIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCxcbiAgICBOelNlbGVjdFVuc2VsZWN0YWJsZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTnpPcHRpb25Db21wb25lbnQsXG4gICAgTnpTZWxlY3RDb21wb25lbnQsXG4gICAgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQsXG4gICAgTnpPcHRpb25Hcm91cENvbXBvbmVudCxcbiAgICBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelNlbGVjdE1vZHVsZSB7fVxuIl19