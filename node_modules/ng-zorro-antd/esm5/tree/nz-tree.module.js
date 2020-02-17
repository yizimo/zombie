/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree.module.ts
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
import { NzAddOnModule, NzHighlightModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeNodeComponent } from './nz-tree-node.component';
import { NzTreeComponent } from './nz-tree.component';
var NzTreeModule = /** @class */ (function () {
    function NzTreeModule() {
    }
    NzTreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule],
                    declarations: [NzTreeComponent, NzTreeNodeComponent],
                    exports: [NzTreeComponent, NzTreeNodeComponent]
                },] }
    ];
    return NzTreeModule;
}());
export { NzTreeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJQUFBO0lBSzJCLENBQUM7O2dCQUwzQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7b0JBQzVGLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2lCQUNoRDs7SUFDMEIsbUJBQUM7Q0FBQSxBQUw1QixJQUs0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56SGlnaGxpZ2h0TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56VHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10cmVlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpIaWdobGlnaHRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOelRyZWVDb21wb25lbnQsIE56VHJlZU5vZGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpUcmVlQ29tcG9uZW50LCBOelRyZWVOb2RlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVNb2R1bGUge31cbiJdfQ==