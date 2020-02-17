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
var NZ_CONFIG_COMPONENT_NAME = 'collapse';
var NzCollapseComponent = /** @class */ (function () {
    function NzCollapseComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCollapseComponent.prototype.addPanel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzCollapsePanelComponent.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCollapseComponent.prototype.removePanel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    NzCollapseComponent.prototype.click = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== collapse; }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            }));
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    };
    NzCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-collapse',
                    exportAs: 'nzCollapse',
                    template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCollapseComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
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
    return NzCollapseComponent;
}());
export { NzCollapseComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBSXpFLHdCQUF3QixHQUFHLFVBQVU7QUFFM0M7SUFtQkUsNkJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUozQyxtQ0FBOEIsR0FBK0IsRUFBRSxDQUFDO0lBSWxCLENBQUM7Ozs7O0lBRXZELHNDQUFROzs7O0lBQVIsVUFBUyxLQUErQjtRQUN0QyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQStCO1FBQ3pDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7OztJQUVELG1DQUFLOzs7O0lBQUwsVUFBTSxRQUFrQztRQUN0QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzFDLElBQUksQ0FBQyw4QkFBOEI7aUJBQ2hDLE1BQU07Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxRQUFRLEVBQWpCLENBQWlCLEVBQUM7aUJBQ2pDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUNELFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsNkhBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7NkJBRW5DLCtEQUlDO2lCQUVKOzs7O2dCQW5Cc0IsZUFBZTs7OzhCQXNCbkMsS0FBSzs2QkFDTCxLQUFLOztJQURnRTtRQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOzs0REFBc0I7SUFDdEI7UUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs7MkRBQXFCO0lBMkIzRiwwQkFBQztDQUFBLEFBNUNELElBNENDO1NBOUJZLG1CQUFtQjs7Ozs7O0lBQzlCLDZEQUF3RTs7SUFDeEUsMENBQTJGOztJQUMzRix5Q0FBeUY7O0lBRTdFLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWNvbGxhcHNlJyxcbiAgZXhwb3J0QXM6ICduekNvbGxhcHNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VDb21wb25lbnQge1xuICBwcml2YXRlIGxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudDogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56QWNjb3JkaW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBhZGRQYW5lbCh2YWx1ZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVQYW5lbCh2YWx1ZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuc3BsaWNlKHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIGNsaWNrKGNvbGxhcHNlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekFjY29yZGlvbiAmJiAhY29sbGFwc2UubnpBY3RpdmUpIHtcbiAgICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50XG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjb2xsYXBzZSlcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ubnpBY3RpdmUpIHtcbiAgICAgICAgICAgIGl0ZW0ubnpBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW0ubnpBY3RpdmVDaGFuZ2UuZW1pdChpdGVtLm56QWN0aXZlKTtcbiAgICAgICAgICAgIGl0ZW0ubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29sbGFwc2UubnpBY3RpdmUgPSAhY29sbGFwc2UubnpBY3RpdmU7XG4gICAgY29sbGFwc2UubnpBY3RpdmVDaGFuZ2UuZW1pdChjb2xsYXBzZS5uekFjdGl2ZSk7XG4gIH1cbn1cbiJdfQ==