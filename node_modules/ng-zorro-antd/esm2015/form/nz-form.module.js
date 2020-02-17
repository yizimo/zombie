/**
 * @fileoverview added by tsickle
 * Generated from: nz-form.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzFormControlComponent } from './nz-form-control.component';
import { NzFormExplainComponent } from './nz-form-explain.component';
import { NzFormExtraComponent } from './nz-form-extra.component';
import { NzFormItemComponent } from './nz-form-item.component';
import { NzFormLabelComponent } from './nz-form-label.component';
import { NzFormSplitComponent } from './nz-form-split.component';
import { NzFormTextComponent } from './nz-form-text.component';
import { NzFormDirective } from './nz-form.directive';
export class NzFormModule {
}
NzFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXlCdEQsTUFBTSxPQUFPLFlBQVk7OztZQXZCeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQzthQUNqRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE56Rm9ybUV4cGxhaW5Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGb3JtRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tZXh0cmEuY29tcG9uZW50JztcbmltcG9ydCB7IE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE56Rm9ybVNwbGl0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLXNwbGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekZvcm1UZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IE56Rm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vbnotZm9ybS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOekZvcm1FeHRyYUNvbXBvbmVudCxcbiAgICBOekZvcm1MYWJlbENvbXBvbmVudCxcbiAgICBOekZvcm1EaXJlY3RpdmUsXG4gICAgTnpGb3JtSXRlbUNvbXBvbmVudCxcbiAgICBOekZvcm1Db250cm9sQ29tcG9uZW50LFxuICAgIE56Rm9ybUV4cGxhaW5Db21wb25lbnQsXG4gICAgTnpGb3JtVGV4dENvbXBvbmVudCxcbiAgICBOekZvcm1TcGxpdENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTnpGb3JtRXh0cmFDb21wb25lbnQsXG4gICAgTnpGb3JtTGFiZWxDb21wb25lbnQsXG4gICAgTnpGb3JtRGlyZWN0aXZlLFxuICAgIE56Rm9ybUl0ZW1Db21wb25lbnQsXG4gICAgTnpGb3JtQ29udHJvbENvbXBvbmVudCxcbiAgICBOekZvcm1FeHBsYWluQ29tcG9uZW50LFxuICAgIE56Rm9ybVRleHRDb21wb25lbnQsXG4gICAgTnpGb3JtU3BsaXRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpHcmlkTW9kdWxlLCBOekljb25Nb2R1bGUsIExheW91dE1vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybU1vZHVsZSB7fVxuIl19