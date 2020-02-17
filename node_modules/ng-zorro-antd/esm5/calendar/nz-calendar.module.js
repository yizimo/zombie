/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar.module.ts
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
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DateTableCellComponent } from './date-table-cell.component';
import { DateTableComponent } from './date-table.component';
import { MonthTableComponent } from './month-table.component';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        DateTableCellComponent,
                        MonthTableComponent
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        MonthTableComponent
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
                },] }
    ];
    return NzCalendarModule;
}());
export { NzCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN6QixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBQUE7SUF1QitCLENBQUM7O2dCQXZCL0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4QixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDO2lCQUNsRjs7SUFDOEIsdUJBQUM7Q0FBQSxBQXZCaEMsSUF1QmdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5cbmltcG9ydCB7IERhdGVUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb250aFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aC10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gIE56TW9udGhDZWxsRGlyZWN0aXZlLFxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XG5pbXBvcnQgeyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSxcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXG4gICAgRGF0ZVRhYmxlQ2VsbENvbXBvbmVudCxcbiAgICBNb250aFRhYmxlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIERhdGVUYWJsZUNvbXBvbmVudCxcbiAgICBNb250aFRhYmxlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56UmFkaW9Nb2R1bGUsIE56U2VsZWN0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyTW9kdWxlIHt9XG4iXX0=