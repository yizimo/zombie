/**
 * @fileoverview added by tsickle
 * Generated from: nz-autocomplete.module.ts
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
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzAutocompleteOptgroupComponent } from './nz-autocomplete-optgroup.component';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteTriggerDirective } from './nz-autocomplete-trigger.directive';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
var NzAutocompleteModule = /** @class */ (function () {
    function NzAutocompleteModule() {
    }
    NzAutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzAutocompleteComponent,
                        NzAutocompleteOptionComponent,
                        NzAutocompleteTriggerDirective,
                        NzAutocompleteOptgroupComponent
                    ],
                    exports: [
                        NzAutocompleteComponent,
                        NzAutocompleteOptionComponent,
                        NzAutocompleteTriggerDirective,
                        NzAutocompleteOptgroupComponent
                    ],
                    imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]
                },] }
    ];
    return NzAutocompleteModule;
}());
export { NzAutocompleteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEU7SUFBQTtJQWVtQyxDQUFDOztnQkFmbkMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0IsOEJBQThCO3dCQUM5QiwrQkFBK0I7cUJBQ2hDO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0IsOEJBQThCO3dCQUM5QiwrQkFBK0I7cUJBQ2hDO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztpQkFDeEY7O0lBQ2tDLDJCQUFDO0NBQUEsQUFmcEMsSUFlb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCxcbiAgICBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCxcbiAgICBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUsXG4gICAgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTnpBdXRvY29tcGxldGVDb21wb25lbnQsXG4gICAgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsXG4gICAgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlLFxuICAgIE56QXV0b2NvbXBsZXRlT3B0Z3JvdXBDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgRm9ybXNNb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlTW9kdWxlIHt9XG4iXX0=