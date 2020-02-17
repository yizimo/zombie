/**
 * @fileoverview added by tsickle
 * Generated from: nz-collapse.component.ts
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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
export class NzCollapseComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item !== collapse))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            }));
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
}
NzCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\n  <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-collapse {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCollapseComponent.ctorParameters = () => [
    { type: NzConfigService }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: Input }],
    nzBordered: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
    /** @type {?} */
    NzCollapseComponent.prototype.nzAccordion;
    /** @type {?} */
    NzCollapseComponent.prototype.nzBordered;
    /** @type {?} */
    NzCollapseComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O01BSXpFLHdCQUF3QixHQUFHLFVBQVU7QUFnQjNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFLOUIsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSjNDLG1DQUE4QixHQUErQixFQUFFLENBQUM7SUFJbEIsQ0FBQzs7Ozs7SUFFdkQsUUFBUSxDQUFDLEtBQStCO1FBQ3RDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBK0I7UUFDekMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLFFBQWtDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDMUMsSUFBSSxDQUFDLDhCQUE4QjtpQkFDaEMsTUFBTTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBQztpQkFDakMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ047UUFDRCxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZIQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO3lCQUVuQzs7OztLQUlDO2FBRUo7Ozs7WUFuQnNCLGVBQWU7OzswQkFzQm5DLEtBQUs7eUJBQ0wsS0FBSzs7QUFEZ0U7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7d0RBQXNCO0FBQ3RCO0lBQTNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUU7O3VEQUFxQjs7Ozs7O0lBRnpGLDZEQUF3RTs7SUFDeEUsMENBQTJGOztJQUMzRix5Q0FBeUY7O0lBRTdFLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWNvbGxhcHNlJyxcbiAgZXhwb3J0QXM6ICduekNvbGxhcHNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VDb21wb25lbnQge1xuICBwcml2YXRlIGxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudDogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QWNjb3JkaW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBhZGRQYW5lbCh2YWx1ZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVQYW5lbCh2YWx1ZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuc3BsaWNlKHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIGNsaWNrKGNvbGxhcHNlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekFjY29yZGlvbiAmJiAhY29sbGFwc2UubnpBY3RpdmUpIHtcbiAgICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50XG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjb2xsYXBzZSlcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ubnpBY3RpdmUpIHtcbiAgICAgICAgICAgIGl0ZW0ubnpBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW0ubnpBY3RpdmVDaGFuZ2UuZW1pdChpdGVtLm56QWN0aXZlKTtcbiAgICAgICAgICAgIGl0ZW0ubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29sbGFwc2UubnpBY3RpdmUgPSAhY29sbGFwc2UubnpBY3RpdmU7XG4gICAgY29sbGFwc2UubnpBY3RpdmVDaGFuZ2UuZW1pdChjb2xsYXBzZS5uekFjdGl2ZSk7XG4gIH1cbn1cbiJdfQ==