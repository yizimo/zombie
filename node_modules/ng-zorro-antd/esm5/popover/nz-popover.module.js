/**
 * @fileoverview added by tsickle
 * Generated from: nz-popover.module.ts
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
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverComponent } from './nz-popover.component';
import { NzPopoverDirective } from './nz-popover.directive';
var NzPopoverModule = /** @class */ (function () {
    function NzPopoverModule() {
    }
    NzPopoverModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [NzPopoverComponent],
                    exports: [NzPopoverDirective, NzPopoverComponent],
                    declarations: [NzPopoverDirective, NzPopoverComponent],
                    imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]
                },] }
    ];
    return NzPopoverModule;
}());
export { NzPopoverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFBQTtJQU04QixDQUFDOztnQkFOOUIsUUFBUSxTQUFDO29CQUNSLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztvQkFDakQsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7aUJBQzdHOztJQUM2QixzQkFBQztDQUFBLEFBTi9CLElBTStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LXBvcG92ZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZW50cnlDb21wb25lbnRzOiBbTnpQb3BvdmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056UG9wb3ZlckRpcmVjdGl2ZSwgTnpQb3BvdmVyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTnpQb3BvdmVyRGlyZWN0aXZlLCBOelBvcG92ZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOek92ZXJsYXlNb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyTW9kdWxlIHt9XG4iXX0=