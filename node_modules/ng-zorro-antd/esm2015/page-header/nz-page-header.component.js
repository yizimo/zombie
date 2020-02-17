/**
 * @fileoverview added by tsickle
 * Generated from: nz-page-header.component.ts
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
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './nz-page-header-cells';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
export class NzPageHeaderComponent {
    /**
     * @param {?} location
     * @param {?} nzConfigService
     */
    constructor(location, nzConfigService) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.isTemplateRefBackIcon = false;
        this.isStringBackIcon = false;
        this.nzBackIcon = null;
        this.nzBack = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzBackIcon')) {
            this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof TemplateRef;
            this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
        }
    }
    /**
     * @return {?}
     */
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            this.location.back();
        }
    }
}
NzPageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: "<ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\n\n<div class=\"ant-page-header-heading\">\n  <!--back-->\n  <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\n    <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\n      <i *ngIf=\"isStringBackIcon\" nz-icon [nzType]=\"nzBackIcon ? nzBackIcon : 'arrow-left'\" nzTheme=\"outline\"></i>\n      <ng-container *ngIf=\"isTemplateRefBackIcon\" [ngTemplateOutlet]=\"nzBackIcon\"></ng-container>\n    </div>\n  </div>\n  <!--avatar-->\n  <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\n  <!--title-->\n  <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </span>\n  <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\n  <!--subtitle-->\n  <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n  </span>\n  <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\n  <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\n  <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\n</div>\n\n<ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\n<ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                },
                styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", `
      .ant-page-header-back-button {
        border: 0px;
        background: transparent;
        padding: 0px;
        line-height: inherit;
        display: inline-block;
      }
    `]
            }] }
];
/** @nocollapse */
NzPageHeaderComponent.ctorParameters = () => [
    { type: Location },
    { type: NzConfigService }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzBack: [{ type: Output }],
    nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    tslib_1.__metadata("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
if (false) {
    /** @type {?} */
    NzPageHeaderComponent.prototype.isTemplateRefBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.isStringBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzTitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzGhost;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBack;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderFooter;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.location;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUVoRyx3QkFBd0IsR0FBRyxZQUFZO0FBMkI3QyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtCaEMsWUFBb0IsUUFBa0IsRUFBUyxlQUFnQztRQUEzRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBakIvRSwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGVBQVUsR0FBc0MsSUFBSSxDQUFDO1FBSTNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBVTZCLENBQUM7Ozs7O0lBRW5GLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxZQUFZLFdBQVcsQ0FBQztZQUNwRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4akRBQThDO2dCQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixvQkFBb0IsRUFBRSxvQkFBb0I7b0JBQzFDLCtCQUErQixFQUFFLFNBQVM7b0JBQzFDLHdCQUF3QixFQUFFLHdCQUF3QjtpQkFDbkQ7dUdBRUM7Ozs7Ozs7O0tBUUM7YUFFSjs7OztZQTlCUSxRQUFRO1lBQ1IsZUFBZTs7O3lCQWtDckIsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxNQUFNO2lDQUVOLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUNBSTNELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBUFg7SUFBM0MsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQzs7c0RBQWtCOzs7SUFOdEUsc0RBQThCOztJQUM5QixpREFBeUI7O0lBRXpCLDJDQUE4RDs7SUFDOUQsd0NBQTZDOztJQUM3QywyQ0FBZ0Q7O0lBQ2hELHdDQUFzRTs7SUFDdEUsdUNBQXFEOztJQUVyRCxtREFFRTs7SUFFRix1REFFRTs7Ozs7SUFFVSx5Q0FBMEI7O0lBQUUsZ0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotcGFnZS1oZWFkZXItY2VsbHMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncGFnZUhlYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICduelBhZ2VIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uei1wYWdlLWhlYWRlci5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXBhZ2UtaGVhZGVyJyxcbiAgICAnW2NsYXNzLmhhcy1mb290ZXJdJzogJ256UGFnZUhlYWRlckZvb3RlcicsXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItZ2hvc3RdJzogJ256R2hvc3QnLFxuICAgICdbY2xhc3MuaGFzLWJyZWFkY3J1bWJdJzogJ256UGFnZUhlYWRlckJyZWFkY3J1bWInXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5hbnQtcGFnZS1oZWFkZXItYmFjay1idXR0b24ge1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgaXNUZW1wbGF0ZVJlZkJhY2tJY29uID0gZmFsc2U7XG4gIGlzU3RyaW5nQmFja0ljb24gPSBmYWxzZTtcblxuICBASW5wdXQoKSBuekJhY2tJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdWJ0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpHaG9zdDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkKE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckZvb3RlcjogRWxlbWVudFJlZjxcbiAgICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmVcbiAgPjtcblxuICBAQ29udGVudENoaWxkKE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJCcmVhZGNydW1iOiBFbGVtZW50UmVmPFxuICAgIE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmVcbiAgPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpCYWNrSWNvbicpKSB7XG4gICAgICB0aGlzLmlzVGVtcGxhdGVSZWZCYWNrSWNvbiA9IGNoYW5nZXMubnpCYWNrSWNvbi5jdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgICAgIHRoaXMuaXNTdHJpbmdCYWNrSWNvbiA9IHR5cGVvZiBjaGFuZ2VzLm56QmFja0ljb24uY3VycmVudFZhbHVlID09PSAnc3RyaW5nJztcbiAgICB9XG4gIH1cblxuICBvbkJhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpCYWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubnpCYWNrLmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=