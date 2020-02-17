/**
 * @fileoverview added by tsickle
 * Generated from: nz-statistic.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzStatisticComponent {
    constructor() {
        this.nzValueStyle = {};
    }
}
NzStatisticComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-statistic',
                exportAs: 'nzStatistic',
                template: "<div class=\"ant-statistic-title\">\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n</div>\n<div class=\"ant-statistic-content\" [ngStyle]=\"nzValueStyle\">\n  <span *ngIf=\"nzPrefix\" class=\"ant-statistic-content-prefix\">\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\n  </span>\n  <nz-statistic-number\n    [nzValue]=\"nzValue\"\n    [nzValueTemplate]=\"nzValueTemplate\">\n  </nz-statistic-number>\n  <span *ngIf=\"nzSuffix\" class=\"ant-statistic-content-suffix\">\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n  </span>\n</div>\n",
                host: {
                    class: 'ant-statistic'
                },
                styles: ['nz-statistic { display: block; }']
            }] }
];
NzStatisticComponent.propDecorators = {
    nzPrefix: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzValueStyle: [{ type: Input }],
    nzValueTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzStatisticComponent.prototype.nzPrefix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzSuffix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzTitle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueStyle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjMUcsTUFBTSxPQUFPLG9CQUFvQjtJQVhqQztRQWdCVyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUU3QixDQUFDOzs7WUFsQkEsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix3cEJBQTRDO2dCQUM1QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGVBQWU7aUJBQ3ZCO3lCQUNRLGtDQUFrQzthQUM1Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBTE4sd0NBQThDOztJQUM5Qyx3Q0FBOEM7O0lBQzlDLHVDQUE2Qzs7SUFDN0MsdUNBQXVDOztJQUN2Qyw0Q0FBMkI7O0lBQzNCLCtDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXN0YXRpc3RpYycsXG4gIGV4cG9ydEFzOiAnbnpTdGF0aXN0aWMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RhdGlzdGljLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXN0YXRpc3RpYydcbiAgfSxcbiAgc3R5bGVzOiBbJ256LXN0YXRpc3RpYyB7IGRpc3BsYXk6IGJsb2NrOyB9J11cbn0pXG5leHBvcnQgY2xhc3MgTnpTdGF0aXN0aWNDb21wb25lbnQge1xuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U3RhdGlzdGljVmFsdWVUeXBlO1xuICBASW5wdXQoKSBuelZhbHVlU3R5bGUgPSB7fTtcbiAgQElucHV0KCkgbnpWYWx1ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfT47XG59XG4iXX0=