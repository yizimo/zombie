/**
 * @fileoverview added by tsickle
 * Generated from: nz-steps.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepComponent } from './nz-step.component';
import { NzStepsComponent } from './nz-steps.component';
var NzStepsModule = /** @class */ (function () {
    function NzStepsModule() {
    }
    NzStepsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzIconModule, NzAddOnModule],
                    exports: [NzStepsComponent, NzStepComponent],
                    declarations: [NzStepsComponent, NzStepComponent]
                },] }
    ];
    return NzStepsModule;
}());
export { NzStepsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQUFBO0lBSzRCLENBQUM7O2dCQUw1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztvQkFDNUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO2lCQUNsRDs7SUFDMkIsb0JBQUM7Q0FBQSxBQUw3QixJQUs2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbnotc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vbnotc3RlcHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlXSxcbiAgZXhwb3J0czogW056U3RlcHNDb21wb25lbnQsIE56U3RlcENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW056U3RlcHNDb21wb25lbnQsIE56U3RlcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdGVwc01vZHVsZSB7fVxuIl19