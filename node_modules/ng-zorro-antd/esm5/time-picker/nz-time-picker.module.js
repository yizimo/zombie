/**
 * @fileoverview added by tsickle
 * Generated from: nz-time-picker.module.ts
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
import { NzOverlayModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerPanelComponent } from './nz-time-picker-panel.component';
import { NzTimePickerComponent } from './nz-time-picker.component';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
var NzTimePickerModule = /** @class */ (function () {
    function NzTimePickerModule() {
    }
    NzTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective],
                    exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                    imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule]
                },] }
    ];
    return NzTimePickerModule;
}());
export { NzTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxGO0lBQUE7SUFLaUMsQ0FBQzs7Z0JBTGpDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsQ0FBQztvQkFDL0YsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLENBQUM7b0JBQzVELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO2lCQUNqRzs7SUFDZ0MseUJBQUM7Q0FBQSxBQUxsQyxJQUtrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL256LXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10aW1lLXZhbHVlLWFjY2Vzc29yLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW056VGltZVBpY2tlckNvbXBvbmVudCwgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsIE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsIE56VGltZVBpY2tlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekkxOG5Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJNb2R1bGUge31cbiJdfQ==