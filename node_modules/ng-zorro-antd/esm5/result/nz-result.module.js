/**
 * @fileoverview added by tsickle
 * Generated from: nz-result.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { NzResultNotFoundComponent } from './partial/not-found';
import { NzResultServerErrorComponent } from './partial/server-error.component';
import { NzResultUnauthorizedComponent } from './partial/unauthorized';
import { NzResultContentDirective, NzResultExtraDirective, NzResultIconDirective, NzResultSubtitleDirective, NzResultTitleDirective } from './nz-result-cells';
import { NzResultComponent } from './nz-result.component';
/** @type {?} */
var partial = [NzResultNotFoundComponent, NzResultServerErrorComponent, NzResultUnauthorizedComponent];
/** @type {?} */
var cellDirectives = [
    NzResultContentDirective,
    NzResultExtraDirective,
    NzResultIconDirective,
    NzResultSubtitleDirective,
    NzResultTitleDirective
];
var NzResultModule = /** @class */ (function () {
    function NzResultModule() {
    }
    NzResultModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule],
                    declarations: tslib_1.__spread([NzResultComponent], cellDirectives, partial),
                    exports: tslib_1.__spread([NzResultComponent], cellDirectives)
                },] }
    ];
    return NzResultModule;
}());
export { NzResultModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsibnotcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVwRCxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSw2QkFBNkIsQ0FBQzs7SUFFbEcsY0FBYyxHQUFHO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBSzZCLENBQUM7O2dCQUw3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQ3BELFlBQVksb0JBQUcsaUJBQWlCLEdBQUssY0FBYyxFQUFLLE9BQU8sQ0FBQztvQkFDaEUsT0FBTyxvQkFBRyxpQkFBaUIsR0FBSyxjQUFjLENBQUM7aUJBQ2hEOztJQUM0QixxQkFBQztDQUFBLEFBTDlCLElBSzhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgTnpSZXN1bHROb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC9ub3QtZm91bmQnO1xuaW1wb3J0IHsgTnpSZXN1bHRTZXJ2ZXJFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC9zZXJ2ZXItZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IE56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3VuYXV0aG9yaXplZCc7XG5cbmltcG9ydCB7XG4gIE56UmVzdWx0Q29udGVudERpcmVjdGl2ZSxcbiAgTnpSZXN1bHRFeHRyYURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRJY29uRGlyZWN0aXZlLFxuICBOelJlc3VsdFN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelJlc3VsdFRpdGxlRGlyZWN0aXZlXG59IGZyb20gJy4vbnotcmVzdWx0LWNlbGxzJztcbmltcG9ydCB7IE56UmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yZXN1bHQuY29tcG9uZW50JztcblxuY29uc3QgcGFydGlhbCA9IFtOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50LCBOelJlc3VsdFNlcnZlckVycm9yQ29tcG9uZW50LCBOelJlc3VsdFVuYXV0aG9yaXplZENvbXBvbmVudF07XG5cbmNvbnN0IGNlbGxEaXJlY3RpdmVzID0gW1xuICBOelJlc3VsdENvbnRlbnREaXJlY3RpdmUsXG4gIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUsXG4gIE56UmVzdWx0SWNvbkRpcmVjdGl2ZSxcbiAgTnpSZXN1bHRTdWJ0aXRsZURpcmVjdGl2ZSxcbiAgTnpSZXN1bHRUaXRsZURpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXN1bHRDb21wb25lbnQsIC4uLmNlbGxEaXJlY3RpdmVzLCAuLi5wYXJ0aWFsXSxcbiAgZXhwb3J0czogW056UmVzdWx0Q29tcG9uZW50LCAuLi5jZWxsRGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRNb2R1bGUge31cbiJdfQ==