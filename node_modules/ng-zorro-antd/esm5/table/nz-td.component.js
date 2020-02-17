/**
 * @fileoverview added by tsickle
 * Generated from: nz-td.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzTdComponent = /** @class */ (function () {
    function NzTdComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzExpand = false;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzBreakWord = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzTdComponent.prototype.expandChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    };
    /**
     * @return {?}
     */
    NzTdComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !isNotNil(this.nzIndentSize),
            _a["ant-table-selection-column"] = this.nzShowCheckbox,
            _a["ant-table-td-left-sticky"] = isNotNil(this.nzLeft),
            _a["ant-table-td-right-sticky"] = isNotNil(this.nzRight),
            _a));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTdComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
            this.setClassMap();
        }
    };
    NzTdComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td:not(.nz-disable-td):not([mat-cell])',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\n<label *ngIf=\"nzShowCheckbox\"\n  nz-checkbox\n  [nzDisabled]=\"nzDisabled\"\n  [(ngModel)]=\"nzChecked\"\n  [nzIndeterminate]=\"nzIndeterminate\"\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\n</label>\n<span *ngIf=\"!nzShowExpand && nzIndentSize >= 0\"\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\">\n</span>\n<span *ngIf=\"nzShowExpand\"\n  class=\"ant-table-row-expand-icon\"\n  [class.ant-table-row-expanded]=\"nzExpand\"\n  [class.ant-table-row-collapsed]=\"!nzExpand\"\n  (click)=\"expandChange($event)\">\n</span>\n<ng-content></ng-content>",
                    host: {
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign',
                        '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                    }
                }] }
    ];
    /** @nocollapse */
    NzTdComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzTdComponent.propDecorators = {
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzLeft: [{ type: Input }],
        nzRight: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzIndentSize: [{ type: Input }],
        nzExpand: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzBreakWord: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzBreakWord", void 0);
    return NzTdComponent;
}());
export { NzTdComponent };
if (false) {
    /** @type {?} */
    NzTdComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdComponent.prototype.nzLeft;
    /** @type {?} */
    NzTdComponent.prototype.nzRight;
    /** @type {?} */
    NzTdComponent.prototype.nzAlign;
    /** @type {?} */
    NzTdComponent.prototype.nzIndentSize;
    /** @type {?} */
    NzTdComponent.prototype.nzExpand;
    /** @type {?} */
    NzTdComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTdComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzTdComponent.prototype.nzBreakWord;
    /** @type {?} */
    NzTdComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdComponent.prototype.nzExpandChange;
    /**
     * @type {?}
     * @private
     */
    NzTdComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTdComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRGO0lBNkNFLHVCQUFvQixVQUFzQixFQUFVLHdCQUFrRDtRQUFsRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQTdCN0YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBS1IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBaUJ5QyxDQUFDOzs7OztJQWYxRyxvQ0FBWTs7OztJQUFaLFVBQWEsQ0FBUTtRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7O1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDekUsR0FBQyxnQ0FBZ0MsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDckYsR0FBQyw0QkFBNEIsSUFBRyxJQUFJLENBQUMsY0FBYztZQUNuRCxHQUFDLDBCQUEwQixJQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ25ELEdBQUMsMkJBQTJCLElBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3JELENBQUM7SUFDTCxDQUFDOzs7OztJQUlELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMvRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOztnQkFuREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyx5ckJBQXFDO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLFFBQVE7d0JBQ3hCLGVBQWUsRUFBRSxTQUFTO3dCQUMxQixvQkFBb0IsRUFBRSxTQUFTO3dCQUMvQixvQkFBb0IsRUFBRSxnQ0FBZ0M7cUJBQ3ZEO2lCQUNGOzs7O2dCQXpCQyxVQUFVO2dCQVNxQix3QkFBd0I7Ozs0QkFrQnRELEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxNQUFNO2lDQUNOLE1BQU07O0lBTGtCO1FBQWYsWUFBWSxFQUFFOzttREFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7O3VEQUFzQjtJQUNyQjtRQUFmLFlBQVksRUFBRTs7eURBQXdCO0lBQ3ZCO1FBQWYsWUFBWSxFQUFFOztzREFBcUI7SUEwQi9DLG9CQUFDO0NBQUEsQUFwREQsSUFvREM7U0FyQ1ksYUFBYTs7O0lBQ3hCLGtDQUEyQjs7SUFDM0IsbUNBQTRCOztJQUM1Qix3Q0FBaUM7O0lBQ2pDLCtCQUF3Qjs7SUFDeEIsZ0NBQXlCOztJQUN6QixnQ0FBOEM7O0lBQzlDLHFDQUE4Qjs7SUFDOUIsaUNBQTBDOztJQUMxQyxxQ0FBOEM7O0lBQzlDLHVDQUFnRDs7SUFDaEQsb0NBQTZDOztJQUM3Qyx3Q0FBaUU7O0lBQ2pFLHVDQUFnRTs7Ozs7SUFpQnBELG1DQUE4Qjs7Ozs7SUFBRSxpREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RkOm5vdCgubnotZGlzYWJsZS10ZCk6bm90KFttYXQtY2VsbF0pJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5sZWZ0XSc6ICduekxlZnQnLFxuICAgICdbc3R5bGUucmlnaHRdJzogJ256UmlnaHQnLFxuICAgICdbc3R5bGUudGV4dC1hbGlnbl0nOiAnbnpBbGlnbicsXG4gICAgJ1tzdHlsZS53b3JkLWJyZWFrXSc6IGBuekJyZWFrV29yZCA/ICdicmVhay1hbGwnIDogJydgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBuekFsaWduOiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcic7XG4gIEBJbnB1dCgpIG56SW5kZW50U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QnJlYWtXb3JkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBleHBhbmRDaGFuZ2UoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubnpFeHBhbmQgPSAhdGhpcy5uekV4cGFuZDtcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQodGhpcy5uekV4cGFuZCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsYF06IHRoaXMubnpTaG93RXhwYW5kICYmICFpc05vdE5pbCh0aGlzLm56SW5kZW50U2l6ZSksXG4gICAgICBbYGFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uYF06IHRoaXMubnpTaG93Q2hlY2tib3gsXG4gICAgICBbYGFudC10YWJsZS10ZC1sZWZ0LXN0aWNreWBdOiBpc05vdE5pbCh0aGlzLm56TGVmdCksXG4gICAgICBbYGFudC10YWJsZS10ZC1yaWdodC1zdGlja3lgXTogaXNOb3ROaWwodGhpcy5uelJpZ2h0KVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekluZGVudFNpemUgfHwgY2hhbmdlcy5uelNob3dFeHBhbmQgfHwgY2hhbmdlcy5uelNob3dDaGVja2JveCB8fCBjaGFuZ2VzLm56UmlnaHQgfHwgY2hhbmdlcy5uekxlZnQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==