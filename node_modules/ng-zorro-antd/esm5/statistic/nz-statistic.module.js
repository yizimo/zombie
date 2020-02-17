/**
 * @fileoverview added by tsickle
 * Generated from: nz-statistic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzPipesModule } from 'ng-zorro-antd/core';
import { NzCountdownComponent } from './nz-countdown.component';
import { NzStatisticNumberComponent } from './nz-statistic-number.component';
import { NzStatisticComponent } from './nz-statistic.component';
var NzStatisticModule = /** @class */ (function () {
    function NzStatisticModule() {
    }
    NzStatisticModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule],
                    declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                    exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
                },] }
    ];
    return NzStatisticModule;
}());
export { NzStatisticModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUFBO0lBS2dDLENBQUM7O2dCQUxoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO29CQUNyRSxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsQ0FBQztvQkFDdEYsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUM7aUJBQ2xGOztJQUMrQix3QkFBQztDQUFBLEFBTGpDLElBS2lDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOelBpcGVzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL256LWNvdW50ZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL256LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56U3RhdGlzdGljQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56UGlwZXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOelN0YXRpc3RpY0NvbXBvbmVudCwgTnpDb3VudGRvd25Db21wb25lbnQsIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056U3RhdGlzdGljQ29tcG9uZW50LCBOekNvdW50ZG93bkNvbXBvbmVudCwgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTW9kdWxlIHt9XG4iXX0=