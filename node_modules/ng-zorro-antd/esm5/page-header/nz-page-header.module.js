/**
 * @fileoverview added by tsickle
 * Generated from: nz-page-header.module.ts
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
import { NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective } from './nz-page-header-cells';
import { NzPageHeaderComponent } from './nz-page-header.component';
/** @type {?} */
var NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
var NzPageHeaderModule = /** @class */ (function () {
    function NzPageHeaderModule() {
    }
    NzPageHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule],
                    exports: [NzPageHeaderComponent, NzPageHeaderCells],
                    declarations: [NzPageHeaderComponent, NzPageHeaderCells]
                },] }
    ];
    return NzPageHeaderModule;
}());
export { NzPageHeaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM3Qix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzNCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBRTdELGlCQUFpQixHQUFHO0lBQ3hCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiwyQkFBMkI7Q0FDNUI7QUFFRDtJQUFBO0lBS2lDLENBQUM7O2dCQUxqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDO29CQUNuRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztpQkFDekQ7O0lBQ2dDLHlCQUFDO0NBQUEsQUFMbEMsSUFLa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7XG4gIE56UGFnZUhlYWRlckF2YXRhckRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyQ29udGVudERpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyRXh0cmFEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclRhZ0RpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyVGl0bGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1wYWdlLWhlYWRlci1jZWxscyc7XG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IE56UGFnZUhlYWRlckNlbGxzID0gW1xuICBOelBhZ2VIZWFkZXJUaXRsZURpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckNvbnRlbnREaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclRhZ0RpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyRXh0cmFEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyQXZhdGFyRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTnpQYWdlSGVhZGVyQ29tcG9uZW50LCBOelBhZ2VIZWFkZXJDZWxsc10sXG4gIGRlY2xhcmF0aW9uczogW056UGFnZUhlYWRlckNvbXBvbmVudCwgTnpQYWdlSGVhZGVyQ2VsbHNdXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnZUhlYWRlck1vZHVsZSB7fVxuIl19