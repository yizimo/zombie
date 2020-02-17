/**
 * @fileoverview added by tsickle
 * Generated from: nz-cascader.module.ts
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
import { NzAddOnModule, NzHighlightModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderComponent } from './nz-cascader.component';
var NzCascaderModule = /** @class */ (function () {
    function NzCascaderModule() {
    }
    NzCascaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        OverlayModule,
                        NzAddOnModule,
                        NzEmptyModule,
                        NzHighlightModule,
                        NzIconModule,
                        NzInputModule,
                        NzNoAnimationModule,
                        NzOverlayModule
                    ],
                    declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                    exports: [NzCascaderComponent]
                },] }
    ];
    return NzCascaderModule;
}());
export { NzCascaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUFBQTtJQWdCK0IsQ0FBQzs7Z0JBaEIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO29CQUM5RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7O0lBQzhCLHVCQUFDO0NBQUEsQUFoQmhDLElBZ0JnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56SGlnaGxpZ2h0TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcblxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FzY2FkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhc2NhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBOekFkZE9uTW9kdWxlLFxuICAgIE56RW1wdHlNb2R1bGUsXG4gICAgTnpIaWdobGlnaHRNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56SW5wdXRNb2R1bGUsXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcbiAgICBOek92ZXJsYXlNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpDYXNjYWRlckNvbXBvbmVudCwgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekNhc2NhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyTW9kdWxlIHt9XG4iXX0=