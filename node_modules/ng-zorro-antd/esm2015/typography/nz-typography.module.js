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
export class NzTypographyModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZWxFLE1BQU0sT0FBTyxrQkFBa0I7OztZQWI5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO2dCQUMxRixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQzthQUNoRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZSwgTnpUcmFuc0J1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE56VGV4dENvcHlDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtY29weS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelR5cG9ncmFwaHlDb21wb25lbnQgfSBmcm9tICcuL256LXR5cG9ncmFwaHkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIE56SW5wdXRNb2R1bGUsXG4gICAgTnpJMThuTW9kdWxlLFxuICAgIE56VHJhbnNCdXR0b25Nb2R1bGUsXG4gICAgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnQsIFBsYXRmb3JtTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpUeXBvZ3JhcGh5Q29tcG9uZW50LCBOelRleHRDb3B5Q29tcG9uZW50LCBOelRleHRFZGl0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlNb2R1bGUge31cbiJdfQ==