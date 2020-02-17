/**
 * @fileoverview added by tsickle
 * Generated from: nz-typography.module.ts
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
import { NzCopyToClipboardServiceModule, NzTransButtonModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
import { NzTypographyComponent } from './nz-typography.component';
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
    NzTypographyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NzIconModule,
                        NzToolTipModule,
                        NzInputModule,
                        NzI18nModule,
                        NzTransButtonModule,
                        NzCopyToClipboardServiceModule
                    ],
                    exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                    declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
                },] }
    ];
    return NzTypographyModule;
}());
export { NzTypographyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFO0lBQUE7SUFhaUMsQ0FBQzs7Z0JBYmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsOEJBQThCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLENBQUM7b0JBQzFGLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO2lCQUNoRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQWJsQyxJQWFrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGUsIE56VHJhbnNCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBOelRleHRDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWNvcHkuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUeXBvZ3JhcGh5Q29tcG9uZW50IH0gZnJvbSAnLi9uei10eXBvZ3JhcGh5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBOeklucHV0TW9kdWxlLFxuICAgIE56STE4bk1vZHVsZSxcbiAgICBOelRyYW5zQnV0dG9uTW9kdWxlLFxuICAgIE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTnpUeXBvZ3JhcGh5Q29tcG9uZW50LCBOelRleHRDb3B5Q29tcG9uZW50LCBOelRleHRFZGl0Q29tcG9uZW50LCBQbGF0Zm9ybU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056VHlwb2dyYXBoeUNvbXBvbmVudCwgTnpUZXh0Q29weUNvbXBvbmVudCwgTnpUZXh0RWRpdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUeXBvZ3JhcGh5TW9kdWxlIHt9XG4iXX0=