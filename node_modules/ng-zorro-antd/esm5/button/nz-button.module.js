/**
 * @fileoverview added by tsickle
 * Generated from: nz-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonGroupComponent } from './nz-button-group.component';
import { NzButtonComponent } from './nz-button.component';
var NzButtonModule = /** @class */ (function () {
    function NzButtonModule() {
    }
    NzButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzButtonComponent, NzButtonGroupComponent],
                    exports: [NzButtonComponent, NzButtonGroupComponent],
                    imports: [CommonModule, ObserversModule, NzWaveModule, NzIconModule]
                },] }
    ];
    return NzButtonModule;
}());
export { NzButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsibnotYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQUFBO0lBSzZCLENBQUM7O2dCQUw3QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3pELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7aUJBQ3JFOztJQUM0QixxQkFBQztDQUFBLEFBTDlCLElBSzhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpXYXZlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56QnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL256LWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZSwgTnpXYXZlTW9kdWxlLCBOekljb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56QnV0dG9uTW9kdWxlIHt9XG4iXX0=