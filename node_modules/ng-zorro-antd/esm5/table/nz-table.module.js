/**
 * @fileoverview added by tsickle
 * Generated from: nz-table.module.ts
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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
var NzTableModule = /** @class */ (function () {
    function NzTableModule() {
    }
    NzTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzTableComponent,
                        NzThComponent,
                        NzTdComponent,
                        NzTheadComponent,
                        NzTbodyDirective,
                        NzTrDirective,
                        NzVirtualScrollDirective
                    ],
                    exports: [
                        NzTableComponent,
                        NzThComponent,
                        NzTdComponent,
                        NzTheadComponent,
                        NzTbodyDirective,
                        NzTrDirective,
                        NzVirtualScrollDirective
                    ],
                    imports: [
                        NzMenuModule,
                        FormsModule,
                        NzAddOnModule,
                        NzRadioModule,
                        NzCheckboxModule,
                        NzDropDownModule,
                        CommonModule,
                        PlatformModule,
                        NzPaginationModule,
                        NzSpinModule,
                        NzI18nModule,
                        NzIconModule,
                        NzEmptyModule,
                        ScrollingModule
                    ]
                },] }
    ];
    return NzTableModule;
}());
export { NzTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekU7SUFBQTtJQW9DNEIsQ0FBQzs7Z0JBcEM1QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7aUJBQ0Y7O0lBQzJCLG9CQUFDO0NBQUEsQUFwQzdCLElBb0M2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5pbXBvcnQgeyBOelNwaW5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NwaW4nO1xuXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYm9keURpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGJvZHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGRDb21wb25lbnQgfSBmcm9tICcuL256LXRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IE56VHJEaXJlY3RpdmUgfSBmcm9tICcuL256LXRyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL256LXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56VGFibGVDb21wb25lbnQsXG4gICAgTnpUaENvbXBvbmVudCxcbiAgICBOelRkQ29tcG9uZW50LFxuICAgIE56VGhlYWRDb21wb25lbnQsXG4gICAgTnpUYm9keURpcmVjdGl2ZSxcbiAgICBOelRyRGlyZWN0aXZlLFxuICAgIE56VmlydHVhbFNjcm9sbERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTnpUYWJsZUNvbXBvbmVudCxcbiAgICBOelRoQ29tcG9uZW50LFxuICAgIE56VGRDb21wb25lbnQsXG4gICAgTnpUaGVhZENvbXBvbmVudCxcbiAgICBOelRib2R5RGlyZWN0aXZlLFxuICAgIE56VHJEaXJlY3RpdmUsXG4gICAgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTnpBZGRPbk1vZHVsZSxcbiAgICBOelJhZGlvTW9kdWxlLFxuICAgIE56Q2hlY2tib3hNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUGxhdGZvcm1Nb2R1bGUsXG4gICAgTnpQYWdpbmF0aW9uTW9kdWxlLFxuICAgIE56U3Bpbk1vZHVsZSxcbiAgICBOekkxOG5Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56RW1wdHlNb2R1bGUsXG4gICAgU2Nyb2xsaW5nTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZU1vZHVsZSB7fVxuIl19