/**
 * @fileoverview added by tsickle
 * Generated from: nz-tooltip.module.ts
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
// NOTE: the `t` is not uppercase in directives. Change this would however introduce breaking change.
import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipDirective } from './nz-tooltip.directive';
var NzToolTipModule = /** @class */ (function () {
    function NzToolTipModule() {
    }
    NzToolTipModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzToolTipComponent, NzTooltipDirective],
                    exports: [NzToolTipComponent, NzTooltipDirective],
                    imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule],
                    entryComponents: [NzToolTipComponent]
                },] }
    ];
    return NzToolTipModule;
}());
export { NzToolTipModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFBQTtJQU04QixDQUFDOztnQkFOOUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO29CQUMzRixlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDdEM7O0lBQzZCLHNCQUFDO0NBQUEsQUFOL0IsSUFNK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbi8vIE5PVEU6IHRoZSBgdGAgaXMgbm90IHVwcGVyY2FzZSBpbiBkaXJlY3RpdmVzLiBDaGFuZ2UgdGhpcyB3b3VsZCBob3dldmVyIGludHJvZHVjZSBicmVha2luZyBjaGFuZ2UuXG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vbnotdG9vbHRpcC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOelRvb2xUaXBDb21wb25lbnQsIE56VG9vbHRpcERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOelRvb2xUaXBDb21wb25lbnQsIE56VG9vbHRpcERpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW056VG9vbFRpcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUb29sVGlwTW9kdWxlIHt9XG4iXX0=