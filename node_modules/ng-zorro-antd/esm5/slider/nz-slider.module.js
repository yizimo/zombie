/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider.module.ts
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
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSliderHandleComponent } from './nz-slider-handle.component';
import { NzSliderMarksComponent } from './nz-slider-marks.component';
import { NzSliderStepComponent } from './nz-slider-step.component';
import { NzSliderTrackComponent } from './nz-slider-track.component';
import { NzSliderComponent } from './nz-slider.component';
var NzSliderModule = /** @class */ (function () {
    function NzSliderModule() {
    }
    NzSliderModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        NzSliderComponent,
                        NzSliderTrackComponent,
                        NzSliderHandleComponent,
                        NzSliderStepComponent,
                        NzSliderMarksComponent
                    ],
                    declarations: [
                        NzSliderComponent,
                        NzSliderTrackComponent,
                        NzSliderHandleComponent,
                        NzSliderStepComponent,
                        NzSliderMarksComponent
                    ],
                    imports: [CommonModule, PlatformModule, NzToolTipModule]
                },] }
    ];
    return NzSliderModule;
}());
export { NzSliderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBQUE7SUFpQjZCLENBQUM7O2dCQWpCN0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztpQkFDekQ7O0lBQzRCLHFCQUFDO0NBQUEsQUFqQjlCLElBaUI4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE56U2xpZGVySGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXItaGFuZGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlck1hcmtzQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyU3RlcENvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyVHJhY2tDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci10cmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgTnpTbGlkZXJDb21wb25lbnQsXG4gICAgTnpTbGlkZXJUcmFja0NvbXBvbmVudCxcbiAgICBOelNsaWRlckhhbmRsZUNvbXBvbmVudCxcbiAgICBOelNsaWRlclN0ZXBDb21wb25lbnQsXG4gICAgTnpTbGlkZXJNYXJrc0NvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOelNsaWRlckNvbXBvbmVudCxcbiAgICBOelNsaWRlclRyYWNrQ29tcG9uZW50LFxuICAgIE56U2xpZGVySGFuZGxlQ29tcG9uZW50LFxuICAgIE56U2xpZGVyU3RlcENvbXBvbmVudCxcbiAgICBOelNsaWRlck1hcmtzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyTW9kdWxlIHt9XG4iXX0=